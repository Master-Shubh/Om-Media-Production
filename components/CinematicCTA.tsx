import Link from "next/link";
import { mediaAssets, getWhatsAppLink } from "@/lib/data";
import { ArrowUpRight, MessageCircle } from "lucide-react";

export default function CinematicCTA() {
  const whatsappUrl = getWhatsAppLink({ page: "cta_bottom" });

  return (
    <section
      className="cinematic-cta-wrap"
      style={{
        position: "relative",
        padding: "160px 24px",
        backgroundColor: "#060607",
        overflow: "hidden",
        textAlign: "center"
      }}
      aria-label="Begin your wedding film journey with OM Media"
    >
      {/* Background cinematic imagery with atmospheric gradient */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `url(${mediaAssets.ctaBackground})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.22,
          filter: "saturate(0.8) brightness(0.6)",
          transform: "scale(1.04)"
        }}
        aria-hidden="true"
      />

      {/* Vignette gradients */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "radial-gradient(ellipse at center, rgba(8,8,8,0.5) 0%, #060607 80%)",
          pointerEvents: "none"
        }}
        aria-hidden="true"
      />

      <div
        style={{
          position: "relative",
          zIndex: 2,
          maxWidth: 860,
          margin: "0 auto"
        }}
      >
        <span
          style={{
            fontFamily: "var(--font-ui, sans-serif)",
            fontSize: 11,
            letterSpacing: "0.28em",
            textTransform: "uppercase",
            color: "var(--champagne-gold, #B79A68)",
            display: "inline-block",
            marginBottom: 20
          }}
        >
          COMMISSIONS OPEN · 2026 – 2027 · बुकिंग प्रारंभ
        </span>

        <h2
          style={{
            fontFamily: "var(--font-display, Georgia, serif)",
            fontSize: "clamp(2.5rem, 5.5vw, 4.5rem)",
            fontWeight: 400,
            lineHeight: 1.1,
            color: "#FAF9F6",
            letterSpacing: "-0.015em",
            marginBottom: 24
          }}
        >
          Your Story Deserves to be{" "}
          <span style={{ fontStyle: "italic", color: "#D4BA8A" }}>Remembered.</span>
          <span
            className="hindi-text"
            style={{
              display: "block",
              fontSize: "clamp(1.15rem, 2.2vw, 1.6rem)",
              color: "rgba(212, 186, 138, 0.92)",
              marginTop: 14,
              fontWeight: 400,
              fontFamily: "var(--font-hindi, 'Nirmala UI', 'Mangal', sans-serif)",
              letterSpacing: "0.03em",
              wordSpacing: "0.22em",
              lineHeight: 1.6,
            }}
          >
            हर विवाह एक अमर कहानी है — आइए इसे साथ मिलकर संजोएं।
          </span>
        </h2>

        <p
          style={{
            fontFamily: "var(--font-body, Georgia, serif)",
            fontSize: "clamp(15px, 1.8vw, 18px)",
            color: "rgba(244, 240, 232, 0.8)",
            lineHeight: 1.7,
            maxWidth: 640,
            margin: "0 auto 44px auto"
          }}
        >
          Every glance, every sacred ritual, every tear, and every unscripted laugh. We preserve the essence of your celebration across Varanasi, Uttar Pradesh, and throughout India.
        </p>

        {/* Dual Actions */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: 16,
            marginBottom: 32
          }}
        >
          <Link
            href="/contact"
            className="btn gold"
            style={{
              padding: "16px 36px",
              fontSize: 12,
              letterSpacing: "0.18em",
              display: "inline-flex",
              alignItems: "center",
              gap: 10
            }}
          >
            <span>BEGIN YOUR STORY · बुकिंग पूछताछ</span>
            <ArrowUpRight size={15} />
          </Link>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn outline"
            style={{
              padding: "16px 32px",
              fontSize: 12,
              letterSpacing: "0.16em",
              display: "inline-flex",
              alignItems: "center",
              gap: 10,
              borderColor: "rgba(183, 154, 104, 0.4)",
              color: "#FAF9F6"
            }}
          >
            <MessageCircle size={15} color="#D4BA8A" />
            <span>CHAT ON WHATSAPP · व्हाट्सएप पर बात करें</span>
          </a>
        </div>

        <p
          style={{
            fontFamily: "var(--font-ui, sans-serif)",
            fontSize: 11,
            color: "rgba(244, 240, 232, 0.5)",
            letterSpacing: "0.08em"
          }}
        >
          Limited commissions accepted each season · वाराणसी · लखनऊ · संपूर्ण भारत
        </p>
      </div>
    </section>
  );
}
