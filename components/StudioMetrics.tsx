import Reveal from "@/components/Reveal";

/**
 * THE STUDIO — Verified Trust & Positioning Architecture
 * Qualitative statements inspired by SRS Wedding Films trust architecture,
 * without inventing unverified numbers.
 */
const studioPillars = [
  {
    badge: "01",
    primary: "VARANASI ROOTED",
    hindi: "काशी की पावन धरोहर",
    subtitle: "Heritage & Soul · काशी धरोहर",
    detail: "Rooted in the spiritual gravitas and cultural depth of ancient Kashi."
  },
  {
    badge: "02",
    primary: "INDIA WIDE",
    hindi: "संपूर्ण भारत में कवरेज",
    subtitle: "Pan-India Coverage · देश भर में",
    detail: "Creating films and live experiences for celebrations across India."
  },
  {
    badge: "03",
    primary: "CINEMATIC STORYTELLING",
    hindi: "सिनेमा स्टाइल फ़िल्ममेकिंग",
    subtitle: "Feature-Film Craft · सिनेमैटिक कला",
    detail: "Master color science, high-speed prime glass, and acoustic clarity."
  },
  {
    badge: "04",
    primary: "PROFESSIONAL PRODUCTION",
    hindi: "हाई-टेक इन-हाउस सेटअप",
    subtitle: "In-House Infrastructure · संपूर्ण इन-हाउस",
    detail: "Heavy 32ft crane, dual drones, stage LED walls & multi-cam live broadcast."
  }
];

export default function StudioMetrics() {
  return (
    <Reveal>
      <section
        className="studio-proof-section"
        aria-label="The Studio — Verified Trust and Capabilities"
        style={{
          borderTop: "1px solid var(--line)",
          borderBottom: "1px solid var(--line)",
          background: "rgba(12, 12, 14, 0.6)",
          backdropFilter: "blur(18px)",
          WebkitBackdropFilter: "blur(18px)",
          padding: "clamp(36px, 5vw, 60px) var(--gutter)",
        }}
      >
        <div
          style={{
            maxWidth: "var(--max-w)",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: "clamp(24px, 3vw, 40px)",
          }}
        >
          {studioPillars.map((pillar) => (
            <div
              key={pillar.primary}
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 8,
                padding: "0 16px",
                borderLeft: "1px solid rgba(183, 154, 104, 0.25)",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-ui, sans-serif)",
                    fontSize: "8px",
                    fontWeight: 600,
                    letterSpacing: "0.3em",
                    textTransform: "uppercase",
                    color: "var(--champagne)",
                  }}
                >
                  {pillar.subtitle}
                </span>
                <span
                  style={{
                    fontFamily: "var(--font-ui, sans-serif)",
                    fontSize: "8px",
                    color: "rgba(183, 154, 104, 0.4)",
                  }}
                >
                  {pillar.badge}
                </span>
              </div>

              <h2
                style={{
                  fontFamily: "var(--font-display, Georgia, serif)",
                  fontSize: "clamp(20px, 1.9vw, 26px)",
                  fontWeight: 400,
                  letterSpacing: "0.02em",
                  color: "var(--ivory)",
                  lineHeight: 1.15,
                  margin: 0,
                }}
              >
                {pillar.primary}
              </h2>

              <span
                style={{
                  fontFamily: "var(--font-ui, sans-serif)",
                  fontSize: "11px",
                  color: "var(--champagne-light)",
                  fontWeight: 400,
                  marginTop: -2,
                }}
              >
                {pillar.hindi}
              </span>

              <p
                style={{
                  fontFamily: "var(--font-ui, sans-serif)",
                  fontSize: "12px",
                  lineHeight: 1.65,
                  color: "var(--muted)",
                  margin: 0,
                  fontWeight: 300,
                }}
              >
                {pillar.detail}
              </p>
            </div>
          ))}
        </div>
      </section>
    </Reveal>
  );
}
