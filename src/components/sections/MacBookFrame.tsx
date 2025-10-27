import { ReactNode } from "react";
import { MacbookPro } from "@/components/ui/macbook-pro";

interface MacBookFrameProps {
  children: ReactNode;
}

export default function MacBookFrame({ children }: MacBookFrameProps) {
  return (
    <div className="relative w-full max-w-[95vw] sm:max-w-md md:max-w-2xl lg:max-w-4xl xl:max-w-5xl mx-auto">
      <MacbookPro className="w-full h-auto">
        {children}
      </MacbookPro>
    </div>
  );
}
