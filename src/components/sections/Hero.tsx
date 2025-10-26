"use client";

import { useState } from "react";
import Image from "next/image";
import { Check, Sparkles, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import AutomationFlow from "./AutomationFlow";
import MacBookFrame from "./MacBookFrame";
import { Aurora } from "@/components/ui/aurora";

export default function Hero() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <section className="relative min-h-screen bg-[#0f0f0f] text-white">
      {/* Aurora Background */}
      <div className="absolute inset-0 z-0">
        <Aurora
          colorStops={["#8B2500", "#CC3311", "#E64A19"]}
          blend={0.4}
          amplitude={0.8}
          speed={0.15}
        />
      </div>

      {/* Gradient Fade Overlay - Creates structured fade from top */}
      <div className="absolute inset-0 z-[5] bg-gradient-to-b from-[#0f0f0f] via-[#0f0f0f]/70 via-30% to-transparent pointer-events-none" />

      {/* Navigation - Floating with Glassmorphism */}
      <nav className="fixed top-2 md:top-4 right-4 left-4 md:right-6 md:left-6 z-50 transition-all duration-300">
        <div className="max-w-7xl mx-auto bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-4 md:px-6 py-2 md:py-3 shadow-lg">
          <div className="flex items-center justify-between">
            {/* Logo (right side for RTL) */}
            <div className="relative w-32 h-10 md:w-48 md:h-14 -mr-4 md:-mr-8">
              <Image
                src="/images to use/ETHEDLOGO.png"
                alt="Ethed Logo"
                fill
                className="object-contain drop-shadow-[0_2px_6px_rgba(255,255,255,0.6)]"
                priority
              />
            </div>

            {/* Desktop Nav Links (center) */}
            <ul className="hidden md:flex items-center gap-6 text-sm font-medium">
              <li>
                <a href="#" className="hover:text-[#FF7742] transition-colors">
                  ראשי
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#FF7742] transition-colors">
                  מרכז הקורס
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#FF7742] transition-colors">
                  שיעורי הקורס
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#FF7742] transition-colors">
                  ממליצים
                </a>
              </li>
            </ul>

            {/* Desktop CTA Button */}
            <Button
              className="hidden md:flex bg-[#FF7742] hover:bg-[#ff6632] text-white px-6 py-2.5 rounded-full text-sm font-medium transition-colors shadow-lg"
            >
              לבקישה מהירה
            </Button>

            {/* Mobile Burger Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 hover:bg-white/10 rounded-full transition-colors"
              aria-label="Toggle menu"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Drawer - Slides from Right (RTL) */}
      <div
        className={`fixed top-0 right-0 h-full w-80 bg-[#0f0f0f]/95 backdrop-blur-xl border-l border-white/10 z-[60] transform transition-transform duration-300 ease-in-out ${
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full p-6">
          {/* Close Button */}
          <button
            onClick={() => setMobileMenuOpen(false)}
            className="self-end p-2 hover:bg-white/10 rounded-full transition-colors mb-8"
            aria-label="Close menu"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Mobile Nav Links */}
          <ul className="flex flex-col gap-6 text-right">
            <li>
              <a
                href="#"
                className="text-lg font-medium hover:text-[#FF7742] transition-colors block py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                ראשי
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-lg font-medium hover:text-[#FF7742] transition-colors block py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                מרכז הקורס
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-lg font-medium hover:text-[#FF7742] transition-colors block py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                שיעורי הקורס
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-lg font-medium hover:text-[#FF7742] transition-colors block py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                ממליצים
              </a>
            </li>
          </ul>

          {/* Mobile CTA Button */}
          <Button
            className="mt-auto bg-[#FF7742] hover:bg-[#ff6632] text-white px-6 py-3 rounded-full text-base font-medium transition-colors shadow-lg w-full"
            onClick={() => setMobileMenuOpen(false)}
          >
            לבקישה מהירה
          </Button>
        </div>
      </div>

      {/* Mobile Menu Backdrop Overlay */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[55] md:hidden"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}

      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6 pt-24 md:pt-32 pb-12 md:pb-20 min-h-screen flex items-center">
        <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-start w-full">
          {/* Right Side - Automation Flow Visualization */}
          <div className="order-1 md:order-2 flex items-start justify-center py-4">
            <MacBookFrame>
              <AutomationFlow />
            </MacBookFrame>
          </div>

          {/* Left Side - Content (main content for RTL) */}
          <div className="order-2 md:order-1 space-y-6 md:space-y-8 flex flex-col items-end w-full">
            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-right w-full">
              <span className="block">חוך פחות מ5 שעות - חדש</span>
              <span className="block">לבנות סוכני מבוססי AI</span>
              <span className="block">
                שנמכרים לעסקים ב-
                <span className="text-[#FF7742]">5,000 ₪</span>
              </span>
            </h1>

            {/* Checkmarks List */}
            <ul className="space-y-3 md:space-y-4 w-full">
              <li className="flex items-start gap-3 flex-row-reverse justify-end">
                <span className="text-base md:text-lg">
                  מבלי לדעת קוד או להיות טכנולוגי
                </span>
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#FF7742]/20 flex items-center justify-center mt-1">
                  <Check className="w-4 h-4 text-[#FF7742]" strokeWidth={3} />
                </div>
              </li>
              <li className="flex items-start gap-3 flex-row-reverse justify-end">
                <span className="text-base md:text-lg">
                  למי שרוצה לרכוש יכולת שהיתה רלוונטית בשנים הקרובות
                </span>
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#FF7742]/20 flex items-center justify-center mt-1">
                  <Check className="w-4 h-4 text-[#FF7742]" strokeWidth={3} />
                </div>
              </li>
              <li className="flex items-start gap-3 flex-row-reverse justify-end">
                <span className="text-base md:text-lg">
                  למי שממחפש להרחיב את סל השירותים שהוא יכול להציע לעסקים
                </span>
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#FF7742]/20 flex items-center justify-center mt-1">
                  <Check className="w-4 h-4 text-[#FF7742]" strokeWidth={3} />
                </div>
              </li>
              <li className="flex items-start gap-3 flex-row-reverse justify-end">
                <span className="text-base md:text-lg">
                  שוק רחב שמתעסקים המתקצעו בו ויש בו הזדמנות אדירה
                </span>
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#FF7742]/20 flex items-center justify-center mt-1">
                  <Check className="w-4 h-4 text-[#FF7742]" strokeWidth={3} />
                </div>
              </li>
            </ul>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 pt-4 w-full sm:flex-row-reverse sm:justify-end">
              {/* Secondary CTA */}
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white/30 hover:border-white/50 bg-transparent text-white px-6 py-4 md:px-8 md:py-6 rounded-full text-base md:text-lg font-medium transition-colors"
              >
                מה בקורס?
              </Button>

              {/* Primary CTA */}
              <Button
                size="lg"
                className="bg-[#FF7742] hover:bg-[#ff6632] text-white px-6 py-4 md:px-8 md:py-6 rounded-full text-base md:text-lg font-medium transition-colors shadow-lg"
              >
                לבקישת הקורס
              </Button>
            </div>

            {/* Platform Logos */}
            <div className="flex flex-col md:flex-row-reverse gap-4 pt-8 w-full justify-end items-end">
              {/* Make.com Logo */}
              <div className="relative group">
                <div className="relative bg-white/5 border-2 border-white/20 rounded-2xl px-6 py-4 transition-all duration-300 hover:scale-105 hover:border-white/40 hover:shadow-lg hover:shadow-white/10">
                  <div className="relative w-24 h-10">
                    <Image
                      src="/images to use/Make-Logo-RGB@2x-1.webp"
                      alt="Make.com"
                      fill
                      className="object-contain brightness-0 invert"
                    />
                  </div>
                </div>
                {/* Decorative Star */}
                <Sparkles className="absolute -top-2 -right-2 w-4 h-4 text-[#FF7742] opacity-70" />
              </div>

              {/* Zapier Logo */}
              <div className="relative group">
                <div className="relative bg-white/5 border-2 border-white/20 rounded-2xl px-6 py-4 transition-all duration-300 hover:scale-105 hover:border-white/40 hover:shadow-lg hover:shadow-white/10">
                  <div className="relative w-24 h-10">
                    <Image
                      src="/images to use/Zapier_Company_Logo_2022.png"
                      alt="Zapier"
                      fill
                      className="object-contain brightness-0 invert"
                    />
                  </div>
                </div>
                {/* Decorative Star */}
                <Sparkles className="absolute -bottom-2 -right-2 w-4 h-4 text-[#FF7742] opacity-70" />
              </div>

              {/* n8n Logo */}
              <div className="relative group">
                <div className="relative bg-white/5 border-2 border-white/20 rounded-2xl px-6 py-4 transition-all duration-300 hover:scale-105 hover:border-white/40 hover:shadow-lg hover:shadow-white/10">
                  <div className="relative w-24 h-10">
                    <Image
                      src="/images to use/N8n-logo-new.svg.png"
                      alt="n8n"
                      fill
                      className="object-contain brightness-0 invert"
                    />
                  </div>
                </div>
                {/* Decorative Star */}
                <Sparkles className="absolute -top-2 -left-2 w-4 h-4 text-[#FF7742] opacity-70" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Background Elements - Subtle accents with Aurora */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-[#FF7742]/3 rounded-full blur-3xl z-[1]"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-[#1A3A52]/3 rounded-full blur-3xl z-[1]"></div>
    </section>
  );
}
