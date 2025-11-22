"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import CompactOrbitingSkills from "@/components/ui/CompactOrbitingSkills";

export default function Integrations() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <section className="relative py-12 md:py-24 overflow-hidden">
      <div className="container mx-auto px-6 md:px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Two-column layout: Text (right in RTL) + Visual (left in RTL) */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12">

            {/* Text Content - Right side on desktop, below visual on mobile */}
            <motion.div
              className="flex-1 max-w-2xl order-2 md:order-1"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ margin: "-100px" }}
            >
              <div
                style={{
                  textAlign: 'right',
                  direction: 'rtl',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: isMobile ? '0.5rem' : '0.75rem',
                }}
              >
                {/* Headline */}
                <h2 style={{
                  fontSize: isMobile ? 'clamp(1.75rem, 4vw, 2rem)' : 'clamp(2rem, 3.5vw, 2.75rem)',
                  fontWeight: '700',
                  color: '#ffffff',
                  lineHeight: '1.3',
                  textAlign: 'right',
                  marginBottom: isMobile ? '0.25rem' : '0.5rem'
                }} suppressHydrationWarning>
                  התאמה מושלמת לכלים שכבר עובדים איתם
                </h2>

                {/* Body Paragraphs */}
                <p style={{
                  fontSize: isMobile ? '1rem' : '1.125rem',
                  color: '#ffffff',
                  lineHeight: isMobile ? '1.5' : '1.6',
                  textAlign: 'right',
                  margin: 0
                }} suppressHydrationWarning>
                  אנחנו לא מחליפים את המערכות שלך - אנחנו משדרגים אותן.
                </p>

                <p style={{
                  fontSize: isMobile ? '1rem' : '1.125rem',
                  color: '#ffffff',
                  lineHeight: isMobile ? '1.5' : '1.6',
                  textAlign: 'right',
                  margin: 0
                }} suppressHydrationWarning>
                  האוטומציות שלנו מתחברות בצורה חלקה לכל הכלים שאתה כבר משתמש בהם: CRM, יומנים, וואטסאפ, דוא"ל, מדיה חברתית ועוד עשרות פלטפורמות.
                </p>

                <p style={{
                  fontSize: isMobile ? '1rem' : '1.125rem',
                  color: '#ffffff',
                  lineHeight: isMobile ? '1.5' : '1.6',
                  textAlign: 'right',
                  margin: 0
                }} suppressHydrationWarning>
                  אין צורך להחליף כלום. אנחנו פשוט גורמים לכל הכלים האלה לעבוד ביחד - <strong style={{ color: '#ffb84d', fontWeight: '900' }} suppressHydrationWarning>בצורה אוטומטית, חכמה ויעילה</strong>.
                </p>
              </div>
            </motion.div>

            {/* Visual Column - Left side on desktop, top on mobile */}
            <motion.div
              className="flex items-center justify-center order-1 md:order-2"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
              viewport={{ margin: "-100px" }}
            >
              <div
                style={{
                  width: isMobile ? '280px' : '380px',
                  height: isMobile ? '280px' : '380px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                <CompactOrbitingSkills />
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}
