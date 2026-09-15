"use client";

import { useEffect, useRef } from "react";

interface RevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number; // ms delay before reveal triggers
}

/**
 * Reveal — Cinematic scroll-triggered reveal.
 * Duration: 700ms (--dur-slow from CSS vars not accessible here, hardcoded).
 * Ease: cubic-bezier(0.16, 1, 0.3, 1) — defined in globals.css.
 * Respects prefers-reduced-motion (instant show).
 */
export default function Reveal({ children, className = "", delay = 0 }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // If reduced motion, show immediately
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      el.classList.add("visible");
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (delay > 0) {
            setTimeout(() => el.classList.add("visible"), delay);
          } else {
            el.classList.add("visible");
          }
          observer.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [delay]);

  return (
    <div ref={ref} className={`reveal${className ? ` ${className}` : ""}`}>
      {children}
    </div>
  );
}