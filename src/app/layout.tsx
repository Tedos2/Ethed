import type { Metadata } from "next";
import { Noto_Sans_Hebrew } from "next/font/google";
import "./globals.css";

const notoSansHebrew = Noto_Sans_Hebrew({
  variable: "--font-noto-sans-hebrew",
  subsets: ["hebrew", "latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ethed - פתרונות אוטומציה מבוססי AI לעסקים קטנים",
  description: "העובד המושלם ללא עלויות גיוס. אוטומציות, צ'אטבוטים ומערכות CRM מותאמות אישית לעסקים קטנים.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="he" dir="rtl">
      <body
        className={`${notoSansHebrew.variable} antialiased font-sans`}
      >
        {children}
      </body>
    </html>
  );
}
