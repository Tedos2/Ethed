"use client";

import React, { useEffect, useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import Lenis from "lenis";
import { Calendar, Zap, Bot, TrendingUp } from "lucide-react";
import { cardData } from "@/lib/utils";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Calendar,
  Zap,
  Bot,
  TrendingUp,
};

export const ImagesScrollingAnimation = () => {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return (
    <div ref={container} className="relative">
      {cardData.map((card, index) => {
        const targetScale = 1 - (cardData.length - index) * 0.05;
        return (
          <Card
            key={card.id}
            i={index}
            {...card}
            progress={scrollYProgress}
            range={[index * 0.25, 1]}
            targetScale={targetScale}
          />
        );
      })}
    </div>
  );
};

interface CardProps {
  i: number;
  title: string;
  description: string;
  icon: string;
  color: string;
  progress: any;
  range: [number, number];
  targetScale: number;
}

const Card: React.FC<CardProps> = ({
  i,
  title,
  description,
  icon,
  color,
  progress,
  range,
  targetScale,
}) => {
  const container = useRef<HTMLDivElement>(null);
  const scale = useTransform(progress, range, [1, targetScale]);

  const Icon = iconMap[icon];

  return (
    <div
      ref={container}
      className="h-screen flex items-center justify-center sticky top-0"
    >
      <motion.div
        style={{
          scale,
          top: `calc(-5vh + ${i * 25}px)`,
        }}
        className="relative w-full max-w-6xl mx-auto px-6 md:px-4"
      >
        {/* Card Container with Electric Border */}
        <div className="relative rounded-3xl overflow-hidden">
          {/* Electric Conic Gradient Border */}
          <div
            className="absolute inset-0 rounded-3xl p-[2px]"
            style={{
              background: `conic-gradient(from 0deg at 50% 50%, transparent 0deg, ${color} 90deg, transparent 180deg, ${color} 270deg, transparent 360deg)`,
            }}
          >
            <div className="absolute inset-[2px] rounded-3xl bg-black/40 backdrop-blur-xl" />
          </div>

          {/* Card Content */}
          <div className="relative z-10 p-8 md:p-12">
            {/* Grid Layout: 60% Text (right) + 40% Visual (left) */}
            <div className="grid grid-cols-1 md:grid-cols-[60%_40%] gap-8 items-center">
              {/* Text Content (Right side on desktop) */}
              <div className="flex flex-col gap-6 text-right order-2 md:order-1" dir="rtl">
                {/* Icon */}
                <div className="flex justify-end">
                  <div
                    className="w-16 h-16 md:w-20 md:h-20 rounded-2xl flex items-center justify-center"
                    style={{
                      background: `linear-gradient(135deg, ${color}40, ${color}10)`,
                    }}
                  >
                    {Icon && (
                      <span style={{ color }}>
                        <Icon className="w-8 h-8 md:w-10 md:h-10" />
                      </span>
                    )}
                  </div>
                </div>

                {/* Title */}
                <h3
                  className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight"
                  style={{
                    fontFamily: 'Rubik, sans-serif',
                    color: '#ffffff',
                  }}
                >
                  {title}
                </h3>

                {/* Description */}
                <p
                  className="text-lg md:text-xl lg:text-2xl leading-relaxed text-gray-300"
                  style={{
                    fontFamily: 'Rubik, sans-serif',
                  }}
                >
                  {description}
                </p>
              </div>

              {/* Visual Placeholder (Left side on desktop) */}
              <div className="flex items-center justify-center order-1 md:order-2">
                <div className="relative w-full aspect-square max-w-[350px]">
                  {/* Tech Grid Pattern Overlay */}
                  <div
                    className="absolute inset-0 rounded-2xl"
                    style={{
                      backgroundImage: `
                        linear-gradient(${color}20 1px, transparent 1px),
                        linear-gradient(90deg, ${color}20 1px, transparent 1px)
                      `,
                      backgroundSize: '20px 20px',
                      opacity: 0.3,
                    }}
                  />

                  {/* Glass Morphism Background */}
                  <div
                    className="absolute inset-0 rounded-2xl backdrop-blur-sm"
                    style={{
                      background: `linear-gradient(135deg, ${color}15, transparent)`,
                      border: `1px solid ${color}30`,
                    }}
                  />

                  {/* Placeholder Content */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    {Icon && (
                      <span style={{ color }} className="opacity-20">
                        <Icon className="w-32 h-32 md:w-40 md:h-40" />
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
