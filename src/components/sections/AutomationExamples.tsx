"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";

const automationCards = [
  {
    id: 1,
    title: "Automation Type #1",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.",
    features: [
      "Lorem ipsum dolor sit amet",
      "Consectetur adipiscing elit sed do",
      "Eiusmod tempor incididunt ut labore"
    ]
  },
  {
    id: 2,
    title: "Automation Type #2",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.",
    features: [
      "Lorem ipsum dolor sit amet",
      "Consectetur adipiscing elit sed do",
      "Eiusmod tempor incididunt ut labore"
    ]
  },
  {
    id: 3,
    title: "Automation Type #3",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.",
    features: [
      "Lorem ipsum dolor sit amet",
      "Consectetur adipiscing elit sed do",
      "Eiusmod tempor incididunt ut labore"
    ]
  },
  {
    id: 4,
    title: "Automation Type #4",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.",
    features: [
      "Lorem ipsum dolor sit amet",
      "Consectetur adipiscing elit sed do",
      "Eiusmod tempor incididunt ut labore"
    ]
  },
];

export default function AutomationExamples() {
  return (
    <section id="automations" className="py-12 md:py-24 px-4 md:px-6 relative">
      <div className="max-w-7xl mx-auto">
        {/* 4-card grid: 2x2 mobile/tablet, 4 columns desktop */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {automationCards.map((card, index) => (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
              className="h-full"
            >
              {/* Card Container */}
              <div
                className={`
                  relative h-full
                  border border-[#FF7742]/30
                  rounded-2xl
                  p-6 md:p-8
                  shadow-xl
                  transition-all duration-300
                  hover:shadow-2xl hover:border-[#FF7742]/50
                  hover:scale-105
                  flex flex-col
                  group
                  overflow-hidden
                `}
                style={{
                  minHeight: '320px',
                  background: 'linear-gradient(to bottom, rgba(15, 15, 15, 0.85), rgba(42, 21, 10, 0.85), rgba(26, 15, 8, 0.85))'
                }}
              >
                {/* Beams Background Pattern - More visible inside card */}
                <div
                  className="absolute inset-0 opacity-40"
                  style={{
                    background: `
                      linear-gradient(90deg, rgba(255, 119, 66, 0.03) 1px, transparent 1px),
                      linear-gradient(rgba(255, 119, 66, 0.03) 1px, transparent 1px),
                      radial-gradient(circle at 50% 50%, rgba(255, 119, 66, 0.15) 0%, transparent 70%)
                    `,
                    backgroundSize: '50px 50px, 50px 50px, 100% 100%'
                  }}
                />
                {/* Bot Image Placeholder */}
                <div
                  className="relative z-10 w-full h-20 md:h-24 mb-4 rounded-xl bg-white/5 flex items-center justify-center"
                  style={{
                    background: 'linear-gradient(135deg, rgba(255,255,255,0.05), rgba(255,255,255,0.02))',
                    border: '1px dashed rgba(255,255,255,0.2)'
                  }}
                >
                  <span className="text-white/30 text-xs md:text-sm">Bot Image</span>
                </div>

                {/* Card Title */}
                <h3
                  className="relative z-10 text-lg md:text-xl font-bold text-white mb-3 text-right"
                  dir="rtl"
                >
                  {card.title}
                </h3>

                {/* Card Description */}
                <p
                  className="relative z-10 text-xs md:text-sm text-white/90 leading-relaxed mb-4 text-right"
                  dir="rtl"
                >
                  {card.description}
                </p>

                {/* Features List with Checkmarks */}
                <ul className="relative z-10 space-y-2 mb-4 flex-grow">
                  {card.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-2 text-right"
                      dir="rtl"
                    >
                      <Check className="w-4 h-4 text-[#FF7742] shrink-0 mt-0.5" />
                      <span className="text-xs md:text-sm text-white/80 leading-relaxed">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* Integration Icons Placeholder - No text line */}
                <div className="relative z-10 flex gap-3 justify-end mt-auto">
                  {[1, 2, 3].map((iconNum) => (
                    <div
                      key={iconNum}
                      className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
                    >
                      <span className="text-white/40 text-xs">{iconNum}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
