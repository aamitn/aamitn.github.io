"use client";

import { useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CursorLightEffect() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Faster and more responsive spring settings
  const smoothX = useSpring(mouseX, { stiffness: 200, damping: 30 });
  const smoothY = useSpring(mouseY, { stiffness: 200, damping: 30 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <div className="fixed inset-0 pointer-events-none z-[0]">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-grid-small dark:bg-grid-small-dark opacity-30"></div>

      {/* Faster Cursor Glow Effect */}
      <motion.div
        className="absolute w-48 h-48 bg-blue-300/30 rounded-full blur-[60px] mix-blend-soft-light"
        style={{ x: smoothX, y: smoothY }}
        animate={{ scale: [1, 1.05, 1] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}
