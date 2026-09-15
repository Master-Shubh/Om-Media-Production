"use client";

import { useEffect, useCallback, useRef } from "react";
import Link from "next/link";
import { ChevronLeft, ChevronRight, X, MessageSquare, ArrowUpRight } from "lucide-react";
import { PortfolioItem, getWhatsAppLink } from "@/lib/data";

interface LightboxModalProps {
  items: PortfolioItem[];
  currentIndex: number;
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (newIndex: number) => void;
}

export default function LightboxModal({
  items,
  currentIndex,
  isOpen,
  onClose,
  onNavigate,
}: LightboxModalProps) {
  const currentItem = items[currentIndex] || items[0];
  const touchStartX = useRef<number | null>(null);

  const handlePrev = useCallback(() => {
    onNavigate(currentIndex === 0 ? items.length - 1 : currentIndex - 1);
  }, [currentIndex, items.length, onNavigate]);

  const handleNext = useCallback(() => {
    onNavigate(currentIndex === items.length - 1 ? 0 : currentIndex + 1);
  }, [currentIndex, items.length, onNavigate]);

  /* Keyboard Navigation & Escape */
  useEffect(() => {
    if (!isOpen) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      window.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose, handlePrev, handleNext]);

  /* Touch Swipe on Mobile */
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 40) {
      if (diff > 0) handleNext();
      else handlePrev();
    }
    touchStartX.current = null;
  };

  if (!isOpen || !currentItem) return null;

  const counterText = `${String(currentIndex + 1).padStart(2, "0")} / ${String(items.length).padStart(2, "0")}`;
  const whatsappUrl = getWhatsAppLink({ photoTitle: currentItem.title });

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="OM Media & Productions Portfolio Lightbox"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 10000,
        backgroundColor: "rgba(3, 3, 3, 0.96)",
        backdropFilter: "blur(28px)",
        WebkitBackdropFilter: "blur(28px)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      {/* ── TOP HEADER BAR ── */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "20px 32px",
          borderBottom: "1px solid rgba(183, 154, 104, 0.15)",
          zIndex: 10,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <span
            style={{
              fontFamily: "var(--font-display, Georgia, serif)",
              fontSize: "18px",
              letterSpacing: "0.1em",
              color: "#FAF9F6",
            }}
          >
            OM
          </span>
          <span style={{ color: "rgba(183, 154, 104, 0.4)" }}>|</span>
          <span
            style={{
              fontFamily: "var(--font-ui, sans-serif)",
              fontSize: "9px",
              fontWeight: 600,
              letterSpacing: "0.25em",
              textTransform: "uppercase",
              color: "var(--champagne-light)",
            }}
          >
            {currentItem.categoryDisplay}
          </span>
        </div>

        {/* Counter */}
        <div
          style={{
            fontFamily: "var(--font-ui, sans-serif)",
            fontSize: "10px",
            letterSpacing: "0.25em",
            color: "var(--champagne)",
          }}
        >
          {counterText}
        </div>

        {/* Close Button */}
        <button
          onClick={onClose}
          style={{
            background: "rgba(14, 14, 16, 0.7)",
            border: "1px solid rgba(183, 154, 104, 0.3)",
            color: "var(--ivory)",
            padding: "8px 14px",
            borderRadius: 2,
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            gap: 6,
            fontFamily: "var(--font-ui, sans-serif)",
            fontSize: "9px",
            letterSpacing: "0.18em",
          }}
          aria-label="Close fullscreen lightbox"
        >
          <span>CLOSE</span>
          <X size={14} />
        </button>
      </div>

      {/* ── CENTER MEDIA STAGE ── */}
      <div
        style={{
          position: "relative",
          flex: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "20px clamp(16px, 4vw, 64px)",
          overflow: "hidden",
        }}
        onClick={(e) => {
          if (e.target === e.currentTarget) onClose();
        }}
      >
        {/* Previous Navigation Button */}
        <button
          onClick={handlePrev}
          style={{
            position: "absolute",
            left: 20,
            zIndex: 10,
            background: "rgba(14, 14, 16, 0.6)",
            border: "1px solid rgba(183, 154, 104, 0.3)",
            color: "var(--champagne-light)",
            width: 44,
            height: 44,
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            transition: "background 0.2s, transform 0.2s",
          }}
          aria-label="Previous photograph"
        >
          <ChevronLeft size={22} />
        </button>

        {/* Display Image or Video */}
        <div
          style={{
            maxHeight: "75vh",
            maxWidth: "90vw",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {currentItem.isVideo && currentItem.videoUrl ? (
            <video
              src={currentItem.videoUrl}
              autoPlay
              controls
              playsInline
              style={{
                maxHeight: "75vh",
                maxWidth: "85vw",
                borderRadius: 4,
                boxShadow: "0 25px 80px rgba(0,0,0,0.8)",
                border: "1px solid rgba(183, 154, 104, 0.2)",
              }}
            />
          ) : (
            <img
              src={currentItem.image}
              alt={currentItem.title}
              style={{
                maxHeight: "75vh",
                maxWidth: "85vw",
                objectFit: "contain",
                borderRadius: 4,
                boxShadow: "0 25px 80px rgba(0,0,0,0.8)",
                border: "1px solid rgba(183, 154, 104, 0.2)",
                animation: "fadeIn 0.3s ease-out",
              }}
            />
          )}
        </div>

        {/* Next Navigation Button */}
        <button
          onClick={handleNext}
          style={{
            position: "absolute",
            right: 20,
            zIndex: 10,
            background: "rgba(14, 14, 16, 0.6)",
            border: "1px solid rgba(183, 154, 104, 0.3)",
            color: "var(--champagne-light)",
            width: 44,
            height: 44,
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            transition: "background 0.2s, transform 0.2s",
          }}
          aria-label="Next photograph"
        >
          <ChevronRight size={22} />
        </button>
      </div>

      {/* ── BOTTOM METADATA & ACTIONS BAR ── */}
      <div
        style={{
          padding: "20px clamp(20px, 4vw, 48px)",
          background: "rgba(10, 10, 12, 0.8)",
          borderTop: "1px solid rgba(183, 154, 104, 0.15)",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: 16,
          zIndex: 10,
        }}
      >
        <div>
          <h4
            style={{
              fontFamily: "var(--font-display, Georgia, serif)",
              fontSize: "clamp(18px, 2vw, 24px)",
              color: "var(--ivory)",
              margin: "0 0 4px",
              fontWeight: 400,
            }}
          >
            {currentItem.title}
          </h4>
          <p
            style={{
              fontFamily: "var(--font-ui, sans-serif)",
              fontSize: "12px",
              color: "var(--muted)",
              margin: 0,
              maxWidth: 640,
            }}
          >
            {currentItem.caption} &bull;{" "}
            <span style={{ color: "var(--champagne)" }}>
              {currentItem.venue}, {currentItem.location}
            </span>
          </p>
        </div>

        {/* Action CTAs: Inquire via WhatsApp or View Story */}
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          {currentItem.projectSlug && (
            <Link
              href={`/portfolio/${currentItem.projectSlug}`}
              className="btn outline"
              style={{
                fontSize: "8.5px",
                padding: "8px 16px",
                minHeight: 38,
              }}
            >
              READ FULL STORY
              <ArrowUpRight size={14} />
            </Link>
          )}

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noreferrer"
            className="btn gold"
            style={{
              fontSize: "8.5px",
              padding: "8px 18px",
              minHeight: 38,
            }}
          >
            <MessageSquare size={14} />
            INQUIRE THIS STYLE
          </a>
        </div>
      </div>
    </div>
  );
}
