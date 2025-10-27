"use client";

import React from "react";

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
            <div className="py-20 relative">
                <div className="max-w-xl mx-auto flex flex-col items-center justify-center px-4 md:px-0 relative z-50">
                    <p className="text-[#FF7742] text-sm font-medium">שאלות נפוצות</p>
                    <h1 className="text-3xl font-semibold text-center text-white">מחפשים תשובה?</h1>
                    <p className="text-sm text-gray-400 mt-2 pb-8 text-center">
                        כל מה שצריך לדעת לפני שמתחילים - ואם יש לך שאלה נוספת, נשמח לענות בשיחת ייעוץ ללא עלות
                    </p>
                    {faqs.map((faq, index) => (
                        <div className="border-b border-white/20 py-4 cursor-pointer w-full" key={index} onClick={() => setOpenIndex(openIndex === index ? null : index)} dir="rtl">
                            <div className="flex items-center justify-between">
                                <h3 className="text-base font-medium text-white text-right flex-1">
                                    {faq.question}
                                </h3>
                                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" className={`${openIndex === index ? "rotate-180" : ""} transition-all duration-500 ease-in-out flex-shrink-0 ml-3`}>
                                    <path d="m4.5 7.2 3.793 3.793a1 1 0 0 0 1.414 0L13.5 7.2" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                            <p className={`text-sm text-gray-400 transition-all duration-500 ease-in-out text-right whitespace-pre-line ${openIndex === index ? "opacity-100 max-h-[500px] translate-y-0 pt-4" : "opacity-0 max-h-0 -translate-y-2"}`} >
                                {faq.answer}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default App;
