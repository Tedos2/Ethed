"use client";

import React, { Suspense, useState, useEffect } from 'react';
import Spline from '@splinetool/react-spline';

export default function Spline3DScene() {
  const [hasError, setHasError] = useState(false);

  // Aggressively suppress Spline console errors
  useEffect(() => {
    const originalError = console.error;
    const originalWarn = console.warn;

    console.error = (...args: any[]) => {
      const message = String(args[0] || '');
      // Suppress all Spline-related errors
      if (
        message.includes('Missing property') ||
        message.includes('spline') ||
        message.includes('Spline') ||
        message.includes('timeline') ||
        message.includes('buildTimeline')
      ) {
        return;
      }
      originalError.apply(console, args);
    };

    console.warn = (...args: any[]) => {
      const message = String(args[0] || '');
      // Suppress Spline warnings
      if (message.includes('spline') || message.includes('Spline')) {
        return;
      }
      originalWarn.apply(console, args);
    };

    return () => {
      console.error = originalError;
      console.warn = originalWarn;
    };
  }, []);

  const handleLoad = (splineApp: any) => {
    console.log('Spline scene loaded successfully');
  };

  if (hasError) {
    return (
      <div className="w-full h-[400px] md:h-[500px] lg:h-[600px] relative flex items-center justify-center bg-gradient-to-b from-transparent to-black/20 rounded-lg">
        <div className="text-white/60 text-sm">Unable to load 3D scene</div>
      </div>
    );
  }

  return (
    <div className="w-full h-[400px] md:h-[380px] lg:h-[420px] relative overflow-visible">
      <Suspense
        fallback={
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-b from-transparent to-black/20 rounded-lg">
            <div className="text-white/60 text-sm">Loading 3D Scene...</div>
          </div>
        }
      >
        <Spline
          scene="/images to use/scene.splinecode"
          onLoad={handleLoad}
          className="w-full h-full"
        />
      </Suspense>
    </div>
  );
}
