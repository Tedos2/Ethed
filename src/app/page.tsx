import Hero from "@/components/sections/Hero";
import ProblemSolution from "@/components/sections/ProblemSolution";
import Services from "@/components/sections/Services";
import CTA from "@/components/sections/CTA";

export default function Home() {
  return (
    <main>
      <Hero />
      <ProblemSolution />
      <Services />
      <CTA />
    </main>
  );
}
