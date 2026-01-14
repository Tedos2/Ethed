"use client";

import { StackedCards } from "@/components/ui/glass-cards";
import { motion } from "framer-motion";

export default function GlassCardsSection() {
  return (
    <section id="solutions" className="relative w-full">
      {/* Section Header */}
      <motion.div
        className="max-w-7xl mx-auto px-4 md:px-6 pt-4 md:pt-10 pb-8 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <h2 className="text-4xl md:text-5xl text-white mb-2" style={{ fontWeight: '900' }} suppressHydrationWarning>
          אז מה אנחנו עושים?
        </h2>
      </motion.div>

      {/* Stacked Cards */}
      <StackedCards />
    </section>
  );
}
