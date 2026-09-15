"use client";

import Link from "next/link";
import { MessageCircle, Calendar, Home } from "lucide-react";
import { getWhatsAppLink } from "@/lib/data";

export default function MobileFloatingDock() {
  const whatsappUrl = getWhatsAppLink({ page: "mobile_dock" });

  return (
    <div
      className="mobile-floating-dock"
      style={{
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 90,
        backgroundColor: "rgba(8, 8, 8, 0.94)",
        backdropFilter: "blur(16px)",
        borderTop: "1px solid rgba(183, 154, 104, 0.25)",
        padding: "8px 12px env(safe-area-inset-bottom, 10px) 12px",
        display: "none"
      }}
      aria-label="Quick mobile navigation and inquiry actions"
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1.2fr 1.3fr",
          gap: 8,
          maxWidth: 480,
          margin: "0 auto"
        }}
      >
        <Link
          href="/"
          style={{
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 6,
            backgroundColor: "rgba(20, 20, 22, 0.95)",
            border: "1px solid rgba(183, 154, 104, 0.35)",
            borderRadius: 4,
            color: "#FAF9F6",
            padding: "10px 6px",
            fontFamily: "var(--font-ui, sans-serif)",
            fontSize: 10.5,
            letterSpacing: "0.06em",
            textTransform: "uppercase",
            textDecoration: "none",
            fontWeight: 500
          }}
        >
          <Home size={14} color="#D4BA8A" />
          <span>होम · HOME</span>
        </Link>

        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 6,
            backgroundColor: "rgba(20, 20, 22, 0.95)",
            border: "1px solid rgba(183, 154, 104, 0.35)",
            borderRadius: 4,
            color: "#FAF9F6",
            padding: "10px 6px",
            fontFamily: "var(--font-ui, sans-serif)",
            fontSize: 10.5,
            letterSpacing: "0.06em",
            textTransform: "uppercase",
            textDecoration: "none",
            fontWeight: 500
          }}
        >
          <MessageCircle size={14} color="#25D366" />
          <span>व्हाट्सएप</span>
        </a>

        <Link
          href="/contact"
          style={{
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 6,
            backgroundColor: "#B79A68",
            border: "1px solid #B79A68",
            borderRadius: 4,
            color: "#080808",
            padding: "10px 6px",
            fontFamily: "var(--font-ui, sans-serif)",
            fontSize: 10.5,
            letterSpacing: "0.06em",
            textTransform: "uppercase",
            textDecoration: "none",
            fontWeight: 600
          }}
        >
          <Calendar size={14} color="#080808" />
          <span>तारीख जांचें</span>
        </Link>
      </div>

      <style jsx>{`
        @media (max-width: 768px) {
          .mobile-floating-dock {
            display: block !important;
          }
        }
      `}</style>
    </div>
  );
}
