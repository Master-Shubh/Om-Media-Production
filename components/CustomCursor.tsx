"use client";

import { useEffect, useRef } from "react";

/**
 * Custom cursor — desktop only (pointer: fine).
 * States: default dot | VIEW (image hover) | PLAY (video hover) | OPEN (link hover)
 */
export default function CustomCursor() {
  const ringRef = useRef<HTMLDivElement>(null);
  const labelRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    // Only activate on non-touch devices
    if (window.matchMedia("(pointer: coarse)").matches) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const ring = ringRef.current;
    if (!ring) return;

    let mouseX = -100;
    let mouseY = -100;
    let ringX = -100;
    let ringY = -100;
    let raf = 0;

    const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

    const animate = () => {
      ringX = lerp(ringX, mouseX, 0.12);
      ringY = lerp(ringY, mouseY, 0.12);
      ring.style.transform = `translate(${ringX - 18}px, ${ringY - 18}px)`;
      raf = requestAnimationFrame(animate);
    };

    const onMove = (e: PointerEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const setLabel = (text: string) => {
      if (labelRef.current) labelRef.current.textContent = text;
      ring.classList.add("hovering");
    };
    const clearLabel = () => {
      if (labelRef.current) labelRef.current.textContent = "";
      ring.classList.remove("hovering");
    };

    const onEnter = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const closest = target.closest<HTMLElement>(
        "a, button, [data-cursor]"
      );
      if (!closest) { clearLabel(); return; }

      const type = closest.dataset.cursor;
      if (type === "play" || closest.closest("[data-cursor='play']")) {
        setLabel("PLAY");
      } else if (type === "view" || closest.closest(".story-image-col, .showreel-section")) {
        setLabel("VIEW");
      } else {
        setLabel("OPEN");
      }
    };

    const onLeave = () => clearLabel();

    window.addEventListener("pointermove", onMove, { passive: true });
    document.addEventListener("mouseover", onEnter, { passive: true });
    document.addEventListener("mouseout", onLeave, { passive: true });
    raf = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("pointermove", onMove);
      document.removeEventListener("mouseover", onEnter);
      document.removeEventListener("mouseout", onLeave);
    };
  }, []);

  return (
    <div className="cursor-dot" aria-hidden="true">
      <div className="cursor-ring" ref={ringRef}>
        <span className="cursor-label" ref={labelRef} />
        <span className="cursor-inner-dot" />
      </div>
    </div>
  );
}
