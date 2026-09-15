"use client";

import { useState, useEffect, useCallback } from "react";
import Reveal from "@/components/Reveal";
import { testimonials } from "@/lib/data";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

export default function Testimonials() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const total = testimonials.length;

  const next = useCallback(() => setActive((a) => (a + 1) % total), [total]);
  const prev = () => setActive((a) => (a - 1 + total) % total);

  /* Auto-advance every 7 seconds, pause on hover */
  useEffect(() => {
    if (paused) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return;
    const timer = setTimeout(next, 7000);
    return () => clearTimeout(timer);
  }, [active, paused, next]);

  if (!testimonials.length) return null;

  const current = testimonials[active];

  return (
    <section
      id="reviews"
      className="testimonials-section"
      aria-label="Verified Client Words and Reviews"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      style={{
        padding: "clamp(60px, 9vw, 130px) var(--gutter)",
        maxWidth: 960,
        margin: "0 auto",
        textAlign: "center",
      }}
    >
      <Reveal>
        {/* Eyebrow & Google Review Badge */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 12,
            marginBottom: "clamp(32px, 5vw, 48px)",
          }}
        >
          <div style={{ display: "inline-flex", alignItems: "center", gap: 12 }}>
            <span style={{ width: 20, height: 1, background: "var(--champagne)", opacity: 0.7 }} />
            <span className="eyebrow">WORDS OF FAMILIES &amp; COUPLES</span>
            <span style={{ width: 20, height: 1, background: "var(--champagne)", opacity: 0.7 }} />
          </div>

          {/* Google Review Trust Badge */}
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              padding: "6px 14px",
              background: "rgba(183, 154, 104, 0.08)",
              border: "1px solid rgba(183, 154, 104, 0.25)",
              borderRadius: 20,
            }}
          >
            <div style={{ display: "flex", gap: 2, color: "#E0A838" }}>
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={12} fill="#E0A838" strokeWidth={0} />
              ))}
            </div>
            <span
              style={{
                fontFamily: "var(--font-ui, sans-serif)",
                fontSize: "10px",
                fontWeight: 600,
                letterSpacing: "0.15em",
                color: "var(--ivory)",
              }}
            >
              CLIENT REFLECTIONS &amp; CELEBRATION STORIES
            </span>
          </div>
        </div>

        {/* Large Cinematic Quote */}
        <div
          key={active}
          role="blockquote"
          aria-live="polite"
          style={{
            marginBottom: 40,
            minHeight: 180,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <p
            style={{
              fontFamily: "var(--font-display, Georgia, serif)",
              fontSize: "clamp(24px, 3.2vw, 42px)",
              fontStyle: "italic",
              fontWeight: 300,
              lineHeight: 1.35,
              letterSpacing: "-0.01em",
              color: "#FAF9F6",
              margin: "0 0 28px",
            }}
          >
            &ldquo;{current.quote}&rdquo;
          </p>

          <span
            style={{
              fontFamily: "var(--font-ui, sans-serif)",
              fontSize: "13px",
              fontWeight: 600,
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              color: "var(--ivory)",
              display: "block",
              marginBottom: 4,
            }}
          >
            {current.name}
          </span>
          <span
            style={{
              fontFamily: "var(--font-ui, sans-serif)",
              fontSize: "10px",
              letterSpacing: "0.25em",
              textTransform: "uppercase",
              color: "var(--champagne)",
            }}
          >
            {current.occasion} &bull; {current.location}
          </span>
        </div>

        {/* Carousel Controls & Counter */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 24,
            marginBottom: 36,
          }}
          role="group"
          aria-label="Navigate testimonials"
        >
          <button
            onClick={prev}
            style={{
              width: 40,
              height: 40,
              borderRadius: "50%",
              background: "rgba(14, 14, 16, 0.6)",
              border: "1px solid rgba(183, 154, 104, 0.25)",
              color: "var(--champagne-light)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
            }}
            aria-label="Previous review"
          >
            <ChevronLeft size={18} />
          </button>

          <span
            style={{
              fontFamily: "var(--font-ui, sans-serif)",
              fontSize: "10px",
              letterSpacing: "0.25em",
              color: "var(--muted)",
            }}
          >
            {String(active + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
          </span>

          <button
            onClick={next}
            style={{
              width: 40,
              height: 40,
              borderRadius: "50%",
              background: "rgba(14, 14, 16, 0.6)",
              border: "1px solid rgba(183, 154, 104, 0.25)",
              color: "var(--champagne-light)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
            }}
            aria-label="Next review"
          >
            <ChevronRight size={18} />
          </button>
        </div>

        {/* Read More Reviews CTA */}
        <div>
          <a
            href="https://google.com/search?q=Om+Media+and+Productions+Varanasi"
            target="_blank"
            rel="noreferrer"
            className="text-link"
            style={{ fontSize: "9px" }}
          >
            READ MORE REVIEWS ↗
          </a>
        </div>
      </Reveal>
    </section>
  );
}
