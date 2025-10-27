"use client";

import { useEffect, useState } from "react";
import { MacbookMobile } from "@/components/ui/macbook-mobile";
import MacBookFrame from "./MacBookFrame";
import AutomationFlow from "./AutomationFlow";
import AutomationFlowMobile from "./AutomationFlowMobile";

export default function ResponsiveMacBook() {
  const [isMobile, setIsMobile] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Prevent hydration mismatch by rendering nothing until mounted
  if (!isMounted) {
    return (
      <div className="w-full max-w-[280px] md:max-w-md lg:max-w-2xl xl:max-w-4xl mx-auto h-[200px] md:h-[400px]" />
    );
  }

  if (isMobile) {
    return (
      <MacbookMobile>
        <AutomationFlowMobile />
      </MacbookMobile>
    );
  }

  return (
    <MacBookFrame>
      <AutomationFlow />
    </MacBookFrame>
  );
}
