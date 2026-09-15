"use client";

import Reveal from "@/components/Reveal";
import { btsStories } from "@/lib/data";

export default function BehindTheFrame() {
  return (
    <section
      id="behind-the-frame"
      className="bts-section"
      aria-labelledby="bts-heading"
      style={{
        padding: "clamp(60px, 9vw, 130px) var(--gutter)",
        maxWidth: "var(--max-w)",
        margin: "0 auto",
        borderTop: "1px solid rgba(183, 154, 104, 0.15)",
      }}
    >
      <Reveal>
        <div style={{ marginBottom: "clamp(36px, 5vw, 64px)" }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
            <span style={{ width: 20, height: 1, background: "var(--champagne)", opacity: 0.7 }} />
            <span className="eyebrow">PROFESSIONAL TRUST &amp; DISCIPLINE</span>
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-end",
              gap: 32,
              flexWrap: "wrap",
            }}
          >
            <div>
              <h2
                id="bts-heading"
                style={{
                  fontFamily: "var(--font-display, Georgia, serif)",
                  fontSize: "clamp(36px, 5vw, 68px)",
                  fontWeight: 400,
                  lineHeight: 1,
                  letterSpacing: "-0.02em",
                  color: "var(--ivory)",
                  margin: "0 0 16px",
                }}
              >
                Behind the <i>Frame.</i>
              </h2>
              <p
                style={{
                  fontFamily: "var(--font-ui, sans-serif)",
                  fontSize: "14px",
                  lineHeight: 1.8,
                  color: "var(--muted)",
                  maxWidth: 560,
                  margin: 0,
                  fontWeight: 300,
                }}
              >
                How our cinematographers, sound engineers, and colorists coordinate in unison to turn raw sacred ceremonies into generational cinema.
              </p>
            </div>
          </div>
        </div>
      </Reveal>

      {/* 4-Card Visual BTS Grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "24px",
        }}
      >
        {btsStories.map((bts) => (
          <Reveal key={bts.id}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 16,
              }}
            >
              {/* Image Container with subtle hover zoom */}
              <div
                style={{
                  position: "relative",
                  width: "100%",
                  aspectRatio: "16 / 11",
                  borderRadius: 4,
                  overflow: "hidden",
                  border: "1px solid rgba(183, 154, 104, 0.2)",
                  boxShadow: "0 15px 35px rgba(0, 0, 0, 0.6)",
                }}
              >
                <img
                  src={bts.image}
                  alt={bts.title}
                  loading="lazy"
                  decoding="async"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    filter: "brightness(0.85) contrast(1.05)",
                    transition: "transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "scale(1.05)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "scale(1)";
                  }}
                />
                <div
                  style={{
                    position: "absolute",
                    top: 14,
                    left: 14,
                    padding: "4px 10px",
                    background: "rgba(8, 8, 8, 0.75)",
                    backdropFilter: "blur(8px)",
                    WebkitBackdropFilter: "blur(8px)",
                    border: "1px solid rgba(183, 154, 104, 0.3)",
                    borderRadius: 2,
                  }}
                >
                  <span
                    style={{
                      fontFamily: "var(--font-ui, sans-serif)",
                      fontSize: "8px",
                      fontWeight: 600,
                      letterSpacing: "0.22em",
                      textTransform: "uppercase",
                      color: "var(--champagne-light)",
                    }}
                  >
                    STEP {bts.step}
                  </span>
                </div>
              </div>

              {/* Description */}
              <div>
                <span
                  style={{
                    fontFamily: "var(--font-ui, sans-serif)",
                    fontSize: "8.5px",
                    fontWeight: 600,
                    letterSpacing: "0.25em",
                    textTransform: "uppercase",
                    color: "var(--champagne)",
                    display: "block",
                    marginBottom: 4,
                  }}
                >
                  {bts.discipline}
                </span>
                <h3
                  style={{
                    fontFamily: "var(--font-display, Georgia, serif)",
                    fontSize: "22px",
                    fontWeight: 400,
                    color: "var(--ivory)",
                    margin: "0 0 8px",
                    lineHeight: 1.2,
                  }}
                >
                  {bts.title}
                </h3>
                <p
                  style={{
                    fontFamily: "var(--font-ui, sans-serif)",
                    fontSize: "12.5px",
                    lineHeight: 1.7,
                    color: "var(--muted)",
                    margin: 0,
                    fontWeight: 300,
                  }}
                >
                  {bts.description}
                </p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
