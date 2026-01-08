"use client";

import Spline3DScene from "@/components/ui/Spline3DScene";
import { motion } from "framer-motion";

export default function Mobile3DScene() {
  return (
    <section
      className="md:hidden"
      style={{
        overflow: 'visible',
        contain: 'none',
        height: 'clamp(280px, 50vh, 380px)',
        minHeight: '280px',
        position: 'relative',
        marginTop: '0px',
        marginBottom: '0px'
      }}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true, margin: "-100px" }}
        style={{
          position: 'relative',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          paddingLeft: '2rem',
          paddingRight: 0,
          overflow: 'visible'
        }}
      >
        <div
          className="w-[90%] max-w-lg"
          style={{
            overflow: 'visible',
            position: 'relative',
            transform: 'translateZ(0)',
            willChange: 'transform'
          }}
        >
          <Spline3DScene />
        </div>
      </motion.div>
    </section>
  );
}
