"use client";

import React from "react";
import { motion } from "motion/react";
import { Folder, HeartHandshakeIcon, SparklesIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

interface DatabaseWithRestApiProps {
  className?: string;
  lightColor?: string;
  children?: React.ReactNode;
  svgHeight?: string;
  showLottieBox?: boolean;
  lottieBoxSize?: number;
  lottieAutoplay?: boolean;
  lottieLoop?: boolean;
  // Deprecated props (kept for backward compatibility)
  circleText?: string;
  badgeTexts?: {
    first: string;
    second: string;
    third: string;
    fourth: string;
  };
  buttonTexts?: {
    first: string;
    second: string;
  };
  title?: string;
}

const DatabaseWithRestApi = ({
  className,
  lightColor,
  children,
  svgHeight,
  showLottieBox = true,
  lottieBoxSize = 80,
  lottieAutoplay = true,
  lottieLoop = true,
  // Deprecated props
  circleText,
  badgeTexts,
  buttonTexts,
  title,
}: DatabaseWithRestApiProps) => {
  // Calculate responsive box size
  const responsiveBoxSize = typeof window !== 'undefined' && window.innerWidth < 768
    ? Math.round(lottieBoxSize * 1.1) // 10% bigger on mobile
    : lottieBoxSize;

  return (
    <div
      className={cn(
        "relative flex flex-col items-center w-full max-w-[600px]",
        className
      )}
    >
      {/* SVG Container with controlled height */}
      <div
        className="relative w-full"
        style={{
          height: svgHeight || (typeof window !== 'undefined' && window.innerWidth < 768 ? "650px" : "450px")
        }}
      >
        <svg
          className="h-full w-full text-muted"
          width="100%"
          height="100%"
          viewBox="0 0 200 100"
        >
        <g
          stroke="currentColor"
          fill="none"
          strokeWidth="0.4"
          strokeDasharray="100 100"
          pathLength="100"
        >
          <path d="M 31 10 v 15 q 0 5 5 5 h 59 q 5 0 5 5 v 50" />
          <path d="M 77 10 v 10 q 0 5 5 5 h 13 q 5 0 5 5 v 50" />
          <path d="M 124 10 v 10 q 0 5 -5 5 h -14 q -5 0 -5 5 v 50" />
          <path d="M 170 10 v 15 q 0 5 -5 5 h -60 q -5 0 -5 5 v 50" />
          {/* Animation For Path Starting */}
          <animate
            attributeName="stroke-dashoffset"
            from="100"
            to="0"
            dur="1s"
            fill="freeze"
            calcMode="spline"
            keySplines="0.25,0.1,0.5,1"
            keyTimes="0; 1"
          />
        </g>
        {/* Blue Lights */}
        <g mask="url(#db-mask-1)">
          <circle
            className="database db-light-1"
            cx="0"
            cy="0"
            r="12"
            fill="url(#db-blue-grad)"
          />
        </g>
        <g mask="url(#db-mask-2)">
          <circle
            className="database db-light-2"
            cx="0"
            cy="0"
            r="12"
            fill="url(#db-blue-grad)"
          />
        </g>
        <g mask="url(#db-mask-3)">
          <circle
            className="database db-light-3"
            cx="0"
            cy="0"
            r="12"
            fill="url(#db-blue-grad)"
          />
        </g>
        <g mask="url(#db-mask-4)">
          <circle
            className="database db-light-4"
            cx="0"
            cy="0"
            r="12"
            fill="url(#db-blue-grad)"
          />
        </g>
        {/* Buttons with Logos */}
        <g stroke="currentColor" fill="none" strokeWidth="0.4">
          {/* First Button - Gmail */}
          <g>
            <rect
              fill="#18181B"
              x="24"
              y="5"
              width="14"
              height="10"
              rx="5"
            ></rect>
            <image
              href="/images to use/Gmail_icon_(2020).svg.png"
              x="27.5"
              y="6.5"
              width="7"
              height="7"
            />
          </g>
          {/* Second Button - Shopify */}
          <g>
            <rect
              fill="#18181B"
              x="70"
              y="5"
              width="14"
              height="10"
              rx="5"
            ></rect>
            <image
              href="/images to use/shopify.png"
              x="73.5"
              y="6.5"
              width="7"
              height="7"
            />
          </g>
          {/* Third Button - Google Sheets */}
          <g>
            <rect
              fill="#18181B"
              x="118"
              y="5"
              width="14"
              height="10"
              rx="5"
            ></rect>
            <image
              href="/images to use/Google_Sheets_2020_Logo.svg.png"
              x="121.5"
              y="6.5"
              width="7"
              height="7"
            />
          </g>
          {/* Fourth Button - Google Drive */}
          <g>
            <rect
              fill="#18181B"
              x="163"
              y="5"
              width="14"
              height="10"
              rx="5"
            ></rect>
            <image
              href="/images to use/Google_Drive_icon_(2020).svg.png"
              x="166.5"
              y="6.5"
              width="7"
              height="7"
            />
          </g>
        </g>
        <defs>
          {/* 1 -  user list */}
          <mask id="db-mask-1">
            <path
              d="M 31 10 v 15 q 0 5 5 5 h 59 q 5 0 5 5 v 50"
              strokeWidth="0.5"
              stroke="white"
            />
          </mask>
          {/* 2 - task list */}
          <mask id="db-mask-2">
            <path
              d="M 77 10 v 10 q 0 5 5 5 h 13 q 5 0 5 5 v 50"
              strokeWidth="0.5"
              stroke="white"
            />
          </mask>
          {/* 3 - backlogs */}
          <mask id="db-mask-3">
            <path
              d="M 124 10 v 10 q 0 5 -5 5 h -14 q -5 0 -5 5 v 50"
              strokeWidth="0.5"
              stroke="white"
            />
          </mask>
          {/* 4 - misc */}
          <mask id="db-mask-4">
            <path
              d="M 170 10 v 15 q 0 5 -5 5 h -60 q -5 0 -5 5 v 50"
              strokeWidth="0.5"
              stroke="white"
            />
          </mask>
          {/* Blue Grad */}
          <radialGradient id="db-blue-grad" fx="1">
            <stop offset="0%" stopColor={lightColor || "#00A6F5"} />
            <stop offset="100%" stopColor="transparent" />
          </radialGradient>
        </defs>
        </svg>
      </div>

      {/* Lottie Box Animation - positioned at path convergence */}
      {showLottieBox && (
        <div
          className="absolute pointer-events-none z-10"
          style={{
            top: typeof window !== 'undefined' && window.innerWidth < 768 ? '72%' : '85%',
            left: '50%',
            transform: 'translate(-50%, -100%)',
            width: `${responsiveBoxSize}px`,
            height: `${responsiveBoxSize}px`,
          }}
        >
          <DotLottieReact
            src="/images to use/Empty Box.lottie"
            loop={lottieLoop}
            autoplay={lottieAutoplay}
            style={{
              width: '100%',
              height: '100%',
            }}
          />
        </div>
      )}

      {/* Replacement Component Slot */}
      {children && (
        <div className="relative w-full flex flex-col items-center">
          {children}
        </div>
      )}
    </div>
  );
};

export default DatabaseWithRestApi;

const DatabaseIcon = ({ x = "0", y = "0" }: { x: string; y: string }) => {
  return (
    <svg
      x={x}
      y={y}
      xmlns="http://www.w3.org/2000/svg"
      width="5"
      height="5"
      viewBox="0 0 24 24"
      fill="none"
      stroke="white"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <ellipse cx="12" cy="5" rx="9" ry="3" />
      <path d="M3 5V19A9 3 0 0 0 21 19V5" />
      <path d="M3 12A9 3 0 0 0 21 12" />
    </svg>
  );
};
