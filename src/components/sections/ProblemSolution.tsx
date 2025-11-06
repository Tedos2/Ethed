"use client";

import { motion } from "framer-motion";

export default function ProblemSolution() {
  return (
    <motion.section
      className="py-20 bg-white"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true, margin: "-100px" }}
    >
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">
          Built for Business Owners Who Can't Afford to Hire
        </h2>
        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <div className="bg-gray-50 p-8 rounded-lg">
            <h3 className="text-2xl font-semibold mb-4">The Challenge</h3>
            <ul className="space-y-3 text-gray-700 text-lg">
              <li>• Need help to grow but can't afford staff</li>
              <li>• High salary and training costs</li>
              <li>• Inconsistent performance</li>
              <li>• Management overhead</li>
            </ul>
          </div>
          <div className="bg-black text-white p-8 rounded-lg">
            <h3 className="text-2xl font-semibold mb-4">Our Solution</h3>
            <ul className="space-y-3 text-lg">
              <li>• AI agents that work 24/7</li>
              <li>• Fraction of the cost of hiring</li>
              <li>• Perfect consistency</li>
              <li>• Built-in KPI tracking</li>
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
