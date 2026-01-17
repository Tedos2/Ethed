import type { Metadata } from "next";
import ThankYouContent from "@/components/sections/ThankYouContent";
import Footer from "@/components/layout/Footer";
import { FullPageBeamsBackground } from "@/components/ui/FullPageBeamsBackground";

export const metadata: Metadata = {
  title: "תודה על ההרשמה | Ethed",
  description: "תודה על פנייתך! ניצור איתך קשר בקרוב.",
  robots: "noindex, nofollow",
};

export default function ThankYouPage() {
  return (
    <main className="relative min-h-screen bg-gradient-to-b from-[#0f0f0f] via-[#2a150a] via-40% via-[#1a0f08] via-70% to-[#0a0505]">
      {/* Background Effects */}
      <FullPageBeamsBackground />

      {/* Content */}
      <div className="relative z-10">
        <ThankYouContent />
        <Footer />
      </div>
    </main>
  );
}
