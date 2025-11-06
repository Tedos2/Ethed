import Hero from "@/components/sections/Hero";
import EmotionalHook from "@/components/sections/EmotionalHook";
import GlassCardsSection from "@/components/sections/GlassCardsSection";
import CTABanner from "@/components/sections/CTABanner";
import Demo from "@/components/ui/demo";
import FAQ from "@/components/ui/faq";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/layout/Footer";
import { FullPageBeamsBackground } from "@/components/ui/FullPageBeamsBackground";

export default function Home() {
  return (
    <>
      <main className="relative bg-gradient-to-b from-[#0f0f0f] via-[#2a150a] via-40% via-[#1a0f08] via-70% to-[#0a0505]">
        {/* Full-page beams background with scroll-based color transition */}
        <FullPageBeamsBackground />

        {/* All sections render on top of beams */}
        <div className="relative z-10">
          <Hero />
          <EmotionalHook />
          <GlassCardsSection />
          <CTABanner />
          <Demo />
          <FAQ />
          <Contact />
        </div>
      </main>
      <Footer />
    </>
  );
}
