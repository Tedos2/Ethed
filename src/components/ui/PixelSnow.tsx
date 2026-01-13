"use client";

import React, { useEffect, useRef } from "react";

interface Snowflake {
  x: number;
  y: number;
  radius: number;
  speed: number;
  sway: number;
}

const SNOWFLAKE_COUNT = 250;
const MAX_SNOWFLAKE_SIZE = 4;
const MIN_SNOWFLAKE_SIZE = 1;
const MAX_SPEED = 2.5;
const MIN_SPEED = 1;
const SNOWFLAKE_COLOR = "#ffffff";

export const PixelSnow = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const snowflakesRef = useRef<Snowflake[]>([]);
  const animationFrameRef = useRef<number>();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Initialize snowflakes
    const createSnowflake = (): Snowflake => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      radius: Math.random() * (MAX_SNOWFLAKE_SIZE - MIN_SNOWFLAKE_SIZE) + MIN_SNOWFLAKE_SIZE,
      speed: Math.random() * (MAX_SPEED - MIN_SPEED) + MIN_SPEED,
      sway: Math.random() - 0.5, // -0.5 to 0.5 for horizontal drift
    });

    snowflakesRef.current = Array.from({ length: SNOWFLAKE_COUNT }, createSnowflake);

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      snowflakesRef.current.forEach((snowflake) => {
        // Draw snowflake
        ctx.beginPath();
        ctx.arc(snowflake.x, snowflake.y, snowflake.radius, 0, Math.PI * 2);
        ctx.fillStyle = SNOWFLAKE_COLOR;
        ctx.fill();
        ctx.closePath();

        // Update position
        snowflake.y += snowflake.speed;
        snowflake.x += snowflake.sway;

        // Recycle snowflake when it exits bottom
        if (snowflake.y > canvas.height) {
          snowflake.y = -10;
          snowflake.x = Math.random() * canvas.width;
        }

        // Keep snowflakes within horizontal bounds
        if (snowflake.x > canvas.width) snowflake.x = 0;
        if (snowflake.x < 0) snowflake.x = canvas.width;
      });

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animate();

    // Cleanup
    return () => {
      window.removeEventListener("resize", resizeCanvas);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none"
      style={{ zIndex: 1 }}
    />
  );
};
