"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function EmotionalHook() {
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
      {/* Orange grid background pattern */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundImage: `
          linear-gradient(rgba(255, 119, 66, 0.25) 1.5px, transparent 1.5px),
          linear-gradient(90deg, rgba(255, 119, 66, 0.25) 1.5px, transparent 1.5px)
        `,
        backgroundSize: isMobile ? '40px 40px' : '60px 60px',
        backgroundPosition: 'center center',
        backgroundAttachment: isMobile ? 'scroll' : 'fixed',
        pointerEvents: 'none',
        maskImage: isMobile
          ? 'radial-gradient(ellipse 80% 90% at center, black 0%, black 10%, rgba(0,0,0,0.8) 20%, rgba(0,0,0,0.5) 35%, rgba(0,0,0,0.2) 50%, transparent 65%)'
          : 'radial-gradient(ellipse 65% 85% at center, black 0%, black 15%, rgba(0,0,0,0.8) 25%, rgba(0,0,0,0.5) 40%, rgba(0,0,0,0.2) 55%, transparent 70%)',
        WebkitMaskImage: isMobile
          ? 'radial-gradient(ellipse 80% 90% at center, black 0%, black 10%, rgba(0,0,0,0.8) 20%, rgba(0,0,0,0.5) 35%, rgba(0,0,0,0.2) 50%, transparent 65%)'
          : 'radial-gradient(ellipse 65% 85% at center, black 0%, black 15%, rgba(0,0,0,0.8) 25%, rgba(0,0,0,0.5) 40%, rgba(0,0,0,0.2) 55%, transparent 70%)'
      }} />

      <div className="container mx-auto px-6 md:px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Text content - RTL, centered */}
          <div
            style={{
              textAlign: 'center',
              direction: 'rtl',
              display: 'flex',
              flexDirection: 'column',
              gap: isMobile ? '1.25rem' : '2rem',
              padding: isMobile ? '0.5rem' : '2rem',
            }}
          >
            {/* Headline with pop animation and neon border */}
            <motion.div
              style={{
                position: 'relative',
                padding: isMobile ? '1.5rem' : '2rem',
                border: '2px solid rgba(255, 119, 66, 0.9)',
                borderRadius: '8px',
                boxShadow: `
                  0 0 10px rgba(255, 119, 66, 0.4),
                  0 0 20px rgba(255, 119, 66, 0.2),
                  inset 0 0 10px rgba(255, 119, 66, 0.05)
                `,
              }}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.5,
                ease: [0.34, 1.56, 0.64, 1],
                delay: 0
              }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <h3 style={{
                fontSize: isMobile ? 'clamp(1.5rem, 4vw, 1.75rem)' : 'clamp(1.75rem, 3.5vw, 2.5rem)',
                fontWeight: '900',
                color: '#ffffff',
                lineHeight: '1.3',
                textAlign: 'center',
                margin: 0
              }} suppressHydrationWarning>
                אתה יודע שאתה צריך עוד ידיים בעסק אבל אין לך תקציב לעובד נוסף
              </h3>
            </motion.div>

            {/* Pain Paragraph with pop animation */}
            <motion.p
              style={{
                fontSize: isMobile ? 'clamp(1.15rem, 3vw, 1.35rem)' : 'clamp(1.35rem, 2vw, 1.65rem)',
                color: 'rgba(255, 255, 255, 0.9)',
                lineHeight: isMobile ? '1.8' : '1.7',
                textAlign: 'center'
              }}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.5,
                ease: [0.34, 1.56, 0.64, 1],
                delay: 0
              }}
              viewport={{ once: true, margin: "-100px" }}
              suppressHydrationWarning
            >
              אתה עושה הכל בעצמך, עונה ללקוחות בוואטסאפ עד מאוחר בלילה, מעביר מידע בין המערכות ידנית, מזכיר ללקוחות להגיע לפגישות... <strong style={{ color: '#ffb84d', fontWeight: '900' }} suppressHydrationWarning>כל יום אותו הדבר, ואתה תקוע במקום</strong>.
            </motion.p>

            <motion.p
              style={{
                fontSize: isMobile ? 'clamp(1.15rem, 3vw, 1.35rem)' : 'clamp(1.35rem, 2vw, 1.65rem)',
                color: 'rgba(255, 255, 255, 0.9)',
                lineHeight: isMobile ? '1.8' : '1.7',
                textAlign: 'center'
              }}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.5,
                ease: [0.34, 1.56, 0.64, 1],
                delay: 0
              }}
              viewport={{ once: true, margin: "-100px" }}
              suppressHydrationWarning
            >
              יש לך רעיונות איך לגדול, אתה יודע מה צריך לעשות. אבל <strong style={{ color: '#ffb84d', fontWeight: '900' }} suppressHydrationWarning>אין לך זמן – כי כל היום אתה רק מכבה שריפות</strong>.
            </motion.p>

            {/* Solution with pop animation */}
            <motion.p
              style={{
                fontSize: isMobile ? 'clamp(1.2rem, 3vw, 1.4rem)' : 'clamp(1.4rem, 2vw, 1.7rem)',
                color: '#ffffff',
                lineHeight: isMobile ? '1.8' : '1.7',
                textAlign: 'center',
                fontWeight: '600'
              }}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.5,
                ease: [0.34, 1.56, 0.64, 1],
                delay: 0
              }}
              viewport={{ once: true, margin: "-100px" }}
              suppressHydrationWarning
            >
              אז מה אם היה לך <span style={{ color: '#ffb84d', fontWeight: '900' }} suppressHydrationWarning>עובד מושלם</span> שעובד בשבילך 24/7, לא מתלונן, לא צריך משכורת, ועושה בדיוק מה שאמרת לו?
            </motion.p>

            {/* Benefit with pop animation */}
            <motion.p
              style={{
                fontSize: isMobile ? 'clamp(1.1rem, 3vw, 1.25rem)' : 'clamp(1.25rem, 2vw, 1.6rem)',
                color: '#ffb84d',
                lineHeight: isMobile ? '1.8' : '1.7',
                textAlign: 'center',
                fontWeight: '900'
              }}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.6,
                ease: [0.34, 1.56, 0.64, 1],
                delay: 0
              }}
              viewport={{ once: true, margin: "-100px" }}
              suppressHydrationWarning
            >
              זה בדיוק מה שסוכני בינה מלאכותית עושים.
              ואתה תוכל להפסיק לעבוד בעסק שלך, ולהתחיל לנהל את המקום
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  );
}
