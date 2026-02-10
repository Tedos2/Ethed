"use client";

import { useEffect, useRef } from "react";
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
    const progressRef = useRef(0);
    const rafRef = useRef<number | null>(null);
    const isMobileRef = useRef(false);

    // Render beams function
    const renderBeams = (ctx: CanvasRenderingContext2D, progress: number) => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const w = canvas.width / (isMobileRef.current ? 1 : Math.min(window.devicePixelRatio || 1, 2));
        const h = canvas.height / (isMobileRef.current ? 1 : Math.min(window.devicePixelRatio || 1, 2));

        ctx.clearRect(0, 0, w, h);

        beamsRef.current.forEach((beam) => {
            ctx.save();
            ctx.translate(beam.x, beam.y);
            ctx.rotate((beam.angle * Math.PI) / 180);

            const hue = beam.baseHue + (progress * 19);
            const lightness = 70 + (progress * 10);

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

    // Initialize canvas, beams, and scroll handler — all in one effect, no React state
    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d", { alpha: true });
        if (!ctx) return;

        const isMobile = window.innerWidth < 768;
        isMobileRef.current = isMobile;

        const updateCanvasSize = () => {
            const mobile = window.innerWidth < 768;
            isMobileRef.current = mobile;
            const dpr = mobile ? 1 : Math.min(window.devicePixelRatio || 1, 2);

            canvas.width = window.innerWidth * dpr;
            canvas.height = window.innerHeight * dpr;
            ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

            const totalBeams = mobile ? 16 : 28;
            beamsRef.current = Array.from({ length: totalBeams }, (_, i) =>
                createBeam(window.innerWidth, window.innerHeight, i, totalBeams)
            );

            renderBeams(ctx, progressRef.current);
        };

        updateCanvasSize();
        window.addEventListener("resize", updateCanvasSize);

        // On mobile, skip scroll listener entirely — render once and done
        if (isMobile) {
            return () => {
                window.removeEventListener("resize", updateCanvasSize);
            };
        }

        // Desktop only: scroll handler for color transition
        const handleScroll = () => {
            if (rafRef.current !== null) return;

            rafRef.current = requestAnimationFrame(() => {
                const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
                const progress = scrollHeight > 0 ? window.scrollY / scrollHeight : 0;
                const clamped = Math.min(Math.max(progress, 0), 1);

                if (Math.abs(progressRef.current - clamped) > 0.005) {
                    progressRef.current = clamped;
                    renderBeams(ctx, clamped);
                }

                rafRef.current = null;
            });
        };

        window.addEventListener("scroll", handleScroll, { passive: true });

        return () => {
            window.removeEventListener("resize", updateCanvasSize);
            window.removeEventListener("scroll", handleScroll);
            if (rafRef.current !== null) {
                cancelAnimationFrame(rafRef.current);
            }
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
                    filter: "blur(12px)",
                    opacity: 0.8,
                }}
            />
        </div>
    );
}
