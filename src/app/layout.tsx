import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ethed - פתרונות אוטומציה מבוססי AI לעסקים קטנים",
  description: "העובד המושלם ללא עלויות גיוס. אוטומציות, צ'אטבוטים ומערכות CRM מותאמות אישית לעסקים קטנים.",
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
    userScalable: true,
  },
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
        <link href="https://fonts.googleapis.com/css2?family=Secular+One&family=Rubik:wght@300..900&display=swap" rel="stylesheet" />
      </head>
      <body
        className="antialiased font-sans"
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
