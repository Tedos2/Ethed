"use client";

import { Button } from "@/components/ui/button";
import React from "react";

const ICONS_ROW1 = [
  "https://cdn-icons-png.flaticon.com/512/5968/5968854.png",
  "https://cdn-icons-png.flaticon.com/512/732/732221.png",
  "https://cdn-icons-png.flaticon.com/512/733/733609.png",
  "https://cdn-icons-png.flaticon.com/512/732/732084.png",
  "https://cdn-icons-png.flaticon.com/512/733/733585.png",
  "https://cdn-icons-png.flaticon.com/512/281/281763.png",
  "https://cdn-icons-png.flaticon.com/512/888/888879.png",
];

const ICONS_ROW2 = [
  "https://cdn-icons-png.flaticon.com/512/174/174857.png",
  "https://cdn-icons-png.flaticon.com/512/906/906324.png",
  "https://cdn-icons-png.flaticon.com/512/888/888841.png",
  "https://cdn-icons-png.flaticon.com/512/5968/5968875.png",
  "https://cdn-icons-png.flaticon.com/512/906/906361.png",
  "https://cdn-icons-png.flaticon.com/512/732/732190.png",
  "https://cdn-icons-png.flaticon.com/512/888/888847.png",
];

// Utility to create extended icon loop with buffer content
const repeatedIcons = (icons: string[], repeat = 4) => Array.from({ length: repeat }).flatMap(() => icons);

export default function IntegrationHero() {
  return (
    <section className="relative py-16 overflow-hidden bg-black">
      {/* Subtle grid background for black theme */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.02)_1px,transparent_1px)] [background-size:24px_24px]" />

      {/* Content */}
      <div className="relative max-w-2xl mx-auto px-6 text-center">
        <span className="inline-block px-3 py-1 mb-4 text-sm rounded-full border border-gray-700 bg-gray-900 text-white">
          ⚡ Integrations
        </span>
        <h1 className="text-4xl lg:text-5xl font-bold tracking-tight text-white">
          Integrate with favorite tools
        </h1>
        <p className="mt-4 text-base text-gray-400 max-w-xl mx-auto">
          250+ top apps are available to integrate seamlessly with your workflow.
        </p>
        <Button variant="default" className="mt-6 px-6 py-3 rounded-lg bg-white text-black font-medium hover:bg-gray-200 transition">
          Get started
        </Button>

        {/* Carousel */}
        <div className="mt-10 overflow-hidden relative pb-2">
          {/* Row 1 - Scrolls left with GPU acceleration */}
          <div className="flex gap-8 whitespace-nowrap animate-scroll-left will-change-transform">
            {repeatedIcons(ICONS_ROW1, 4).map((src, i) => (
              <div key={i} className="h-12 w-12 flex-shrink-0 rounded-full bg-white shadow-md flex items-center justify-center">
                <img src={src} alt="icon" className="h-8 w-8 object-contain" />
              </div>
            ))}
          </div>

          {/* Row 2 - Scrolls right with GPU acceleration */}
          <div className="flex gap-8 whitespace-nowrap mt-5 animate-scroll-right will-change-transform">
            {repeatedIcons(ICONS_ROW2, 4).map((src, i) => (
              <div key={i} className="h-12 w-12 flex-shrink-0 rounded-full bg-white shadow-md flex items-center justify-center">
                <img src={src} alt="icon" className="h-8 w-8 object-contain" />
              </div>
            ))}
          </div>

          {/* Extra wide fade overlays to completely hide loop reset */}
          <div className="absolute left-0 top-0 h-full w-72 bg-gradient-to-r from-black to-transparent pointer-events-none z-10" />
          <div className="absolute right-0 top-0 h-full w-72 bg-gradient-to-l from-black to-transparent pointer-events-none z-10" />
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-75%); }
        }
        @keyframes scroll-right {
          0% { transform: translateX(-75%); }
          100% { transform: translateX(0); }
        }
        .animate-scroll-left {
          animation: scroll-left 60s linear infinite;
        }
        .animate-scroll-right {
          animation: scroll-right 60s linear infinite;
        }
      `}</style>
    </section>
  );
}
