import { ReactNode } from "react";

export interface MacbookMobileProps {
  children?: ReactNode;
}

export function MacbookMobile({ children }: MacbookMobileProps) {
  return (
    <div className="w-full max-w-[300px] mx-auto">
      {/* MacBook Frame */}
      <div className="bg-gradient-to-b from-gray-700 to-gray-800 p-2 rounded-xl shadow-2xl">
        {/* MacBook Screen */}
        <div
          className="relative w-full bg-[#0f0f0f] rounded-lg overflow-hidden shadow-inner"
          style={{ aspectRatio: '16 / 10' }}
        >
          {/* Screen Content */}
          <div className="absolute inset-0 flex items-center justify-center p-4">
            {children}
          </div>
        </div>
      </div>

      {/* MacBook Keyboard Base */}
      <div className="h-3 bg-gradient-to-b from-gray-700 to-gray-800 rounded-b-lg -mt-1 shadow-lg"></div>
    </div>
  );
}
