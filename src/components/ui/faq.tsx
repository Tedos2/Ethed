"use client";

import React from "react";
import { motion } from "framer-motion";

const App = () => {
    const [openIndex, setOpenIndex] = React.useState<number | null>(null);

    const faqs = [
        {
            question: "איך נראה תהליך בניית אוטומציה אצלכם?",
            answer: "נתחיל בשיחת אפיון ראשונית ללא עלות כדי להבין את הצרכים שלך.\nלאחר מכן, נחזור אליך עם פתרון ראשוני המותאם במדויק לעסק שלך.\n\nברגע שמתחילים לעבוד, נקיים פגישת אפיון מפורטת ונתחיל להטמיע את התהליכים האוטומטיים.\n\nבסוף הבניה, נבצע יחד בדיקות מקיפות, נתקן כל מה שצריך ונוודא ששביעות הרצון שלך מלאה.\n\nבשלב האחרון, נשמח לשמוע ממך כמה שעות עבודה חסכנו לעסק - כדי שנוכל לעזור לעסקים נוספים!",
        },
        {
            question: "איך מתחילים איתכם?",
            answer: "פשוט מאוד - לוחצים על \"לקביעת פגישה\", ממלאים כמה פרטים בסיסיים, ומזמינים שיחת ייעוץ ראשונית ללא עלות.\n\nבשיחה נבין את הצרכים של העסק שלך, נציע פתרונות ראשוניים, ונסביר איך אוטומציה יכולה לחסוך לך זמן וכסף.\n\nהשיחה בלי התחייבות - זה הזמן שלך לשאול שאלות ולהבין אם זה מתאים לעסק.",
        },
        {
            question: "איזה סוגי עסקים אתם עובדים איתם?",
            answer: "עבדנו עם עשרות עסקים השנה מכל התחומים - נדלן, סטארטאפים, חברות פרסום, קורסים דיגיטליים, נותני שירות, עסקי מכירות ועוד.\n\nבשיחת האפיון אנחנו מבינים בדיוק מה העסק שלך צריך, ובונים פתרון מותאם אישית שמתחבר למערכות הקיימות שלך.\n\nלא משנה מה התחום - אם יש תהליכים חוזרים שאפשר לייעל, אנחנו יכולים לעזור.",
        },
        {
            question: "אני לא טכנולוגי בכלל - זה יתאים לי?",
            answer: "בהחלט! הרבה מהלקוחות שלנו אמרו בדיוק את אותו הדבר בהתחלה.\n\nאנחנו בונים את האוטומציות בשבילך, ומספקים ליווי מלא גם אחרי הבניה - כדי לוודא שיש לך 100% שליטה בניהול המערכת.\n\nהמטרה שלנו היא לתת לך כלי שקל לתפעול, לא משהו מסובך שדורש מומחיות טכנית.",
        },
    ];
    return (
        <>
            <div className="py-12 md:py-20 relative">
                <motion.div
                    className="max-w-xl mx-auto flex flex-col items-center justify-center px-6 md:px-4 relative z-50"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    viewport={{ once: true, margin: "-100px" }}
                >
                    <h1 className="text-2xl md:text-3xl font-semibold text-center text-orange-500">מחפשים תשובה?</h1>
                    <p className="text-base md:text-xl text-white mt-2 pb-6 md:pb-8 text-center">
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
                                <h3 className="text-lg md:text-2xl font-semibold text-white text-right flex-1">
                                    {faq.question}
                                </h3>
                                <svg width="16" height="16" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" className={`${openIndex === index ? "rotate-180" : ""} transition-all duration-300 ease-in-out flex-shrink-0 ml-2 md:ml-3 md:w-[18px] md:h-[18px]`}>
                                    <path d="m4.5 7.2 3.793 3.793a1 1 0 0 0 1.414 0L13.5 7.2" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </button>
                            <div
                                id={`faq-answer-${index}`}
                                className={`grid transition-all duration-500 ease-in-out ${openIndex === index ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}
                                style={{ pointerEvents: openIndex === index ? 'auto' : 'none' }}
                            >
                                <div className="overflow-hidden">
                                    <p className={`text-base md:text-lg text-white text-right whitespace-pre-line leading-snug ${openIndex === index ? "pt-3 md:pt-4 pb-1" : ""}`}>
                                        {faq.answer}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </motion.div>
            </div>
        </>
    );
};

export default App;
