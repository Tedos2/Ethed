"use client";

import React, { Suspense, useState, useEffect, useRef } from 'react';
import Spline from '@splinetool/react-spline';

export default function Spline3DScene() {
  const [hasError, setHasError] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

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

  // Prevent Spline canvas from capturing scroll events
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Find all canvas elements inside the container
    const observer = new MutationObserver(() => {
      const canvases = container.querySelectorAll('canvas');
      canvases.forEach((canvas) => {
        canvas.style.pointerEvents = 'none';
      });
    });

    observer.observe(container, {
      childList: true,
      subtree: true
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  const handleLoad = (splineApp: any) => {
    console.log('Spline scene loaded successfully');

    // Disable camera controls to prevent scroll-based movement
    if (splineApp && splineApp.setZoom) {
      try {
        splineApp.setZoom(1);
      } catch (e) {
        // Silent fail
      }
    }
  };

  if (hasError) {
    return (
      <div className="w-full h-[400px] md:h-[500px] lg:h-[600px] relative flex items-center justify-center bg-gradient-to-b from-transparent to-black/20 rounded-lg">
        <div className="text-white/60 text-sm">Unable to load 3D scene</div>
      </div>
    );
  }

  return (
    <div
      ref={containerRef}
      className="w-full"
      style={{
        height: '550px',
        minHeight: '550px',
        maxHeight: '550px',
        position: 'relative',
        overflow: 'hidden',
        isolation: 'isolate'
      }}
    >
      <Suspense
        fallback={
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-b from-transparent to-black/20 rounded-lg">
            <div className="text-white/60 text-sm">Loading 3D Scene...</div>
          </div>
        }
      >
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            width: '100%',
            height: '100%',
            transform: 'translate3d(0, 0, 0)',
            pointerEvents: 'none'
          }}
        >
          <Spline
            scene="/images to use/scene.splinecode"
            onLoad={handleLoad}
          />
        </div>
      </Suspense>
    </div>
  );
}
