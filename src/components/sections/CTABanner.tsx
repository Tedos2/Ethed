"use client";

import { useState } from "react";

export default function CTABanner() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [businessField, setBusinessField] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    document.getElementById('contact')?.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  };

  return (
    <section className="relative w-full py-4 md:py-6">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="bg-gradient-to-r from-[#B54A2A] to-[#C14D2D] rounded-2xl p-4 md:p-6 shadow-xl shadow-orange-900/20">
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">

              {/* Right Side - Headline Text (RTL) */}
              <div className="text-white text-right w-full md:flex-1" dir="rtl">
                <h2 className="text-lg md:text-2xl font-bold leading-tight">
                  נשמע מעניין? בואו לשמוע איך אנחנו יכולים לייעל את העסק שלך:
                </h2>
              </div>

              {/* Left Side - Form Fields */}
              <div className="flex flex-col sm:flex-row gap-2 w-full md:w-auto" dir="rtl">
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="שם"
                  dir="rtl"
                  className="bg-black/40 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium placeholder:text-white/70 focus:outline-none focus:ring-2 focus:ring-white/50 transition-all border border-white/20 min-w-[100px] text-right"
                />
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="טלפון"
                  dir="rtl"
                  className="bg-black/40 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium placeholder:text-white/70 focus:outline-none focus:ring-2 focus:ring-white/50 transition-all border border-white/20 min-w-[100px] text-right"
                />
                <input
                  type="text"
                  value={businessField}
                  onChange={(e) => setBusinessField(e.target.value)}
                  placeholder="תחום העסק"
                  dir="rtl"
                  className="bg-black/40 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium placeholder:text-white/70 focus:outline-none focus:ring-2 focus:ring-white/50 transition-all border border-white/20 min-w-[120px] text-right"
                />
                <button
                  type="submit"
                  className="bg-white text-black px-4 py-2 rounded-full text-sm font-semibold hover:bg-gray-100 transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2 cursor-pointer whitespace-nowrap hover:scale-105 transform"
                >
                  <span>שליחה</span>
                  <span>◄</span>
                </button>
              </div>

            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
