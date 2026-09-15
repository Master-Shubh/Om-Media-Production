import Link from "next/link";
import { services, getWhatsAppLink } from "@/lib/data";
import ProductionCapabilities from "@/components/ProductionCapabilities";
import BehindTheFrame from "@/components/BehindTheFrame";
import CinematicCTA from "@/components/CinematicCTA";
import Breadcrumb from "@/components/Breadcrumb";
import { ArrowUpRight } from "lucide-react";

export const metadata = {
  title: "In-House Production Services & Technical Atelier | OM Media & Productions",
  description:
    "Explore our 4 primary production departments: Wedding Photography, Cinematic Films, Pre-Wedding Stories, and Live Production (32ft Jimmy Jib, LED Walls, Drones).",
};

export default function ServicesPage() {
  return (
    <main className="page" style={{ paddingBottom: 60 }}>
      <header className="page-hero" style={{ textAlign: "center", maxWidth: 960, margin: "0 auto", padding: "140px 24px 60px" }}>
        <Breadcrumb items={[{ label: "SERVICES" }]} />
        <p className="eyebrow">IN-HOUSE PRODUCTION ATELIER</p>
        <h1 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(40px, 6vw, 76px)", lineHeight: 1, margin: "16px 0 24px" }}>
          A Cinema Atelier Built Around <i>Your Celebration.</i>
        </h1>
        <p style={{ fontFamily: "var(--font-ui)", fontSize: 14, lineHeight: 1.8, color: "var(--muted)", maxWidth: 700, margin: "0 auto" }}>
          Unlike agencies that subcontract unknown freelancers, OM Media &amp; Productions owns and operates
          its entire technical infrastructure—from cinema camera rigs and heavy jib cranes to live LED vision mixers
          and fine-art album binding.
        </p>
      </header>

      {/* 4 Core Department Cards */}
      <section className="section" style={{ maxWidth: 1320, margin: "0 auto", padding: "0 24px 60px" }}>
        <div style={{ display: "grid", gap: 56 }}>
          {services.map((dept) => {
            const deptWaLink = getWhatsAppLink({ service: dept.title });

            return (
              <article
                key={dept.id}
                className="glass-level-2"
                style={{
                  borderRadius: 6,
                  overflow: "hidden",
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
                  gap: 0,
                  border: "1px solid rgba(183, 154, 104, 0.2)",
                  backgroundColor: "#0C0C0E",
                }}
              >
                {/* Department Image */}
                <div style={{ position: "relative", minHeight: 380, overflow: "hidden" }}>
                  <img
                    src={dept.image}
                    alt={dept.title}
                    loading="lazy"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      filter: "brightness(0.9) contrast(1.05)",
                    }}
                  />
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      background: "linear-gradient(to right, rgba(8,8,8,0.7) 0%, transparent 60%)",
                    }}
                  />
                  <span
                    style={{
                      position: "absolute",
                      top: 20,
                      left: 20,
                      fontFamily: "var(--font-display)",
                      fontSize: 18,
                      color: "var(--champagne)",
                      letterSpacing: "0.15em",
                    }}
                  >
                    DEPARTMENT {dept.number}
                  </span>
                </div>

                {/* Department Details */}
                <div style={{ padding: "clamp(32px, 4vw, 54px)", display: "flex", flexDirection: "column" }}>
                  <p
                    style={{
                      fontFamily: "var(--font-ui)",
                      fontSize: 8,
                      fontWeight: 700,
                      letterSpacing: "0.25em",
                      textTransform: "uppercase",
                      color: "var(--champagne)",
                      marginBottom: 8,
                    }}
                  >
                    {dept.tagline}
                  </p>

                  <h2
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "clamp(30px, 3.5vw, 44px)",
                      color: "var(--ivory)",
                      margin: "0 0 16px",
                      lineHeight: 1.05,
                    }}
                  >
                    {dept.title}
                  </h2>

                  <p style={{ fontSize: 13, color: "var(--muted)", lineHeight: 1.7, marginBottom: 24 }}>
                    {dept.description}
                  </p>

                  <div style={{ marginBottom: 24 }}>
                    <span
                      style={{
                        fontFamily: "var(--font-ui)",
                        fontSize: 8,
                        fontWeight: 700,
                        letterSpacing: "0.25em",
                        textTransform: "uppercase",
                        color: "var(--ivory)",
                        display: "block",
                        marginBottom: 8,
                      }}
                    >
                      HARDWARE HIGHLIGHT:
                    </span>
                    <p style={{ fontSize: 12, color: "var(--champagne-light)", margin: 0, fontStyle: "italic" }}>
                      {dept.equipmentHighlight}
                    </p>
                  </div>

                  <div style={{ marginTop: "auto", display: "flex", gap: 16, flexWrap: "wrap", alignItems: "center" }}>
                    <Link
                      href={`/services/${dept.id}`}
                      className="btn gold"
                      aria-label={`View full details of ${dept.title}`}
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: 8,
                        padding: "12px 24px",
                        fontSize: 11,
                        letterSpacing: "0.14em",
                      }}
                    >
                      <span>EXPLORE DEPARTMENT</span>
                      <ArrowUpRight size={14} />
                    </Link>
                    <a
                      href={deptWaLink}
                      target="_blank"
                      rel="noreferrer"
                      style={{
                        fontFamily: "var(--font-ui)",
                        fontSize: 10,
                        letterSpacing: "0.16em",
                        textTransform: "uppercase",
                        color: "var(--champagne)",
                        textDecoration: "none",
                      }}
                    >
                      Enquire via WhatsApp →
                    </a>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* In-House Production Capabilities & Hardware Wall */}
      <ProductionCapabilities />

      {/* Behind The Frame (BTS Discipline & Engineering Proof) */}
      <BehindTheFrame />

      {/* Final Cinematic Call to Action */}
      <CinematicCTA />
    </main>
  );
}
