import Image from "next/image";
import { Check, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import AutomationFlow from "./AutomationFlow";
import MacBookFrame from "./MacBookFrame";

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-[#0f0f0f] text-white">
      {/* Navigation */}
      <nav className="absolute top-0 right-0 left-0 z-50 px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo (right side for RTL) */}
          <div className="relative w-64 h-20 -mr-16">
            <Image
              src="/images to use/ETHEDLOGO.png"
              alt="Ethed Logo"
              fill
              className="object-contain"
              priority
            />
          </div>

          {/* Nav Links (center) */}
          <ul className="hidden md:flex items-center gap-8 text-sm font-medium">
            <li>
              <a href="#" className="hover:text-[#FF7742] transition-colors">
                ראשי
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#FF7742] transition-colors">
                מרכז בקרס
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#FF7742] transition-colors">
                חלק משיעורי הקורס
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#FF7742] transition-colors">
                ממליצים
              </a>
            </li>
          </ul>

          {/* CTA Button (left side for RTL) */}
          <Button
            className="bg-[#FF7742] hover:bg-[#ff6632] text-white px-6 py-3 rounded-full text-base font-medium transition-colors shadow-lg"
          >
            לבקישה מהירה
          </Button>
        </div>
      </nav>

      {/* Hero Content */}
      <div className="max-w-7xl mx-auto px-6 pt-32 pb-20 min-h-screen flex items-center">
        <div className="grid md:grid-cols-2 gap-16 items-start w-full">
          {/* Right Side - Automation Flow Visualization */}
          <div className="order-1 md:order-2 flex items-start justify-center py-4">
            <MacBookFrame>
              <AutomationFlow />
            </MacBookFrame>
          </div>

          {/* Left Side - Content (main content for RTL) */}
          <div className="order-2 md:order-1 space-y-8 flex flex-col items-end w-full">
            {/* Main Headline */}
            <h1 className="text-5xl lg:text-6xl font-bold leading-tight text-right w-full">
              <span className="block">חוך פחות מ5 שעות - חדש</span>
              <span className="block">לבנות סוכני מבוססי AI</span>
              <span className="block">
                שנמכרים לעסקים ב-
                <span className="text-[#FF7742]">5,000 ₪</span>
              </span>
            </h1>

            {/* Checkmarks List */}
            <ul className="space-y-4 w-full">
              <li className="flex items-start gap-3 flex-row-reverse justify-end">
                <span className="text-lg">
                  מבלי לדעת קוד או להיות טכנולוגי
                </span>
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#FF7742]/20 flex items-center justify-center mt-1">
                  <Check className="w-4 h-4 text-[#FF7742]" strokeWidth={3} />
                </div>
              </li>
              <li className="flex items-start gap-3 flex-row-reverse justify-end">
                <span className="text-lg">
                  למי שרוצה לרכוש יכולת שהיתה רלוונטית בשנים הקרובות
                </span>
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#FF7742]/20 flex items-center justify-center mt-1">
                  <Check className="w-4 h-4 text-[#FF7742]" strokeWidth={3} />
                </div>
              </li>
              <li className="flex items-start gap-3 flex-row-reverse justify-end">
                <span className="text-lg">
                  למי שממחפש להרחיב את סל השירותים שהוא יכול להציע לעסקים
                </span>
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#FF7742]/20 flex items-center justify-center mt-1">
                  <Check className="w-4 h-4 text-[#FF7742]" strokeWidth={3} />
                </div>
              </li>
              <li className="flex items-start gap-3 flex-row-reverse justify-end">
                <span className="text-lg">
                  שוק רחב שמתעסקים המתקצעו בו ויש בו הזדמנות אדירה
                </span>
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#FF7742]/20 flex items-center justify-center mt-1">
                  <Check className="w-4 h-4 text-[#FF7742]" strokeWidth={3} />
                </div>
              </li>
            </ul>

            {/* CTA Buttons */}
            <div className="flex gap-4 pt-4 flex-row-reverse w-full justify-end">
              {/* Secondary CTA */}
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white/30 hover:border-white/50 bg-transparent text-white px-8 py-6 rounded-full text-lg font-medium transition-colors"
              >
                מה בקורס?
              </Button>

              {/* Primary CTA */}
              <Button
                size="lg"
                className="bg-[#FF7742] hover:bg-[#ff6632] text-white px-8 py-6 rounded-full text-lg font-medium transition-colors shadow-lg"
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

      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-[#FF7742]/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-[#1A3A52]/5 rounded-full blur-3xl"></div>
    </section>
  );
}
