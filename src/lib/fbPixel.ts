export const FB_PIXEL_ID = '857357020443685';

declare global {
  interface Window {
    fbq: (type: string, event: string, data?: Record<string, any>) => void;
    _fbq?: any;
  }
}

export const pageview = () => {
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('track', 'PageView');
  }
};

// Custom event tracking for form submissions
export const trackLead = (data?: Record<string, any>) => {
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('track', 'Lead', data);
  }
};

// Track contact form submission
export const trackContact = () => {
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('track', 'Contact');
  }
};
