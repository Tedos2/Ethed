import type { Metadata, Viewport } from "next";
import "./globals.css";
import FacebookPixel from "@/components/analytics/FacebookPixel";

export const metadata: Metadata = {
  title: "Ethed - פתרונות אוטומציה מבוססי AI לעסקים קטנים",
  description: "העובד המושלם ללא עלויות גיוס. אוטומציות, צ'אטבוטים ומערכות CRM מותאמות אישית לעסקים קטנים.",
  icons: {
    icon: "/images to use/ETHEDLOGO.png",
    apple: "/images to use/ETHEDLOGO.png",
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="he" dir="rtl" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Rubik:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
        <style dangerouslySetInnerHTML={{__html: `
          .hero-heading {
            font-family: 'Rubik', sans-serif;
            font-weight: 900;
            font-size: 48px;
            line-height: 1.3;
            -webkit-text-stroke: 2px black;
            text-stroke: 2px black;
            paint-order: stroke fill;
          }
          @media (max-width: 768px) {
            .hero-heading {
              font-size: clamp(1.75rem, 5vw, 3rem);
              -webkit-text-stroke: 0;
              text-stroke: 0;
            }
          }
          .nav-tab {
            font-family: 'Rubik', sans-serif;
            font-weight: 900;
          }
        `}} />
        <script src="https://cdn.jsdelivr.net/npm/sienna-accessibility@latest/dist/sienna-accessibility.umd.js" defer></script>
      </head>
      <body
        className="antialiased font-sans"
        suppressHydrationWarning
      >
        <FacebookPixel />
        {children}
      </body>
    </html>
  );
}
