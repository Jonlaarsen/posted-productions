"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "motion/react";

interface TickerHoverProps {
  label: string;
  tickerText?: string;
  className?: string;
  as?: "span" | "div" | "h1" | "h2" | "h3";
  invertOnHover?: boolean;
}

export function TickerHover({
  label,
  tickerText,
  className = "",
  as: Component = "span",
  invertOnHover = false,
}: TickerHoverProps) {
  const [isHovered, setIsHovered] = useState(false);
  const hasBeenHovered = useRef(false);
  const text = tickerText ?? label;

  useEffect(() => {
    if (isHovered) hasBeenHovered.current = true;
  }, [isHovered]);

  return (
    <Component
      className={`relative inline-block overflow-hidden ${invertOnHover ? "px-4 py-2 rounded-sm transition-colors delay-200" : ""} ${className}`}
      style={
        invertOnHover
          ? {
              backgroundColor: isHovered ? "white" : "transparent",
              color: isHovered ? "black" : "inherit",
            }
          : undefined
      }
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <AnimatePresence mode="wait">
        {!isHovered ? (
          <motion.span
            key="label"
            initial={
              hasBeenHovered.current
                ? { opacity: 0, y: 12 }
                : { opacity: 1, y: 0 }
            }
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25, ease: [0.4, 0, 0.2, 1] }}
            className="inline-block"
          >
            {label}
          </motion.span>
        ) : (
          <motion.span
            key="ticker"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 12 }}
            transition={{ duration: 0.25, ease: [0.4, 0, 0.2, 1] }}
            className="inline-flex overflow-hidden max-w-full"
          >
            <span className="inline-flex animate-ticker-scroll whitespace-nowrap [&>span]:shrink-0 [&>span]:px-4">
              <span>{text}</span>
              <span>{text}</span>
              <span>{text}</span>
            </span>
          </motion.span>
        )}
      </AnimatePresence>
    </Component>
  );
}
