import Hero from "@/components/sections/hero";
import Mobile3DScene from "@/components/sections/Mobile3DScene";
import EmotionalHook from "@/components/sections/EmotionalHook";
import GlassCardsSection from "@/components/sections/GlassCardsSection";
import Integrations from "@/components/sections/Integrations";
import CTABanner from "@/components/sections/CTABanner";
import AutomationExamples from "@/components/sections/AutomationExamples";
import Demo from "@/components/ui/demo";
import IdeasToReality from "@/components/sections/IdeasToReality";
import FAQ from "@/components/ui/faq";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/layout/Footer";
import { FullPageBeamsBackground } from "@/components/ui/FullPageBeamsBackground";
import FloatingWhatsApp from "@/components/ui/FloatingWhatsApp";
import AccessibilityWidget from "@/components/ui/AccessibilityWidget";

export default function Home() {
  return (
    <>
      <main className="relative bg-gradient-to-b from-[#0f0f0f] via-[#2a150a] via-40% via-[#1a0f08] via-70% to-[#0a0505]">
        {/* Full-page beams background with scroll-based color transition */}
        <FullPageBeamsBackground />

        {/* All sections render on top of beams */}
        <div className="relative z-10">
          <Hero />
          <Mobile3DScene />
          <EmotionalHook />
          <GlassCardsSection />
          <Integrations />
          <CTABanner />
          <AutomationExamples />
          <Demo />
          <IdeasToReality />
          <FAQ />
          <Contact />
        </div>

        {/* Floating WhatsApp button */}
        <FloatingWhatsApp />

        {/* Accessibility Widget */}
        <AccessibilityWidget />
      </main>
      <Footer />
    </>
  );
}
