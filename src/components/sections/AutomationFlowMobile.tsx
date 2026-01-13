"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

export default function AutomationFlowMobile() {
  const [activeStep, setActiveStep] = useState(0);
  const [createdBlocks, setCreatedBlocks] = useState<number[]>([0]);
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
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const isBlockVisible = (blockIndex: number) => {
    return createdBlocks.includes(blockIndex) && !isResetting;
  };

  const getBlockClassName = (blockIndex: number) => {
    const baseClass = "bg-white rounded-md p-1 transition-all duration-500";

    if (!isBlockVisible(blockIndex)) {
      return `${baseClass} opacity-0 scale-95 pointer-events-none`;
    }

    if (blockIndex === activeStep && !isResetting && activeStep <= 3) {
      return `${baseClass} opacity-100 scale-105 ring-2 ring-[#FF7742] shadow-xl`;
    }

    return `${baseClass} opacity-60 shadow-md`;
  };

  const isLineVisible = (lineIndex: number) => {
    return visibleLines.includes(lineIndex) && !isResetting;
  };

  const getLineClassName = (lineIndex: number) => {
    const baseClass = "w-px h-2 mx-auto border-l-2 border-dashed border-[#FF7742] transition-all duration-500";
    return isLineVisible(lineIndex)
      ? `${baseClass} opacity-100 scale-y-100`
      : `${baseClass} opacity-0 scale-y-0`;
  };

  return (
    <div className="relative w-full h-full flex items-center justify-center">
      {/* Main Workflow Container */}
      <div className="flex flex-col w-full max-w-[200px] space-y-0.5">
        {/* Block 1: Lead Created + CRM */}
        <div className={getBlockClassName(0)}>
          <div className="flex items-center gap-1.5" dir="rtl">
            <div className="w-5 h-5 rounded-full bg-white flex items-center justify-center overflow-hidden flex-shrink-0">
              <div className="relative w-3.5 h-3.5">
                <Image
                  src="/images to use/monday.png"
                  alt="Monday.com"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
            <span className="text-gray-900 font-medium text-[9px] truncate">נוצר ליד חדש ב-CRM</span>
          </div>
        </div>

        {/* Line before badges */}
        <div className={getLineClassName(0)} />

        {/* Platform Badges with Label - "הגיע דרך:" */}
        <div className={`flex items-center gap-1.5 justify-center transition-all duration-500 ${
          isLineVisible(0) ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
        }`} dir="rtl">
          {/* "הגיע דרך" label */}
          <span className="text-[9px] text-gray-400 font-medium flex-shrink-0">הגיע דרך:</span>

          {/* Platform Badge Icons */}
          <div className="flex gap-0.5">
            {/* Facebook */}
            <div className="bg-white rounded-full p-0.5 shadow-sm flex items-center justify-center">
              <div className="relative w-3 h-3">
                <Image
                  src="/images to use/2021_Facebook_icon.svg.png"
                  alt="Facebook"
                  fill
                  className="object-contain"
                />
              </div>
            </div>

            {/* Instagram */}
            <div className="bg-white rounded-full p-0.5 shadow-sm flex items-center justify-center">
              <div className="relative w-3 h-3">
                <Image
                  src="/images to use/instagram.png"
                  alt="Instagram"
                  fill
                  className="object-contain"
                />
              </div>
            </div>

            {/* WhatsApp */}
            <div className="bg-white rounded-full p-0.5 shadow-sm flex items-center justify-center">
              <div className="relative w-3 h-3">
                <Image
                  src="/images to use/whatsapplogooo.png"
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
          <div className="flex items-center gap-1.5" dir="rtl">
            <div className="w-5 h-5 rounded-full bg-white flex items-center justify-center overflow-hidden flex-shrink-0">
              <div className="relative w-3.5 h-3.5">
                <Image
                  src="/images to use/whatsapplogooo.png"
                  alt="WhatsApp"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
            <span className="text-gray-900 font-medium text-[9px] truncate">שלח הודעת חימום</span>
          </div>
        </div>

        {/* Line between Block 2 and 3 */}
        <div className={getLineClassName(1)} />

        {/* Block 3: Schedule Meeting */}
        <div className={getBlockClassName(2)}>
          <div className="flex items-center gap-1.5" dir="rtl">
            <div className="w-5 h-5 rounded-full bg-white flex items-center justify-center overflow-hidden flex-shrink-0">
              <div className="relative w-3.5 h-3.5">
                <Image
                  src="/images to use/Calendly-New-Logo.png"
                  alt="Calendly"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
            <span className="text-gray-900 font-medium text-[9px] truncate">קבע פגישת היכרות</span>
          </div>
        </div>

        {/* Line between Block 3 and 4 */}
        <div className={getLineClassName(2)} />

        {/* Block 4: Send Calendar Invite */}
        <div className={getBlockClassName(3)}>
          <div className="flex items-center gap-1.5" dir="rtl">
            <div className="w-5 h-5 rounded-full bg-white flex items-center justify-center overflow-hidden flex-shrink-0">
              <div className="relative w-3.5 h-3.5">
                <Image
                  src="/images to use/google claendar.png"
                  alt="Google Calendar"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
            <span className="text-gray-900 font-medium text-[9px] truncate">שלח זימון ליומן</span>
          </div>
        </div>
      </div>
    </div>
  );
}
