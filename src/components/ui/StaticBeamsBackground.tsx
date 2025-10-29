"use client";

import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

interface StaticBeamsBackgroundProps {
    className?: string;
}

interface Beam {
    x: number;
    y: number;
    width: number;
    length: number;
    angle: number;
    opacity: number;
    hue: number;
}

function createBeam(width: number, height: number, index: number, totalBeams: number): Beam {
    const angle = -35 + (index * 10) / totalBeams;
    const column = index % 3;
    const spacing = width / 3;

    return {
        x: column * spacing + spacing / 2 + (Math.random() - 0.5) * spacing * 0.5,
        y: (index / totalBeams) * height,
        width: 60 + Math.random() * 40,
        length: height * 3, // Extended length for natural fade beyond boundaries
        angle: angle,
        opacity: 0.08 + Math.random() * 0.07, // Reduced opacity for softer blend
        hue: 16 + Math.random() * 10, // Orange hue range (16-26°)
    };
}

export function StaticBeamsBackground({
    className,
}: StaticBeamsBackgroundProps) {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        // Set canvas size
        const updateCanvasSize = () => {
            const rect = canvas.getBoundingClientRect();
            const dpr = window.devicePixelRatio || 1;
            canvas.width = rect.width * dpr;
            canvas.height = rect.height * dpr;
            ctx.scale(dpr, dpr);

            // Draw beams once
            renderBeams();
        };

        function drawBeam(ctx: CanvasRenderingContext2D, beam: Beam) {
            ctx.save();
            ctx.translate(beam.x, beam.y);
            ctx.rotate((beam.angle * Math.PI) / 180);

            const gradient = ctx.createLinearGradient(0, 0, 0, beam.length);

            // Orange gradient stops
            gradient.addColorStop(0, `hsla(${beam.hue}, 90%, 65%, 0)`);
            gradient.addColorStop(
                0.1,
                `hsla(${beam.hue}, 90%, 65%, ${beam.opacity * 0.4})`
            );
            gradient.addColorStop(
                0.4,
                `hsla(${beam.hue}, 90%, 65%, ${beam.opacity})`
            );
            gradient.addColorStop(
                0.6,
                `hsla(${beam.hue}, 90%, 65%, ${beam.opacity})`
            );
            gradient.addColorStop(
                0.9,
                `hsla(${beam.hue}, 90%, 65%, ${beam.opacity * 0.4})`
            );
            gradient.addColorStop(1, `hsla(${beam.hue}, 90%, 65%, 0)`);

            ctx.fillStyle = gradient;
            ctx.fillRect(-beam.width / 2, 0, beam.width, beam.length);
            ctx.restore();
        }

        function renderBeams() {
            if (!canvas || !ctx) return;

            const rect = canvas.getBoundingClientRect();
            const totalBeams = 10; // Reduced for smaller area
            const beams: Beam[] = Array.from({ length: totalBeams }, (_, i) =>
                createBeam(rect.width, rect.height, i, totalBeams)
            );

            ctx.clearRect(0, 0, rect.width, rect.height);
            ctx.filter = "blur(50px)"; // Increased blur for softer edges

            beams.forEach((beam) => {
                drawBeam(ctx, beam);
            });
        }

        updateCanvasSize();
        window.addEventListener("resize", updateCanvasSize);

        return () => {
            window.removeEventListener("resize", updateCanvasSize);
        };
    }, []);

    return (
        <div
            className={cn(
                "absolute inset-0 w-full h-full overflow-visible pointer-events-none",
                className
            )}
        >
            <canvas
                ref={canvasRef}
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%]"
                style={{
                    filter: "blur(20px)",
                    maskImage: "radial-gradient(ellipse at center, black 20%, black 40%, transparent 75%)",
                    WebkitMaskImage: "radial-gradient(ellipse at center, black 20%, black 40%, transparent 75%)"
                }}
            />
        </div>
    );
}
