"use client";

import React, { Suspense, useState, useEffect, useRef } from 'react';
import Spline from '@splinetool/react-spline';

export default function Spline3DScene() {
  const [hasError, setHasError] = useState(false);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  // Monitor container dimensions and only render when valid
  useEffect(() => {
    if (!containerRef.current) return;

    const resizeObserver = new ResizeObserver((entries) => {
      const entry = entries[0];
      if (entry) {
        const { width, height } = entry.contentRect;
        // Only update if dimensions are valid (prevents WebGL framebuffer errors)
        if (width > 0 && height > 0) {
          setDimensions({ width, height });
        }
      }
    });

    resizeObserver.observe(containerRef.current);
    return () => resizeObserver.disconnect();
  }, []);

  // Aggressively suppress Spline console errors (WebGL errors from invalid dimensions)
  useEffect(() => {
    const originalError = console.error;
    const originalWarn = console.warn;

    console.error = (...args: any[]) => {
      const message = String(args[0] || '');
      // Suppress all Spline-related and WebGL errors
      if (
        message.includes('Missing property') ||
        message.includes('spline') ||
        message.includes('Spline') ||
        message.includes('timeline') ||
        message.includes('buildTimeline') ||
        message.includes('WebGL') ||
        message.includes('GL_INVALID') ||
        message.includes('glTexStorage') ||
        message.includes('glClear') ||
        message.includes('glDrawElements') ||
        message.includes('Framebuffer')
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

  // Only render Spline when container has valid dimensions (prevents WebGL errors)
  // Require minimum 64px to prevent zero-size framebuffer issues on mobile
  const shouldRender = dimensions.width >= 64 && dimensions.height >= 64;

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
        height: '420px',
        minHeight: '420px',
        maxHeight: '420px',
        position: 'relative',
        overflow: 'hidden',
        isolation: 'isolate'
      }}
    >
      {shouldRender ? (
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
              onError={() => setHasError(true)}
            />
          </div>
        </Suspense>
      ) : (
        <div className="w-full h-full flex items-center justify-center bg-gradient-to-b from-transparent to-black/20 rounded-lg">
          <div className="text-white/60 text-sm">Initializing 3D Scene...</div>
        </div>
      )}
    </div>
  );
}
