"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface FullPageBeamsBackgroundProps {
    className?: string;
}

interface Beam {
    x: number;
    y: number;
    width: number;
    length: number;
    angle: number;
    opacity: number;
    baseHue: number;
}

function createBeam(width: number, height: number, index: number, totalBeams: number): Beam {
    const angle = -35 + (index * 8) / totalBeams;
    const column = index % 4;
    const spacing = width / 4;

    return {
        x: column * spacing + spacing / 2 + (Math.random() - 0.5) * spacing * 0.6,
        y: (index / totalBeams) * height,
        width: 80 + Math.random() * 60,
        length: height * 2.5,
        angle: angle,
        opacity: 0.12 + Math.random() * 0.1,
        baseHue: 16, // Orange starting hue
    };
}

export function FullPageBeamsBackground({
    className,
}: FullPageBeamsBackgroundProps) {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const beamsRef = useRef<Beam[]>([]);
    const [scrollProgress, setScrollProgress] = useState(0);
    const rafRef = useRef<number | null>(null);
    const [isVisible, setIsVisible] = useState(true);

    // Initialize canvas and beams
    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d", { alpha: true });
        if (!ctx) return;

        const updateCanvasSize = () => {
            // Optimize for mobile: use lower DPR
            const isMobile = window.innerWidth < 768;
            const dpr = isMobile ? 1 : Math.min(window.devicePixelRatio || 1, 2);

            canvas.width = window.innerWidth * dpr;
            canvas.height = window.innerHeight * dpr;
            ctx.scale(dpr, dpr);

            // Generate beams only once
            const totalBeams = 28;
            beamsRef.current = Array.from({ length: totalBeams }, (_, i) =>
                createBeam(window.innerWidth, window.innerHeight, i, totalBeams)
            );

            renderBeams(ctx, scrollProgress);
        };

        updateCanvasSize();
        window.addEventListener("resize", updateCanvasSize);

        return () => {
            window.removeEventListener("resize", updateCanvasSize);
        };
    }, []);

    // Render beams function (extracted for reuse)
    const renderBeams = (ctx: CanvasRenderingContext2D, progress: number) => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
        // Remove canvas blur - only use CSS blur to avoid double blur

        beamsRef.current.forEach((beam) => {
            ctx.save();
            ctx.translate(beam.x, beam.y);
            ctx.rotate((beam.angle * Math.PI) / 180);

            // Dynamic color based on scroll
            const hue = beam.baseHue + (progress * 19); // 16 → 35
            const lightness = 70 + (progress * 10); // 70% → 80%

            const gradient = ctx.createLinearGradient(0, 0, 0, beam.length);
            gradient.addColorStop(0, `hsla(${hue}, 85%, ${lightness}%, 0)`);
            gradient.addColorStop(0.3, `hsla(${hue}, 85%, ${lightness}%, ${beam.opacity * 0.6})`);
            gradient.addColorStop(0.5, `hsla(${hue}, 85%, ${lightness}%, ${beam.opacity})`);
            gradient.addColorStop(0.7, `hsla(${hue}, 85%, ${lightness}%, ${beam.opacity * 0.6})`);
            gradient.addColorStop(1, `hsla(${hue}, 85%, ${lightness}%, 0)`);

            ctx.fillStyle = gradient;
            ctx.fillRect(-beam.width / 2, 0, beam.width, beam.length);
            ctx.restore();
        });
    };

    // Scroll handling with requestAnimationFrame throttling
    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d", { alpha: true });
        if (!ctx) return;

        const handleScroll = () => {
            // Cancel any pending animation frame
            if (rafRef.current !== null) {
                return;
            }

            // Schedule update on next animation frame
            rafRef.current = requestAnimationFrame(() => {
                const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
                const progress = scrollHeight > 0 ? window.scrollY / scrollHeight : 0;
                const clampedProgress = Math.min(Math.max(progress, 0), 1);

                // Only update if progress actually changed (avoid unnecessary redraws)
                setScrollProgress(prev => {
                    if (Math.abs(prev - clampedProgress) > 0.001) {
                        return clampedProgress;
                    }
                    return prev;
                });

                rafRef.current = null;
            });
        };

        // Initial scroll position
        handleScroll();

        window.addEventListener("scroll", handleScroll, { passive: true });

        return () => {
            window.removeEventListener("scroll", handleScroll);
            if (rafRef.current !== null) {
                cancelAnimationFrame(rafRef.current);
            }
        };
    }, []); // Empty deps - attach listeners once

    // Separate effect to redraw when scroll changes
    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas || !isVisible) return;

        const ctx = canvas.getContext("2d", { alpha: true });
        if (!ctx) return;

        renderBeams(ctx, scrollProgress);
    }, [scrollProgress, isVisible]);

    // Intersection Observer to pause rendering when not visible
    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    setIsVisible(entry.isIntersecting);
                });
            },
            { threshold: 0 }
        );

        observer.observe(canvas);

        return () => {
            observer.disconnect();
        };
    }, []);

    return (
        <div
            className={cn(
                "fixed inset-0 w-full h-full pointer-events-none z-0",
                className
            )}
        >
            <canvas
                ref={canvasRef}
                className="absolute inset-0 w-full h-full"
                style={{
                    filter: "blur(15px)", // Single blur via CSS only
                    opacity: 0.8,
                    willChange: "transform", // GPU optimization hint
                }}
            />
        </div>
    );
}
