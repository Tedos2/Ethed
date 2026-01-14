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
                  fontSize: isMobile ? 'clamp(1.5rem, 4vw, 2rem)' : 'clamp(2rem, 3vw, 2.5rem)',
                  fontWeight: '900',
                  color: '#FFFF99',
                  lineHeight: '1.4',
                  textAlign: 'right',
                  margin: 0,
                  textShadow: '0 0 8px rgba(255, 255, 153, 0.4), 0 0 15px rgba(255, 255, 153, 0.2)'
                }} suppressHydrationWarning>
                  התאמה מדויקת עבור העסק שלך
                </h2>

                {/* Body Paragraphs */}
                <p style={{
                  fontSize: isMobile ? 'clamp(1.0625rem, 3.5vw, 1.1875rem)' : 'clamp(1.25rem, 2.25vw, 1.5rem)',
                  fontWeight: '600',
                  color: '#ffffff',
                  lineHeight: '1.6',
                  textAlign: 'right',
                  margin: 0
                }} suppressHydrationWarning>
                  כמה זמן ביום אתה מבזבז על מיילים? ומה עם לקבוע פגישות? או לסדר את הלידים החדשים בcrm שלך?
                </p>

                <p style={{
                  fontSize: isMobile ? 'clamp(1.0625rem, 3.5vw, 1.1875rem)' : 'clamp(1.25rem, 2.25vw, 1.5rem)',
                  fontWeight: '600',
                  color: '#ffffff',
                  lineHeight: '1.6',
                  textAlign: 'right',
                  margin: 0
                }} suppressHydrationWarning>
                  לפעמים אתה שוקל לוותר על חופשות כי אתה לא יודע מי יתפעל את המשימות התפעוליות האלו בעסק שלך?
                </p>

                <p style={{
                  fontSize: isMobile ? 'clamp(1.0625rem, 3.5vw, 1.1875rem)' : 'clamp(1.25rem, 2.25vw, 1.5rem)',
                  fontWeight: '600',
                  color: '#ffffff',
                  lineHeight: '1.6',
                  textAlign: 'right',
                  margin: 0
                }} suppressHydrationWarning>
                  ומה אם היה לך עובד שעושה את כל זה במקומך
                  כמה זמן וכאב ראש זה היה חוסך לך?
                </p>

                <p style={{
                  fontSize: isMobile ? 'clamp(1.0625rem, 3.5vw, 1.1875rem)' : 'clamp(1.25rem, 2.25vw, 1.5rem)',
                  fontWeight: '600',
                  color: '#ffffff',
                  lineHeight: '1.6',
                  textAlign: 'right',
                  margin: 0
                }} suppressHydrationWarning>
                  אנחנו מזהים צווארי בקבוק, ונייעל רק איפה שצריך, ובונים לך עובד דיגיטלי שמותאם בול לצרכים שלך.
                </p>

                <p style={{
                  fontSize: isMobile ? 'clamp(1.5rem, 4vw, 2rem)' : 'clamp(2rem, 3vw, 2.5rem)',
                  fontWeight: '900',
                  color: '#FFFF99',
                  lineHeight: '1.4',
                  textAlign: 'right',
                  margin: 0,
                  textShadow: '0 0 8px rgba(255, 255, 153, 0.4), 0 0 15px rgba(255, 255, 153, 0.2)',
                }} suppressHydrationWarning>
                  פחות עומס, יותר שליטה, יותר זמן להתמקד בעתיד של העסק שלך
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
