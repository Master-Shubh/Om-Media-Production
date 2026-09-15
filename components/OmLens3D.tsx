"use client";

import { useEffect, useRef } from "react";

export default function OmLens3D() {
  const containerRef = useRef<HTMLDivElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const irisRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const stage = stageRef.current;
    const iris = irisRef.current;
    if (!container || !stage) return;

    // Mobile / Reduced Motion: Fallback to lightweight static 3D state with zero RAF loop
    const isMobile = window.innerWidth < 768 || window.matchMedia("(pointer: coarse)").matches;
    const isReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (isMobile || isReduced) {
      stage.style.transform = "rotateX(4deg) rotateY(-6deg)";
      return;
    }

    let targetRotX = 0;
    let targetRotY = 0;
    let currentRotX = 0;
    let currentRotY = 0;
    let scrollDepth = 0;
    let idleAngle = 0;
    let isInteracting = false;
    let idleTimeout: NodeJS.Timeout;
    let raf = 0;

    const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

    // State 2: Interactive (Mouse parallax + Aperture response)
    const onPointerMove = (e: PointerEvent) => {
      isInteracting = true;
      clearTimeout(idleTimeout);

      const rect = container.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const normX = (e.clientX - centerX) / (window.innerWidth / 2);
      const normY = (e.clientY - centerY) / (window.innerHeight / 2);

      targetRotY = normX * 16;
      targetRotX = -normY * 16;

      // Aperture iris subtle pupil response
      if (iris) {
        const irisScale = 1 + Math.hypot(normX, normY) * 0.08;
        iris.style.transform = `scale(${irisScale}) rotate(${normX * 25}deg)`;
      }

      // Resume idle after 2.5 seconds of inactivity
      idleTimeout = setTimeout(() => {
        isInteracting = false;
      }, 2500);
    };

    // State 3: Scroll depth movement
    const onScroll = () => {
      const scrollY = window.scrollY;
      scrollDepth = Math.min(scrollY * 0.45, 260);
    };

    // Master animation loop handling State 1 (Idle) and State 2 (Interactive)
    const animate = () => {
      if (!isInteracting) {
        // State 1: Idle slow autonomous floating harmonic wave
        idleAngle += 0.012;
        targetRotX = Math.sin(idleAngle) * 4;
        targetRotY = Math.cos(idleAngle * 0.8) * 6;
      }

      currentRotX = lerp(currentRotX, targetRotX, 0.06);
      currentRotY = lerp(currentRotY, targetRotY, 0.06);

      stage.style.transform = `rotateX(${currentRotX}deg) rotateY(${currentRotY}deg) translateZ(${-scrollDepth}px)`;
      raf = requestAnimationFrame(animate);
    };

    window.addEventListener("pointermove", onPointerMove, { passive: true });
    window.addEventListener("scroll", onScroll, { passive: true });
    raf = requestAnimationFrame(animate);

    return () => {
      clearTimeout(idleTimeout);
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="om-lens-container"
      aria-label="OM 3D Cinematic Lens System"
      role="img"
    >
      <div ref={stageRef} className="om-lens-stage">
        {/* Volumetric ambient light ray */}
        <div className="om-lens-beam" aria-hidden="true" />

        {/* Outer cinema lens barrel with focal scale markings */}
        <div className="om-lens-barrel" aria-hidden="true" />

        {/* Counter-rotating dashed depth orbital ring */}
        <div className="om-lens-orbital" aria-hidden="true" />

        {/* Inner multi-coated optical glass with specular light refraction */}
        <div className="om-lens-glass" aria-hidden="true">
          {/* Optical aperture diaphragm blades with dynamic iris response */}
          <svg
            ref={irisRef}
            viewBox="0 0 100 100"
            fill="none"
            style={{
              position: "absolute",
              inset: 0,
              width: "100%",
              height: "100%",
              opacity: 0.35,
              transformOrigin: "center center",
              transition: "transform 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
            }}
          >
            <circle cx="50" cy="50" r="44" stroke="#B79A68" strokeWidth="0.75" />
            <line x1="20" y1="20" x2="80" y2="80" stroke="#B79A68" strokeWidth="0.5" strokeDasharray="3 3" />
            <line x1="20" y1="80" x2="80" y2="20" stroke="#B79A68" strokeWidth="0.5" strokeDasharray="3 3" />
            <circle cx="50" cy="50" r="28" stroke="#D4BA8A" strokeWidth="0.75" />
          </svg>

          {/* Suspended OM Monogram Core */}
          <div className="om-lens-core">
            <img
              src="/logo/om-round-logo.png"
              alt="OM Monogram"
              width={90}
              height={90}
              style={{ objectFit: "cover", borderRadius: "50%" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
