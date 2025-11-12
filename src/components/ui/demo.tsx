"use client";

import React from "react";
import { motion } from "framer-motion";

export default function Example() {
    return (
        <>
            <motion.section
                id="about"
                className="py-20 px-4 md:px-6 overflow-x-hidden"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                viewport={{ once: true, margin: "-100px" }}
            >
                <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start justify-between gap-10">
                <div className="text-xl text-white flex-1 max-w-2xl text-right order-1" dir="rtl">
                    <h1 className="text-4xl uppercase font-semibold text-white inline-block" suppressHydrationWarning>נעים מאוד,</h1>
                    <p className="mt-4 text-white" suppressHydrationWarning>אנחנו טדי ואיתן, עובדים יחד למעלה משנה ומתמחים בבניית מערכות CRM ואוטומציות לעסקים. טדי מגיע מעולם ה-SAAS ועיצוב דיגיטלי, איתן מעולמות השיווק והפרסום.</p>
                    <p className="mt-4 text-white" suppressHydrationWarning>הקמנו את ETHED כי ראינו עסקים נתקעים בעבודה 'שחורה' - ניהול, מעקבים, משימות חוזרות - במקום להתמקד במה שבאמת חשוב. אנחנו מאמינים שבעלי עסקים צריכים להתמקד בעסק, לא בעבודה השוטפת.</p>
                    <p className="mt-4 text-white" suppressHydrationWarning>אנחנו עושים איפיון מעמיק, מבינים איפה הכאבים בעסק שלך, ומתאימים פתרון כמו כפפה ליד. האווירה? צעירה, נעימה ופתוחה לכל רעיון. אנחנו כאן כדי לפנות לך זמן ולהניע את העסק שלך לתוצאות מדידות.</p>
                </div>
                <div className="relative flex-1 shrink-0 max-md:mx-auto order-2 max-md:hidden md:block">
                    {/* Avatar circles container - staggered positioning - DESKTOP ONLY */}
                    <div className="relative w-full h-96">
                        {/* Eitan's avatar shadow - Simple circular shadow */}
                        <div className="absolute top-16 left-16 w-48 h-48 pointer-events-none z-0">
                            <div
                                className="absolute inset-0 rounded-full blur-[40px]"
                                style={{
                                    background: 'radial-gradient(circle, rgba(255, 119, 66, 0.5) 0%, rgba(255, 119, 66, 0.3) 30%, transparent 70%)',
                                }}
                            />
                        </div>

                        {/* ETHED Logo Background - Above background shadows, below avatars */}
                        <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-5 opacity-35">
                            <img
                                src="/images to use/ETHEDLOGO.png"
                                alt="Ethed Logo Background"
                                className="w-full h-auto object-contain"
                                style={{
                                    filter: 'drop-shadow(0 0.5px 1px rgba(255, 119, 66, 0.1))',
                                }}
                            />
                        </div>

                        {/* Teddy's avatar shadow - Simple circular shadow */}
                        <div className="absolute bottom-16 right-16 w-48 h-48 pointer-events-none z-0">
                            <div
                                className="absolute inset-0 rounded-full blur-[40px]"
                                style={{
                                    background: 'radial-gradient(circle, rgba(255, 119, 66, 0.5) 0%, rgba(255, 119, 66, 0.3) 30%, transparent 70%)',
                                }}
                            />
                        </div>

                        {/* Eitan's avatar image - ON TOP */}
                        <div className="absolute top-16 left-16 z-10">
                            <img
                                src="/images to use/Screenshot 2025-10-29 020844.png"
                                alt="Eitan"
                                className="w-48 h-48 rounded-full object-cover border-4 border-white"
                            />
                        </div>

                        {/* Teddy's avatar image - ON TOP (overlapping Eitan) */}
                        <div className="absolute bottom-16 right-16 z-20">
                            <img
                                src="/images to use/Screenshot 2025-10-29 020749.png"
                                alt="Teddy"
                                className="w-48 h-48 rounded-full object-cover border-4 border-white"
                            />
                        </div>
                    </div>
                </div>

                {/* Mobile Avatar Layout - Centered */}
                <div className="relative w-full md:hidden order-2 mt-8">
                    <div className="relative w-full h-80 max-w-md mx-auto">
                        {/* Eitan's avatar shadow - Simple circular shadow */}
                        <div className="absolute top-6 left-6 w-32 h-32 pointer-events-none z-0">
                            <div
                                className="absolute inset-0 rounded-full blur-[30px]"
                                style={{
                                    background: 'radial-gradient(circle, rgba(255, 119, 66, 0.5) 0%, rgba(255, 119, 66, 0.3) 30%, transparent 70%)',
                                }}
                            />
                        </div>

                        {/* ETHED Logo Background - Above background shadows, below avatars */}
                        <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-5 opacity-45">
                            <img
                                src="/images to use/ETHEDLOGO.png"
                                alt="Ethed Logo Background"
                                className="w-[220%] h-auto object-contain"
                                style={{
                                    filter: 'drop-shadow(0 0.1px 0.3px rgba(255, 119, 66, 0.05))',
                                }}
                            />
                        </div>

                        {/* Teddy's avatar shadow - Simple circular shadow */}
                        <div className="absolute bottom-6 right-6 w-32 h-32 pointer-events-none z-0">
                            <div
                                className="absolute inset-0 rounded-full blur-[30px]"
                                style={{
                                    background: 'radial-gradient(circle, rgba(255, 119, 66, 0.5) 0%, rgba(255, 119, 66, 0.3) 30%, transparent 70%)',
                                }}
                            />
                        </div>

                        {/* Eitan's avatar image - ON TOP */}
                        <div className="absolute top-6 left-6 z-10">
                            <img
                                src="/images to use/Screenshot 2025-10-29 020844.png"
                                alt="Eitan"
                                className="w-32 h-32 rounded-full object-cover border-3 border-white"
                            />
                        </div>

                        {/* Teddy's avatar image - ON TOP (overlapping Eitan) */}
                        <div className="absolute bottom-6 right-6 z-20">
                            <img
                                src="/images to use/Screenshot 2025-10-29 020749.png"
                                alt="Teddy"
                                className="w-32 h-32 rounded-full object-cover border-3 border-white"
                            />
                        </div>
                    </div>
                </div>
                </div>
            </motion.section>
        </>
    );
}
