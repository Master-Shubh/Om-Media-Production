"use client";

import Link from "next/link";
import { useEffect, useState, useRef } from "react";
import { Menu, X, ArrowUpRight, Home } from "lucide-react";
import { siteConfig } from "@/lib/data";

const navLinks = [
  ["HOME", "/"],
  ["WORK", "/portfolio"],
  ["SERVICES", "/services"],
  ["COLLECTIONS", "/packages"],
  ["STORY", "/about"],
  ["CONTACT", "/contact"],
] as const;

const navHindiMap: Record<string, string> = {
  "HOME": "होम",
  "WORK": "पोर्टफोलियो",
  "SERVICES": "सेवाएं",
  "COLLECTIONS": "पैकेज",
  "STORY": "हमारे बारे में",
  "CONTACT": "संपर्क",
};

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuBtnRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close menu on ESC
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape" && menuOpen) {
        setMenuOpen(false);
        menuBtnRef.current?.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [menuOpen]);

  // Lock scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const close = () => setMenuOpen(false);

  return (
    <header className={`header${scrolled ? " scrolled glass-level-1" : ""}`}>
      {/* Brand Logo & Monogram */}
      <Link
        href="/"
        className="brand"
        onClick={close}
        aria-label="OM Media & Productions — Home"
        style={{
          position: "relative",
          height: 48,
          display: "flex",
          alignItems: "center",
          textDecoration: "none"
        }}
      >
        {/* Full official round logo badge */}
        <div
          className="brand-logo-full"
          style={{
            display: "flex",
            alignItems: "center",
            gap: 14,
            height: "100%"
          }}
        >
          <div
            style={{
              width: "clamp(46px, 5vw, 56px)",
              height: "clamp(46px, 5vw, 56px)",
              borderRadius: "50%",
              overflow: "hidden",
              border: "2px solid rgba(212, 186, 138, 0.55)",
              boxShadow: "0 4px 20px rgba(0, 0, 0, 0.7), 0 0 16px rgba(183, 154, 104, 0.35)",
              flexShrink: 0
            }}
          >
            <img
              src="/logo/om-round-logo.png"
              alt="OM Media & Productions"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover"
              }}
            />
          </div>
          <div style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
            <span
              style={{
                fontFamily: "var(--font-display, Georgia, serif)",
                fontSize: "clamp(16px, 1.8vw, 19px)",
                fontWeight: 600,
                letterSpacing: "0.14em",
                color: "#FAF9F6",
                lineHeight: 1.1
              }}
            >
              OM MEDIA
            </span>
            <span
              style={{
                fontFamily: "var(--font-ui, sans-serif)",
                fontSize: "8.5px",
                fontWeight: 600,
                letterSpacing: "0.34em",
                color: "var(--champagne-light, #D4BA8A)",
                textTransform: "uppercase",
                marginTop: 2
              }}
            >
              PRODUCTIONS
            </span>
          </div>
        </div>
      </Link>

      {/* Desktop Navigation */}
      <nav
        className={`nav${menuOpen ? " open glass-level-3" : ""}`}
        role="navigation"
        aria-label="Main navigation"
      >
        {navLinks.map(([label, href]) => (
          <Link
            key={href}
            href={href}
            onClick={close}
            style={label === "HOME" ? { display: "inline-flex", alignItems: "center", gap: 5 } : undefined}
          >
            {label === "HOME" && <Home size={12} color="#D4BA8A" style={{ marginBottom: 1 }} />}
            <span>{label}</span>
          </Link>
        ))}
      </nav>

      {/* Desktop CTA */}
      <Link
        href="/contact"
        className="header-cta"
        aria-label="Begin your story — contact OM Media"
      >
        <span>BEGIN YOUR STORY</span>
        <ArrowUpRight size={13} strokeWidth={2} />
      </Link>

      {/* Mobile Burger Button */}
      <button
        ref={menuBtnRef}
        className="menu"
        onClick={() => setMenuOpen((o) => !o)}
        aria-label={menuOpen ? "Close navigation" : "Open navigation"}
        aria-expanded={menuOpen}
        aria-controls="mobile-nav"
      >
        {menuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile Menu Backdrop & Sheet (when menuOpen is true) */}
      {menuOpen && (
        <div
          id="mobile-nav"
          style={{
            position: "fixed",
            top: 76,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(8, 8, 8, 0.98)",
            backdropFilter: "blur(24px)",
            padding: "36px 28px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            zIndex: 9999
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            <span
              style={{
                fontFamily: "var(--font-ui, sans-serif)",
                fontSize: 10,
                letterSpacing: "0.24em",
                textTransform: "uppercase",
                color: "var(--champagne-gold, #B79A68)"
              }}
            >
              NAVIGATION · मेनू
            </span>
            {navLinks.map(([label, href]) => (
              <Link
                key={href}
                href={href}
                onClick={close}
                style={{
                  fontFamily: "var(--font-display, Georgia, serif)",
                  fontSize: 24,
                  color: label === "HOME" ? "#D4BA8A" : "#FAF9F6",
                  textDecoration: "none",
                  letterSpacing: "0.04em",
                  padding: "6px 0",
                  borderBottom: "1px solid rgba(255,255,255,0.06)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                  {label === "HOME" && <Home size={18} color="#D4BA8A" />}
                  <span>{label}</span>
                </div>
                {navHindiMap[label] && (
                  <span style={{ fontFamily: "var(--font-ui, sans-serif)", fontSize: 13, color: "var(--champagne-light)", fontWeight: 300 }}>
                    {navHindiMap[label]}
                  </span>
                )}
              </Link>
            ))}
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 16,
              paddingTop: 24,
              borderTop: "1px solid rgba(183, 154, 104, 0.2)"
            }}
          >
            <Link
              href="/contact"
              onClick={close}
              className="btn gold"
              style={{
                width: "100%",
                justifyContent: "center",
                padding: "16px",
                fontSize: 12
              }}
            >
              BEGIN YOUR STORY · बुकिंग पूछताछ
            </Link>

            <a
              href={`https://wa.me/${siteConfig.contact.whatsapp}?text=Hello%20OM%20Media,%20I%20would%20like%20to%20inquire%20about%20wedding%20coverage.`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn outline"
              style={{
                width: "100%",
                justifyContent: "center",
                padding: "14px",
                fontSize: 11
              }}
            >
              WHATSAPP CONCIERGE · व्हाट्सएप संपर्क
            </a>

            <p
              style={{
                fontFamily: "var(--font-ui, sans-serif)",
                fontSize: 10,
                letterSpacing: "0.12em",
                color: "rgba(244, 240, 232, 0.5)",
                textAlign: "center",
                marginTop: 8
              }}
            >
              VARANASI · UTTAR PRADESH · PAN-INDIA
            </p>
          </div>
        </div>
      )}
    </header>
  );
}
