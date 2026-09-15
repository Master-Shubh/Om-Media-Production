"use client";

import { useEffect, useState } from "react";

export default function Preloader() {
  const [phase, setPhase] = useState<"init" | "loaded" | "exiting" | "done">("init");

  useEffect(() => {
    // Check if user already saw preloader in this session
    const seen = sessionStorage.getItem("om-preloader-seen");
    if (seen) {
      setPhase("done");
      return;
    }

    // Respect prefers-reduced-motion
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      sessionStorage.setItem("om-preloader-seen", "1");
      setPhase("done");
      return;
    }

    // Step 1: Subtle reveal (almost instant)
    const tStart = setTimeout(() => setPhase("loaded"), 40);

    // Step 2: Keep short and cinematic (600ms total)
    const tExit = setTimeout(() => setPhase("exiting"), 680);
    const tDone = setTimeout(() => {
      setPhase("done");
      sessionStorage.setItem("om-preloader-seen", "1");
    }, 1000);

    return () => {
      clearTimeout(tStart);
      clearTimeout(tExit);
      clearTimeout(tDone);
    };
  }, []);

  if (phase === "done") return null;

  return (
    <div
      className={`preloader ${phase === "loaded" ? "loaded" : ""} ${phase === "exiting" ? "exiting" : ""}`}
      style={{
        position: "fixed",
        inset: 0,
        backgroundColor: "#030303",
        zIndex: 9999,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 14,
        pointerEvents: phase === "exiting" ? "none" : "auto",
        opacity: phase === "exiting" ? 0 : 1,
        transition: "opacity 0.45s cubic-bezier(0.16, 1, 0.3, 1), transform 0.45s cubic-bezier(0.16, 1, 0.3, 1)",
        transform: phase === "exiting" ? "scale(1.02)" : "scale(1)"
      }}
      aria-hidden="true"
    >
      {/* Subtle OM Monogram */}
      <div
        style={{
          fontFamily: "var(--font-display, Georgia, serif)",
          fontSize: "clamp(42px, 6vw, 68px)",
          fontWeight: 400,
          letterSpacing: "0.12em",
          color: "#FAF9F6",
          lineHeight: 1,
          opacity: phase === "loaded" ? 1 : 0,
          transform: phase === "loaded" ? "translateY(0)" : "translateY(10px)",
          transition: "opacity 0.4s cubic-bezier(0.16, 1, 0.3, 1), transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)"
        }}
      >
        OM
      </div>

      {/* Subtitle */}
      <div
        style={{
          fontFamily: "var(--font-ui, sans-serif)",
          fontSize: "9px",
          fontWeight: 600,
          letterSpacing: "0.38em",
          textTransform: "uppercase",
          color: "#B79A68",
          opacity: phase === "loaded" ? 0.9 : 0,
          transition: "opacity 0.45s cubic-bezier(0.16, 1, 0.3, 1) 0.1s"
        }}
      >
        MEDIA &amp; PRODUCTIONS
      </div>

      {/* Micro hairline indicator */}
      <div
        style={{
          width: 44,
          height: 1,
          background: "rgba(183, 154, 104, 0.3)",
          marginTop: 6,
          position: "relative",
          overflow: "hidden"
        }}
      >
        <div
          style={{
            position: "absolute",
            left: 0,
            top: 0,
            bottom: 0,
            width: phase === "loaded" ? "100%" : "0%",
            background: "#B79A68",
            transition: "width 0.55s ease-out"
          }}
        />
      </div>
    </div>
  );
}
