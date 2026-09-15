"use client";

import Link from "next/link";
import Reveal from "@/components/Reveal";
import { heritageVenues } from "@/lib/data";

const marqueeVenues = [
  "Sandstone Ganga Ghats",
  "Assi Ghat to Chet Singh Fort",
  "BrijRama Palace Riverfront",
  "Taj Ganges Varanasi",
  "Chunar Fort Amphitheater",
  "Ramnagar Fort Grounds",
  "Awadh Heritage Courtyards",
  "Saryu Riverfront Ayodhya",
  "The Landmark Grand Kanpur",
  "NCR Luxury Resort Lawns"
];

export default function VenuesSection() {
  return (
    <section
      id="venues"
      className="venues-section"
      aria-labelledby="venues-heading"
      style={{
        padding: "clamp(60px, 9vw, 120px) var(--gutter)",
        maxWidth: "var(--max-w)",
        margin: "0 auto",
      }}
    >
      {/* ── ELEGANT HORIZONTAL MARQUEE ("CELEBRATIONS WE'VE BEEN PART OF") ── */}
      <Reveal>
        <div style={{ textAlign: "center", marginBottom: 32 }}>
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
            CELEBRATIONS ACROSS UTTAR PRADESH
          </span>
        </div>

        {/* Marquee Strip */}
        <div
          style={{
            overflow: "hidden",
            whiteSpace: "nowrap",
            padding: "16px 0",
            borderTop: "1px solid rgba(183, 154, 104, 0.18)",
            borderBottom: "1px solid rgba(183, 154, 104, 0.18)",
            marginBottom: "clamp(40px, 6vw, 64px)",
            position: "relative",
          }}
          className="venues-marquee-container"
        >
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "40px",
              animation: "marquee 35s linear infinite",
            }}
          >
            {marqueeVenues.concat(marqueeVenues).map((v, i) => (
              <div key={i} style={{ display: "inline-flex", alignItems: "center", gap: "24px" }}>
                <span
                  style={{
                    fontFamily: "var(--font-display, Georgia, serif)",
                    fontStyle: "italic",
                    fontSize: "18px",
                    letterSpacing: "0.06em",
                    color: "rgba(244, 240, 232, 0.75)",
                  }}
                >
                  {v}
                </span>
                <span style={{ fontSize: "8px", color: "var(--champagne)", opacity: 0.6 }}>✦</span>
              </div>
            ))}
          </div>
        </div>
      </Reveal>

      {/* Section Header */}
      <Reveal>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            gap: 32,
            flexWrap: "wrap",
            marginBottom: "clamp(36px, 5vw, 56px)",
          }}
        >
          <div>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 12, marginBottom: 14 }}>
              <span style={{ width: 20, height: 1, background: "var(--champagne)", opacity: 0.7 }} />
              <span className="eyebrow">HERITAGE SPACES &amp; DESTINATIONS</span>
            </div>

            <h2
              id="venues-heading"
              style={{
                fontFamily: "var(--font-display, Georgia, serif)",
                fontSize: "clamp(36px, 5.5vw, 68px)",
                fontWeight: 400,
                lineHeight: 1,
                letterSpacing: "-0.02em",
                color: "var(--ivory)",
                margin: "0 0 14px",
              }}
            >
              Spaces brought to <i>Cinema.</i>
            </h2>

            <p
              style={{
                fontFamily: "var(--font-ui, sans-serif)",
                fontSize: "14px",
                lineHeight: 1.8,
                color: "var(--muted)",
                maxWidth: 620,
                margin: 0,
                fontWeight: 300,
              }}
            >
              From sacred stone ghats of the Ganga to ancient fort ramparts and expansive destination lawns, our multi-camera cinema and crane setups are engineered specifically for historic Indian wedding venues.
            </p>
          </div>

          <Link href="/contact" className="text-link">
            DISCUSS YOUR VENUE
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
              <path d="M2 12L12 2M12 2H5M12 2V9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </Link>
        </div>
      </Reveal>

      {/* Venue Architecture Cards */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "20px",
        }}
      >
        {heritageVenues.map((venue) => (
          <Reveal key={venue.name}>
            <article
              className="glass-panel"
              style={{
                borderRadius: 4,
                overflow: "hidden",
                display: "flex",
                flexDirection: "column",
                height: "100%",
                background: "rgba(14, 14, 16, 0.6)",
                border: "1px solid rgba(183, 154, 104, 0.18)",
              }}
            >
              <div style={{ position: "relative", height: 210, overflow: "hidden" }}>
                <img
                  src={venue.image}
                  alt={venue.name}
                  loading="lazy"
                  decoding="async"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    filter: "brightness(0.88) contrast(1.05)",
                    transition: "transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)",
                  }}
                  className="venue-card-img"
                />
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background: "linear-gradient(to top, rgba(8,8,8,0.85) 0%, transparent 60%)",
                  }}
                />
                <span
                  style={{
                    position: "absolute",
                    bottom: 14,
                    left: 16,
                    fontFamily: "var(--font-ui, sans-serif)",
                    fontSize: "8px",
                    fontWeight: 700,
                    letterSpacing: "0.24em",
                    color: "var(--champagne-light)",
                    textTransform: "uppercase",
                  }}
                >
                  {venue.category} &bull; {venue.city}
                </span>
              </div>

              <div style={{ padding: "24px 22px", display: "flex", flexDirection: "column", flex: 1 }}>
                <h3
                  style={{
                    fontFamily: "var(--font-display, Georgia, serif)",
                    fontSize: "22px",
                    fontWeight: 400,
                    color: "var(--ivory)",
                    marginBottom: 10,
                  }}
                >
                  {venue.name}
                </h3>
                <p style={{ fontSize: "12.5px", color: "var(--muted)", lineHeight: 1.7, margin: 0, fontWeight: 300 }}>
                  {venue.description}
                </p>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
