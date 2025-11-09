"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function IdeasToReality() {
  return (
    <section className="py-12 md:py-24 px-4 md:px-6 relative">
      <div className="max-w-6xl mx-auto">
        {/* Two-column layout: Text (right in RTL) + 3D Lightbulb (left in RTL) */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12">

          {/* Right Column - Text Content (appears first in RTL) */}
          <motion.div
            className="flex-1 max-w-2xl order-1 md:order-1 relative"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true, margin: "-100px" }}
          >
            {/* Grid Background with Fade - Behind Text */}
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `
                  linear-gradient(rgba(255, 119, 66, 0.25) 1.5px, transparent 1.5px),
                  linear-gradient(90deg, rgba(255, 119, 66, 0.25) 1.5px, transparent 1.5px)
                `,
                backgroundSize: '60px 60px',
                backgroundPosition: 'center center',
                pointerEvents: 'none',
                maskImage: 'radial-gradient(ellipse 90% 100% at center, black 0%, black 15%, rgba(0,0,0,0.8) 30%, rgba(0,0,0,0.5) 50%, rgba(0,0,0,0.2) 70%, transparent 85%)',
                WebkitMaskImage: 'radial-gradient(ellipse 90% 100% at center, black 0%, black 15%, rgba(0,0,0,0.8) 30%, rgba(0,0,0,0.5) 50%, rgba(0,0,0,0.2) 70%, transparent 85%)'
              }}
            />
            <div
              className="relative z-10"
              style={{
                textAlign: 'right',
                direction: 'rtl',
                display: 'flex',
                flexDirection: 'column',
                gap: '1.5rem'
              }}
            >
              {/* Heading */}
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
                הרעיון שלך,{' '}
                <span className="text-[#FF7742]">המציאות שלנו</span>
              </h2>

              {/* Paragraph 1 */}
              <p className="text-base md:text-lg lg:text-xl text-white/90 leading-relaxed">
                אנחנו לא רק מקשיבים - אנחנו באמת <strong className="text-[#ffb84d] font-bold">שומעים</strong>.
                כל רעיון, כל חלום, כל מחשבה שיש לכם - זה נקודת המוצא שלנו.
              </p>

              {/* Paragraph 2 */}
              <p className="text-base md:text-lg lg:text-xl text-white/90 leading-relaxed">
                אנחנו מתמחים לקחת את מה שנמצא בראש שלכם ולהפוך את זה למשהו מוחשי,
                פועל, ומותאם בדיוק לצרכים שלכם. כי הפתרון הכי טוב הוא זה שנבנה{' '}
                <strong className="text-[#ffb84d] font-bold">ביחד איתכם</strong>.
              </p>

              {/* Paragraph 3 */}
              <p className="text-base md:text-lg lg:text-xl text-white/90 leading-relaxed">
                פתוחים לכל רעיון. מתאימים לכל חזון. הופכים כל חלום{' '}
                <span className="text-[#FF7742] font-bold">למציאות</span>.
              </p>
            </div>
          </motion.div>

          {/* Left Column - Neon Lightbulb Image (appears second in RTL) */}
          <motion.div
            className="flex-1 flex items-center justify-center order-2 md:order-2"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <div
              className="relative w-full max-w-md h-[300px] md:h-[400px] lg:h-[450px] flex items-center justify-center"
            >
              {/* Yellow neon glow behind lightbulb */}
              <div
                className="absolute inset-0 flex items-center justify-center"
                style={{
                  filter: 'blur(30px)',
                  opacity: 0.8
                }}
              >
                <div
                  style={{
                    width: '75%',
                    height: '75%',
                    background: 'radial-gradient(circle, rgba(255, 235, 59, 0.9) 0%, rgba(255, 215, 0, 0.6) 35%, rgba(255, 193, 7, 0.3) 60%, transparent 80%)',
                    borderRadius: '50%'
                  }}
                />
              </div>

              <Image
                src="/images to use/neon-light-bulb-icon-design.png"
                alt="Neon Lightbulb Icon"
                width={400}
                height={400}
                className="w-full h-full object-contain relative z-10"
                priority
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
