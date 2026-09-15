"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Reveal from "@/components/Reveal";
import { mediaAssets } from "@/lib/data";

interface ShowreelProps {
  externalOpen?: boolean;
  onCloseExternal?: () => void;
}

export default function Showreel({ externalOpen, onCloseExternal }: ShowreelProps) {
  const [internalOpen, setInternalOpen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const isOpen = externalOpen !== undefined ? externalOpen : internalOpen;

  const openModal = () => {
    setInternalOpen(true);
    setIsPlaying(true);
  };

  const closeModal = useCallback(() => {
    setInternalOpen(false);
    setIsPlaying(false);
    if (onCloseExternal) onCloseExternal();
  }, [onCloseExternal]);

  /* Keyboard Escape to close */
  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeModal();
    };
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [isOpen, closeModal]);

  return (
    <>
      {/* ── FULL-WIDTH CINEMATIC SHOWREEL FRAME ── */}
      <Reveal>
        <section
          id="showreel"
          className="showreel-section"
          aria-label="OM Media & Productions — Cinematic Showreel"
          style={{
            position: "relative",
            minHeight: "75vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            overflow: "hidden",
            backgroundColor: "#050505",
            borderTop: "1px solid rgba(183, 154, 104, 0.15)",
            borderBottom: "1px solid rgba(183, 154, 104, 0.15)",
          }}
        >
          {/* Background Video / Poster Still */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              backgroundImage: `url(${mediaAssets.showreelPoster})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              filter: "brightness(0.32) contrast(1.05)",
              transform: "scale(1.02)",
              transition: "transform 1.4s cubic-bezier(0.16, 1, 0.3, 1)",
            }}
            aria-hidden="true"
          />

          {/* Cinematic Vignette */}
          <div
            aria-hidden="true"
            style={{
              position: "absolute",
              inset: 0,
              background:
                "radial-gradient(circle at center, rgba(8,8,8,0.2) 0%, rgba(8,8,8,0.85) 100%)",
            }}
          />

          {/* Showreel Callout Content */}
          <div
            style={{
              position: "relative",
              zIndex: 2,
              textAlign: "center",
              padding: "clamp(48px, 8vw, 96px) var(--gutter)",
              maxWidth: 780,
              margin: "0 auto",
            }}
          >
            {/* Eyebrow */}
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 12,
                marginBottom: 16,
              }}
            >
              <span style={{ width: 24, height: 1, background: "var(--champagne)" }} />
              <span className="eyebrow" style={{ color: "var(--champagne-light)" }}>
                CINEMATIC SHOWREEL
              </span>
              <span style={{ width: 24, height: 1, background: "var(--champagne)" }} />
            </div>

            {/* Subheading: Moments that move. */}
            <h2
              style={{
                fontFamily: "var(--font-display, Georgia, serif)",
                fontSize: "clamp(44px, 6.5vw, 92px)",
                fontWeight: 400,
                lineHeight: 0.94,
                letterSpacing: "-0.03em",
                color: "#FAF9F6",
                margin: "0 0 20px",
              }}
            >
              Moments that <i>move.</i>
            </h2>

            <p
              style={{
                fontFamily: "var(--font-ui, sans-serif)",
                fontSize: "clamp(13px, 1.25vw, 16px)",
                lineHeight: 1.8,
                color: "rgba(244, 240, 232, 0.72)",
                maxWidth: 540,
                margin: "0 auto 36px",
                fontWeight: 300,
              }}
            >
              Emotion, movement and sacred light—crafted into feature films that feel as timeless as the vows themselves.
            </p>

            {/* CTA: PLAY FILM with OM Monogram Ring */}
            <button
              onClick={openModal}
              className="btn gold"
              style={{
                padding: "16px 36px",
                fontSize: "10px",
                letterSpacing: "0.25em",
                boxShadow: "0 12px 35px rgba(183, 154, 104, 0.3)",
              }}
              aria-label="Play cinematic showreel film"
            >
              <span
                style={{
                  width: 22,
                  height: 22,
                  borderRadius: "50%",
                  border: "1px solid rgba(8,8,8,0.4)",
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "9px",
                  marginRight: 4,
                }}
              >
                ▶
              </span>
              PLAY FILM
            </button>
          </div>
        </section>
      </Reveal>

      {/* ── CINEMA SHOWREEL MODAL PLAYER ── */}
      {isOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="OM Media Cinematic Showreel Player"
          onClick={(e) => {
            if (e.target === e.currentTarget) closeModal();
          }}
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 10000,
            backgroundColor: "rgba(3, 3, 3, 0.95)",
            backdropFilter: "blur(24px)",
            WebkitBackdropFilter: "blur(24px)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "clamp(16px, 3vw, 48px)",
          }}
        >
          {/* Close Button */}
          <button
            onClick={closeModal}
            style={{
              position: "absolute",
              top: 24,
              right: 28,
              background: "rgba(20, 20, 24, 0.7)",
              border: "1px solid rgba(183, 154, 104, 0.3)",
              color: "var(--ivory)",
              fontFamily: "var(--font-ui, sans-serif)",
              fontSize: "10px",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              padding: "10px 18px",
              borderRadius: 2,
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              gap: 8,
              zIndex: 10,
            }}
            aria-label="Close showreel player"
          >
            <span>CLOSE</span>
            <span>✕</span>
          </button>

          {/* Modal Cinema Frame */}
          <div
            style={{
              position: "relative",
              width: "100%",
              maxWidth: 1100,
              aspectRatio: "16 / 9",
              backgroundColor: "#000",
              borderRadius: 4,
              overflow: "hidden",
              border: "1px solid rgba(183, 154, 104, 0.35)",
              boxShadow: "0 30px 90px rgba(0, 0, 0, 0.9)",
            }}
          >
            <video
              ref={videoRef}
              src={mediaAssets.showreelVideo}
              autoPlay
              playsInline
              controls
              muted={isMuted}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />

            {/* Subtle Brand Watermark in Player */}
            <div
              style={{
                position: "absolute",
                top: 20,
                left: 24,
                pointerEvents: "none",
                opacity: 0.7,
                display: "flex",
                alignItems: "center",
                gap: 8,
              }}
            >
              <span
                style={{
                  fontFamily: "var(--font-display, Georgia, serif)",
                  fontSize: 16,
                  color: "#FAF9F6",
                  letterSpacing: "0.15em",
                }}
              >
                OM
              </span>
              <span
                style={{
                  fontFamily: "var(--font-ui, sans-serif)",
                  fontSize: 7,
                  letterSpacing: "0.3em",
                  color: "var(--champagne)",
                }}
              >
                CINEMA
              </span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
