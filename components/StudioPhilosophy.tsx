import Link from "next/link";
import Reveal from "@/components/Reveal";
import { mediaAssets, siteConfig } from "@/lib/data";

export default function StudioPhilosophy() {
  return (
    <section
      className="philosophy-section"
      aria-labelledby="brand-story-heading"
      style={{
        padding: "clamp(60px, 9vw, 130px) var(--gutter)",
        maxWidth: "var(--max-w)",
        margin: "0 auto",
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(min(300px, 100%), 1fr))",
          gap: "clamp(40px, 6vw, 90px)",
          alignItems: "center",
        }}
      >
        {/* Left Column: Editorial Multi-Layer Image Composition */}
        <Reveal>
          <div
            style={{
              position: "relative",
              width: "100%",
              aspectRatio: "4 / 5",
              borderRadius: 4,
              overflow: "hidden",
              border: "1px solid rgba(183, 154, 104, 0.2)",
              boxShadow: "0 25px 60px rgba(0,0,0,0.6)",
            }}
            className="philosophy-image-wrap"
          >
            <img
              src={mediaAssets.philosophyEditorial}
              alt="OM Media & Productions — Varanasi wedding story"
              loading="lazy"
              decoding="async"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                filter: "contrast(1.04) brightness(0.92)",
                transition: "transform 1.2s cubic-bezier(0.16, 1, 0.3, 1)",
              }}
              className="philosophy-image"
            />
            {/* Subtle Gradient & Texture */}
            <div
              aria-hidden="true"
              style={{
                position: "absolute",
                inset: 0,
                background: "linear-gradient(to top, rgba(8,8,8,0.7) 0%, transparent 60%)",
                pointerEvents: "none",
              }}
            />

            {/* Micro Badge floating bottom-left */}
            <div
              style={{
                position: "absolute",
                bottom: 24,
                left: 24,
                padding: "10px 16px",
                background: "rgba(10, 10, 12, 0.82)",
                backdropFilter: "blur(12px)",
                WebkitBackdropFilter: "blur(12px)",
                border: "1px solid rgba(183, 154, 104, 0.3)",
                borderRadius: 2,
              }}
            >
              <span
                style={{
                  fontFamily: "var(--font-ui, sans-serif)",
                  fontSize: "8px",
                  fontWeight: 600,
                  letterSpacing: "0.26em",
                  textTransform: "uppercase",
                  color: "var(--champagne-light)",
                  display: "block",
                }}
              >
                STUDIO DISCIPLINE
              </span>
              <span
                style={{
                  fontFamily: "var(--font-display, Georgia, serif)",
                  fontSize: "14px",
                  color: "var(--ivory)",
                  letterSpacing: "0.04em",
                }}
              >
                Varanasi Heritage × Modern Film House
              </span>
            </div>
          </div>
        </Reveal>

        {/* Right Column: Editorial Brand Story & Philosophy */}
        <Reveal>
          <div style={{ maxWidth: 540 }}>
            {/* Eyebrow */}
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 12,
                marginBottom: 16,
              }}
            >
              <span
                style={{
                  width: 20,
                  height: 1,
                  background: "var(--champagne)",
                  opacity: 0.7,
                }}
              />
              <span className="eyebrow">OUR HERITAGE &amp; ETHOS · हमारी धरोहर व सिद्धांत</span>
            </div>

            {/* Locked Heading: ROOTED IN VARANASI. CREATED FOR THE CELEBRATIONS OF INDIA. */}
            <h2
              id="brand-story-heading"
              style={{
                fontFamily: "var(--font-display, Georgia, serif)",
                fontSize: "clamp(34px, 4.2vw, 56px)",
                fontWeight: 400,
                lineHeight: 1.05,
                letterSpacing: "-0.02em",
                color: "var(--ivory)",
                margin: "0 0 24px",
              }}
            >
              Rooted in Varanasi.
              <br />
              <i style={{ color: "var(--champagne-light)", fontStyle: "italic" }}>
                Created for the celebrations of India.
              </i>
              <span
                className="hindi-text"
                style={{
                  display: "block",
                  fontFamily: "var(--font-hindi, 'Nirmala UI', 'Mangal', sans-serif)",
                  fontSize: "clamp(18px, 2.2vw, 26px)",
                  color: "var(--champagne-light)",
                  marginTop: 12,
                  fontWeight: 400,
                  letterSpacing: "0.03em",
                  wordSpacing: "0.24em",
                  lineHeight: 1.6,
                }}
              >
                काशी की पावन भूमि से — भारत के उत्सवों के लिए समर्पित
              </span>
            </h2>

            {/* Narrative Paragraphs */}
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>

              {/* Cultural Touchpoints Tags */}
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: 8,
                  paddingTop: 12,
                }}
              >
                {[
                  "Banarasi Zardozi · बनारसी जरी",
                  "Ganga Riverfront · गंगा घाट",
                  "Vedic Rituals · पवित्र फेरे",
                  "Marigold & Diyas · दीप व पुष्प",
                  "Acoustic Mantras · वैदिक मंत्र",
                  "Cinema Color Science · सिनेमा ग्रेडिंग"
                ].map((item) => (
                  <span
                    key={item}
                    style={{
                      fontFamily: "var(--font-ui, sans-serif)",
                      fontSize: "8.5px",
                      fontWeight: 600,
                      letterSpacing: "0.2em",
                      textTransform: "uppercase",
                      padding: "6px 12px",
                      border: "1px solid rgba(183, 154, 104, 0.2)",
                      borderRadius: 2,
                      color: "var(--champagne-light)",
                      backgroundColor: "rgba(183, 154, 104, 0.04)",
                    }}
                  >
                    {item}
                  </span>
                ))}
              </div>


            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
