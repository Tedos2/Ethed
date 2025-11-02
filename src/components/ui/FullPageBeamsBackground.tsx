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
        opacity: 0.12 + Math.random() * 0.1, // Medium intensity
        baseHue: 16, // Orange starting hue
    };
}

export function FullPageBeamsBackground({
    className,
}: FullPageBeamsBackgroundProps) {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const beamsRef = useRef<Beam[]>([]); // Store beams to prevent regeneration
    const [scrollProgress, setScrollProgress] = useState(0);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        // Set canvas size and generate beams ONCE
        const updateCanvasSize = () => {
            const dpr = window.devicePixelRatio || 1;
            canvas.width = window.innerWidth * dpr;
            canvas.height = window.innerHeight * dpr;
            ctx.scale(dpr, dpr);

            // Generate beams only once (on mount or resize)
            const totalBeams = 28; // Full page coverage
            beamsRef.current = Array.from({ length: totalBeams }, (_, i) =>
                createBeam(window.innerWidth, window.innerHeight, i, totalBeams)
            );

            // Draw beams
            renderBeams();
        };

        function drawBeam(ctx: CanvasRenderingContext2D, beam: Beam) {
            ctx.save();
            ctx.translate(beam.x, beam.y);
            ctx.rotate((beam.angle * Math.PI) / 180);

            // Dynamic color based on scroll
            // Top: Orange (hue 16), Bottom: Light Amber (hue 35)
            const hue = beam.baseHue + (scrollProgress * 19); // 16 → 35
            const lightness = 70 + (scrollProgress * 10); // 70% → 80%

            const gradient = ctx.createLinearGradient(0, 0, 0, beam.length);

            // Orange gradient with scroll-based color shift
            gradient.addColorStop(0, `hsla(${hue}, 85%, ${lightness}%, 0)`);
            gradient.addColorStop(
                0.3,
                `hsla(${hue}, 85%, ${lightness}%, ${beam.opacity * 0.6})`
            );
            gradient.addColorStop(
                0.5,
                `hsla(${hue}, 85%, ${lightness}%, ${beam.opacity})`
            );
            gradient.addColorStop(
                0.7,
                `hsla(${hue}, 85%, ${lightness}%, ${beam.opacity * 0.6})`
            );
            gradient.addColorStop(1, `hsla(${hue}, 85%, ${lightness}%, 0)`);

            ctx.fillStyle = gradient;
            ctx.fillRect(-beam.width / 2, 0, beam.width, beam.length);
            ctx.restore();
        }

        function renderBeams() {
            if (!canvas || !ctx) return;

            ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
            ctx.filter = "blur(40px)"; // Medium blur for balanced effect

            // Use stored beams (not regenerated)
            beamsRef.current.forEach((beam) => {
                drawBeam(ctx, beam);
            });
        }

        updateCanvasSize();
        window.addEventListener("resize", updateCanvasSize);

        return () => {
            window.removeEventListener("resize", updateCanvasSize);
        };
    }, []); // Only run on mount

    // Separate effect for scroll tracking and redrawing colors
    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        // Track scroll for color transition
        const handleScroll = () => {
            const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
            const progress = scrollHeight > 0 ? window.scrollY / scrollHeight : 0;
            setScrollProgress(Math.min(Math.max(progress, 0), 1));
        };

        // Redraw beams with updated colors (but same positions)
        function redrawBeamsWithNewColors() {
            if (!canvas || !ctx) return;

            ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
            ctx.filter = "blur(40px)";

            beamsRef.current.forEach((beam) => {
                ctx.save();
                ctx.translate(beam.x, beam.y);
                ctx.rotate((beam.angle * Math.PI) / 180);

                // Dynamic color based on scroll
                const hue = beam.baseHue + (scrollProgress * 19); // 16 → 35
                const lightness = 70 + (scrollProgress * 10); // 70% → 80%

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
        }

        handleScroll(); // Initial scroll position
        redrawBeamsWithNewColors(); // Initial draw with current scroll

        window.addEventListener("scroll", handleScroll, { passive: true });

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [scrollProgress]); // Redraw only when scroll changes

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
                    filter: "blur(15px)",
                    opacity: 0.8, // Medium intensity
                }}
            />
        </div>
    );
}
