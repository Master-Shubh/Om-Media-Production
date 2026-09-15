import Link from "next/link";
import { siteConfig, site, upPriorityCities, getWhatsAppLink } from "@/lib/data";
import CinematicCTA from "@/components/CinematicCTA";
import Breadcrumb from "@/components/Breadcrumb";
import { ArrowUpRight, MapPin, CheckCircle2, Award, Camera, ShieldCheck } from "lucide-react";

export const metadata = {
  title: "Studio Story & Philosophy | OM Media & Productions",
  description:
    "Founded by Vinod Kumar in Varanasi. Discover the cinematic philosophy, in-house production hardware, and cultural reverence that drive OM Media & Productions.",
};

export default function AboutPage() {
  const aboutWaLink = getWhatsAppLink({
    page: "about",
    service: "Studio Consultation with Vinod Kumar",
  });

  return (
    <main className="page">
      {/* ── ABOUT HERO ── */}
      <header className="page-hero" style={{ textAlign: "center", maxWidth: 960, margin: "0 auto", padding: "140px 24px 60px" }}>
        <Breadcrumb items={[{ label: "STUDIO STORY" }]} />
        <p className="eyebrow">THE STUDIO &amp; HERITAGE</p>
        <h1 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(40px, 6vw, 76px)", lineHeight: 1, margin: "16px 0 24px" }}>
          A Cinema Atelier Rooted in <i>Varanasi.</i>
        </h1>
        <p style={{ fontFamily: "var(--font-ui)", fontSize: 14, lineHeight: 1.8, color: "var(--muted)", maxWidth: 700, margin: "0 auto" }}>
          Founded by Vinod Kumar in Sarnath, Varanasi, OM Media &amp; Productions was established on
          a singular conviction: that sacred Indian celebrations deserve more than standard documentation.
          They demand cinematic direction, deep reverence for ancestral rituals, and tangible heirlooms
          built to endure for generations.
        </p>
      </header>

      {/* ── FOUNDER VISION & ETHOS ── */}
      <section className="section" style={{ maxWidth: 1320, margin: "0 auto", padding: "20px 24px 80px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: 56, alignItems: "center" }}>
          <div style={{ position: "relative", minHeight: 480, borderRadius: 6, overflow: "hidden", border: "1px solid rgba(183, 154, 104, 0.25)" }}>
            <img
              src="/images/varanasi-dawn.jpg"
              alt="Ancient Varanasi Ganga Ghats at sunrise — Studio Heritage"
              style={{
                position: "absolute",
                inset: 0,
                width: "100%",
                height: "100%",
                objectFit: "cover",
                filter: "brightness(0.85)",
              }}
            />
            <div
              style={{
                position: "absolute",
                inset: 0,
                background: "linear-gradient(to top, rgba(6,6,7,0.92) 0%, rgba(6,6,7,0.3) 60%, transparent 100%)",
              }}
            />
            <div style={{ position: "absolute", bottom: 28, left: 28, right: 28 }}>
              <span
                style={{
                  fontFamily: "var(--font-ui)",
                  fontSize: 8,
                  fontWeight: 700,
                  letterSpacing: "0.26em",
                  color: "var(--champagne)",
                  textTransform: "uppercase",
                  display: "block",
                  marginBottom: 6,
                }}
              >
                STUDIO BASE &amp; ATELIER
              </span>
              <p style={{ fontFamily: "var(--font-display)", fontSize: 24, color: "var(--ivory)", margin: "0 0 4px 0" }}>
                {siteConfig.location.city}, {siteConfig.location.state}
              </p>
              <span style={{ fontSize: 12, color: "rgba(244, 240, 232, 0.6)", fontFamily: "var(--font-ui)" }}>
                {siteConfig.location.address}
              </span>
            </div>
          </div>

          <div>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 8, marginBottom: 12 }}>
              <span style={{ width: 16, height: 1, background: "var(--champagne)" }} />
              <span className="eyebrow">OUR CORE CONVICTION</span>
            </div>
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(32px, 4vw, 50px)",
                lineHeight: 1.05,
                color: "var(--ivory)",
                marginBottom: 20,
              }}
            >
              Emotion First. <i>Reverence Always.</i>
            </h2>
            <p className="body-copy" style={{ marginBottom: 18, fontSize: 15, lineHeight: 1.8 }}>
              In Kashi, time flows differently. When temple bells resonate across the ancient riverfront and sacred
              fires are lit on the ghats, we do not simply witness an event; we stand before centuries of living heritage.
              Our approach to wedding media is shaped by this profound cultural respect.
            </p>
            <p className="body-copy" style={{ marginBottom: 18, fontSize: 15, lineHeight: 1.8 }}>
              We orchestrate multi-camera setups that operate with quiet, unobtrusive precision. We never interrupt
              sacred Vedic pheras for artificial poses; our cinema directors capture spontaneous glances, the quiet
              tears of family elders, and the majestic grandeur of the baraat as they organically happen.
            </p>
            <p className="body-copy" style={{ marginBottom: 32, fontSize: 15, lineHeight: 1.8 }}>
              Under the creative leadership of Vinod Kumar, OM Media &amp; Productions operates as a complete in-house
              cinema atelier trusted for celebrations across Varanasi, Lucknow, Prayagraj, Ayodhya, and destination
              palaces throughout India.
            </p>

            <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
              <Link href="/contact" className="btn gold" style={{ padding: "14px 28px", fontSize: 11, letterSpacing: "0.16em" }}>
                BEGIN YOUR STORY
              </Link>
              <a
                href={aboutWaLink}
                target="_blank"
                rel="noreferrer"
                className="btn outline"
                style={{
                  padding: "14px 24px",
                  fontSize: 11,
                  letterSpacing: "0.14em",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                }}
              >
                <span>CONSULT WITH VINOD KUMAR</span>
                <ArrowUpRight size={14} color="#D4BA8A" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHY IN-HOUSE PRODUCTION MATTERS ── */}
      <section className="section" style={{ maxWidth: 1320, margin: "0 auto", padding: "0 24px 80px" }}>
        <div style={{ textAlign: "center", maxWidth: 700, margin: "0 auto 56px" }}>
          <p className="eyebrow" style={{ marginBottom: 12 }}>THE PRODUCTION DIFFERENCE</p>
          <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(32px, 4vw, 54px)", color: "var(--ivory)", margin: 0 }}>
            Why In-House <i>Infrastructure Matters</i>
          </h2>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: 24,
          }}
        >
          <div className="glass-level-2" style={{ padding: 36, borderRadius: 4, border: "1px solid rgba(183, 154, 104, 0.2)", backgroundColor: "#0E0E10" }}>
            <span style={{ fontFamily: "var(--font-display)", fontSize: 24, color: "var(--champagne)", display: "block", marginBottom: 12 }}>
              01
            </span>
            <h3 style={{ fontSize: 18, color: "var(--ivory)", marginBottom: 10, fontFamily: "var(--font-display)" }}>
              ZERO SUBCONTRACTING OF GEAR
            </h3>
            <p style={{ fontSize: 13, color: "var(--muted)", lineHeight: 1.7, margin: 0 }}>
              Many studios rent cameras or crane operators on the wedding day, introducing technical discrepancies.
              OM Media owns and calibrates its entire cinema fleet, 32-foot Jimmy Jib crane, dual drones, and field audio in-house.
            </p>
          </div>

          <div className="glass-level-2" style={{ padding: 36, borderRadius: 4, border: "1px solid rgba(183, 154, 104, 0.2)", backgroundColor: "#0E0E10" }}>
            <span style={{ fontFamily: "var(--font-display)", fontSize: 24, color: "var(--champagne)", display: "block", marginBottom: 12 }}>
              02
            </span>
            <h3 style={{ fontSize: 18, color: "var(--ivory)", marginBottom: 10, fontFamily: "var(--font-display)" }}>
              BROADCAST VISION SWITCHING
            </h3>
            <p style={{ fontSize: 13, color: "var(--muted)", lineHeight: 1.7, margin: 0 }}>
              Our live broadcast engineers feed massive outdoor LED stage walls and private high-bitrate international family streams
              directly from our on-site master control deck with zero latency or messy cabling.
            </p>
          </div>

          <div className="glass-level-2" style={{ padding: 36, borderRadius: 4, border: "1px solid rgba(183, 154, 104, 0.2)", backgroundColor: "#0E0E10" }}>
            <span style={{ fontFamily: "var(--font-display)", fontSize: 24, color: "var(--champagne)", display: "block", marginBottom: 12 }}>
              03
            </span>
            <h3 style={{ fontSize: 18, color: "var(--ivory)", marginBottom: 10, fontFamily: "var(--font-display)" }}>
              ARCHIVAL HEIRLOOM KEEPSAKES
            </h3>
            <p style={{ fontSize: 13, color: "var(--muted)", lineHeight: 1.7, margin: 0 }}>
              From archival fine-art photographic paper chemistry to handcrafted Italian leather binding and engraved signature wooden
              presentation vaults, our deliverables are crafted to be passed down through generations.
            </p>
          </div>
        </div>
      </section>

      {/* ── REGIONAL & DESTINATION REACH (UP FIRST + PAN-INDIA) ── */}
      <section className="section glass-level-1" style={{ maxWidth: 1320, margin: "0 auto 80px", borderRadius: 6, padding: "56px clamp(24px, 5vw, 64px)", border: "1px solid rgba(183, 154, 104, 0.2)" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 40, alignItems: "center" }}>
          <div>
            <p className="eyebrow" style={{ marginBottom: 12 }}>GEOGRAPHIC ARCHITECTURE</p>
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(28px, 3vw, 40px)", color: "var(--ivory)", margin: "0 0 16px" }}>
              Rooted in Uttar Pradesh.<br />Serving Celebrations Across India.
            </h2>
            <p style={{ fontSize: 14, color: "var(--muted)", lineHeight: 1.7, margin: "0 0 20px 0" }}>
              While our creative base is established in Sarnath and the Varanasi ghats, our crew regularly travels
              across Uttar Pradesh and major Indian destination wedding regions.
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
              {upPriorityCities.map((city) => (
                <span
                  key={city.name}
                  style={{
                    padding: "4px 10px",
                    backgroundColor: "rgba(183, 154, 104, 0.1)",
                    border: "1px solid rgba(183, 154, 104, 0.25)",
                    borderRadius: 2,
                    fontSize: 10,
                    fontFamily: "var(--font-ui)",
                    color: "#FAF9F6",
                    letterSpacing: "0.08em"
                  }}
                >
                  {city.name}
                </span>
              ))}
              <span
                style={{
                  padding: "4px 10px",
                  backgroundColor: "rgba(183, 154, 104, 0.2)",
                  border: "1px solid rgba(183, 154, 104, 0.4)",
                  borderRadius: 2,
                  fontSize: 10,
                  fontFamily: "var(--font-ui)",
                  color: "#D4BA8A",
                  letterSpacing: "0.08em"
                }}
              >
                + Pan-India Destinations
              </span>
            </div>
          </div>

          <div style={{ background: "rgba(8,8,8,0.6)", padding: 32, borderRadius: 4, border: "1px solid rgba(255,255,255,0.06)" }}>
            <p style={{ fontFamily: "var(--font-ui)", fontSize: 9, letterSpacing: "0.22em", textTransform: "uppercase", color: "var(--champagne)", marginBottom: 16 }}>
              STUDIO CAPABILITIES &amp; INTEGRITY:
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              {[
                "Direct communication with founder Vinod Kumar",
                "Dedicated cinema directors with multi-angle capture",
                "Comprehensive equipment redundancy on every wedding day",
                "Strict adherence to traditional muhurat schedules"
              ].map((item) => (
                <div key={item} style={{ display: "flex", alignItems: "center", gap: 10 }}>
                  <CheckCircle2 size={16} color="#B79A68" style={{ flexShrink: 0 }} />
                  <span style={{ fontSize: 13, color: "var(--ivory)", fontFamily: "var(--font-ui)" }}>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final Cinematic Call to Action */}
      <CinematicCTA />
    </main>
  );
}
