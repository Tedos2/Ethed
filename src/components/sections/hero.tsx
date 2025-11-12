"use client";

import { useState } from "react";
import Image from "next/image";
import { Check, Sparkles, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import ResponsiveMacBook from "./ResponsiveMacBook";
import { Aurora } from "@/components/ui/aurora";
import Spline3DScene from "@/components/ui/Spline3DScene";

export default function Hero() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Smooth scroll handler with offset
  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      const offset = 100; // Offset from top in pixels
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });

      // Close mobile menu if open
      setMobileMenuOpen(false);
    }
  };

  return (
    <section className="relative min-h-screen text-white">
      {/* Aurora Background */}
      <div className="absolute inset-0 z-0">
        <Aurora
          colorStops={["#8B2500", "#CC3311", "#E64A19"]}
          blend={0.4}
          amplitude={0.8}
          speed={0.15}
        />
      </div>

      {/* Gradient Fade Overlay - Allows main page gradient to show through */}
      <div className="absolute inset-0 z-[5] bg-gradient-to-b from-[#0f0f0f] via-[#0f0f0f]/70 via-30% to-transparent pointer-events-none" />

      {/* Navigation - Floating with Glassmorphism */}
      <nav className="fixed top-2 md:top-4 right-2 left-2 md:right-6 md:left-6 z-50 transition-all duration-300 pointer-events-none">
        <div className="max-w-7xl mx-auto border border-white/30 rounded-full px-3 md:px-6 py-2 md:py-3 shadow-lg pointer-events-auto bg-black/85 md:bg-black/50 backdrop-blur-xl">
          <div className="flex items-center justify-between">
            {/* Logo (right side for RTL) */}
            <div className="relative w-28 h-9 md:w-48 md:h-14 -mr-2 md:-mr-8">
              <Image
                src="/images to use/ETHEDLOGO.png"
                alt="Ethed Logo"
                fill
                sizes="(max-width: 768px) 112px, 192px"
                className="object-contain drop-shadow-[0_2px_6px_rgba(255,255,255,0.6)]"
                priority
              />
            </div>

            {/* Desktop Nav Links (center) - Updated */}
            <ul className="hidden md:flex items-center gap-12 text-lg font-bold">
              <li suppressHydrationWarning>
                <a
                  href="#about"
                  onClick={(e) => handleSmoothScroll(e, 'about')}
                  className="px-4 py-2 rounded-full hover:text-[#FF7742] hover:bg-white/5 transition-all duration-300 hover:scale-105 inline-block"
                  suppressHydrationWarning
                >
                  עלינו
                </a>
              </li>
              <li suppressHydrationWarning>
                <a
                  href="#solutions"
                  onClick={(e) => handleSmoothScroll(e, 'solutions')}
                  className="px-4 py-2 rounded-full hover:text-[#FF7742] hover:bg-white/5 transition-all duration-300 hover:scale-105 inline-block"
                  suppressHydrationWarning
                >
                  פתרונות
                </a>
              </li>
              <li suppressHydrationWarning>
                <a
                  href="#automations"
                  onClick={(e) => handleSmoothScroll(e, 'automations')}
                  className="px-4 py-2 rounded-full hover:text-[#FF7742] hover:bg-white/5 transition-all duration-300 hover:scale-105 inline-block"
                  suppressHydrationWarning
                >
                  הבוטים שלנו
                </a>
              </li>
              <li suppressHydrationWarning>
                <a
                  href="#contact"
                  onClick={(e) => handleSmoothScroll(e, 'contact')}
                  className="px-4 py-2 rounded-full hover:text-[#FF7742] hover:bg-white/5 transition-all duration-300 hover:scale-105 inline-block"
                  suppressHydrationWarning
                >
                  צור קשר
                </a>
              </li>
            </ul>

            {/* Desktop CTA Button */}
            <Button
              suppressHydrationWarning
              onClick={() => {
                const contactElement = document.getElementById('contact');
                if (contactElement) {
                  const offset = 100;
                  const elementPosition = contactElement.getBoundingClientRect().top;
                  const offsetPosition = elementPosition + window.scrollY - offset;
                  window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                  });
                }
              }}
              className="hidden md:flex bg-[#FF7742] hover:bg-[#ff6632] text-white px-6 py-2.5 rounded-full text-sm font-medium transition-colors shadow-lg cursor-pointer"
            >
              בואו לשמוע עוד :)
            </Button>

            {/* Mobile Burger Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-3 hover:bg-white/10 rounded-full transition-colors"
              style={{ minWidth: '44px', minHeight: '44px' }}
              aria-label="Toggle menu"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Drawer - Slides from Right (RTL) */}
      {mobileMenuOpen && (
        <div className="fixed top-0 right-0 h-full w-[85vw] max-w-[320px] bg-[#0f0f0f]/95 backdrop-blur-xl border-l border-white/10 z-[60] animate-in slide-in-from-right duration-300"
        >
        <div className="flex flex-col h-full p-6">
          {/* Close Button */}
          <button
            onClick={() => setMobileMenuOpen(false)}
            className="self-end p-3 hover:bg-white/10 rounded-full transition-colors mb-8"
            style={{ minWidth: '44px', minHeight: '44px' }}
            aria-label="Close menu"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Mobile Nav Links */}
          <ul className="flex flex-col gap-6 text-right">
            <li>
              <a
                href="#about"
                onClick={(e) => handleSmoothScroll(e, 'about')}
                className="text-xl font-bold hover:text-[#FF7742] hover:bg-white/5 transition-all duration-300 block py-3 px-4 rounded-lg"
              >
                עלינו
              </a>
            </li>
            <li>
              <a
                href="#solutions"
                onClick={(e) => handleSmoothScroll(e, 'solutions')}
                className="text-xl font-bold hover:text-[#FF7742] hover:bg-white/5 transition-all duration-300 block py-3 px-4 rounded-lg"
              >
                פתרונות
              </a>
            </li>
            <li>
              <a
                href="#automations"
                onClick={(e) => handleSmoothScroll(e, 'automations')}
                className="text-xl font-bold hover:text-[#FF7742] hover:bg-white/5 transition-all duration-300 block py-3 px-4 rounded-lg"
              >
                הבוטים שלנו
              </a>
            </li>
            <li>
              <a
                href="#contact"
                onClick={(e) => handleSmoothScroll(e, 'contact')}
                className="text-xl font-bold hover:text-[#FF7742] hover:bg-white/5 transition-all duration-300 block py-3 px-4 rounded-lg"
              >
                צור קשר
              </a>
            </li>
          </ul>

          {/* Mobile CTA Button */}
          <Button
            suppressHydrationWarning
            className="mt-auto bg-[#FF7742] hover:bg-[#ff6632] text-white px-6 py-4 rounded-full text-base font-medium transition-colors shadow-lg w-full cursor-pointer"
            style={{ minHeight: '48px' }}
            onClick={() => {
              const contactElement = document.getElementById('contact');
              if (contactElement) {
                const offset = 100;
                const elementPosition = contactElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.scrollY - offset;
                window.scrollTo({
                  top: offsetPosition,
                  behavior: 'smooth'
                });
              }
              setMobileMenuOpen(false);
            }}
          >
            בואו לשמוע עוד :)
          </Button>
        </div>
        </div>
      )}

      {/* Mobile Menu Backdrop Overlay */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[55] md:hidden"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}

      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-6 pt-28 md:pt-32 pb-8 md:pb-2 min-h-screen flex items-start md:items-center">
        <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-start w-full">
          {/* Right Side - Automation Flow Visualization */}
          <div className="order-2 md:order-2 flex flex-col items-center justify-start py-0 md:py-2 space-y-8">
            <ResponsiveMacBook />

            {/* 3D Robot Scene - Desktop only */}
            <div className="hidden md:flex w-[70%] max-w-md mx-auto relative -mt-16 md:-mt-20 justify-center items-center">
              <Spline3DScene />
            </div>
          </div>

          {/* Left Side - Content (main content for RTL) */}
          <div className="order-1 md:order-1 space-y-4 md:space-y-6 flex flex-col items-end w-full">
            {/* Main Headline */}
            <h1 className="text-[1.75rem] sm:text-3xl md:text-4xl lg:text-5xl font-extrabold leading-snug md:leading-tight text-right w-full px-2 md:px-0" style={{ fontFamily: 'Rubik, sans-serif' }} suppressHydrationWarning>
              {/* Mobile version - 3 lines */}
              <span className="md:hidden" suppressHydrationWarning>
                <span className="block mb-2" suppressHydrationWarning>
                  עוד כמה זמן אתה מתכוון לשחק אותה{' '}
                  <span className="relative inline-block sm:whitespace-nowrap" suppressHydrationWarning>
                    <span className="relative z-10 text-[#FF7742]" suppressHydrationWarning>
                      'עסק רציני'
                    </span>
                    <span className="absolute inset-0 bg-[#FF7742]/40 blur-lg -z-10" suppressHydrationWarning></span>
                  </span>
                </span>
                <span className="block mb-2" suppressHydrationWarning>
                  כשאין לך אפילו מענה{' '}
                  <span className="relative inline-block sm:whitespace-nowrap" suppressHydrationWarning>
                    <span className="relative z-10 text-[#FF7742]" suppressHydrationWarning>
                      קבוע
                    </span>
                    <span className="absolute inset-0 bg-[#FF7742]/40 blur-lg -z-10" suppressHydrationWarning></span>
                  </span>
                </span>
                <span className="block" suppressHydrationWarning>
                  שמחזיר ללקוח תשובה{' '}
                  <span className="relative inline-block sm:whitespace-nowrap" suppressHydrationWarning>
                    <span className="relative z-10 text-[#FF7742]" suppressHydrationWarning>
                      בזמן?
                    </span>
                    <span className="absolute inset-0 bg-[#FF7742]/40 blur-lg -z-10" suppressHydrationWarning></span>
                  </span>
                </span>
              </span>

              {/* Desktop version - 2 lines (original) */}
              <span className="hidden md:inline" suppressHydrationWarning>
                <span className="block" suppressHydrationWarning>
                  עוד כמה זמן אתה מתכוון לשחק אותה{' '}
                  <span className="relative inline-block" suppressHydrationWarning>
                    <span className="relative z-10 text-[#FF7742]" suppressHydrationWarning>
                      'עסק רציני'
                    </span>
                    <span className="absolute inset-0 bg-[#FF7742]/40 blur-lg -z-10" suppressHydrationWarning></span>
                  </span>
                </span>
                <span className="block" suppressHydrationWarning>
                  כשאין לך אפילו מענה{' '}
                  <span className="relative inline-block" suppressHydrationWarning>
                    <span className="relative z-10 text-[#FF7742]" suppressHydrationWarning>
                      קבוע
                    </span>
                    <span className="absolute inset-0 bg-[#FF7742]/40 blur-lg -z-10" suppressHydrationWarning></span>
                  </span>
                  {' '}שמחזיר ללקוח תשובה{' '}
                  <span className="relative inline-block" suppressHydrationWarning>
                    <span className="relative z-10 text-[#FF7742]" suppressHydrationWarning>
                      בזמן?
                    </span>
                    <span className="absolute inset-0 bg-[#FF7742]/40 blur-lg -z-10" suppressHydrationWarning></span>
                  </span>
                </span>
              </span>
            </h1>

            {/* CTA Buttons */}
            <div className="flex flex-row gap-3 md:gap-4 self-start">
              <Button
                size="lg"
                suppressHydrationWarning
                onClick={() => {
                  document.getElementById('contact')?.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                  });
                }}
                className="bg-[#FF7742] hover:bg-[#ff6632] text-white px-6 py-3 md:px-10 md:py-6 rounded-full text-sm md:text-lg font-semibold transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 cursor-pointer"
                style={{ fontFamily: 'Rubik, sans-serif' }}
              >
                לקביעת פגישה ◄
              </Button>

              <Button
                size="lg"
                suppressHydrationWarning
                onClick={() => {
                  const automationsElement = document.getElementById('automations');
                  if (automationsElement) {
                    const offset = 100;
                    const elementPosition = automationsElement.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.scrollY - offset;
                    window.scrollTo({
                      top: offsetPosition,
                      behavior: 'smooth'
                    });
                  }
                }}
                className="bg-[#FF7742] hover:bg-[#ff6632] text-white px-6 py-3 md:px-10 md:py-6 rounded-full text-sm md:text-lg font-semibold transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 cursor-pointer"
                style={{ fontFamily: 'Rubik, sans-serif' }}
              >
                דוגמאות לסוכני AI ◄
              </Button>
            </div>

            {/* Platform Logos Section */}
            <div className="flex flex-col gap-3 md:gap-4 pt-1 w-full items-end">
              {/* Section Header */}
              <p className="text-lg md:text-xl text-white text-right max-w-2xl leading-snug md:leading-relaxed font-semibold" style={{ fontFamily: 'Rubik, sans-serif' }} suppressHydrationWarning>
                אנחנו מתמחים באפיון והתאמה של הכלים והאוטומציות המתאימות ביותר לייעול המחלקות והתהליכים בעסק.
              </p>

              {/* Platform Logos */}
              <div className="flex flex-row-reverse gap-3 md:gap-4 w-full justify-center md:justify-end items-end">
              {/* Make.com Logo */}
              <div className="relative group">
                <div className="relative bg-white/5 border-2 border-white/20 rounded-xl md:rounded-2xl px-3 py-2 md:px-6 md:py-4 transition-all duration-300 hover:scale-105 hover:border-white/40 hover:shadow-lg hover:shadow-white/10">
                  <div className="relative w-20 h-10 md:w-24 md:h-10">
                    <Image
                      src="/images to use/Make-Logo-RGB@2x-1.webp"
                      alt="Make.com"
                      fill
                      sizes="(max-width: 768px) 80px, 96px"
                      className="object-contain brightness-0 invert"
                    />
                  </div>
                </div>
              </div>

              {/* Zapier Logo */}
              <div className="relative group">
                <div className="relative bg-white/5 border-2 border-white/20 rounded-xl md:rounded-2xl px-3 py-2 md:px-6 md:py-4 transition-all duration-300 hover:scale-105 hover:border-white/40 hover:shadow-lg hover:shadow-white/10">
                  <div className="relative w-20 h-10 md:w-24 md:h-10">
                    <Image
                      src="/images to use/Zapier_Company_Logo_2022.png"
                      alt="Zapier"
                      fill
                      sizes="(max-width: 768px) 80px, 96px"
                      className="object-contain brightness-0 invert"
                    />
                  </div>
                </div>
              </div>

              {/* n8n Logo */}
              <div className="relative group">
                <div className="relative bg-white/5 border-2 border-white/20 rounded-xl md:rounded-2xl px-3 py-2 md:px-6 md:py-4 transition-all duration-300 hover:scale-105 hover:border-white/40 hover:shadow-lg hover:shadow-white/10">
                  <div className="relative w-20 h-10 md:w-24 md:h-10">
                    <Image
                      src="/images to use/N8n-logo-new.svg.png"
                      alt="n8n"
                      fill
                      sizes="(max-width: 768px) 80px, 96px"
                      className="object-contain brightness-0 invert"
                    />
                  </div>
                </div>
              </div>
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
