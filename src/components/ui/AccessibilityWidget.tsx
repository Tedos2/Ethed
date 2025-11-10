"use client";

import { useEffect } from "react";

export default function AccessibilityWidget() {
  useEffect(() => {
    // Suppress hydration warnings caused by Sienna accessibility widget
    // The widget adds data-asw-org-font-size attributes and inline styles after SSR
    const originalConsoleError = console.error;
    console.error = (...args: any[]) => {
      if (
        typeof args[0] === 'string' &&
        (args[0].includes('Hydration') ||
         args[0].includes('data-asw-org-font-size') ||
         args[0].includes('fontFamily') ||
         args[0].includes('font-size'))
      ) {
        return;
      }
      originalConsoleError.apply(console, args);
    };

    // Wait for the widget to be loaded and positioned
    const checkForWidget = setInterval(() => {
      const widgetElement = document.querySelector('[class*="sienna"]') ||
                           document.querySelector('[id*="sienna"]') ||
                           document.querySelector('[data-sienna]') ||
                           document.querySelector('[class*="asw"]') ||
                           document.querySelector('[id*="asw"]');

      if (widgetElement) {
        // Apply custom positioning to match bottom-left corner
        const element = widgetElement as HTMLElement;
        element.style.position = 'fixed';
        element.style.bottom = '1.5rem'; // matches bottom-6 (24px)
        element.style.left = '1.5rem'; // matches left-6 (24px)
        element.style.right = 'auto';
        element.style.zIndex = '50';

        clearInterval(checkForWidget);
      }
    }, 100);

    // Cleanup after 10 seconds
    const timeout = setTimeout(() => {
      clearInterval(checkForWidget);
    }, 10000);

    return () => {
      console.error = originalConsoleError;
      clearInterval(checkForWidget);
      clearTimeout(timeout);
    };
  }, []);

  return null; // The widget is rendered by the external script
}
