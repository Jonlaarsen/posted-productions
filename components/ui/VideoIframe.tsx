"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";

interface VideoIframeProps {
  src: string;
  title: string;
  className?: string;
  allow?: string;
}

export function VideoIframe({
  src,
  title,
  className = "",
  allow,
}: VideoIframeProps) {
  const [loaded, setLoaded] = useState(false);

  // Fallback: hide loader after 5s in case onLoad doesn't fire (cross-origin)
  useEffect(() => {
    const fallback = setTimeout(() => setLoaded(true), 5000);
    return () => clearTimeout(fallback);
  }, []);

  return (
    <div className="relative w-full h-full overflow-hidden bg-blue-500/20">
      {/* Placeholder / loader */}
      <AnimatePresence>
        {!loaded && (
          <motion.div
            className="absolute inset-0 z-10 flex items-center justify-center bg-black/40"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex flex-col items-center gap-4">
              <div className="w-12 h-12 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              <span className="text-white/60 text-sm font-light">
                Loading video...
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Iframe */}
      <motion.iframe
        src={src}
        allow={allow}
        title={title}
        className={className}
        onLoad={() => setLoaded(true)}
        initial={{ opacity: 0 }}
        animate={{ opacity: loaded ? 1 : 0 }}
        transition={{ duration: 0.4 }}
      />
    </div>
  );
}
