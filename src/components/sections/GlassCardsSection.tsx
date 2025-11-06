"use client";

import { StackedCards } from "@/components/ui/glass-cards";
import { motion } from "framer-motion";

export default function GlassCardsSection() {
  return (
    <section className="relative w-full">
      {/* Section Header */}
      <motion.div
        className="max-w-7xl mx-auto px-4 md:px-6 pt-4 md:pt-10 pb-0 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-2">
          אז מה אנחנו עושים?
        </h2>
      </motion.div>

      {/* Stacked Cards */}
      <StackedCards />
    </section>
  );
}
