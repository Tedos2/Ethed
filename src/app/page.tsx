import Hero from "@/components/sections/Hero";
import Slider from "@/components/sections/Slider";

export default function Home() {
  return (
    <main>
      <Hero />
      <section className="bg-[#0f0f0f] py-12 flex items-center justify-center">
        <Slider />
      </section>
    </main>
  );
}
