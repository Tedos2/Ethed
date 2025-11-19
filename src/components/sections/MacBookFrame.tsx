import { ReactNode } from "react";
import { MacbookPro } from "@/components/ui/macbook-pro";
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

interface MacBookFrameProps {
  children: ReactNode;
}

export default function MacBookFrame({ children }: MacBookFrameProps) {
  return (
    <div className="relative w-full max-w-[85vw] sm:max-w-md md:max-w-2xl lg:max-w-4xl xl:max-w-5xl mx-auto">
      <MacbookPro className="w-full h-auto" width={650} height={400}>
        {children}
      </MacbookPro>

      {/* Floating Stars - Top Right Corner of Screen - Behind MacBook */}
      <div className="absolute top-[3.2%] right-[11.5%] pointer-events-none -z-10">
        {/* Extra large background star with glow */}
        <motion.div
          className="absolute -top-8 -right-8 text-white/70"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{
            opacity: [0.7, 0.85, 0.7],
            y: [0, -15, 0],
            scale: [1, 1.2, 1]
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          style={{
            filter: "drop-shadow(0 0 15px rgba(255, 255, 255, 0.6))"
          }}
        >
          <StarsIcon size={120} />
        </motion.div>

        {/* Large middle star */}
        <motion.div
          className="absolute -top-4 -right-4 text-white/80"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{
            opacity: [0.8, 0.95, 0.8],
            y: [0, -12, 0],
            rotate: [0, 10, 0]
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.3
          }}
          style={{
            filter: "drop-shadow(0 0 12px rgba(255, 255, 255, 0.7))"
          }}
        >
          <StarsIcon size={80} />
        </motion.div>

        {/* Medium front star */}
        <motion.div
          className="absolute top-0 right-0 text-white/90"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{
            opacity: [0.9, 1, 0.9],
            y: [0, -8, 0],
            rotate: [0, -15, 0]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.6
          }}
          style={{
            filter: "drop-shadow(0 0 10px rgba(255, 255, 255, 0.8))"
          }}
        >
          <StarsIcon size={50} />
        </motion.div>
      </div>

      {/* Floating Stars - Bottom Left Corner of Screen - Behind MacBook - More Visible Outside */}
      <div className="absolute bottom-[9.5%] left-[11.5%] pointer-events-none -z-10">
        {/* Extra large background star with glow - pushed further out */}
        <motion.div
          className="absolute -bottom-16 -left-16 text-white/70"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{
            opacity: [0.7, 0.85, 0.7],
            y: [0, 15, 0],
            scale: [1, 1.2, 1]
          }}
          transition={{
            duration: 6.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.2
          }}
          style={{
            filter: "drop-shadow(0 0 15px rgba(255, 255, 255, 0.6))"
          }}
        >
          <StarsIcon size={120} />
        </motion.div>

        {/* Large middle star - pushed further out */}
        <motion.div
          className="absolute -bottom-10 -left-10 text-white/80"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{
            opacity: [0.8, 0.95, 0.8],
            y: [0, 12, 0],
            rotate: [0, -10, 0]
          }}
          transition={{
            duration: 5.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5
          }}
          style={{
            filter: "drop-shadow(0 0 12px rgba(255, 255, 255, 0.7))"
          }}
        >
          <StarsIcon size={80} />
        </motion.div>

        {/* Medium front star - pushed further out */}
        <motion.div
          className="absolute -bottom-6 -left-6 text-white/90"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{
            opacity: [0.9, 1, 0.9],
            y: [0, 8, 0],
            rotate: [0, 15, 0]
          }}
          transition={{
            duration: 4.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.8
          }}
          style={{
            filter: "drop-shadow(0 0 10px rgba(255, 255, 255, 0.8))"
          }}
        >
          <StarsIcon size={50} />
        </motion.div>
      </div>
    </div>
  );
}
