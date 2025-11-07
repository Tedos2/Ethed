"use client";

import Spline3DScene from "@/components/ui/Spline3DScene";

export default function Mobile3DScene() {
  return (
    <section className="md:hidden relative py-0 overflow-x-clip overflow-y-visible">
      <div className="w-full flex items-center justify-center pl-8 pr-0 overflow-visible">
        <div className="w-[90%] max-w-lg overflow-visible">
          <Spline3DScene />
        </div>
      </div>
    </section>
  );
}
