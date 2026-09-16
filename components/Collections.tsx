"use client";

import { useState } from "react";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import CompareModal from "@/components/CompareModal";
import { packages, productionAddOns, getWhatsAppLink } from "@/lib/data";
import { Check, ArrowUpRight, SlidersHorizontal, Users, Video, Clock } from "lucide-react";

const packageHindiSubtitles: Record<string, string> = {
  "essential": "पारंपरिक व अनिवार्य विवाह कवरेज",
  "signature": "सर्वाधिक लोकप्रिय सिनेमैटिक पैकेज",
  "premium": "भव्य रॉयल व लाइव 32ft क्रेन प्रोडक्शन",
};

export default function Collections() {
  const [isCompareOpen, setIsCompareOpen] = useState(false);

  return (
    <section
      id="collections"
      className="collections-section"
      aria-labelledby="collections-heading"
      style={{
        padding: "clamp(60px, 9vw, 130px) var(--gutter)",
        maxWidth: "var(--max-w)",
        margin: "0 auto",
      }}
    >
      <Reveal>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            gap: 32,
            flexWrap: "wrap",
            marginBottom: "clamp(40px, 6vw, 70px)",
          }}
        >
          <div>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
              <span style={{ width: 20, height: 1, background: "var(--champagne)", opacity: 0.7 }} />
              <span className="eyebrow">TRANSPARENT COLLECTION ARCHITECTURE · वेडिंग पैकेज</span>
            </div>

            <h2
              id="collections-heading"
              style={{
                fontFamily: "var(--font-display, Georgia, serif)",
                fontSize: "clamp(36px, 5.5vw, 72px)",
                fontWeight: 400,
                lineHeight: 1,
                letterSpacing: "-0.02em",
                color: "var(--ivory)",
                margin: "0 0 16px",
              }}
            >
              Collections of <i>Distinction.</i>
            </h2>
          </div>

          <button
            onClick={() => setIsCompareOpen(true)}
            className="btn outline"
            style={{ display: "inline-flex", alignItems: "center", gap: 8 }}
            aria-label="Open side-by-side collections comparison"
          >
            <SlidersHorizontal size={14} />
            COMPARE COLLECTIONS · पैकेज तुलना
          </button>
        </div>
      </Reveal>

      {/* 3-Card Collections Grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(min(300px, 100%), 1fr))",
          gap: "24px",
          alignItems: "stretch",
        }}
      >
        {packages.map((pkg, idx) => {
          const isDominant = pkg.isDominant;
          const waLink = getWhatsAppLink({ packageTier: pkg.name });

          return (
            <Reveal key={pkg.id}>
              <div
                className={`glass-panel collection-card ${isDominant ? "dominant" : ""}`}
                style={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  padding: "36px 32px",
                  borderRadius: 4,
                  background: isDominant
                    ? "rgba(18, 18, 22, 0.85)"
                    : "rgba(14, 14, 16, 0.65)",
                  border: isDominant
                    ? "1px solid rgba(212, 186, 138, 0.45)"
                    : "1px solid rgba(183, 154, 104, 0.2)",
                  boxShadow: isDominant
                    ? "0 25px 60px rgba(0, 0, 0, 0.7), 0 0 30px rgba(183, 154, 104, 0.12)"
                    : "0 15px 45px rgba(0, 0, 0, 0.5)",
                  position: "relative",
                }}
              >
                {/* Top Badge */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    marginBottom: 20,
                  }}
                >
                  <span
                    style={{
                      fontFamily: "var(--font-ui, sans-serif)",
                      fontSize: "8.5px",
                      fontWeight: 600,
                      letterSpacing: "0.26em",
                      textTransform: "uppercase",
                      color: isDominant ? "var(--champagne-light)" : "var(--muted)",
                    }}
                  >
                    COLLECTION 0{idx + 1}
                  </span>
                  {isDominant && (
                    <span
                      style={{
                        fontFamily: "var(--font-ui, sans-serif)",
                        fontSize: "8px",
                        fontWeight: 600,
                        letterSpacing: "0.2em",
                        textTransform: "uppercase",
                        background: "rgba(183, 154, 104, 0.2)",
                        border: "1px solid rgba(183, 154, 104, 0.4)",
                        color: "var(--champagne-light)",
                        padding: "3px 8px",
                        borderRadius: 2,
                      }}
                    >
                      MOST REQUESTED
                    </span>
                  )}
                </div>

                {/* Name & Subtitle */}
                <h3
                  style={{
                    fontFamily: "var(--font-display, Georgia, serif)",
                    fontSize: "30px",
                    fontWeight: 400,
                    color: "var(--ivory)",
                    margin: "0 0 4px",
                    lineHeight: 1.1,
                  }}
                >
                  {pkg.name}
                </h3>
                <span
                  style={{
                    fontFamily: "var(--font-ui, sans-serif)",
                    fontSize: "8.5px",
                    letterSpacing: "0.22em",
                    textTransform: "uppercase",
                    color: "var(--champagne)",
                    display: "block",
                    marginBottom: 6,
                  }}
                >
                  {pkg.tierSubtitle}
                </span>
                {packageHindiSubtitles[pkg.id] && (
                  <span
                    style={{
                      fontFamily: "var(--font-ui, sans-serif)",
                      fontSize: "11.5px",
                      color: "var(--champagne-light)",
                      display: "block",
                      marginBottom: 16,
                      fontWeight: 400,
                    }}
                  >
                    {packageHindiSubtitles[pkg.id]}
                  </span>
                )}

                <p
                  style={{
                    fontFamily: "var(--font-ui, sans-serif)",
                    fontSize: "12.5px",
                    lineHeight: 1.65,
                    color: "var(--muted)",
                    margin: "0 0 24px",
                    fontWeight: 300,
                  }}
                >
                  {pkg.idealFor}
                </p>

                {/* Team & Coverage Specs */}
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: 10,
                    padding: "16px 0",
                    borderTop: "1px solid rgba(183, 154, 104, 0.15)",
                    borderBottom: "1px solid rgba(183, 154, 104, 0.15)",
                    marginBottom: 24,
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                    <Users size={14} style={{ color: "var(--champagne)" }} />
                    <span style={{ fontSize: "11.5px", color: "var(--ivory)" }}>
                      <b>Dedicated Crew:</b> {pkg.teamCrew.length} Specialized Professionals
                    </span>
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                    <Clock size={14} style={{ color: "var(--champagne)" }} />
                    <span style={{ fontSize: "11.5px", color: "var(--muted-light)" }}>
                      {pkg.coverageEvents}
                    </span>
                  </div>
                </div>

                {/* Deliverables Checklist */}
                <div style={{ marginBottom: 28, flex: 1 }}>
                  <span
                    style={{
                      fontFamily: "var(--font-ui, sans-serif)",
                      fontSize: "8.5px",
                      fontWeight: 600,
                      letterSpacing: "0.22em",
                      textTransform: "uppercase",
                      color: "var(--champagne-light)",
                      display: "block",
                      marginBottom: 12,
                    }}
                  >
                    KEY DELIVERABLES INCLUDED:
                  </span>
                  <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                    {pkg.deliverables.slice(0, 5).map((del) => (
                      <div key={del} style={{ display: "flex", alignItems: "flex-start", gap: 8 }}>
                        <div
                          style={{
                            width: 14,
                            height: 14,
                            borderRadius: "50%",
                            background: "rgba(183, 154, 104, 0.2)",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            flexShrink: 0,
                            marginTop: 2,
                            color: "var(--champagne-light)",
                          }}
                        >
                          <Check size={9} strokeWidth={2.5} />
                        </div>
                        <span
                          style={{
                            fontFamily: "var(--font-ui, sans-serif)",
                            fontSize: "12px",
                            lineHeight: 1.55,
                            color: "rgba(244, 240, 232, 0.8)",
                          }}
                        >
                          {del}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Actions & WhatsApp Conversion */}
                <div style={{ display: "flex", flexDirection: "column", gap: 12, marginTop: "auto" }}>
                  <Link
                    href={`/contact?collection=${pkg.id}`}
                    className={`btn ${isDominant ? "gold" : "outline"}`}
                    style={{ width: "100%", justifyContent: "center" }}
                  >
                    INQUIRE THIS COLLECTION · पूछताछ करें →
                  </Link>

                  <a
                    href={waLink}
                    target="_blank"
                    rel="noreferrer"
                    style={{
                      fontFamily: "var(--font-ui, sans-serif)",
                      fontSize: "9.5px",
                      fontWeight: 600,
                      letterSpacing: "0.15em",
                      textTransform: "uppercase",
                      color: "var(--champagne)",
                      textAlign: "center",
                      padding: "8px 0",
                    }}
                  >
                    व्हाट्सएप पर बात करें · Chat on WhatsApp →
                  </a>
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>

      {/* Production Add-ons Highlight */}
      <Reveal>
        <div
          style={{
            marginTop: "clamp(48px, 6vw, 80px)",
            padding: "36px clamp(24px, 4vw, 48px)",
            background: "rgba(14, 14, 16, 0.5)",
            border: "1px solid rgba(183, 154, 104, 0.2)",
            borderRadius: 4,
          }}
        >
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", flexWrap: "wrap", gap: 16, marginBottom: 20 }}>
            <div>
              <span className="eyebrow">CUSTOMIZE YOUR PRODUCTION</span>
              <h3
                style={{
                  fontFamily: "var(--font-display, Georgia, serif)",
                  fontSize: "26px",
                  fontWeight: 400,
                  color: "var(--ivory)",
                  margin: "6px 0 0",
                }}
              >
                Studio Add-ons &amp; Infrastructure Upgrades
              </h3>
            </div>
            <button
              onClick={() => setIsCompareOpen(true)}
              className="text-link"
              style={{ fontSize: "9px" }}
            >
              VIEW FULL COMPARISON MATRIX →
            </button>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: 16,
            }}
          >
            {productionAddOns.slice(0, 4).map((addon) => (
              <div
                key={addon.item}
                style={{
                  padding: "16px",
                  background: "rgba(20, 20, 24, 0.4)",
                  border: "1px solid rgba(183, 154, 104, 0.12)",
                  borderRadius: 2,
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-ui, sans-serif)",
                    fontSize: "12px",
                    fontWeight: 600,
                    color: "var(--ivory)",
                    display: "block",
                    marginBottom: 4,
                  }}
                >
                  {addon.item}
                </span>
                <span
                  style={{
                    fontFamily: "var(--font-ui, sans-serif)",
                    fontSize: "11px",
                    color: "var(--muted)",
                    display: "block",
                    lineHeight: 1.5,
                  }}
                >
                  {addon.note}
                </span>
              </div>
            ))}
          </div>
        </div>
      </Reveal>

      {/* Comparison Drawer / Modal */}
      <CompareModal isOpen={isCompareOpen} onClose={() => setIsCompareOpen(false)} />
    </section>
  );
}
