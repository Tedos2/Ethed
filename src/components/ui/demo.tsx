"use client";

import React from "react";
import { StaticBeamsBackground } from "./StaticBeamsBackground";

export default function Example() {
    return (
        <>
            <section className="py-20 flex flex-col md:flex-row items-center justify-center gap-10 max-md:px-4">
                <div className="text-base text-white max-w-lg text-right" dir="rtl">
                    <h1 className="text-4xl uppercase font-semibold text-white inline-block">נעים מאוד,</h1>
                    <img
                        src="/images to use/ETHEDLOGO.png"
                        alt="Ethed Logo"
                        className="w-80 h-24 mt-2 mb-4 ml-auto -mr-16 object-contain drop-shadow-[0_2px_6px_rgba(255,255,255,0.6)]"
                    />
                    <div className="w-48 h-[3px] rounded-full bg-gradient-to-r from-[#FF7742] to-[#FF9966] ml-auto"></div>
                    <p className="mt-8 text-white">אנחנו טדי ואיתן, עובדים יחד למעלה משנה ומתמחים בבניית מערכות CRM ואוטומציות לעסקים. טדי מגיע מעולם ה-SAAS ועיצוב דיגיטלי, איתן מעולמות השיווק והפרסום.</p>
                    <p className="mt-4 text-white">הקמנו את ETHED כי ראינו עסקים נתקעים בעבודה 'שחורה' - ניהול, מעקבים, משימות חוזרות - במקום להתמקד במה שבאמת חשוב. אנחנו מאמינים שבעלי עסקים צריכים להתמקד בעסק, לא בעבודה השוטפת.</p>
                    <p className="mt-4 text-white">אנחנו עושים איפיון מעמיק, מבינים איפה הכאבים בעסק שלך, ומתאימים פתרון כמו כפפה ליד. האווירה? צעירה, נעימה ופתוחה לכל רעיון. אנחנו כאן כדי לפנות לך זמן ולהניע את העסק שלך לתוצאות מדידות.</p>
                </div>
                <div className="relative w-80 h-80 md:w-96 md:h-96 shrink-0 overflow-visible">
                    {/* Static orange beams background - seamlessly blended */}
                    <StaticBeamsBackground />

                    {/* Avatar circles container - staggered positioning */}
                    <div className="relative w-full h-full z-10">
                        {/* Eitan's avatar - Top left position (higher) */}
                        <div className="absolute top-8 left-4 z-10">
                            <img
                                src="/images to use/Screenshot 2025-10-29 020844.png"
                                alt="Eitan"
                                className="w-40 h-40 md:w-48 md:h-48 rounded-full object-cover border-4 border-white"
                            />
                        </div>

                        {/* Teddy's avatar - Bottom right position (lower, overlapping) */}
                        <div className="absolute bottom-8 right-4 z-20">
                            <img
                                src="/images to use/Screenshot 2025-10-29 020749.png"
                                alt="Teddy"
                                className="w-40 h-40 md:w-48 md:h-48 rounded-full object-cover border-4 border-white"
                            />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
