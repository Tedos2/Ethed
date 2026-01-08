"use client";

import { useState } from "react";
import Image from "next/image";
import { Check, Sparkles, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import ResponsiveMacBook from "./ResponsiveMacBook";
import { Aurora } from "@/components/ui/aurora";
import { LogoCarousel, type Logo } from "@/components/ui/logo-carousel";
import type { SVGProps } from "react";
import { motion } from "framer-motion";

// Bootstrap Stars Icon Component
function StarsIcon({ className = "", size = 64 }: { className?: string; size?: number }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      fill="currentColor"
      viewBox="0 0 16 16"
      className={className}
    >
      <path d="M7.657 6.247c.11-.33.576-.33.686 0l.645 1.937a2.89 2.89 0 0 0 1.829 1.828l1.936.645c.33.11.33.576 0 .686l-1.937.645a2.89 2.89 0 0 0-1.828 1.829l-.645 1.936a.361.361 0 0 1-.686 0l-.645-1.937a2.89 2.89 0 0 0-1.828-1.828l-1.937-.645a.361.361 0 0 1 0-.686l1.937-.645a2.89 2.89 0 0 0 1.828-1.828zM3.794 1.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387A1.73 1.73 0 0 0 4.593 5.69l-.387 1.162a.217.217 0 0 1-.412 0L3.407 5.69A1.73 1.73 0 0 0 2.31 4.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387A1.73 1.73 0 0 0 3.407 2.31zM10.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.16 1.16 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.16 1.16 0 0 0-.732-.732L9.1 2.137a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732z"/>
    </svg>
  );
}

// Client logos for carousel
function MaccabiLogo(props: SVGProps<SVGSVGElement>) {
  return (
    <div style={{ position: 'relative', width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <Image
        src="/images to use/מכביי.png"
        alt="Maccabi Healthcare"
        width={200}
        height={100}
        style={{ objectFit: 'contain', maxWidth: '100%', maxHeight: '100%' }}
      />
    </div>
  );
}

function ClientLogo2(props: SVGProps<SVGSVGElement>) {
  return (
    <div style={{ position: 'relative', width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <Image
        src="/images to use/Screenshot 2025-11-18 at 19.47.07.png"
        alt="Client Logo"
        width={200}
        height={100}
        style={{ objectFit: 'contain', maxWidth: '100%', maxHeight: '100%' }}
      />
    </div>
  );
}

const clientLogos: Logo[] = [
  { name: "Maccabi Healthcare", id: 1, img: MaccabiLogo },
  { name: "Client 2", id: 2, img: ClientLogo2 },
];

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

      // Close mobile menu after scroll starts (small delay ensures animation isn't interrupted)
      setTimeout(() => {
        setMobileMenuOpen(false);
      }, 100);
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

      {/* Desktop Navigation - Floating with Glassmorphism - Hidden on Mobile */}
      <nav className="hidden md:block fixed top-2 md:top-4 right-2 left-2 md:right-6 md:left-6 z-50 transition-all duration-300">
        <div className="max-w-7xl mx-auto bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-3 md:px-6 py-2 md:py-3 shadow-lg">
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

            {/* Desktop Nav Links (center) */}
            <ul className="flex items-center gap-12 text-lg font-bold">
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
              className="flex bg-[#FF7742] hover:bg-[#ff6632] text-white px-6 py-2.5 rounded-full text-sm font-medium transition-colors shadow-lg cursor-pointer"
            >
              בואו לשמוע עוד :)
            </Button>
          </div>
        </div>
      </nav>

      {/* Mobile Hamburger Menu Button - Mobile Only */}
      <button
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        className="md:hidden fixed top-4 right-4 z-50 p-3 bg-black/50 backdrop-blur-md hover:bg-black/70 rounded-full transition-all border border-white/20 shadow-lg"
        style={{ minWidth: '44px', minHeight: '44px' }}
        aria-label="Toggle menu"
      >
        <div className="relative w-6 h-6 flex items-center justify-center">
          {/* Hamburger to X animation - Improved */}
          <span className={`absolute h-[2px] w-6 bg-white rounded-full transition-all duration-300 ease-in-out ${mobileMenuOpen ? 'rotate-45' : '-translate-y-2'}`} suppressHydrationWarning />
          <span className={`absolute h-[2px] w-6 bg-white rounded-full transition-all duration-300 ease-in-out ${mobileMenuOpen ? 'opacity-0 scale-0' : 'opacity-100 scale-100'}`} suppressHydrationWarning />
          <span className={`absolute h-[2px] w-6 bg-white rounded-full transition-all duration-300 ease-in-out ${mobileMenuOpen ? '-rotate-45' : 'translate-y-2'}`} suppressHydrationWarning />
        </div>
      </button>

      {/* Mobile Menu Dropdown - Slides from Right Side with proper animations */}
      <div className={`fixed top-0 right-0 h-full w-[85vw] max-w-[320px] bg-[#0f0f0f]/95 backdrop-blur-xl border-l border-white/10 z-40 transition-transform duration-300 ease-in-out will-change-transform ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <div className="flex flex-col h-full p-6 pt-20">
          {/* No close button needed - hamburger transforms to X */}

          {/* Mobile Nav Links */}
          <ul className="flex flex-col gap-6 text-right">
            <li suppressHydrationWarning>
              <a
                href="#about"
                onClick={(e) => handleSmoothScroll(e, 'about')}
                className="text-xl font-bold hover:text-[#FF7742] hover:bg-white/5 transition-all duration-300 block py-3 px-4 rounded-lg"
                suppressHydrationWarning
              >
                עלינו
              </a>
            </li>
            <li suppressHydrationWarning>
              <a
                href="#solutions"
                onClick={(e) => handleSmoothScroll(e, 'solutions')}
                className="text-xl font-bold hover:text-[#FF7742] hover:bg-white/5 transition-all duration-300 block py-3 px-4 rounded-lg"
                suppressHydrationWarning
              >
                פתרונות
              </a>
            </li>
            <li suppressHydrationWarning>
              <a
                href="#contact"
                onClick={(e) => handleSmoothScroll(e, 'contact')}
                className="text-xl font-bold hover:text-[#FF7742] hover:bg-white/5 transition-all duration-300 block py-3 px-4 rounded-lg"
                suppressHydrationWarning
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
              setTimeout(() => {
                setMobileMenuOpen(false);
              }, 100);
            }}
          >
            בואו לשמוע עוד :)
          </Button>
        </div>
      </div>

      {/* Mobile Menu Backdrop Overlay */}
      <div
        className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-[35] md:hidden transition-opacity duration-300 will-change-opacity ${mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        onClick={() => setMobileMenuOpen(false)}
      />

      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-6 pt-20 md:pt-32 pb-8 md:pb-2 min-h-screen flex items-start md:items-center">
        <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-start w-full">
          {/* Right Side - Automation Flow Visualization */}
          <div className="order-2 md:order-2 flex flex-col items-center justify-start py-0 md:py-2 space-y-8">
            <ResponsiveMacBook />
          </div>

          {/* Left Side - Content (main content for RTL) */}
          <div className="order-1 md:order-1 space-y-4 md:space-y-6 flex flex-col items-center md:items-end w-full">
            {/* Main Headline */}
            {/* Mobile version - 2 lines with darker yellow highlights and glow */}
            <h1 className="md:hidden text-[1.75rem] sm:text-3xl font-bold leading-snug text-center w-full px-2" style={{ fontFamily: 'Rubik, sans-serif' }} suppressHydrationWarning>
              אתה יודע שאתה צריך <span style={{ color: '#FFD700', textShadow: '0 0 12px rgba(255, 215, 0, 0.5), 0 0 20px rgba(255, 215, 0, 0.3)' }} suppressHydrationWarning>עוד ידיים בעסק</span><br />
              אבל <span style={{ color: '#FFD700', textShadow: '0 0 12px rgba(255, 215, 0, 0.5), 0 0 20px rgba(255, 215, 0, 0.3)' }} suppressHydrationWarning>אין לך תקציב</span> לעובד נוסף
            </h1>
            {/* Desktop version - 3 lines with darker yellow highlights and glow */}
            <h1 className="hidden md:block font-bold text-right w-full" style={{ fontFamily: 'Rubik, sans-serif', fontSize: 'clamp(2.5rem, 4.5vw, 3rem)', lineHeight: '1.3' }} suppressHydrationWarning>
              <span style={{ whiteSpace: 'nowrap' }} suppressHydrationWarning>אתה יודע שאתה צריך</span><br />
              <span style={{ whiteSpace: 'nowrap' }} suppressHydrationWarning><span style={{ color: '#FFD700', textShadow: '0 0 12px rgba(255, 215, 0, 0.5), 0 0 20px rgba(255, 215, 0, 0.3)' }} suppressHydrationWarning>עוד ידיים בעסק</span> אבל</span><br />
              <span style={{ whiteSpace: 'nowrap' }} suppressHydrationWarning><span style={{ color: '#FFD700', textShadow: '0 0 12px rgba(255, 215, 0, 0.5), 0 0 20px rgba(255, 215, 0, 0.3)' }} suppressHydrationWarning>אין לך תקציב</span> לעובד נוסף</span>
            </h1>

            {/* CTA Button - Desktop Only */}
            <div className="hidden md:flex flex-row gap-3 md:gap-4 self-center md:self-start">
              <Button
                size="lg"
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
                className="bg-[#FF7742] hover:bg-[#ff6632] text-white px-6 py-3 md:px-10 md:py-6 rounded-full text-sm md:text-lg font-semibold transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 cursor-pointer"
                style={{ fontFamily: 'Rubik, sans-serif' }}
              >
                לקביעת פגישה ◄
              </Button>
            </div>

            {/* Platform Logos Section */}
            <div className="flex flex-col gap-4 md:gap-6 pt-4 md:pt-6 w-full items-center md:items-end">
              {/* Section Header */}
              <p className="text-xl md:text-2xl text-white text-center md:text-right max-w-2xl leading-relaxed md:leading-relaxed font-semibold" style={{ fontFamily: 'Rubik, sans-serif' }} suppressHydrationWarning>
                אנחנו נתאים ונאפיין את הכלים המתאימים עבור העסק שלך כדי שתוכל להפסיק לעבוד עבור העסק שלך ולהתחיל לנהל את העסק שלך
              </p>

              {/* Platform Logos */}
              <div className="flex flex-row-reverse gap-4 md:gap-6 w-full justify-center md:justify-end items-end">
              {/* Make.com Logo */}
              <div className="relative group">
                <div className="relative bg-white/5 border-2 border-white/20 rounded-xl md:rounded-2xl px-4 py-3 md:px-8 md:py-5 transition-all duration-300 hover:scale-105 hover:border-white/40 hover:shadow-lg hover:shadow-white/10">
                  <div className="relative w-24 h-12 md:w-44 md:h-20">
                    <Image
                      src="/images to use/Make-Logo-RGB@2x-1.webp"
                      alt="Make.com"
                      fill
                      sizes="(max-width: 768px) 96px, 176px"
                      className="object-contain brightness-0 invert"
                    />
                  </div>
                </div>
              </div>

              {/* Zapier Logo */}
              <div className="relative group">
                <div className="relative bg-white/5 border-2 border-white/20 rounded-xl md:rounded-2xl px-4 py-3 md:px-8 md:py-5 transition-all duration-300 hover:scale-105 hover:border-white/40 hover:shadow-lg hover:shadow-white/10">
                  <div className="relative w-24 h-12 md:w-44 md:h-20">
                    <Image
                      src="/images to use/Zapier_Company_Logo_2022.png"
                      alt="Zapier"
                      fill
                      sizes="(max-width: 768px) 96px, 176px"
                      className="object-contain brightness-0 invert"
                    />
                  </div>
                </div>
              </div>

              {/* n8n Logo */}
              <div className="relative group">
                <div className="relative bg-white/5 border-2 border-white/20 rounded-xl md:rounded-2xl px-4 py-3 md:px-8 md:py-5 transition-all duration-300 hover:scale-105 hover:border-white/40 hover:shadow-lg hover:shadow-white/10">
                  <div className="relative w-24 h-12 md:w-44 md:h-20">
                    <Image
                      src="/images to use/N8n-logo-new.svg.png"
                      alt="n8n"
                      fill
                      sizes="(max-width: 768px) 96px, 176px"
                      className="object-contain brightness-0 invert"
                    />
                  </div>
                </div>
              </div>
              </div>
            </div>

            {/* CTA Button - Mobile Only (below logos) */}
            <div className="flex md:hidden flex-row gap-3 self-center w-full justify-center pt-4">
              <Button
                size="lg"
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
                className="bg-[#FF7742] hover:bg-[#ff6632] text-white px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 cursor-pointer"
                style={{ fontFamily: 'Rubik, sans-serif' }}
              >
                לקביעת פגישה ◄
              </Button>
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
