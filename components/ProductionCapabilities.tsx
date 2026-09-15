"use client";

import Reveal from "@/components/Reveal";
import { productionCapabilities } from "@/lib/data";

export default function ProductionCapabilities() {
  return (
    <section
      id="capabilities"
      className="capabilities-section"
      aria-labelledby="capabilities-heading"
      style={{
        padding: "clamp(60px, 9vw, 130px) var(--gutter)",
        maxWidth: "var(--max-w)",
        margin: "0 auto",
      }}
    >
      <Reveal>
        <div style={{ marginBottom: "clamp(36px, 5vw, 60px)" }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
            <span style={{ width: 20, height: 1, background: "var(--champagne)", opacity: 0.7 }} />
            <span className="eyebrow">THE OM PRODUCTION ADVANTAGE · हमारी तकनीकी क्षमता</span>
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
                id="capabilities-heading"
                style={{
                  fontFamily: "var(--font-display, Georgia, serif)",
                  fontSize: "clamp(38px, 5.5vw, 72px)",
                  fontWeight: 400,
                  lineHeight: 0.98,
                  letterSpacing: "-0.02em",
                  color: "var(--ivory)",
                  margin: "0 0 16px",
                }}
              >
                More than a <i>Camera.</i>
                <span
                  className="hindi-text"
                  style={{
                    display: "block",
                    fontFamily: "var(--font-hindi, 'Nirmala UI', 'Mangal', sans-serif)",
                    fontSize: "clamp(18px, 2.4vw, 28px)",
                    color: "var(--champagne-light)",
                    marginTop: 10,
                    fontWeight: 400,
                    letterSpacing: "0.03em",
                    wordSpacing: "0.22em",
                    lineHeight: 1.6,
                  }}
                >
                  सिर्फ कैमरा नहीं — एक संपूर्ण प्रोडक्शन हाउस
                </span>
              </h2>
              <p
                style={{
                  fontFamily: "var(--font-ui, sans-serif)",
                  fontSize: "14px",
                  lineHeight: 1.8,
                  color: "var(--muted)",
                  maxWidth: 580,
                  margin: 0,
                  fontWeight: 300,
                }}
              >
                We do not outsource gear or rely on middleman rental agencies. OM Media &amp; Productions maintains a full in-house fleet of cinema rigs, 32ft heavy cranes, live broadcast mixers, and stage LED displays.
              </p>
            </div>

            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                padding: "8px 16px",
                background: "rgba(183, 154, 104, 0.08)",
                border: "1px solid rgba(183, 154, 104, 0.25)",
                borderRadius: 2,
              }}
            >
              <span style={{ fontSize: 8, color: "var(--champagne)" }}>✦</span>
              <span
                style={{
                  fontFamily: "var(--font-ui, sans-serif)",
                  fontSize: "8.5px",
                  fontWeight: 600,
                  letterSpacing: "0.22em",
                  textTransform: "uppercase",
                  color: "var(--champagne-light)",
                }}
              >
                100% IN-HOUSE INFRASTRUCTURE · 100% इन-हाउस उपकरण
              </span>
            </div>
          </div>
        </div>
      </Reveal>

      {/* 9-Card Capabilities Wall */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "18px",
        }}
        role="list"
      >
        {productionCapabilities.map((item) => (
          <Reveal key={item.number}>
            <div
              className="glass-panel capability-card"
              role="listitem"
              style={{
                padding: "32px 28px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                minHeight: 220,
                background: "rgba(14, 14, 16, 0.65)",
                backdropFilter: "blur(20px)",
                WebkitBackdropFilter: "blur(20px)",
                border: "1px solid rgba(183, 154, 104, 0.18)",
                borderRadius: 4,
                boxShadow: "0 15px 40px rgba(0, 0, 0, 0.5)",
                transition: "border-color 0.35s ease, transform 0.35s ease",
              }}
            >
              <div>
                <span
                  style={{
                    fontFamily: "var(--font-display, Georgia, serif)",
                    fontSize: "12px",
                    color: "var(--champagne)",
                    letterSpacing: "0.15em",
                    display: "block",
                    marginBottom: 12,
                  }}
                  aria-hidden="true"
                >
                  {item.number}
                </span>
                <h3
                  style={{
                    fontFamily: "var(--font-display, Georgia, serif)",
                    fontSize: "24px",
                    fontWeight: 400,
                    color: "var(--ivory)",
                    margin: "0 0 6px",
                    lineHeight: 1.15,
                  }}
                >
                  {item.title}
                </h3>
                <span
                  style={{
                    fontFamily: "var(--font-ui, sans-serif)",
                    fontSize: "9px",
                    fontWeight: 600,
                    letterSpacing: "0.2em",
                    textTransform: "uppercase",
                    color: "var(--champagne-light)",
                    display: "block",
                    marginBottom: 12,
                  }}
                >
                  {item.highlight}
                </span>
              </div>

              <div>
                <p
                  style={{
                    fontFamily: "var(--font-ui, sans-serif)",
                    fontSize: "12px",
                    lineHeight: 1.7,
                    color: "var(--muted)",
                    margin: "0 0 14px",
                    fontWeight: 300,
                  }}
                >
                  {item.description}
                </p>
                <span
                  style={{
                    fontFamily: "var(--font-ui, sans-serif)",
                    fontSize: "8px",
                    fontWeight: 600,
                    letterSpacing: "0.2em",
                    textTransform: "uppercase",
                    color: "var(--champagne)",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 6,
                  }}
                >
                  <span style={{ fontSize: 7 }}>✦</span>
                  {item.tag}
                </span>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
