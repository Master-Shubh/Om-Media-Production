"use client";

import Link from "next/link";
import Reveal from "@/components/Reveal";
import { deliverablesData } from "@/lib/data";
import { Film, Camera, Smartphone, Cloud, BookOpen, Check } from "lucide-react";

const categoryIcons: Record<string, React.ReactNode> = {
  "cinematic-films": <Film size={24} className="text-champagne" />,
  "photography": <Camera size={24} className="text-champagne" />,
  "social": <Smartphone size={24} className="text-champagne" />,
  "delivery": <Cloud size={24} className="text-champagne" />,
  "heirloom": <BookOpen size={24} className="text-champagne" />,
};

const hindiCategoryTitles: Record<string, string> = {
  "cinematic-films": "सिनेमैटिक फ़िल्में व टीज़र",
  "photography": "मास्टर वेडिंग फोटोग्राफी",
  "social": "इंस्टाग्राम रील्स व शॉर्ट्स",
  "delivery": "डिजिटल वॉल्ट व पेन ड्राइव",
  "heirloom": "रॉयल हैंडक्राफ्टेड एल्बम",
};

export default function Deliverables() {
  return (
    <section
      id="deliverables"
      className="deliverables-section"
      aria-labelledby="deliverables-heading"
      style={{
        padding: "clamp(60px, 9vw, 130px) var(--gutter)",
        maxWidth: "var(--max-w)",
        margin: "0 auto",
      }}
    >
      <Reveal>
        <div style={{ textAlign: "center", maxWidth: 720, margin: "0 auto clamp(40px, 6vw, 72px)" }}>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 12,
              marginBottom: 16,
              justifyContent: "center",
            }}
          >
            <span style={{ width: 20, height: 1, background: "var(--champagne)", opacity: 0.7 }} />
            <span className="eyebrow">TRANSPARENT DELIVERABLES ARCHITECTURE · स्पष्ट विवरण</span>
            <span style={{ width: 20, height: 1, background: "var(--champagne)", opacity: 0.7 }} />
          </div>

          <h2
            id="deliverables-heading"
            style={{
              fontFamily: "var(--font-display, Georgia, serif)",
              fontSize: "clamp(36px, 5.5vw, 68px)",
              fontWeight: 400,
              lineHeight: 1,
              letterSpacing: "-0.02em",
              color: "var(--ivory)",
              margin: "0 0 16px",
            }}
          >
            What You <i>Receive.</i>
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
              शादी के बाद आपको क्या मिलेगा
            </span>
          </h2>

          <p
            style={{
              fontFamily: "var(--font-ui, sans-serif)",
              fontSize: "14px",
              lineHeight: 1.8,
              color: "var(--muted)",
              margin: 0,
              fontWeight: 300,
            }}
          >
            No ambiguous promises. Every film cut, high-resolution still, and handcrafted keepsake is meticulously defined and delivered with archival precision.
          </p>
        </div>
      </Reveal>

      {/* Deliverables 5-Card Luxury Grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "20px",
        }}
      >
        {deliverablesData.map((group, idx) => (
          <Reveal key={group.id}>
            <div
              className="glass-panel"
              style={{
                padding: "32px 28px",
                display: "flex",
                flexDirection: "column",
                height: "100%",
                background: "rgba(14, 14, 16, 0.65)",
                backdropFilter: "blur(20px)",
                WebkitBackdropFilter: "blur(20px)",
                border: "1px solid rgba(183, 154, 104, 0.2)",
                borderRadius: 4,
                boxShadow: "0 20px 45px rgba(0, 0, 0, 0.5)",
                transition: "transform 0.4s ease, border-color 0.4s ease",
              }}
            >
              {/* Card Top: Icon & Category Eyebrow */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginBottom: 20,
                }}
              >
                <div
                  style={{
                    width: 44,
                    height: 44,
                    borderRadius: "50%",
                    background: "rgba(183, 154, 104, 0.08)",
                    border: "1px solid rgba(183, 154, 104, 0.25)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "var(--champagne-light)",
                  }}
                >
                  {categoryIcons[group.id] || <Film size={20} />}
                </div>
                <span
                  style={{
                    fontFamily: "var(--font-ui, sans-serif)",
                    fontSize: "8px",
                    fontWeight: 600,
                    letterSpacing: "0.26em",
                    textTransform: "uppercase",
                    color: "var(--champagne)",
                  }}
                >
                  {group.category}
                </span>
              </div>

              {/* Title & Subtitle */}
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
                {group.title}
              </h3>
              {hindiCategoryTitles[group.id] && (
                <span
                  style={{
                    fontFamily: "var(--font-ui, sans-serif)",
                    fontSize: "12px",
                    color: "var(--champagne-light)",
                    display: "block",
                    marginBottom: 10,
                  }}
                >
                  {hindiCategoryTitles[group.id]}
                </span>
              )}
              <p
                style={{
                  fontFamily: "var(--font-ui, sans-serif)",
                  fontSize: "12px",
                  lineHeight: 1.6,
                  color: "var(--muted)",
                  margin: "0 0 24px",
                  fontWeight: 300,
                }}
              >
                {group.subtitle}
              </p>

              {/* Items List */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 14,
                  marginTop: "auto",
                  paddingTop: 16,
                  borderTop: "1px solid rgba(183, 154, 104, 0.12)",
                }}
              >
                {group.items.map((item) => (
                  <div key={item.name} style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
                    <div
                      style={{
                        width: 16,
                        height: 16,
                        borderRadius: "50%",
                        background: "rgba(183, 154, 104, 0.15)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                        marginTop: 2,
                        color: "var(--champagne-light)",
                      }}
                    >
                      <Check size={10} strokeWidth={2.5} />
                    </div>
                    <div>
                      <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", gap: 8 }}>
                        <span
                          style={{
                            fontFamily: "var(--font-ui, sans-serif)",
                            fontSize: "12.5px",
                            fontWeight: 500,
                            color: "var(--ivory)",
                          }}
                        >
                          {item.name}
                        </span>
                        <span
                          style={{
                            fontFamily: "var(--font-ui, sans-serif)",
                            fontSize: "9px",
                            letterSpacing: "0.15em",
                            color: "var(--champagne)",
                            textTransform: "uppercase",
                            whiteSpace: "nowrap",
                          }}
                        >
                          {item.format}
                        </span>
                      </div>
                      <p
                        style={{
                          fontFamily: "var(--font-ui, sans-serif)",
                          fontSize: "11px",
                          lineHeight: 1.5,
                          color: "var(--muted)",
                          margin: "2px 0 0",
                          fontWeight: 300,
                        }}
                      >
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      {/* Bottom Collection Consultation Link */}
      <Reveal>
        <div
          style={{
            textAlign: "center",
            marginTop: "clamp(36px, 5vw, 60px)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 14,
          }}
        >
          <span style={{ fontSize: "13px", color: "var(--muted)", fontWeight: 300 }}>
            Every deliverable is tailored to your celebration timeline and venue architecture.
          </span>
          <Link href="/packages" className="btn outline">
            EXPLORE COLLECTIONS &amp; DELIVERABLES · सभी पैकेज देखें →
          </Link>
        </div>
      </Reveal>
    </section>
  );
}
