"use client";

import Link from "next/link";
import Reveal from "@/components/Reveal";
import { upPriorityCities } from "@/lib/data";

const VIDEO_SRC = "https://videos.pexels.com/video-files/2483692/2483692-uhd_2560_1440_25fps.mp4";
const VIDEO_POSTER = "/images/varanasi-dawn.jpg";

const hindiCityNames: Record<string, string> = {
  "Varanasi": "काशी",
  "Lucknow": "लखनऊ",
  "Prayagraj": "प्रयागराज",
  "Ayodhya": "अयोध्या धाम",
  "Kanpur": "कानपुर",
  "Agra": "आगरा",
  "Mathura & Vrindavan": "मथुरा-वृंदावन",
  "Noida & Ghaziabad": "नोएडा",
  "Gorakhpur": "गोरखपुर",
  "Bareilly & Meerut": "बरेली-मेरठ",
};

export default function VaranasiSection() {
  return (
    <section
      id="geographic-focus"
      className="varanasi-section"
      aria-label="Uttar Pradesh First & Pan-India Destinations"
      style={{
        position: "relative",
        overflow: "hidden",
        backgroundColor: "#050505",
        padding: "clamp(60px, 9vw, 120px) var(--gutter)",
        borderTop: "1px solid rgba(183, 154, 104, 0.15)",
        borderBottom: "1px solid rgba(183, 154, 104, 0.15)",
      }}
    >
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        poster={VIDEO_POSTER}
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          filter: "brightness(0.28) contrast(1.08)",
        }}
      >
        <source src={VIDEO_SRC} type="video/mp4" />
      </video>

      {/* Dark Cinematic Vignette */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(circle at center, rgba(8,8,8,0.4) 0%, rgba(8,8,8,0.92) 100%)",
        }}
      />

      {/* Main Container */}
      <div
        style={{
          position: "relative",
          zIndex: 2,
          maxWidth: "var(--max-w)",
          margin: "0 auto",
        }}
      >
        <Reveal>
          <div style={{ textAlign: "center", maxWidth: 760, margin: "0 auto 48px" }}>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
              <span style={{ width: 24, height: 1, background: "var(--champagne)", opacity: 0.7 }} />
              <span className="eyebrow">UTTAR PRADESH FIRST · PAN-INDIA COVERAGE · उत्तर प्रदेश एवं संपूर्ण भारत</span>
              <span style={{ width: 24, height: 1, background: "var(--champagne)", opacity: 0.7 }} />
            </div>

            <h2
              style={{
                fontFamily: "var(--font-display, Georgia, serif)",
                fontSize: "clamp(38px, 5.5vw, 76px)",
                fontWeight: 400,
                lineHeight: 0.96,
                letterSpacing: "-0.03em",
                color: "#FAF9F6",
                margin: "0 0 16px",
              }}
            >
              Rooted in Varanasi.
              <br />
              <i>Creating Across Uttar Pradesh &amp; India.</i>
              <span
                className="hindi-text"
                style={{
                  display: "block",
                  fontFamily: "var(--font-hindi, 'Nirmala UI', 'Mangal', sans-serif)",
                  fontSize: "clamp(18px, 2.2vw, 26px)",
                  color: "var(--champagne-light)",
                  marginTop: 14,
                  fontWeight: 400,
                  letterSpacing: "0.03em",
                  wordSpacing: "0.24em",
                  lineHeight: 1.6,
                }}
              >
                काशी की पावन धरा से — संपूर्ण उत्तर प्रदेश व देश भर में
              </span>
            </h2>

            <p
              style={{
                fontFamily: "var(--font-ui, sans-serif)",
                fontSize: "14px",
                lineHeight: 1.8,
                color: "rgba(244, 240, 232, 0.75)",
                margin: "0 auto",
                fontWeight: 300,
              }}
            >
              From the spiritual sunrise ghats of Kashi and palatial courtyards of Awadh to the sacred banks of the Saryu in Ayodhya and monumental NCR lawns—we bring cinema-grade storytelling to celebrations across our home state, and to destination weddings pan-India.
            </p>
          </div>
        </Reveal>

        {/* Priority Cities Grid */}
        <Reveal>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              gap: "12px",
              marginBottom: "40px",
            }}
          >
            {upPriorityCities.map((city) => (
              <div
                key={city.name}
                style={{
                  background: "rgba(14, 14, 16, 0.65)",
                  backdropFilter: "blur(16px)",
                  WebkitBackdropFilter: "blur(16px)",
                  border: "1px solid rgba(183, 154, 104, 0.2)",
                  borderRadius: 3,
                  padding: "18px 20px",
                  transition: "border-color 0.3s ease, transform 0.3s ease",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 6 }}>
                  <h3
                    style={{
                      fontFamily: "var(--font-display, Georgia, serif)",
                      fontSize: "20px",
                      fontWeight: 400,
                      color: "var(--ivory)",
                      margin: 0,
                    }}
                  >
                    {city.name}
                    {hindiCityNames[city.name] && (
                      <span style={{ fontSize: "12.5px", color: "var(--champagne-light)", marginLeft: 6, fontWeight: 300 }}>
                        ({hindiCityNames[city.name]})
                      </span>
                    )}
                  </h3>
                  {city.isPrimary && (
                    <span
                      style={{
                        fontFamily: "var(--font-ui, sans-serif)",
                        fontSize: "7.5px",
                        letterSpacing: "0.2em",
                        textTransform: "uppercase",
                        color: "var(--champagne-light)",
                        padding: "2px 6px",
                        border: "1px solid rgba(183, 154, 104, 0.3)",
                        borderRadius: 2,
                      }}
                    >
                      CORE UP
                    </span>
                  )}
                </div>
                <span
                  style={{
                    fontFamily: "var(--font-ui, sans-serif)",
                    fontSize: "10.5px",
                    color: "var(--champagne)",
                    display: "block",
                    marginBottom: 4,
                  }}
                >
                  {city.region}
                </span>
                <p
                  style={{
                    fontFamily: "var(--font-ui, sans-serif)",
                    fontSize: "11px",
                    lineHeight: 1.5,
                    color: "var(--muted)",
                    margin: 0,
                    fontWeight: 300,
                  }}
                >
                  {city.highlight}
                </p>
              </div>
            ))}
          </div>
        </Reveal>

        {/* Bottom Geographical Badge & CTA */}
        <Reveal>
          <div
            style={{
              textAlign: "center",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 16,
            }}
          >
            <span
              style={{
                fontFamily: "var(--font-ui, sans-serif)",
                fontSize: "8.5px",
                fontWeight: 600,
                letterSpacing: "0.32em",
                textTransform: "uppercase",
                color: "var(--champagne)",
              }}
            >
              STUDIO HEADQUARTERS: SARNATH, VARANASI · 25°22′N 83°01′E
            </span>

            <div style={{ display: "flex", gap: 14, flexWrap: "wrap", justifyContent: "center" }}>
              <Link href="/contact" className="btn outline">
                PLAN YOUR UP OR DESTINATION WEDDING · शादी की योजना बनाएं →
              </Link>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
