"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Smooth scroll handler with offset
  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();

    // Check if we're on the home page
    const isHomePage = window.location.pathname === '/';

    if (isHomePage) {
      // If on home page, scroll to section
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        const offset = 100;
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.scrollY - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });

        setTimeout(() => {
          setMobileMenuOpen(false);
        }, 100);
      }
    } else {
      // If on another page, navigate to home page with hash
      window.location.href = `/#${targetId}`;
    }
  };

  const handleContactClick = () => {
    const isHomePage = window.location.pathname === '/';

    if (isHomePage) {
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
    } else {
      window.location.href = '/#contact';
    }

    setTimeout(() => {
      setMobileMenuOpen(false);
    }, 100);
  };

  return (
    <>
      {/* Desktop Navigation - Floating with Glassmorphism - Hidden on Mobile */}
      <nav className="hidden md:block fixed top-2 md:top-4 right-2 left-2 md:right-6 md:left-6 z-50 transition-all duration-300">
        <div className="max-w-7xl mx-auto bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-3 md:px-6 py-2 md:py-3 shadow-lg">
          <div className="flex items-center justify-between">
            {/* Logo (right side for RTL) - Clickable */}
            <Link href="/" className="relative w-28 h-9 md:w-48 md:h-14 -mr-2 md:-mr-8 cursor-pointer hover:opacity-90 transition-opacity">
              <Image
                src="/images to use/ETHEDLOGO.png"
                alt="Ethed Logo"
                fill
                sizes="(max-width: 768px) 112px, 192px"
                className="object-contain drop-shadow-[0_2px_6px_rgba(255,255,255,0.6)]"
                priority
              />
            </Link>

            {/* Desktop Nav Links (center) */}
            <ul className="flex items-center gap-12 text-lg">
              <li suppressHydrationWarning>
                <a
                  href="#solutions"
                  onClick={(e) => handleSmoothScroll(e, 'solutions')}
                  className="nav-tab px-4 py-2 rounded-full hover:text-[#FF7742] hover:bg-white/5 transition-all duration-300 hover:scale-105 inline-block"
                  suppressHydrationWarning
                >
                  פתרונות
                </a>
              </li>
              <li suppressHydrationWarning>
                <a
                  href="#faq"
                  onClick={(e) => handleSmoothScroll(e, 'faq')}
                  className="nav-tab px-4 py-2 rounded-full hover:text-[#FF7742] hover:bg-white/5 transition-all duration-300 hover:scale-105 inline-block"
                  suppressHydrationWarning
                >
                  שאלות נפוצות
                </a>
              </li>
              <li suppressHydrationWarning>
                <a
                  href="#contact"
                  onClick={(e) => handleSmoothScroll(e, 'contact')}
                  className="nav-tab px-4 py-2 rounded-full hover:text-[#FF7742] hover:bg-white/5 transition-all duration-300 hover:scale-105 inline-block"
                  suppressHydrationWarning
                >
                  צור קשר
                </a>
              </li>
            </ul>

            {/* Desktop CTA Button */}
            <Button
              suppressHydrationWarning
              onClick={handleContactClick}
              className="flex bg-[#FF7742] hover:bg-[#ff6632] text-white px-6 py-2.5 rounded-full text-sm transition-colors shadow-lg cursor-pointer"
              style={{ fontWeight: '900' }}
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
          {/* Hamburger to X animation */}
          <span className={`absolute h-[2px] w-6 bg-white rounded-full transition-all duration-300 ease-in-out ${mobileMenuOpen ? 'rotate-45' : '-translate-y-2'}`} suppressHydrationWarning />
          <span className={`absolute h-[2px] w-6 bg-white rounded-full transition-all duration-300 ease-in-out ${mobileMenuOpen ? 'opacity-0 scale-0' : 'opacity-100 scale-100'}`} suppressHydrationWarning />
          <span className={`absolute h-[2px] w-6 bg-white rounded-full transition-all duration-300 ease-in-out ${mobileMenuOpen ? '-rotate-45' : 'translate-y-2'}`} suppressHydrationWarning />
        </div>
      </button>

      {/* Mobile Menu Dropdown - Slides from Right Side */}
      <div className={`fixed top-0 right-0 h-full w-[85vw] max-w-[320px] bg-[#0f0f0f]/95 backdrop-blur-xl border-l border-white/10 z-40 transition-transform duration-300 ease-in-out will-change-transform ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex flex-col h-full p-6 pt-20">
          {/* Mobile Nav Links */}
          <ul className="flex flex-col gap-6 text-right">
            <li suppressHydrationWarning>
              <a
                href="#hero"
                onClick={(e) => handleSmoothScroll(e, 'hero')}
                className="nav-tab text-xl hover:text-[#FF7742] hover:bg-white/5 transition-all duration-300 block py-3 px-4 rounded-lg"
                suppressHydrationWarning
              >
                בית
              </a>
            </li>
            <li suppressHydrationWarning>
              <a
                href="#solutions"
                onClick={(e) => handleSmoothScroll(e, 'solutions')}
                className="nav-tab text-xl hover:text-[#FF7742] hover:bg-white/5 transition-all duration-300 block py-3 px-4 rounded-lg"
                suppressHydrationWarning
              >
                פתרונות
              </a>
            </li>
            <li suppressHydrationWarning>
              <a
                href="#faq"
                onClick={(e) => handleSmoothScroll(e, 'faq')}
                className="nav-tab text-xl hover:text-[#FF7742] hover:bg-white/5 transition-all duration-300 block py-3 px-4 rounded-lg"
                suppressHydrationWarning
              >
                שאלות נפוצות
              </a>
            </li>
            <li suppressHydrationWarning>
              <a
                href="#contact"
                onClick={(e) => handleSmoothScroll(e, 'contact')}
                className="nav-tab text-xl hover:text-[#FF7742] hover:bg-white/5 transition-all duration-300 block py-3 px-4 rounded-lg"
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
            onClick={handleContactClick}
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
    </>
  );
}
