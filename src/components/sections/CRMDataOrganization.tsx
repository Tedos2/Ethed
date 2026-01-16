"use client";

import { motion } from "framer-motion";
import DatabaseWithRestApi from "@/components/ui/database-with-rest-api";
import { Check } from "lucide-react";

export default function CRMDataOrganization() {
  return (
    <section id="crm-data" className="py-4 md:py-24 px-4 md:px-6 relative">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-12 items-center">
          {/* Database Component - Left Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ margin: "-100px" }}
            className="flex justify-center md:justify-start order-2 md:order-1"
          >
            <DatabaseWithRestApi
              title="ניהול נתונים חכם ומאורגן"
              circleText="CRM"
              badgeTexts={{
                first: "לקוחות",
                second: "עסקאות",
                third: "משימות",
                fourth: "דוחות"
              }}
              buttonTexts={{
                first: "Ethed",
                second: "מערכת CRM"
              }}
              lightColor="#FF7742"
              showLottieBox={true}
              lottieBoxSize={150}
              lottieAutoplay={true}
              lottieLoop={true}
            />
          </motion.div>

          {/* Text Content - Right Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            viewport={{ margin: "-100px" }}
            className="flex flex-col gap-3 text-right order-1 md:order-2"
            dir="rtl"
          >
            {/* Main Headline */}
            <h2 style={{
              fontSize: typeof window !== 'undefined' && window.innerWidth <= 768
                ? 'clamp(1.5rem, 4vw, 2rem)'
                : 'clamp(2rem, 3vw, 2.5rem)',
              fontWeight: '900',
              color: '#FF7742',
              lineHeight: '1.4',
              margin: 0,
              textShadow: '0 0 8px rgba(255, 119, 66, 0.4), 0 0 15px rgba(255, 119, 66, 0.2)'
            }} suppressHydrationWarning>
              CRM בהתאמה אישית לעסק שלך
            </h2>

            {/* Value Proposition */}
            <p style={{
              fontSize: typeof window !== 'undefined' && window.innerWidth <= 768
                ? 'clamp(1.0625rem, 3.5vw, 1.1875rem)'
                : 'clamp(1.25rem, 2.25vw, 1.5rem)',
              fontWeight: '600',
              lineHeight: '1.6',
              margin: 0
            }} className="text-white" suppressHydrationWarning>
              שירות מלא מהתכנון ועד ההטמעה - אנחנו לוקחים את כל המערכות הקיימות שלך ובונים CRM שמתאים בדיוק לצרכים שלך.
            </p>

            {/* Additional Copy */}
            <p style={{
              fontSize: typeof window !== 'undefined' && window.innerWidth <= 768
                ? 'clamp(1.0625rem, 3.5vw, 1.1875rem)'
                : 'clamp(1.25rem, 2.25vw, 1.5rem)',
              fontWeight: '600',
              lineHeight: '1.6',
              margin: 0
            }} className="text-white" suppressHydrationWarning>
              במקום לבזבז שעות על חיפוש מידע בין אקסלים והודעות, תקבל מערכת אחת שמרכזת הכל - לקוחות, עסקאות, משימות ודוחות. מותאם בדיוק לעסק שלך, עובד עם הכלים שכבר יש לך, וחוסך לך זמן יקר כל יום.
            </p>

            {/* Glowing Subheadline - Last */}
            <p style={{
              fontSize: typeof window !== 'undefined' && window.innerWidth <= 768
                ? 'clamp(1.5rem, 4vw, 2rem)'
                : 'clamp(2rem, 3vw, 2.5rem)',
              fontWeight: '900',
              color: '#FF7742',
              lineHeight: '1.4',
              margin: 0,
              textShadow: '0 0 8px rgba(255, 119, 66, 0.4), 0 0 15px rgba(255, 119, 66, 0.2)'
            }} suppressHydrationWarning>
              אנחנו בונים עבורך מערכת מותאמת בדיוק למערכות ולנתונים שלך
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
