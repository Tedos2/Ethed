"use client";

import { Suspense } from 'react';
import Spline from '@splinetool/react-spline';

export default function LightbulbSpline() {
  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        position: 'relative'
      }}
    >
      <Suspense
        fallback={
          <div className="w-full h-full flex items-center justify-center">
            <div className="text-white/60 text-sm">Loading 3D Lightbulb...</div>
          </div>
        }
      >
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%'
          }}
        >
          <Spline
            scene="https://prod.spline.design/rdud4GjayhgXiRbB/scene.splinecode"
            style={{
              width: '100%',
              height: '100%',
              background: 'transparent',
              pointerEvents: 'auto'
            }}
          />
        </div>
      </Suspense>
    </div>
  );
}
