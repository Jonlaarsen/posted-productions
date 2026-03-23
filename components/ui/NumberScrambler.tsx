"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "motion/react";

interface NumberScramblerProps {
  value: number;
  duration?: number;
  className?: string;
}

export function NumberScrambler({
  value,
  duration = 1500,
  className = "",
}: NumberScramblerProps) {
  const [display, setDisplay] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!isInView || hasAnimated.current) return;
    hasAnimated.current = true;

    let startTime: number | null = null;
    let rafId: number;

    const count = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3); // ease out cubic
      const current = Math.floor(eased * value);
      setDisplay(current);

      if (progress < 1) {
        rafId = requestAnimationFrame(count);
      } else {
        setDisplay(value);
      }
    };

    rafId = requestAnimationFrame(count);
    return () => cancelAnimationFrame(rafId);
  }, [value, duration, isInView]);

  return (
    <span ref={ref} className={className}>
      {display}
    </span>
  );
}
