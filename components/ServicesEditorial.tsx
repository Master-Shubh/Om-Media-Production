"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { ArrowUpRight, ChevronDown } from "lucide-react";
import Reveal from "@/components/Reveal";
import { primaryServices, secondaryServiceTags } from "@/lib/data";

const serviceHindiTitles: Record<string, string> = {
  "wedding-photography": "कैंडिड व पारंपरिक वेडिंग फोटोग्राफी",
  "cinematic-wedding-films": "सिनेमैटिक वेडिंग फ़िल्में व टीज़र",
  "pre-wedding-stories": "गंगा घाट व धरोहर प्री-वेडिंग शूट",
  "live-production": "32ft जिमी जिब क्रेन, लाइव प्रसारण व LED वॉल",
};

export default function ServicesEditorial() {
  const [hoveredIdx, setHoveredIdx] = useState(0);
  const [isHoveredByPointer, setIsHoveredByPointer] = useState(false);
  const [mobileExpandedIdx, setMobileExpandedIdx] = useState<number | null>(0);

  /* Auto-cycle images in services-editorial-preview-wrap every 2 seconds */
  useEffect(() => {
    if (isHoveredByPointer) return;
    const timer = setInterval(() => {
      setHoveredIdx((prev) => (prev + 1) % primaryServices.length);
    }, 2000);
    return () => clearInterval(timer);
  }, [isHoveredByPointer]);

  const toggleMobile = (index: number) => {
    setMobileExpandedIdx(mobileExpandedIdx === index ? null : index);
  };

  return (
    <section
      className="services-editorial-section"
      aria-labelledby="services-heading"
      style={{
        padding: "clamp(60px, 9vw, 130px) var(--gutter)",
        maxWidth: "var(--max-w)",
        margin: "0 auto",
      }}
    >
      {/* Section Header */}
      <Reveal>
        <div style={{ marginBottom: "clamp(36px, 5vw, 64px)" }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
            <span style={{ width: 20, height: 1, background: "var(--champagne)", opacity: 0.7 }} />
            <span className="eyebrow">OUR PRODUCTION ECOSYSTEM · हमारी प्रमुख सेवाएं</span>
          </div>
          <h2
            id="services-heading"
            style={{
              fontFamily: "var(--font-display, Georgia, serif)",
              fontSize: "clamp(36px, 5vw, 68px)",
              fontWeight: 400,
              lineHeight: 1,
              letterSpacing: "-0.02em",
              color: "var(--ivory)",
              margin: 0,
            }}
          >
            Crafted with <i>Intention.</i>
            <br />
            Produced without <i>Compromise.</i>
            <span
              className="hindi-text"
              style={{
                display: "block",
                fontFamily: "var(--font-hindi, 'Nirmala UI', 'Mangal', sans-serif)",
                fontSize: "clamp(18px, 2.4vw, 28px)",
                color: "var(--champagne-light)",
                marginTop: 12,
                fontWeight: 400,
                letterSpacing: "0.03em",
                wordSpacing: "0.22em",
                lineHeight: 1.6,
              }}
            >
              पूर्ण समर्पण एवं आधुनिक तकनीकी उत्कृष्टता के साथ
            </span>
          </h2>
        </div>
      </Reveal>

      {/* Main Grid: Desktop Editorial Hover Split + Mobile Accordion */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1.2fr 0.8fr",
          gap: "clamp(36px, 5vw, 80px)",
          alignItems: "start",
        }}
        className="services-editorial-grid"
      >
        {/* Left Column: Primary Services List */}
        <div style={{ display: "flex", flexDirection: "column" }}>
          {primaryServices.map((srv, idx) => {
            const isHovered = hoveredIdx === idx;
            const isMobileOpen = mobileExpandedIdx === idx;

            return (
              <div
                key={srv.id}
                style={{
                  borderBottom: "1px solid rgba(183, 154, 104, 0.18)",
                  padding: "24px 0",
                  transition: "background 0.3s ease",
                }}
              >
                {/* Desktop Interactive Row */}
                <div
                  className="service-row-desktop"
                  onMouseEnter={() => {
                    setIsHoveredByPointer(true);
                    setHoveredIdx(idx);
                  }}
                  onMouseLeave={() => {
                    setIsHoveredByPointer(false);
                  }}
                  onFocus={() => {
                    setIsHoveredByPointer(true);
                    setHoveredIdx(idx);
                  }}
                  onBlur={() => {
                    setIsHoveredByPointer(false);
                  }}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    cursor: "pointer",
                    textDecoration: "none",
                    color: "inherit",
                  }}
                >
                  <div style={{ display: "flex", alignItems: "baseline", gap: 20 }}>
                    <span
                      style={{
                        fontFamily: "var(--font-display, Georgia, serif)",
                        fontSize: "14px",
                        color: isHovered ? "var(--champagne-light)" : "var(--muted)",
                        letterSpacing: "0.15em",
                        transition: "color 0.3s ease",
                      }}
                    >
                      {srv.number}
                    </span>
                    <div>
                      <h3
                        style={{
                          fontFamily: "var(--font-display, Georgia, serif)",
                          fontSize: "clamp(24px, 2.6vw, 36px)",
                          fontWeight: 400,
                          letterSpacing: "0.04em",
                          color: isHovered ? "var(--ivory)" : "rgba(244,240,232,0.78)",
                          margin: 0,
                          lineHeight: 1.1,
                          transition: "color 0.3s ease, transform 0.3s ease",
                          transform: isHovered ? "translateX(6px)" : "translateX(0)",
                        }}
                      >
                        {srv.title}
                      </h3>
                      {serviceHindiTitles[srv.id] && (
                        <span
                          style={{
                            fontFamily: "var(--font-ui, sans-serif)",
                            fontSize: "12px",
                            color: "var(--champagne-light)",
                            display: "block",
                            marginTop: 3,
                            fontWeight: 400,
                          }}
                        >
                          {serviceHindiTitles[srv.id]}
                        </span>
                      )}
                      <p
                        style={{
                          fontFamily: "var(--font-ui, sans-serif)",
                          fontSize: "12.5px",
                          color: "var(--muted)",
                          margin: "6px 0 0",
                          fontWeight: 300,
                        }}
                      >
                        {srv.tagline}
                      </p>
                    </div>
                  </div>

                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 8,
                      color: isHovered ? "var(--champagne-light)" : "rgba(183, 154, 104, 0.4)",
                      transform: isHovered ? "translate(4px, -4px)" : "translate(0, 0)",
                      transition: "transform 0.3s ease, color 0.3s ease",
                    }}
                  >
                    <ArrowUpRight size={22} aria-hidden="true" />
                  </div>
                </div>

                {/* Mobile Accordion Header & Toggle */}
                <div
                  className="service-row-mobile"
                  onClick={() => toggleMobile(idx)}
                  style={{
                    display: "none",
                    alignItems: "center",
                    justifyContent: "space-between",
                    cursor: "pointer",
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
                    <span style={{ fontFamily: "var(--font-display)", fontSize: 13, color: "var(--champagne)" }}>
                      {srv.number}
                    </span>
                    <div>
                      <h3 style={{ fontFamily: "var(--font-display)", fontSize: 20, margin: 0, color: "var(--ivory)" }}>
                        {srv.title}
                      </h3>
                      {serviceHindiTitles[srv.id] && (
                        <span style={{ fontFamily: "var(--font-ui, sans-serif)", fontSize: "11px", color: "var(--champagne-light)", display: "block", marginTop: 2 }}>
                          {serviceHindiTitles[srv.id]}
                        </span>
                      )}
                    </div>
                  </div>
                  <ChevronDown
                    size={20}
                    style={{
                      color: "var(--champagne)",
                      transform: isMobileOpen ? "rotate(180deg)" : "rotate(0deg)",
                      transition: "transform 0.3s ease",
                    }}
                  />
                </div>

                {/* Mobile Expandable Accordion Body */}
                <div
                  className="service-mobile-accordion-body"
                  style={{
                    display: isMobileOpen ? "block" : "none",
                    paddingTop: 16,
                  }}
                >
                  <div
                    style={{
                      width: "100%",
                      aspectRatio: "16 / 10",
                      borderRadius: 4,
                      overflow: "hidden",
                      marginBottom: 14,
                    }}
                  >
                    <img
                      src={srv.image}
                      alt={srv.title}
                      loading="lazy"
                      decoding="async"
                      style={{ width: "100%", height: "100%", objectFit: "cover" }}
                    />
                  </div>
                  <p style={{ fontSize: 13, lineHeight: 1.7, color: "var(--muted)", margin: "0 0 12px" }}>
                    {srv.description}
                  </p>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 14 }}>
                    {srv.secondaryTags.map((t) => (
                      <span
                        key={t}
                        style={{
                          fontSize: 8.5,
                          padding: "4px 8px",
                          border: "1px solid rgba(183,154,104,0.25)",
                          color: "var(--champagne-light)",
                          textTransform: "uppercase",
                        }}
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <Link
                    href={`/services#${srv.id}`}
                    className="text-link"
                    style={{ fontSize: 9 }}
                  >
                    VIEW SERVICE DETAILS →
                  </Link>
                </div>
              </div>
            );
          })}

          {/* Secondary Services Tags Ribbon */}
          <div
            style={{
              marginTop: 36,
              paddingTop: 24,
              borderTop: "1px dashed rgba(183, 154, 104, 0.2)",
            }}
          >
            <span
              style={{
                fontFamily: "var(--font-ui, sans-serif)",
                fontSize: "8px",
                fontWeight: 600,
                letterSpacing: "0.26em",
                textTransform: "uppercase",
                color: "var(--champagne)",
                display: "block",
                marginBottom: 12,
              }}
            >
              SPECIALIZED IN-HOUSE CAPABILITIES
            </span>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
              {secondaryServiceTags.map((tag) => (
                <span
                  key={tag}
                  style={{
                    fontFamily: "var(--font-ui, sans-serif)",
                    fontSize: "9px",
                    letterSpacing: "0.15em",
                    textTransform: "uppercase",
                    padding: "6px 12px",
                    background: "rgba(18, 18, 20, 0.6)",
                    border: "1px solid rgba(183, 154, 104, 0.15)",
                    borderRadius: 2,
                    color: "rgba(244, 240, 232, 0.7)",
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Sticky Editorial Image Preview (Auto-cycling every 2 seconds) */}
        <div
          className="services-editorial-preview-wrap"
          onMouseEnter={() => setIsHoveredByPointer(true)}
          onMouseLeave={() => setIsHoveredByPointer(false)}
          style={{
            position: "sticky",
            top: "120px",
            aspectRatio: "4 / 5",
            borderRadius: 4,
            overflow: "hidden",
            border: "1px solid rgba(183, 154, 104, 0.25)",
            boxShadow: "0 25px 60px rgba(0, 0, 0, 0.75)",
          }}
          aria-hidden="true"
        >
          {/* Top Progress Segment Bars (4 Departments, 2s Cycle) */}
          <div
            style={{
              position: "absolute",
              top: 14,
              left: 16,
              right: 16,
              zIndex: 3,
              display: "flex",
              gap: 6,
            }}
          >
            {primaryServices.map((_, i) => (
              <div
                key={i}
                style={{
                  flex: 1,
                  height: 2.5,
                  borderRadius: 2,
                  background: i === hoveredIdx ? "var(--champagne)" : "rgba(255,255,255,0.22)",
                  boxShadow: i === hoveredIdx ? "0 0 8px var(--champagne)" : "none",
                  transition: "all 0.4s ease",
                }}
              />
            ))}
          </div>

          {primaryServices.map((srv, idx) => (
            <div
              key={srv.id}
              style={{
                position: "absolute",
                inset: 0,
                opacity: hoveredIdx === idx ? 1 : 0,
                transform: hoveredIdx === idx ? "scale(1)" : "scale(1.05)",
                transition: "opacity 0.8s cubic-bezier(0.4, 0, 0.2, 1), transform 2.0s cubic-bezier(0.16, 1, 0.3, 1)",
                pointerEvents: "none",
              }}
            >
              <img
                src={srv.image}
                alt={srv.title}
                loading={idx === 0 ? "eager" : "lazy"}
                decoding="async"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  filter: "brightness(0.88) contrast(1.06) saturate(1.1)",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background: "linear-gradient(to top, rgba(8,8,8,0.85) 0%, transparent 50%)",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  bottom: 24,
                  left: 24,
                  right: 24,
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-ui, sans-serif)",
                    fontSize: "8px",
                    fontWeight: 600,
                    letterSpacing: "0.28em",
                    textTransform: "uppercase",
                    color: "var(--champagne-light)",
                    display: "block",
                    marginBottom: 4,
                  }}
                >
                  DEPT {srv.number}
                </span>
                <span
                  style={{
                    fontFamily: "var(--font-display, Georgia, serif)",
                    fontSize: "22px",
                    color: "var(--ivory)",
                    lineHeight: 1.15,
                    display: "block",
                  }}
                >
                  {srv.title}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
