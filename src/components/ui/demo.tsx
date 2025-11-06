"use client";

import React from "react";
import { motion } from "framer-motion";

export default function Example() {
    return (
        <>
            <motion.section
                className="py-20 flex flex-col md:flex-row items-center justify-center gap-10 max-md:px-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                viewport={{ once: true, margin: "-100px" }}
            >
                <div className="text-xl text-white max-w-lg text-right" dir="rtl">
                    <h1 className="text-4xl uppercase font-semibold text-white inline-block">נעים מאוד,</h1>
                    <img
                        src="/images to use/ETHEDLOGO.png"
                        alt="Ethed Logo"
                        className="w-80 h-24 mt-2 mb-4 ml-auto -mr-16 object-contain drop-shadow-[0_2px_6px_rgba(255,255,255,0.6)]"
                    />
                    <p className="mt-8 text-white">אנחנו טדי ואיתן, עובדים יחד למעלה משנה ומתמחים בבניית מערכות CRM ואוטומציות לעסקים. טדי מגיע מעולם ה-SAAS ועיצוב דיגיטלי, איתן מעולמות השיווק והפרסום.</p>
                    <p className="mt-4 text-white">הקמנו את ETHED כי ראינו עסקים נתקעים בעבודה 'שחורה' - ניהול, מעקבים, משימות חוזרות - במקום להתמקד במה שבאמת חשוב. אנחנו מאמינים שבעלי עסקים צריכים להתמקד בעסק, לא בעבודה השוטפת.</p>
                    <p className="mt-4 text-white">אנחנו עושים איפיון מעמיק, מבינים איפה הכאבים בעסק שלך, ומתאימים פתרון כמו כפפה ליד. האווירה? צעירה, נעימה ופתוחה לכל רעיון. אנחנו כאן כדי לפנות לך זמן ולהניע את העסק שלך לתוצאות מדידות.</p>
                </div>
                <div className="relative w-80 h-80 md:w-96 md:h-96 shrink-0 overflow-visible max-md:mx-auto">
                    {/* Avatar circles container - staggered positioning */}
                    <div className="relative w-full h-full">
                        {/* Eitan's avatar shadow - BEHIND everything */}
                        <div className="absolute top-1/2 -translate-y-1/2 left-4 md:top-8 md:left-4 md:translate-y-0 w-32 h-32 md:w-48 md:h-48 pointer-events-none">
                            {/* Primary orange shadow blob */}
                            <div
                                className="absolute w-[200%] h-[200%] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 blur-[60px]"
                                style={{
                                    background: 'radial-gradient(ellipse at center, rgba(255, 119, 66, 0.4) 0%, rgba(255, 119, 66, 0.25) 40%, rgba(255, 119, 66, 0.1) 60%, transparent 75%)',
                                    borderRadius: '42% 58% 70% 30% / 45% 55% 60% 40%'
                                }}
                            />
                            {/* Secondary offset orange shadow blob for complexity */}
                            <div
                                className="absolute w-[180%] h-[180%] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 blur-[80px]"
                                style={{
                                    background: 'radial-gradient(ellipse at center, rgba(255, 119, 66, 0.3) 0%, rgba(255, 119, 66, 0.15) 50%, transparent 75%)',
                                    borderRadius: '60% 40% 50% 50% / 40% 60% 50% 50%',
                                    transform: 'translate(-50%, -50%) translate(8px, 12px)'
                                }}
                            />
                        </div>

                        {/* Teddy's avatar shadow - BEHIND everything */}
                        <div className="absolute top-1/2 -translate-y-1/2 right-4 md:bottom-8 md:right-4 md:top-auto md:translate-y-0 w-32 h-32 md:w-48 md:h-48 pointer-events-none">
                            {/* Primary orange shadow blob */}
                            <div
                                className="absolute w-[200%] h-[200%] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 blur-[60px]"
                                style={{
                                    background: 'radial-gradient(ellipse at center, rgba(255, 119, 66, 0.4) 0%, rgba(255, 119, 66, 0.25) 40%, rgba(255, 119, 66, 0.1) 60%, transparent 75%)',
                                    borderRadius: '45% 55% 65% 35% / 50% 45% 55% 50%'
                                }}
                            />
                            {/* Secondary offset orange shadow blob for complexity */}
                            <div
                                className="absolute w-[180%] h-[180%] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 blur-[80px]"
                                style={{
                                    background: 'radial-gradient(ellipse at center, rgba(255, 119, 66, 0.3) 0%, rgba(255, 119, 66, 0.15) 50%, transparent 75%)',
                                    borderRadius: '55% 45% 60% 40% / 45% 55% 45% 55%',
                                    transform: 'translate(-50%, -50%) translate(-8px, 10px)'
                                }}
                            />
                        </div>

                        {/* Eitan's avatar image - ON TOP */}
                        <div className="absolute top-1/2 -translate-y-1/2 left-4 md:top-8 md:left-4 md:translate-y-0 z-10">
                            <img
                                src="/images to use/Screenshot 2025-10-29 020844.png"
                                alt="Eitan"
                                className="w-32 h-32 md:w-48 md:h-48 rounded-full object-cover border-4 border-white"
                            />
                        </div>

                        {/* Teddy's avatar image - ON TOP (overlapping Eitan) */}
                        <div className="absolute top-1/2 -translate-y-1/2 right-4 md:bottom-8 md:right-4 md:top-auto md:translate-y-0 z-20">
                            <img
                                src="/images to use/Screenshot 2025-10-29 020749.png"
                                alt="Teddy"
                                className="w-32 h-32 md:w-48 md:h-48 rounded-full object-cover border-4 border-white"
                            />
                        </div>
                    </div>
                </div>
            </motion.section>
        </>
    );
}
