"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import Header from "@/components/layout/Header";
import ResponsiveMacBook from "./ResponsiveMacBook";
import { Aurora } from "@/components/ui/aurora";
import { LogoCarousel, type Logo } from "@/components/ui/logo-carousel";
import type { SVGProps } from "react";

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
  return (
    <section id="hero" className="relative min-h-screen text-white overflow-x-hidden">
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

      {/* Header Navigation */}
      <Header />

      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6 pt-20 md:pt-32 pb-8 md:pb-2 min-h-screen flex items-start md:items-center">
        <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-start w-full">
          {/* Right Side - Automation Flow Visualization */}
          <div className="order-2 md:order-2 flex flex-col items-center justify-start py-0 md:py-2 space-y-8">
            <ResponsiveMacBook />
          </div>

          {/* Left Side - Content (main content for RTL) */}
          <div className="order-1 md:order-1 space-y-4 md:space-y-6 flex flex-col items-center md:items-end w-full">
            {/* Main Headline */}
            {/* Mobile version - 2 lines without yellow highlights and glow */}
            <h1 className="hero-heading md:hidden text-center w-full px-2" suppressHydrationWarning>
              אתה יודע שאתה צריך עוד ידיים בעסק<br />
              אבל אין לך תקציב לעובד נוסף
            </h1>
            {/* Desktop version - 3 lines */}
            <h1 className="hero-heading hidden md:block text-right w-full" suppressHydrationWarning>
              <span style={{ whiteSpace: 'nowrap' }} suppressHydrationWarning>אתה יודע שאתה צריך</span><br />
              <span style={{ whiteSpace: 'nowrap' }} suppressHydrationWarning>עוד ידיים בעסק אבל</span><br />
              <span style={{ whiteSpace: 'nowrap' }} suppressHydrationWarning>אין לך תקציב לעובד נוסף</span>
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
              >
                לקביעת פגישה ◄
              </Button>
            </div>

            {/* Platform Logos Section */}
            <div className="flex flex-col gap-4 md:gap-6 pt-4 md:pt-6 w-full items-center md:items-end">
              {/* Section Header */}
              <p className="text-base sm:text-lg md:text-2xl text-white text-center md:text-right max-w-2xl leading-relaxed md:leading-relaxed px-2 font-semibold" suppressHydrationWarning>
                אנחנו נתאים ונאפיין את הכלים המתאימים עבור העסק שלך כדי שתוכל להפסיק לעבוד עבור העסק שלך ולהתחיל לנהל את העסק שלך
              </p>

              {/* Platform Logos */}
              <div className="flex flex-row-reverse gap-2 sm:gap-3 md:gap-6 px-2 w-full justify-center md:justify-end items-end">
              {/* Make.com Logo */}
              <div className="relative group">
                <div className="relative bg-white/5 border-2 border-white/20 rounded-lg sm:rounded-xl md:rounded-2xl px-2 py-2 sm:px-3 sm:py-2.5 md:px-8 md:py-5 transition-all duration-300 hover:scale-105 hover:border-white/40 hover:shadow-lg hover:shadow-white/10">
                  <div className="relative w-16 h-8 sm:w-20 sm:h-10 md:w-44 md:h-20">
                    <Image
                      src="/images to use/Make-Logo-RGB@2x-1.webp"
                      alt="Make.com"
                      fill
                      sizes="(max-width: 640px) 64px, (max-width: 768px) 80px, 176px"
                      className="object-contain brightness-0 invert"
                    />
                  </div>
                </div>
              </div>

              {/* Zapier Logo */}
              <div className="relative group">
                <div className="relative bg-white/5 border-2 border-white/20 rounded-lg sm:rounded-xl md:rounded-2xl px-2 py-2 sm:px-3 sm:py-2.5 md:px-8 md:py-5 transition-all duration-300 hover:scale-105 hover:border-white/40 hover:shadow-lg hover:shadow-white/10">
                  <div className="relative w-16 h-8 sm:w-20 sm:h-10 md:w-44 md:h-20">
                    <Image
                      src="/images to use/Zapier_Company_Logo_2022.png"
                      alt="Zapier"
                      fill
                      sizes="(max-width: 640px) 64px, (max-width: 768px) 80px, 176px"
                      className="object-contain brightness-0 invert"
                    />
                  </div>
                </div>
              </div>

              {/* n8n Logo */}
              <div className="relative group">
                <div className="relative bg-white/5 border-2 border-white/20 rounded-lg sm:rounded-xl md:rounded-2xl px-2 py-2 sm:px-3 sm:py-2.5 md:px-8 md:py-5 transition-all duration-300 hover:scale-105 hover:border-white/40 hover:shadow-lg hover:shadow-white/10">
                  <div className="relative w-16 h-8 sm:w-20 sm:h-10 md:w-44 md:h-20">
                    <Image
                      src="/images to use/N8n-logo-new.svg.png"
                      alt="n8n"
                      fill
                      sizes="(max-width: 640px) 64px, (max-width: 768px) 80px, 176px"
                      className="object-contain brightness-0 invert"
                    />
                  </div>
                </div>
              </div>
              </div>
            </div>

            {/* CTA Button - Mobile Only (below logos) */}
            <div className="flex md:hidden flex-row gap-3 self-center w-full justify-center pt-4 px-4">
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
                className="bg-[#FF7742] hover:bg-[#ff6632] text-white px-6 py-3 rounded-full w-full max-w-[280px] text-sm font-semibold transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 cursor-pointer"
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
