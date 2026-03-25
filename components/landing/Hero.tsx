"use client";
import { motion } from "motion/react";
import { useState } from "react";

const Hero = () => {
  const [ready, setReady] = useState(false);

  return (
    <div className="h-screen min-h-screen relative overflow-hidden">
      {/* Loading overlay */}
      {!ready && (
        <div className="absolute inset-0 z-10 flex justify-center items-center bg-black text-6xl md:text-9xl font-mono uppercase font-black">
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
      )}

      {/* Desktop video */}
      <div className="top-0 left-0 h-screen w-full overflow-hidden relative md:block hidden">
        <video
          src="https://videos-clone-local-tommy.s3.ap-northeast-2.amazonaws.com/posted__80000+(2160p).mp4"
          autoPlay
          loop
          playsInline
          muted
          preload="auto"
          onCanPlayThrough={() => setReady(true)}
          className={`w-screen h-screen object-cover bg-black transition-opacity duration-700 ${
            ready ? "opacity-100" : "opacity-0"
          }`}
        />
      </div>

      {/* Mobile video */}
      <div className="flex top-0 left-0 h-screen w-auto md:hidden items-center justify-center">
        <video
          src="https://videos-clone-local-tommy.s3.ap-northeast-2.amazonaws.com/Poster+Vertical.mp4"
          autoPlay
          loop
          playsInline
          muted
          preload="auto"
          onCanPlayThrough={() => setReady(true)}
          className={`w-screen h-screen object-cover transition-opacity duration-700 ${
            ready ? "opacity-100" : "opacity-0"
          }`}
        />
      </div>
    </div>
  );
};

export default Hero;
