import { ReactNode } from "react";

interface MacBookFrameProps {
  children: ReactNode;
}

export default function MacBookFrame({ children }: MacBookFrameProps) {
  return (
    <div className="relative w-full max-w-5xl mx-auto">
      {/* MacBook Outer Frame */}
      <div className="relative bg-gradient-to-b from-gray-800 to-gray-900 rounded-2xl p-3 shadow-2xl">
        {/* Screen Bezel */}
        <div className="relative bg-black rounded-lg p-2">
          {/* Screen Content Area */}
          <div className="relative bg-gradient-to-br from-gray-900 to-black rounded-md overflow-hidden aspect-[4/3]">
            {/* Notch (camera) */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-5 bg-black rounded-b-2xl z-20 flex items-center justify-center">
              <div className="w-2 h-2 bg-gray-700 rounded-full"></div>
            </div>

            {/* Screen Content */}
            <div className="absolute inset-0 bg-[#0f0f0f] overflow-hidden">
              {children}
            </div>

            {/* Screen Glare Effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent pointer-events-none rounded-md"></div>
          </div>
        </div>

        {/* Bottom Bezel (thicker) */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-b from-gray-700 to-gray-800 rounded-b-2xl"></div>
      </div>

      {/* MacBook Base/Keyboard */}
      <div className="relative -mt-1">
        {/* Hinge */}
        <div className="w-full h-1 bg-gradient-to-b from-gray-700 to-gray-600"></div>

        {/* Keyboard Base */}
        <div className="bg-gradient-to-b from-gray-700 via-gray-600 to-gray-700 rounded-b-3xl px-8 pt-4 pb-2 shadow-xl">
          {/* Keyboard subtle detail */}
          <div className="grid grid-cols-12 gap-1 opacity-30 mb-2">
            {Array.from({ length: 60 }).map((_, i) => (
              <div key={i} className="h-1 bg-gray-800 rounded-sm"></div>
            ))}
          </div>

          {/* Trackpad */}
          <div className="mx-auto w-1/3 h-12 bg-gray-800/50 rounded-xl border border-gray-700/50 mt-2"></div>
        </div>
      </div>
    </div>
  );
}
