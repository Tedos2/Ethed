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
            viewport={{ once: true, margin: "-100px" }}
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
            />
          </motion.div>

          {/* Text Content - Right Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true, margin: "-100px" }}
            className="flex flex-col gap-6 text-right order-1 md:order-2"
            dir="rtl"
          >
            {/* Main Headline */}
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight" suppressHydrationWarning>
              ריכוז כל המידע במקום אחד
            </h2>

            {/* Subheadline */}
            <p className="text-lg md:text-xl text-white/90 leading-relaxed" suppressHydrationWarning>
              מערכת CRM מותאמת אישית שמרכזת את כל המידע העסקי שלך במקום אחד ונגיש
            </p>

            {/* Value Proposition */}
            <p className="text-base md:text-lg text-white/80 leading-relaxed" suppressHydrationWarning>
              כמנהל עסק, אתה יודע שזמן הוא הנכס החשוב ביותר. במקום לבזבז שעות על חיפוש מידע בין גיליונות אקסל, הודעות ואימיילים - תקבל גישה מיידית לכל הנתונים החשובים במקום אחד מסודר ונגיש.
            </p>

            {/* Key Benefits */}
            <div className="space-y-2 mt-2">
              <div className="flex items-start gap-3">
                <Check className="w-6 h-6 text-[#FF7742] shrink-0 mt-1" />
                <div>
                  <h4 className="text-lg font-bold text-white mb-1" suppressHydrationWarning>
                    ניהול לקוחות חכם
                  </h4>
                  <p className="text-sm md:text-base text-white/70 leading-relaxed" suppressHydrationWarning>
                    כל המידע על הלקוחות שלך - היסטוריית רכישות, העדפות, תקשורת קודמת - במקום אחד ונגיש בכל רגע
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Check className="w-6 h-6 text-[#FF7742] shrink-0 mt-1" />
                <div>
                  <h4 className="text-lg font-bold text-white mb-1" suppressHydrationWarning>
                    מעקב אחר עסקאות ומשימות
                  </h4>
                  <p className="text-sm md:text-base text-white/70 leading-relaxed" suppressHydrationWarning>
                    דע בדיוק איפה כל עסקה, מה צריך לעשות הלאה, ומתי. אף עסקה לא תיפול בין הכיסאות
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Check className="w-6 h-6 text-[#FF7742] shrink-0 mt-1" />
                <div>
                  <h4 className="text-lg font-bold text-white mb-1" suppressHydrationWarning>
                    דוחות ותובנות בזמן אמת
                  </h4>
                  <p className="text-sm md:text-base text-white/70 leading-relaxed" suppressHydrationWarning>
                    הבן את העסק שלך טוב יותר עם דוחות אוטומטיים שמראים לך בדיוק מה עובד ומה דורש שיפור
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Check className="w-6 h-6 text-[#FF7742] shrink-0 mt-1" />
                <div>
                  <h4 className="text-lg font-bold text-white mb-1" suppressHydrationWarning>
                    אינטגרציה מלאה
                  </h4>
                  <p className="text-sm md:text-base text-white/70 leading-relaxed" suppressHydrationWarning>
                    המערכת מתחברת לכל הכלים שאתה כבר משתמש בהם - WhatsApp, אימייל, לוח שנה, ועוד
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
