"use client";

import { StackedCards } from "@/components/ui/glass-cards";
import { motion } from "framer-motion";

export default function GlassCardsSection() {
  return (
    <section className="relative w-full">
      {/* Section Header */}
      <motion.div
        className="max-w-7xl mx-auto px-4 md:px-6 pt-8 md:pt-20 pb-10 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          מה אנחנו עושים?
        </h2>
        <p className="text-gray-300 text-lg max-w-2xl mx-auto">
          ארבעה תחומי ליבה שבהם אנחנו מספקים פתרונות מותאמים אישית לעסקים
        </p>
      </motion.div>

      {/* Stacked Cards */}
      <StackedCards />
    </section>
  );
}
