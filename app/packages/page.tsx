import Link from "next/link";
import Collections from "@/components/Collections";
import Deliverables from "@/components/Deliverables";
import CinematicCTA from "@/components/CinematicCTA";
import Breadcrumb from "@/components/Breadcrumb";
import { CheckCircle2, ShieldCheck, Sparkles, ArrowRight } from "lucide-react";

export const metadata = {
  title: "Wedding Collections & Pricing Transparency | OM Media & Productions",
  description:
    "Explore our verified wedding cinema collections, transparent deliverables, and in-house technical crew deployment for celebrations across Varanasi and India.",
};

export default function PackagesPage() {
  return (
    <main className="page" style={{ paddingBottom: 60 }}>
      {/* Editorial Page Hero */}
      <header className="page-hero" style={{ textAlign: "center", maxWidth: 960, margin: "0 auto", padding: "140px 24px 40px" }}>
        <Breadcrumb items={[{ label: "COLLECTIONS" }]} />
        <p className="eyebrow">TRANSPARENT PRODUCTION COLLECTIONS</p>
        <h1 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(40px, 6vw, 76px)", lineHeight: 1, margin: "16px 0 24px" }}>
          Master Collections Crafted for <i>Every Celebration Scale.</i>
        </h1>
        <p style={{ fontFamily: "var(--font-ui)", fontSize: 14, lineHeight: 1.8, color: "var(--muted)", maxWidth: 700, margin: "0 auto" }}>
          We believe in absolute transparency. Below is our verified wedding production collection architecture, crew deployment, and physical tangible keepsakes—from handcrafted lay-flat albums to multi-camera crane and live LED stage infrastructure.
        </p>
      </header>

      {/* 3 Core Collections with Interactive Compare Modal & Add-ons */}
      <Collections />

      {/* Transparent Deliverables Architecture ("What You Receive") */}
      <Deliverables />

      {/* 5-Step Booking & Production Process */}
      <section className="section" style={{ maxWidth: 1320, margin: "0 auto", padding: "40px 24px 80px" }}>
        <div
          className="glass-level-1"
          style={{
            borderRadius: 6,
            padding: "56px clamp(24px, 5vw, 64px)",
            border: "1px solid rgba(183, 154, 104, 0.2)",
            backgroundColor: "#0C0C0E",
          }}
        >
          <div style={{ textAlign: "center", maxWidth: 640, margin: "0 auto 48px" }}>
            <span className="eyebrow" style={{ marginBottom: 12 }}>THE RESERVATION TIMELINE</span>
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(28px, 3.5vw, 44px)", color: "var(--ivory)", margin: 0 }}>
              How to <i>Reserve OM Media</i>
            </h2>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
              gap: 24,
            }}
          >
            {[
              {
                step: "01",
                title: "CHECK DATE",
                desc: "Transmit your celebration dates, city, and venues through our consultation form or directly on WhatsApp.",
              },
              {
                step: "02",
                title: "CONSULTATION",
                desc: "Direct creative vision alignment with founder and director Vinod Kumar to tailor crew deployment.",
              },
              {
                step: "03",
                title: "BLUEPRINT",
                desc: "Receive an itemized technical blueprint, timeline schedule, and formal commissioning contract.",
              },
              {
                step: "04",
                title: "CELEBRATION",
                desc: "Our directors, cinema rigs, Jimmy Jib crane, and aerial drones document your wedding with reverent precision.",
              },
              {
                step: "05",
                title: "HEIRLOOMS",
                desc: "Receive 4K digital films, master online gallery, signature USB box, and handcrafted Italian leather albums.",
              },
            ].map((item) => (
              <div
                key={item.step}
                style={{
                  padding: "24px 20px",
                  background: "rgba(20, 20, 24, 0.4)",
                  border: "1px solid rgba(183, 154, 104, 0.12)",
                  borderRadius: 4,
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: 26,
                    color: "var(--champagne)",
                    display: "block",
                    marginBottom: 10,
                  }}
                >
                  {item.step}
                </span>
                <h3
                  style={{
                    fontFamily: "var(--font-ui)",
                    fontSize: 12,
                    fontWeight: 700,
                    letterSpacing: "0.14em",
                    textTransform: "uppercase",
                    color: "var(--ivory)",
                    marginBottom: 8,
                  }}
                >
                  {item.title}
                </h3>
                <p style={{ fontSize: 12, color: "var(--muted)", lineHeight: 1.6, margin: 0 }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          <div style={{ textAlign: "center", marginTop: 44 }}>
            <Link
              href="/contact"
              className="btn gold"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                padding: "15px 32px",
                fontSize: 12,
                letterSpacing: "0.16em",
              }}
            >
              <span>BEGIN YOUR STORY WITH OM</span>
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* Final Cinematic Call to Action */}
      <CinematicCTA />
    </main>
  );
}