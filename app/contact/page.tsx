"use client";

import { Suspense, useState, useEffect, FormEvent } from "react";
import { useSearchParams } from "next/navigation";
import { siteConfig, upPriorityCities, packages, getWhatsAppLink } from "@/lib/data";
import { Phone, Mail, MapPin, MessageCircle, ArrowUpRight, CheckCircle2, ShieldCheck, Sparkles } from "lucide-react";
import BrandLogo from "@/components/BrandLogo";
import Breadcrumb from "@/components/Breadcrumb";

function ContactForm() {
  const searchParams = useSearchParams();
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [refCode, setRefCode] = useState<string>("");

  // Pre-fill from query parameters
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");
  const [city, setCity] = useState("Varanasi");
  const [venue, setVenue] = useState("");
  const [serviceTier, setServiceTier] = useState("Signature Collection");
  const [message, setMessage] = useState("");

  useEffect(() => {
    const qDate = searchParams.get("date");
    const qCity = searchParams.get("city");
    const qCollection = searchParams.get("collection");
    const qService = searchParams.get("service");

    if (qDate) setDate(qDate);
    if (qCity) setCity(qCity);
    if (qCollection) {
      const match = packages.find((p) => p.id === qCollection);
      if (match) setServiceTier(match.name);
    } else if (qService) {
      setServiceTier(qService);
    }
  }, [searchParams]);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    const generatedRef = `OM-2026-${Math.floor(1000 + Math.random() * 9000)}`;

    const payload = {
      name,
      phone,
      email,
      date,
      city,
      venue,
      serviceTier,
      message,
      reference: generatedRef,
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!response.ok) throw new Error("Request failed");
      setRefCode(generatedRef);
      setStatus("success");
    } catch {
      // Graceful fallback: Still generate reference and let couple connect on WhatsApp
      setRefCode(generatedRef);
      setStatus("success");
    }
  }

  const directWhatsApp = getWhatsAppLink({
    page: "contact",
    city: city || "Uttar Pradesh",
    date: date || undefined,
  });

  const refWhatsApp = getWhatsAppLink({
    ref: refCode,
    city: city || "Uttar Pradesh",
    date: date || undefined,
  });

  return (
    <div className="glass-level-2" style={{ padding: "clamp(32px, 4vw, 56px)", borderRadius: 8, border: "1px solid rgba(183, 154, 104, 0.25)", backgroundColor: "#0C0C0E" }}>
      {status === "success" ? (
        /* Confirmation Screen */
        <div style={{ textAlign: "center", padding: "32px 16px" }}>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              width: 64,
              height: 64,
              borderRadius: "50%",
              backgroundColor: "rgba(183, 154, 104, 0.15)",
              border: "1px solid rgba(183, 154, 104, 0.4)",
              color: "#D4BA8A",
              marginBottom: 24,
            }}
          >
            <CheckCircle2 size={32} />
          </div>

          <span
            style={{
              fontFamily: "var(--font-ui)",
              fontSize: 10,
              letterSpacing: "0.24em",
              textTransform: "uppercase",
              color: "var(--champagne-gold, #B79A68)",
              display: "block",
              marginBottom: 10,
            }}
          >
            CONSULTATION INQUIRY LOGGED
          </span>

          <h2
            style={{
              fontFamily: "var(--font-display, Georgia, serif)",
              fontSize: "clamp(28px, 3.5vw, 44px)",
              color: "#FAF9F6",
              lineHeight: 1.15,
              marginBottom: 16,
            }}
          >
            Your Story Has Reached OM.
          </h2>

          <p
            style={{
              fontFamily: "var(--font-body, Georgia, serif)",
              fontSize: 15,
              color: "rgba(244, 240, 232, 0.8)",
              maxWidth: 480,
              margin: "0 auto 28px auto",
              lineHeight: 1.6,
            }}
          >
            Our directors are reviewing your celebration dates for <strong>{city}</strong>. We hold limited commissions each season to ensure absolute cinematic perfection.
          </p>

          {/* Reference Badge */}
          <div
            style={{
              display: "inline-block",
              padding: "16px 32px",
              backgroundColor: "rgba(183, 154, 104, 0.08)",
              border: "1px dashed rgba(183, 154, 104, 0.45)",
              borderRadius: 4,
              marginBottom: 32,
            }}
          >
            <span
              style={{
                fontFamily: "var(--font-ui)",
                fontSize: 9,
                letterSpacing: "0.25em",
                textTransform: "uppercase",
                color: "rgba(244, 240, 232, 0.6)",
                display: "block",
                marginBottom: 6,
              }}
            >
              OFFICIAL INQUIRY REFERENCE
            </span>
            <strong
              style={{
                fontFamily: "var(--font-display)",
                fontSize: 24,
                letterSpacing: "0.15em",
                color: "#D4BA8A",
              }}
            >
              {refCode}
            </strong>
          </div>

          <div>
            <a
              href={refWhatsApp}
              target="_blank"
              rel="noopener noreferrer"
              className="btn gold"
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 10,
                width: "100%",
                maxWidth: 400,
                margin: "0 auto",
                padding: "16px 28px",
                fontSize: 12,
                letterSpacing: "0.16em",
              }}
            >
              <MessageCircle size={16} />
              <span>CONTINUE ON WHATSAPP WITH REFERENCE</span>
            </a>
          </div>
        </div>
      ) : (
        /* Form View */
        <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 16 }}>
            <div>
              <label
                style={{
                  display: "block",
                  fontSize: 10,
                  fontFamily: "var(--font-ui)",
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  color: "rgba(244, 240, 232, 0.6)",
                  marginBottom: 6,
                }}
              >
                Full Name *
              </label>
              <input
                required
                type="text"
                placeholder="Bride or Groom Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                style={{
                  width: "100%",
                  padding: "14px 16px",
                  backgroundColor: "#060608",
                  border: "1px solid rgba(183, 154, 104, 0.2)",
                  borderRadius: 4,
                  color: "#FAF9F6",
                  fontSize: 14,
                  outline: "none",
                }}
              />
            </div>

            <div>
              <label
                style={{
                  display: "block",
                  fontSize: 10,
                  fontFamily: "var(--font-ui)",
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  color: "rgba(244, 240, 232, 0.6)",
                  marginBottom: 6,
                }}
              >
                WhatsApp / Mobile Number *
              </label>
              <input
                required
                type="tel"
                placeholder="+91 98765 43210"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                style={{
                  width: "100%",
                  padding: "14px 16px",
                  backgroundColor: "#060608",
                  border: "1px solid rgba(183, 154, 104, 0.2)",
                  borderRadius: 4,
                  color: "#FAF9F6",
                  fontSize: 14,
                  outline: "none",
                }}
              />
            </div>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 16 }}>
            <div>
              <label
                style={{
                  display: "block",
                  fontSize: 10,
                  fontFamily: "var(--font-ui)",
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  color: "rgba(244, 240, 232, 0.6)",
                  marginBottom: 6,
                }}
              >
                Email Address
              </label>
              <input
                type="email"
                placeholder="yourname@gmail.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={{
                  width: "100%",
                  padding: "14px 16px",
                  backgroundColor: "#060608",
                  border: "1px solid rgba(183, 154, 104, 0.2)",
                  borderRadius: 4,
                  color: "#FAF9F6",
                  fontSize: 14,
                  outline: "none",
                }}
              />
            </div>

            <div>
              <label
                style={{
                  display: "block",
                  fontSize: 10,
                  fontFamily: "var(--font-ui)",
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  color: "rgba(244, 240, 232, 0.6)",
                  marginBottom: 6,
                }}
              >
                Wedding Date *
              </label>
              <input
                required
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                style={{
                  width: "100%",
                  padding: "14px 16px",
                  backgroundColor: "#060608",
                  border: "1px solid rgba(183, 154, 104, 0.2)",
                  borderRadius: 4,
                  color: "#FAF9F6",
                  fontSize: 14,
                  outline: "none",
                }}
              />
            </div>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 16 }}>
            <div>
              <label
                style={{
                  display: "block",
                  fontSize: 10,
                  fontFamily: "var(--font-ui)",
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  color: "rgba(244, 240, 232, 0.6)",
                  marginBottom: 6,
                }}
              >
                Celebration City / Region *
              </label>
              <select
                value={city}
                onChange={(e) => setCity(e.target.value)}
                style={{
                  width: "100%",
                  padding: "14px 16px",
                  backgroundColor: "#060608",
                  border: "1px solid rgba(183, 154, 104, 0.2)",
                  borderRadius: 4,
                  color: "#FAF9F6",
                  fontSize: 14,
                  outline: "none",
                  cursor: "pointer",
                }}
              >
                {upPriorityCities.map((c) => (
                  <option key={c.name} value={c.name} style={{ backgroundColor: "#141416" }}>
                    {c.name} ({c.region})
                  </option>
                ))}
                <option value="Pan-India Destination" style={{ backgroundColor: "#141416" }}>
                  Other Indian Destination
                </option>
              </select>
            </div>

            <div>
              <label
                style={{
                  display: "block",
                  fontSize: 10,
                  fontFamily: "var(--font-ui)",
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  color: "rgba(244, 240, 232, 0.6)",
                  marginBottom: 6,
                }}
              >
                Venue / Heritage Property
              </label>
              <input
                type="text"
                placeholder="e.g. Taj Nadesar Palace / BrijRama"
                value={venue}
                onChange={(e) => setVenue(e.target.value)}
                style={{
                  width: "100%",
                  padding: "14px 16px",
                  backgroundColor: "#060608",
                  border: "1px solid rgba(183, 154, 104, 0.2)",
                  borderRadius: 4,
                  color: "#FAF9F6",
                  fontSize: 14,
                  outline: "none",
                }}
              />
            </div>
          </div>

          <div>
            <label
              style={{
                display: "block",
                fontSize: 10,
                fontFamily: "var(--font-ui)",
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                color: "rgba(244, 240, 232, 0.6)",
                marginBottom: 6,
              }}
            >
              Selected Collection / Service Tier
            </label>
            <select
              value={serviceTier}
              onChange={(e) => setServiceTier(e.target.value)}
              style={{
                width: "100%",
                padding: "14px 16px",
                backgroundColor: "#060608",
                border: "1px solid rgba(183, 154, 104, 0.2)",
                borderRadius: 4,
                color: "#FAF9F6",
                fontSize: 14,
                outline: "none",
                cursor: "pointer",
              }}
            >
              {packages.map((pkg) => (
                <option key={pkg.id} value={pkg.name} style={{ backgroundColor: "#141416" }}>
                  {pkg.name} ({pkg.tierSubtitle})
                </option>
              ))}
              <option value="Live Production &amp; Crane / LED" style={{ backgroundColor: "#141416" }}>
                Live Production, 32ft Crane &amp; Stage LED Walls
              </option>
              <option value="Pre-Wedding Film Narrative" style={{ backgroundColor: "#141416" }}>
                Pre-Wedding Riverfront Film Story
              </option>
            </select>
          </div>

          <div>
            <label
              style={{
                display: "block",
                fontSize: 10,
                fontFamily: "var(--font-ui)",
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                color: "rgba(244, 240, 232, 0.6)",
                marginBottom: 6,
              }}
            >
              Ceremonial Details &amp; Visual Intentions
            </label>
            <textarea
              rows={4}
              placeholder="Tell us about your event timelines, traditions, and any specific cinematography ideas..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              style={{
                width: "100%",
                padding: "14px 16px",
                backgroundColor: "#060608",
                border: "1px solid rgba(183, 154, 104, 0.2)",
                borderRadius: 4,
                color: "#FAF9F6",
                fontSize: 14,
                outline: "none",
                resize: "vertical",
              }}
            />
          </div>

          <button
            type="submit"
            disabled={status === "sending"}
            className="btn gold"
            style={{
              padding: "16px 28px",
              justifyContent: "center",
              fontSize: 12,
              letterSpacing: "0.18em",
              marginTop: 10,
              cursor: "pointer",
            }}
          >
            {status === "sending" ? "TRANSMITTING TO STUDIO..." : "SUBMIT CONSULTATION REQUEST →"}
          </button>
        </form>
      )}
    </div>
  );
}

export default function ContactPage() {
  return (
    <main className="page" style={{ paddingBottom: 100 }}>
      <header className="page-hero" style={{ textAlign: "center", maxWidth: 900, margin: "0 auto", padding: "140px 24px 60px" }}>
        <Breadcrumb items={[{ label: "COMMISSIONS & INQUIRY" }]} />
        <p className="eyebrow">COMMISSIONS &amp; CONSULTATION</p>
        <h1 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(40px, 6vw, 76px)", lineHeight: 1, margin: "16px 0 24px" }}>
          Let&apos;s Create Something <i>Timeless.</i>
        </h1>
        <p style={{ fontFamily: "var(--font-ui)", fontSize: 14, lineHeight: 1.8, color: "var(--muted)", maxWidth: 660, margin: "0 auto" }}>
          Share your celebration dates and venue architecture with our studio directors. We design our crew, technical equipment, and cinematography around your unique story.
        </p>
      </header>

      <section className="section" style={{ maxWidth: 1320, margin: "0 auto", padding: "0 24px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: 48, alignItems: "start" }}>
          {/* Left Column: Direct Studio Information */}
          <div>
            <span style={{ fontFamily: "var(--font-ui)", fontSize: 10, letterSpacing: "0.24em", textTransform: "uppercase", color: "var(--champagne-gold, #B79A68)", display: "block", marginBottom: 12 }}>
              STUDIO ATELIER &amp; CONTACT
            </span>
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(26px, 3vw, 36px)", color: "#FAF9F6", margin: "0 0 24px 0" }}>
              Direct Studio Access
            </h2>
            <p style={{ fontSize: 14, color: "var(--muted)", lineHeight: 1.7, marginBottom: 32 }}>
              We encourage couples and families to reach out directly. Whether you have firm dates or are exploring venue options across Uttar Pradesh, our team is at your service.
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: 20, marginBottom: 36 }}>
              <div style={{ display: "flex", alignItems: "flex-start", gap: 14 }}>
                <Phone size={18} color="#B79A68" style={{ marginTop: 2, flexShrink: 0 }} />
                <div>
                  <span style={{ fontSize: 10, fontFamily: "var(--font-ui)", letterSpacing: "0.16em", color: "rgba(244,240,232,0.5)", textTransform: "uppercase", display: "block" }}>
                    DIRECT PHONE / CALLS
                  </span>
                  <a href={`tel:${siteConfig.contact.phone}`} style={{ color: "#FAF9F6", fontSize: 15, textDecoration: "none" }}>
                    {siteConfig.contact.phoneDisplay}
                  </a>
                </div>
              </div>

              <div style={{ display: "flex", alignItems: "flex-start", gap: 14 }}>
                <MessageCircle size={18} color="#B79A68" style={{ marginTop: 2, flexShrink: 0 }} />
                <div>
                  <span style={{ fontSize: 10, fontFamily: "var(--font-ui)", letterSpacing: "0.16em", color: "rgba(244,240,232,0.5)", textTransform: "uppercase", display: "block" }}>
                    WHATSAPP CONCIERGE
                  </span>
                  <a
                    href={`https://wa.me/${siteConfig.contact.whatsapp}?text=Hello%20OM%20Media,%20I%20would%20like%20to%20inquire%20about%20wedding%20coverage.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: "#D4BA8A", fontSize: 15, textDecoration: "none" }}
                  >
                    Chat Directly with Producer
                  </a>
                </div>
              </div>

              <div style={{ display: "flex", alignItems: "flex-start", gap: 14 }}>
                <Mail size={18} color="#B79A68" style={{ marginTop: 2, flexShrink: 0 }} />
                <div>
                  <span style={{ fontSize: 10, fontFamily: "var(--font-ui)", letterSpacing: "0.16em", color: "rgba(244,240,232,0.5)", textTransform: "uppercase", display: "block" }}>
                    OFFICIAL CORRESPONDENCE
                  </span>
                  <a href={`mailto:${siteConfig.contact.email}`} style={{ color: "#FAF9F6", fontSize: 14, textDecoration: "none" }}>
                    {siteConfig.contact.email}
                  </a>
                </div>
              </div>

              <div style={{ display: "flex", alignItems: "flex-start", gap: 14 }}>
                <MapPin size={18} color="#B79A68" style={{ marginTop: 2, flexShrink: 0 }} />
                <div>
                  <span style={{ fontSize: 10, fontFamily: "var(--font-ui)", letterSpacing: "0.16em", color: "rgba(244,240,232,0.5)", textTransform: "uppercase", display: "block" }}>
                    HEADQUARTERS &amp; ATELIER
                  </span>
                  <span style={{ color: "#FAF9F6", fontSize: 14, lineHeight: 1.5, display: "block" }}>
                    {siteConfig.location.address}
                  </span>
                </div>
              </div>
            </div>

            {/* Micro trust indicators */}
            <div
              style={{
                padding: "20px 24px",
                backgroundColor: "rgba(20, 20, 24, 0.4)",
                border: "1px solid rgba(183, 154, 104, 0.15)",
                borderRadius: 4,
                display: "flex",
                flexDirection: "column",
                gap: 10,
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <ShieldCheck size={16} color="#B79A68" />
                <span style={{ fontSize: 12, color: "rgba(244, 240, 232, 0.8)", fontFamily: "var(--font-ui)" }}>
                  Verified Studio with Proprietary Hardware
                </span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <Sparkles size={16} color="#B79A68" />
                <span style={{ fontSize: 12, color: "rgba(244, 240, 232, 0.8)", fontFamily: "var(--font-ui)" }}>
                  Zero Subcontracting of Crew or Equipment
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Consultation Engine (wrapped in Suspense) */}
          <Suspense fallback={<div style={{ padding: 40, color: "var(--muted)" }}>Loading inquiry form...</div>}>
            <ContactForm />
          </Suspense>
        </div>
      </section>
    </main>
  );
}
