"use client";
import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export function LampDemo() {
  return (
    <LampContainer>
      {/* Empty - just the lamp light effect */}
    </LampContainer>
  );
}

export const LampContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "relative flex h-[280px] flex-col items-center justify-start overflow-visible w-full z-0",
        className
      )}
    >
      <div className="relative flex w-full h-full items-start justify-center z-0">
        {/* Light source line at top */}
        <motion.div
          initial={{ width: "15rem" }}
          whileInView={{ width: "30rem" }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="absolute top-0 z-50 h-0.5 w-[30rem] bg-[#FF8855]"
        ></motion.div>

        {/* Top light glow */}
        <motion.div
          initial={{ width: "8rem" }}
          whileInView={{ width: "16rem" }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="absolute top-0 z-30 h-24 w-48 -translate-y-4 rounded-full bg-[#FF8855] opacity-70 blur-2xl"
        ></motion.div>

        {/* Conic gradient - right side spreading downward */}
        <motion.div
          initial={{ opacity: 0.5, width: "15rem" }}
          whileInView={{ opacity: 1, width: "30rem" }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          style={{
            backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
          }}
          className="absolute top-0 right-1/2 h-[350px] overflow-visible w-[30rem] bg-gradient-conic from-[#FF7742] via-transparent to-transparent [--conic-position:from_110deg_at_center_top]"
        >
          <div className="absolute w-40 h-[100%] left-0 bg-[#0f0f0f] top-0 z-20 [mask-image:linear-gradient(to_right,white,transparent)]" />
        </motion.div>

        {/* Conic gradient - left side spreading downward */}
        <motion.div
          initial={{ opacity: 0.5, width: "15rem" }}
          whileInView={{ opacity: 1, width: "30rem" }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          style={{
            backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
          }}
          className="absolute top-0 left-1/2 h-[350px] w-[30rem] bg-gradient-conic from-transparent via-transparent to-[#FF7742] [--conic-position:from_250deg_at_center_top]"
        >
          <div className="absolute w-40 h-[100%] right-0 bg-[#0f0f0f] top-0 z-20 [mask-image:linear-gradient(to_left,white,transparent)]" />
        </motion.div>

        {/* Main center glow - upper light spread - NOW ABOVE FAQ */}
        <div className="absolute top-12 z-50 h-56 w-[36rem] rounded-full bg-gradient-to-b from-[#FF7742]/60 via-[#3d1f0f]/40 to-transparent opacity-80 blur-3xl"></div>

        {/* FAQ Header Spotlight - concentrated light right on FAQ header area - NOW ABOVE FAQ */}
        <div className="absolute top-20 z-50 h-48 w-[38rem] rounded-full bg-gradient-to-b from-[#FF8855]/70 via-[#3d1f0f]/50 to-[#1a0f08]/20 opacity-80 blur-3xl"></div>

        {/* Secondary glow - extends light cone downward - NOW ABOVE FAQ */}
        <div className="absolute top-24 z-50 h-72 w-[34rem] rounded-full bg-gradient-to-b from-[#3d1f0f]/60 via-[#1a0f08]/30 to-transparent opacity-90 blur-3xl"></div>

        {/* Fade transition layer between lamp and FAQ */}
        <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-b from-transparent via-[#1a0f08]/30 via-[#2a150a]/50 to-[#3d1f0f] z-45 pointer-events-none"></div>

        {/* Hide top area */}
        <div className="absolute top-0 z-40 h-20 w-full -translate-y-full bg-[#0f0f0f]"></div>
      </div>

      <div className="relative z-50 flex flex-col items-center px-5">
        {children}
      </div>
    </div>
  );
};
