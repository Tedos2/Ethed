"use client";

import React from "react";

export default function Example() {
    return (
        <>
            <section className="py-20 flex flex-col md:flex-row items-center justify-center gap-10 max-md:px-4">
                <div className="relative shadow-2xl shadow-[#FF7742]/20 rounded-2xl overflow-hidden shrink-0">
                    <img className="max-w-md w-full object-cover rounded-2xl"
                        src="https://images.unsplash.com/photo-1531497865144-0464ef8fb9a9?q=80&w=451&h=451&auto=format&fit=crop"
                        alt="" />
                    <div className="flex items-center gap-1 max-w-72 absolute bottom-8 left-8 bg-white p-4 rounded-xl">
                        <div className="flex -space-x-4 shrink-0">
                            <img src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=200" alt="image"
                                className="size-9 rounded-full border-[3px] border-white hover:-translate-y-1 transition z-1" />
                            <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200" alt="image"
                                className="size-9 rounded-full border-[3px] border-white hover:-translate-y-1 transition z-[2]" />
                            <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&h=200&auto=format&fit=crop"
                                alt="image"
                                className="size-9 rounded-full border-[3px] border-white hover:-translate-y-1 transition z-[3]" />
                            <div
                                className="flex items-center justify-center text-xs text-white size-9 rounded-full border-[3px] border-white bg-[#FF7742] hover:-translate-y-1 transition z-[4]">
                                50+
                            </div>
                        </div>
                        <p className="text-sm font-medium text-slate-800">Join our developer community</p>
                    </div>
                </div>
                <div className="text-sm text-gray-300 max-w-lg text-right" dir="rtl">
                    <h1 className="text-xl uppercase font-semibold text-white inline-block">מה אנחנו עושים?</h1>
                    <div className="w-48 h-[3px] rounded-full bg-gradient-to-r from-[#FF7742] to-[#FF9966] ml-auto"></div>
                    <p className="mt-8">אנחנו עוזרים לעסקים קטנים להתייעל באמצעות פתרונות אוטומציה חכמים המבוססים על AI. במקום לשכור עובדים נוספים, אנחנו בונים לך את העובד המושלם - בלי עלויות גיוס ובלי כאבי ראש.</p>
                    <p className="mt-4">בין אם אתה צריך צ'אטבוט שמטפל בפניות לקוחות, אוטומציות שחוסכות שעות עבודה, או מערכת CRM מותאמת - אנחנו מתאימים לך את הפתרון המדויק לצרכים של העסק שלך.</p>
                    <p className="mt-4">התוצאה? עסק שעובד חכם יותר, לקוחות מרוצים יותר, ואתה פנוי להתמקד במה שחשוב באמת.</p>
                    <button className="flex items-center gap-2 mt-8 hover:-translate-y-0.5 transition bg-gradient-to-r from-[#FF7742] to-[#ff6632] py-3 px-8 rounded-full text-white shadow-lg">
                        <span>Read more</span>
                        <svg width="13" height="12" viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M12.53 6.53a.75.75 0 0 0 0-1.06L7.757.697a.75.75 0 1 0-1.06 1.06L10.939 6l-4.242 4.243a.75.75 0 0 0 1.06 1.06zM0 6v.75h12v-1.5H0z"
                                fill="#fff" />
                        </svg>
                    </button>
                </div>
            </section>
        </>
    );
}
