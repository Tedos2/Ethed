"use client";

import { motion } from "framer-motion";
import DatabaseWithRestApi from "@/components/ui/database-with-rest-api";
import { Check } from "lucide-react";

export default function CRMDataOrganization() {
  return (
    <section id="crm-data" className="py-12 md:py-24 px-4 md:px-6 relative">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
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
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight" suppressHydrationWarning>
              CRM בהתאמה אישית לעסק שלך
            </h2>

            {/* Subheadline */}
            <p className="text-lg md:text-xl font-semibold text-white leading-relaxed" suppressHydrationWarning>
              אנחנו בונים עבורך מערכת מותאמת בדיוק למערכות ולנתונים שלך
            </p>

            {/* Value Proposition */}
            <p className="text-base md:text-lg font-medium text-white leading-relaxed" suppressHydrationWarning>
              שירות מלא מהתכנון ועד ההטמעה - אנחנו לוקחים את כל המערכות הקיימות שלך ובונים CRM שמתאים בדיוק לצרכים שלך.
            </p>

            {/* Additional Copy */}
            <p className="text-base md:text-lg font-medium text-white leading-relaxed" suppressHydrationWarning>
              במקום לבזבז שעות על חיפוש מידע בין אקסלים והודעות, תקבל מערכת אחת שמרכזת הכל - לקוחות, עסקאות, משימות ודוחות. מותאם בדיוק לעסק שלך, עובד עם הכלים שכבר יש לך, וחוסך לך זמן יקר כל יום.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
