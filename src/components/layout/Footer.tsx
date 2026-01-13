"use client";

import { Facebook, Instagram } from "lucide-react";
import PrivacyPolicyDialog from "@/components/ui/privacy-policy";

export default function Footer() {
  // Smooth scroll handler with offset (same as hero)
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
    }
  };

  return (
    <footer className="bg-[#0a0505] border-t border-orange-500/20">
      <div className="container mx-auto px-4 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-8">
          {/* פתרונות - Solutions */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white mb-6 border-b border-orange-500/30 pb-2" suppressHydrationWarning>
              פתרונות
            </h3>
            <nav className="space-y-3">
              <a
                href="#solutions"
                onClick={(e) => handleSmoothScroll(e, 'solutions')}
                className="block text-gray-300 text-base hover:text-orange-500 transition-colors hover:translate-x-2 transform duration-200 cursor-pointer"
                suppressHydrationWarning
              >
                צ'אטבוט AI מתקדם
              </a>
              <a
                href="#solutions"
                onClick={(e) => handleSmoothScroll(e, 'solutions')}
                className="block text-gray-300 text-base hover:text-orange-500 transition-colors hover:translate-x-2 transform duration-200 cursor-pointer"
                suppressHydrationWarning
              >
                אוטומציות עסקיות
              </a>
              <a
                href="#crm-data"
                onClick={(e) => handleSmoothScroll(e, 'crm-data')}
                className="block text-gray-300 text-base hover:text-orange-500 transition-colors hover:translate-x-2 transform duration-200 cursor-pointer"
                suppressHydrationWarning
              >
                מערכת CRM מותאמת
              </a>
              <a
                href="#solutions"
                onClick={(e) => handleSmoothScroll(e, 'solutions')}
                className="block text-gray-300 text-base hover:text-orange-500 transition-colors hover:translate-x-2 transform duration-200 cursor-pointer"
                suppressHydrationWarning
              >
                מעקב ביצועים
              </a>
            </nav>
          </div>

          {/* ניווט - Navigation */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white mb-6 border-b border-orange-500/30 pb-2" suppressHydrationWarning>
              ניווט
            </h3>
            <nav className="space-y-3">
              <a
                href="#hero"
                onClick={(e) => {
                  e.preventDefault();
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="block text-gray-300 text-base hover:text-orange-500 transition-colors hover:translate-x-2 transform duration-200 cursor-pointer"
                suppressHydrationWarning
              >
                דף הבית
              </a>
              <a
                href="#automations"
                onClick={(e) => handleSmoothScroll(e, 'automations')}
                className="block text-gray-300 text-base hover:text-orange-500 transition-colors hover:translate-x-2 transform duration-200 cursor-pointer"
                suppressHydrationWarning
              >
                השירותים שלנו
              </a>
              <a
                href="#faq"
                onClick={(e) => handleSmoothScroll(e, 'faq')}
                className="block text-gray-300 text-base hover:text-orange-500 transition-colors hover:translate-x-2 transform duration-200 cursor-pointer"
                suppressHydrationWarning
              >
                שאלות נפוצות
              </a>
              <a
                href="#contact"
                onClick={(e) => handleSmoothScroll(e, 'contact')}
                className="block text-gray-300 text-base hover:text-orange-500 transition-colors hover:translate-x-2 transform duration-200 cursor-pointer"
                suppressHydrationWarning
              >
                צור קשר
              </a>
              <div className="block">
                <PrivacyPolicyDialog variant="footer" />
              </div>
            </nav>
          </div>

          {/* עקבו אחרינו - Follow Us */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white mb-6 border-b border-orange-500/30 pb-2" suppressHydrationWarning>
              עקבו אחרינו
            </h3>
            <p className="text-gray-300 text-lg mb-6" suppressHydrationWarning>
              הצטרפו אלינו ברשתות החברתיות ועדכנו בחידושים ופתרונות חדשניים
            </p>
            <div className="flex gap-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-orange-500/10 border border-orange-500/30 flex items-center justify-center text-orange-500 hover:bg-orange-500 hover:text-white transition-all duration-300 hover:scale-110"
                suppressHydrationWarning
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://www.instagram.com/ethanrafaelo/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-orange-500/10 border border-orange-500/30 flex items-center justify-center text-orange-500 hover:bg-orange-500 hover:text-white transition-all duration-300 hover:scale-110"
                suppressHydrationWarning
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://wa.me/972584292852?text=היי%20אשמח%20לשמוע%20עוד%20על%20שירותי%20אוטומציה%20וסוכנים%20חכמים%20🤖"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-orange-500/10 border border-orange-500/30 flex items-center justify-center text-orange-500 hover:bg-orange-500 hover:text-white transition-all duration-300 hover:scale-110"
                suppressHydrationWarning
              >
                <svg
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-orange-500/20 my-8"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-base text-center md:text-right" suppressHydrationWarning>
            © {new Date().getFullYear()} כל הזכויות שמורות ל-Ethed. אין להשתמש, להעתיק או לשכפל תכנים המוצגים באתר זה.
          </p>
          <p className="text-orange-500 font-medium" suppressHydrationWarning>
            עובדים חכם, לא קשה
          </p>
        </div>
      </div>
    </footer>
  );
}
