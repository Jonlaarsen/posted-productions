"use client";

import { motion } from "motion/react";

export default function Loading() {
  return (
    <div className="absolute inset-0 z-10 flex justify-center items-center bg-black text-9xl font-mono uppercase font-black">
      <div className="relative">
        {/* Gray base text */}
        <span className="text-gray-400">Loading...</span>
        {/* Animated white text - overlays gray, reveals left to right */}
        <motion.span
          className="absolute inset-0 overflow-hidden posted-text whitespace-nowrap"
          initial={{ clipPath: "inset(0 100% 0 0)" }}
          animate={{ clipPath: "inset(0 0% 0 0)" }}
          transition={{
            duration: 3,
            repeat: Infinity,
            repeatType: "loop",
            ease: "linear",
          }}
        >
          Loading...
        </motion.span>
      </div>
    </div>
  );
}
