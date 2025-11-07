"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function FloatingWhatsApp() {
  const phoneNumber = "972584292852";
  const message = "היי אשמח לשמוע עוד על אוטומציות לעסק שלי";

  // Create WhatsApp link with pre-filled message
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <motion.a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 group cursor-pointer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 20,
        delay: 1
      }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      {/* WhatsApp icon only */}
      <div className="relative w-14 h-14 md:w-16 md:h-16 drop-shadow-lg hover:drop-shadow-xl transition-all">
        <Image
          src="/images to use/whatsapplogooo.png"
          alt="WhatsApp"
          fill
          className="object-contain"
        />
      </div>

      {/* Tooltip on hover */}
      <div className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-white text-gray-800 px-3 py-2 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
        <span className="text-sm font-medium">צור קשר בוואטסאפ</span>
        {/* Arrow pointing to button */}
        <div className="absolute left-full top-1/2 -translate-y-1/2 -ml-1">
          <div className="w-0 h-0 border-t-4 border-t-transparent border-b-4 border-b-transparent border-r-4 border-r-white" />
        </div>
      </div>
    </motion.a>
  );
}
