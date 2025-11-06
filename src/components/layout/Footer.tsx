import { Facebook, Instagram, Linkedin, Youtube } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#0a0505] border-t border-orange-500/20">
      <div className="container mx-auto px-4 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-8">
          {/* פתרונות - Solutions */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white mb-6 border-b border-orange-500/30 pb-2">
              פתרונות
            </h3>
            <nav className="space-y-3">
              <a
                href="#chatbot"
                className="block text-gray-300 text-base hover:text-orange-500 transition-colors hover:translate-x-2 transform duration-200"
              >
                צ'אטבוט AI מתקדם
              </a>
              <a
                href="#automation"
                className="block text-gray-300 text-base hover:text-orange-500 transition-colors hover:translate-x-2 transform duration-200"
              >
                אוטומציות עסקיות
              </a>
              <a
                href="#crm"
                className="block text-gray-300 text-base hover:text-orange-500 transition-colors hover:translate-x-2 transform duration-200"
              >
                מערכת CRM מותאמת
              </a>
              <a
                href="#analytics"
                className="block text-gray-300 text-base hover:text-orange-500 transition-colors hover:translate-x-2 transform duration-200"
              >
                מעקב ביצועים
              </a>
            </nav>
          </div>

          {/* ניווט - Navigation */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white mb-6 border-b border-orange-500/30 pb-2">
              ניווט
            </h3>
            <nav className="space-y-3">
              <a
                href="#home"
                className="block text-gray-300 text-base hover:text-orange-500 transition-colors hover:translate-x-2 transform duration-200"
              >
                דף הבית
              </a>
              <a
                href="#services"
                className="block text-gray-300 text-base hover:text-orange-500 transition-colors hover:translate-x-2 transform duration-200"
              >
                השירותים שלנו
              </a>
              <a
                href="#demo"
                className="block text-gray-300 text-base hover:text-orange-500 transition-colors hover:translate-x-2 transform duration-200"
              >
                הדגמה
              </a>
              <a
                href="#faq"
                className="block text-gray-300 text-base hover:text-orange-500 transition-colors hover:translate-x-2 transform duration-200"
              >
                שאלות נפוצות
              </a>
              <a
                href="#contact"
                className="block text-gray-300 text-base hover:text-orange-500 transition-colors hover:translate-x-2 transform duration-200"
              >
                צור קשר
              </a>
            </nav>
          </div>

          {/* עקבו אחרינו - Follow Us */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white mb-6 border-b border-orange-500/30 pb-2">
              עקבו אחרינו
            </h3>
            <p className="text-gray-300 text-lg mb-6">
              הצטרפו אלינו ברשתות החברתיות ועדכנו בחידושים ופתרונות חדשניים
            </p>
            <div className="flex gap-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-orange-500/10 border border-orange-500/30 flex items-center justify-center text-orange-500 hover:bg-orange-500 hover:text-white transition-all duration-300 hover:scale-110"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-orange-500/10 border border-orange-500/30 flex items-center justify-center text-orange-500 hover:bg-orange-500 hover:text-white transition-all duration-300 hover:scale-110"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-orange-500/10 border border-orange-500/30 flex items-center justify-center text-orange-500 hover:bg-orange-500 hover:text-white transition-all duration-300 hover:scale-110"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-orange-500/10 border border-orange-500/30 flex items-center justify-center text-orange-500 hover:bg-orange-500 hover:text-white transition-all duration-300 hover:scale-110"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-orange-500/20 my-8"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-base text-center md:text-right">
            © {new Date().getFullYear()} כל הזכויות שמורות ל-Ethed. אין להשתמש, להעתיק או לשכפל תכנים המוצגים באתר זה.
          </p>
          <p className="text-orange-500 font-medium">
            עובדים חכם, לא קשה
          </p>
        </div>
      </div>
    </footer>
  );
}
