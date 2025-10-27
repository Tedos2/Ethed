"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

export default function AutomationFlow() {
  const [activeStep, setActiveStep] = useState(0);
  const [createdBlocks, setCreatedBlocks] = useState<number[]>([0]); // Start with first block visible
  const [visibleLines, setVisibleLines] = useState<number[]>([]);
  const [isResetting, setIsResetting] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => {
        const next = (prev + 1) % 6; // 4 blocks + pause + reset

        // Steps 0-3: Create blocks and lines
        if (next <= 3) {
          setIsResetting(false);

          // Add block to created list
          setCreatedBlocks((blocks) =>
            blocks.includes(next) ? blocks : [...blocks, next]
          );

          // Add connecting line from previous block (if not first block)
          if (next > 0) {
            setVisibleLines((lines) =>
              lines.includes(next - 1) ? lines : [...lines, next - 1]
            );
          }
        }

        // Step 4: Pause (all visible)
        if (next === 4) {
          setIsResetting(false);
        }

        // Step 5: Fade out
        if (next === 5) {
          setIsResetting(true);
          // Clear arrays during fade out to prevent flash
          setTimeout(() => {
            setCreatedBlocks([]);
            setVisibleLines([]);
          }, 400);
        }

        // Step 0 (after reset): Initialize with first block
        if (next === 0) {
          setTimeout(() => {
            setCreatedBlocks([0]);
            setIsResetting(false);
          }, 500);
        }

        return next;
      });
    }, 800);

    return () => clearInterval(interval);
  }, []);

  const isBlockVisible = (blockIndex: number) => {
    return createdBlocks.includes(blockIndex) && !isResetting;
  };

  const getBlockClassName = (blockIndex: number) => {
    const baseClass = "bg-white rounded-md sm:rounded-lg md:rounded-xl p-0.5 sm:p-1 md:p-2 transition-all duration-500";

    if (!isBlockVisible(blockIndex)) {
      return `${baseClass} opacity-0 scale-95 pointer-events-none`;
    }

    if (blockIndex === activeStep && !isResetting && activeStep <= 3) {
      return `${baseClass} opacity-100 scale-105 ring-1 sm:ring-2 ring-[#FF7742] shadow-xl`;
    }

    return `${baseClass} opacity-60 shadow-md`;
  };

  const isLineVisible = (lineIndex: number) => {
    return visibleLines.includes(lineIndex) && !isResetting;
  };

  const getLineClassName = (lineIndex: number) => {
    const baseClass = "w-px h-1 sm:h-1.5 md:h-2 mx-auto border-l-2 border-dashed border-[#FF7742] transition-all duration-500";
    return isLineVisible(lineIndex)
      ? `${baseClass} opacity-100 scale-y-100`
      : `${baseClass} opacity-0 scale-y-0`;
  };

  return (
    <div className="relative w-full h-full flex items-center justify-center p-0.5 sm:p-1 md:p-2">
      {/* Main Workflow Container */}
      <div className="flex flex-col w-full max-w-[150px] sm:max-w-[200px] md:max-w-[240px] lg:max-w-[260px] space-y-0.5 sm:space-y-1">
        {/* Block 1: Lead Created + CRM */}
        <div className={getBlockClassName(0)}>
          <div className="flex items-center gap-1 sm:gap-1.5 md:gap-2">
            <div className="w-4 h-4 sm:w-5 sm:h-5 md:w-7 md:h-7 rounded-full bg-white flex items-center justify-center overflow-hidden flex-shrink-0">
              <div className="relative w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-5 md:h-5">
                <Image
                  src="/images to use/monday.png"
                  alt="Monday.com"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
            <span className="text-gray-900 font-medium text-[8px] sm:text-[10px] md:text-xs truncate">נוצר ליד חדש ב-CRM</span>
          </div>
        </div>

        {/* Line before badges */}
        <div className={getLineClassName(0)} />

        {/* Platform Badges with Label */}
        <div className={`flex items-center gap-1 sm:gap-2 md:gap-3 justify-center transition-all duration-500 ${
          isLineVisible(0) ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
        }`}>
          {/* "הגיע דרך" label */}
          <span className="text-[8px] sm:text-[10px] md:text-xs text-gray-400 font-medium flex-shrink-0">הגיע דרך:</span>

          {/* Platform Badges */}
          <div className="flex gap-0.5 sm:gap-1">
            <div className="bg-white rounded-full p-0.5 shadow-md flex items-center justify-center">
              <div className="relative w-2.5 h-2.5 sm:w-3 sm:h-3 md:w-4 md:h-4">
                <Image
                  src="/images to use/hd-blue-and-white-square-facebook-fb-logo-70175169479235560lh86s7jg.png"
                  alt="Facebook"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
            <div className="bg-white rounded-full p-0.5 shadow-md flex items-center justify-center">
              <div className="relative w-2.5 h-2.5 sm:w-3 sm:h-3 md:w-4 md:h-4">
                <Image
                  src="/images to use/insagram.jpeg"
                  alt="Instagram"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
            <div className="bg-white rounded-full p-0.5 shadow-md flex items-center justify-center">
              <div className="relative w-2.5 h-2.5 sm:w-3 sm:h-3 md:w-4 md:h-4">
                <Image
                  src="/images to use/pngtree-whatsapp-icon-png-image_3584845.jpg"
                  alt="WhatsApp"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Line after badges */}
        <div className={getLineClassName(0)} />

        {/* Block 2: Warming Message */}
        <div className={getBlockClassName(1)}>
          <div className="flex items-center gap-1 sm:gap-1.5 md:gap-2">
            <div className="w-4 h-4 sm:w-5 sm:h-5 md:w-7 md:h-7 rounded-full bg-white flex items-center justify-center overflow-hidden flex-shrink-0">
              <div className="relative w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-5 md:h-5">
                <Image
                  src="/images to use/pngtree-whatsapp-icon-png-image_3584845.jpg"
                  alt="WhatsApp"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
            <span className="text-gray-900 font-medium text-[8px] sm:text-[10px] md:text-xs truncate">שלח הודעת חימום</span>
          </div>
        </div>

        {/* Line between Block 2 and 3 */}
        <div className={getLineClassName(1)} />

        {/* Block 3: Schedule Meeting */}
        <div className={getBlockClassName(2)}>
          <div className="flex items-center gap-1 sm:gap-1.5 md:gap-2">
            <div className="w-4 h-4 sm:w-5 sm:h-5 md:w-7 md:h-7 rounded-full bg-white flex items-center justify-center overflow-hidden flex-shrink-0">
              <div className="relative w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-5 md:h-5">
                <Image
                  src="/images to use/Calendly-New-Logo.png"
                  alt="Calendly"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
            <span className="text-gray-900 font-medium text-[8px] sm:text-[10px] md:text-xs truncate">קבע פגישת היכרות</span>
          </div>
        </div>

        {/* Line between Block 3 and 4 */}
        <div className={getLineClassName(2)} />

        {/* Block 4: Send Calendar Invite */}
        <div className={getBlockClassName(3)}>
          <div className="flex items-center gap-1 sm:gap-1.5 md:gap-2">
            <div className="w-4 h-4 sm:w-5 sm:h-5 md:w-7 md:h-7 rounded-full bg-white flex items-center justify-center overflow-hidden flex-shrink-0">
              <div className="relative w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-5 md:h-5">
                <Image
                  src="/images to use/google claendar.png"
                  alt="Google Calendar"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
            <span className="text-gray-900 font-medium text-[8px] sm:text-[10px] md:text-xs truncate">שלח זימון ליומן</span>
          </div>
        </div>
      </div>

      {/* Decorative Platform Logos - Hidden when inside MacBook frame */}
      <div className="absolute bottom-4 right-4 hidden animate-float">
        <div className="bg-white rounded-lg p-2 shadow-md hover:shadow-lg transition-shadow">
          <div className="relative w-12 h-6">
            <Image
              src="/images to use/Zapier-logo.svg"
              alt="Zapier"
              fill
              className="object-contain"
            />
          </div>
        </div>
      </div>

      <div className="absolute top-16 left-4 hidden animate-float-delayed">
        <div className="bg-white rounded-lg p-2 shadow-md hover:shadow-lg transition-shadow">
          <div className="relative w-12 h-6">
            <Image
              src="/images to use/apps.8453.13655054093851568.4a371b72-2ce8-4bdb-9d83-be49894d3fa0.svg"
              alt="Make.com"
              fill
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
