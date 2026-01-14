"use client";

import React from "react";
import { motion } from "framer-motion";

const App = () => {
    const [openIndex, setOpenIndex] = React.useState<number | null>(null);

    const faqs = [
        {
            question: "איך נראה תהליך בניית אוטומציה אצלכם?",
            answer: "נתחיל בשיחת אפיון ראשונית ללא עלות כדי להבין את הצרכים שלך. לאחר מכן, נחזור אליך עם פתרון ראשוני המותאם במדויק לעסק שלך. ברגע שמתחילים לעבוד, נקיים פגישת אפיון מפורטת ונתחיל להטמיע את התהליכים האוטומטיים. בסוף הבניה, נבצע יחד בדיקות מקיפות, נתקן כל מה שצריך ונוודא ששביעות הרצון שלך מלאה. בשלב האחרון, נשמח לשמוע ממך כמה שעות עבודה חסכנו לעסק - כדי שנוכל לעזור לעסקים נוספים!",
        },
        {
            question: "איך מתחילים איתכם?",
            answer: "פשוט מאוד - לוחצים על \"לקביעת פגישה\", ממלאים כמה פרטים בסיסיים, ומזמינים שיחת ייעוץ ראשונית ללא עלות. בשיחה נבין את הצרכים של העסק שלך, נציע פתרונות ראשוניים, ונסביר איך אוטומציה יכולה לחסוך לך זמן וכסף. השיחה בלי התחייבות - זה הזמן שלך לשאול שאלות ולהבין אם זה מתאים לעסק.",
        },
        {
            question: "איזה סוגי עסקים אתם עובדים איתם?",
            answer: "עבדנו עם עשרות עסקים השנה מכל התחומים - נדלן, סטארטאפים, חברות פרסום, קורסים דיגיטליים, נותני שירות, עסקי מכירות ועוד. בשיחת האפיון אנחנו מבינים בדיוק מה העסק שלך צריך, ובונים פתרון מותאם אישית שמתחבר למערכות הקיימות שלך. לא משנה מה התחום - אם יש תהליכים חוזרים שאפשר לייעל, אנחנו יכולים לעזור.",
        },
        {
            question: "אני לא טכנולוגי בכלל - זה יתאים לי?",
            answer: "בהחלט! הרבה מהלקוחות שלנו אמרו בדיוק את אותו הדבר בהתחלה. אנחנו בונים את האוטומציות בשבילך, ומספקים ליווי מלא גם אחרי הבניה - כדי לוודא שיש לך 100% שליטה בניהול המערכת. המטרה שלנו היא לתת לך כלי שקל לתפעול, לא משהו מסובך שדורש מומחיות טכנית.",
        },
    ];
    return (
        <>
            <div id="faq" className="py-12 md:py-20 relative">
                <motion.div
                    className="max-w-xl mx-auto flex flex-col items-center justify-center px-6 md:px-4 relative z-50"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    viewport={{ once: true, margin: "-100px" }}
                >
                    <h1 className="text-2xl md:text-3xl text-center text-orange-500" style={{ fontWeight: '900' }} suppressHydrationWarning>מחפשים תשובה?</h1>
                    <p className="text-base md:text-xl text-white mt-2 pb-6 md:pb-8 text-center" suppressHydrationWarning>
                        כל מה שצריך לדעת לפני שמתחילים - ואם יש לך שאלה נוספת, נשמח לענות בשיחת ייעוץ ללא עלות
                    </p>
                    {faqs.map((faq, index) => (
                        <div className="border-b border-white/20 py-3 md:py-4 w-full" key={index} dir="rtl">
                            <button
                                className="flex items-center justify-between gap-3 w-full cursor-pointer text-left"
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                aria-expanded={openIndex === index}
                                aria-controls={`faq-answer-${index}`}
                            >
                                <h3 className="text-lg md:text-2xl font-semibold text-white text-right flex-1" suppressHydrationWarning>
                                    {faq.question}
                                </h3>
                                <svg width="16" height="16" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" className={`${openIndex === index ? "rotate-180" : ""} transition-all duration-300 ease-in-out flex-shrink-0 ml-2 md:ml-3 md:w-[18px] md:h-[18px]`}>
                                    <path d="m4.5 7.2 3.793 3.793a1 1 0 0 0 1.414 0L13.5 7.2" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </button>
                            <motion.div
                                id={`faq-answer-${index}`}
                                initial={false}
                                animate={{
                                    height: openIndex === index ? "auto" : 0,
                                    opacity: openIndex === index ? 1 : 0
                                }}
                                transition={{
                                    duration: 0.4,
                                    ease: [0.4, 0, 0.2, 1],
                                    opacity: { duration: 0.3 }
                                }}
                                style={{
                                    overflow: "hidden",
                                    pointerEvents: openIndex === index ? 'auto' : 'none'
                                }}
                            >
                                <p className={`text-base md:text-lg text-white text-right leading-tight ${openIndex === index ? "pt-3 md:pt-4 pb-2 md:pb-1" : ""}`} suppressHydrationWarning>
                                    {faq.answer}
                                </p>
                            </motion.div>
                        </div>
                    ))}
                </motion.div>
            </div>
        </>
    );
};

export default App;
