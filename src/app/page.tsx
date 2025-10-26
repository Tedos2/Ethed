import Hero from "@/components/sections/Hero";
import OrbitingSkills from "@/components/ui/orbiting-skills";
import Demo from "@/components/ui/demo";
import FAQ from "@/components/ui/faq";

export default function Home() {
  return (
    <main className="bg-gradient-to-b from-[#0f0f0f] via-[#2a150a] via-40% via-[#1a0f08] via-70% to-[#0a0505]">
      <Hero />
      <OrbitingSkills />
      <Demo />
      <FAQ />
    </main>
  );
}
