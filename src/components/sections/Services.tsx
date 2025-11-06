"use client";

import { motion } from "framer-motion";

export default function Services() {
  const services = [
    {
      title: "Conversational Chatbots",
      description: "AI-powered chatbots that engage customers, answer questions, and qualify leads automatically.",
    },
    {
      title: "End-to-End Workflow Automation",
      description: "Streamline your business processes with custom automation solutions that save hours every day.",
    },
    {
      title: "Custom CRM Development",
      description: "Tailored CRM systems built specifically for your business needs and workflows.",
    },
  ];

  return (
    <motion.section
      className="py-20 bg-gray-50"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true, margin: "-100px" }}
    >
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4">What We Build</h2>
        <p className="text-2xl text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          Tailored solutions with built-in KPI tracking to prove real value
        </p>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-2xl font-semibold mb-4">{service.title}</h3>
              <p className="text-gray-600 text-lg">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
