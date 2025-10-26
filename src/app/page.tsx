import Hero from "@/components/sections/Hero";
import OrbitingSkills from "@/components/ui/orbiting-skills";
import GlassCardsSection from "@/components/sections/GlassCardsSection";
import Demo from "@/components/ui/demo";
import FAQ from "@/components/ui/faq";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <>
      <main className="bg-gradient-to-b from-[#0f0f0f] via-[#2a150a] via-40% via-[#1a0f08] via-70% to-[#0a0505]">
        <Hero />
        <OrbitingSkills />
        <GlassCardsSection />
        <Demo />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
