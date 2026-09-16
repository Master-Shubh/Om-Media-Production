import Link from "next/link";
import { siteConfig, upPriorityCities, getWhatsAppLink } from "@/lib/data";
import BrandLogo from "@/components/BrandLogo";
import { ArrowUpRight, Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();
  const whatsappUrl = getWhatsAppLink({ page: "footer" });

  return (
    <footer
      className="footer"
      style={{
        backgroundColor: "#060607",
        color: "#FAF9F6",
        position: "relative",
        overflow: "hidden",
        borderTop: "1px solid rgba(183, 154, 104, 0.16)",
        paddingTop: "clamp(60px, 8vw, 100px)",
        paddingBottom: 100
      }}
      aria-label="OM Media & Productions footer"
    >
      {/* Giant Monogram Watermark */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          top: "15%",
          left: "50%",
          transform: "translateX(-50%)",
          fontFamily: "var(--font-display, Georgia, serif)",
          fontSize: "clamp(180px, 30vw, 420px)",
          fontWeight: 400,
          color: "rgba(183, 154, 104, 0.025)",
          letterSpacing: "0.08em",
          pointerEvents: "none",
          userSelect: "none",
          lineHeight: 0.8
        }}
      >
        OM
      </div>

      <div
        style={{
          maxWidth: 1320,
          margin: "0 auto",
          padding: "0 24px",
          position: "relative",
          zIndex: 2
        }}
      >
        {/* Main Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: "48px 36px",
            marginBottom: 80
          }}
        >
          {/* Column 1: Brand & Philosophy */}
          <div style={{ maxWidth: 360 }}>
            <BrandLogo variant="full" size="lg" />
            <p
              style={{
                fontFamily: "var(--font-display, Georgia, serif)",
                fontSize: 16,
                color: "rgba(244, 240, 232, 0.85)",
                lineHeight: 1.5,
                marginTop: 20,
                marginBottom: 16
              }}
            >
              Turning Moments into Masterpieces.
              <span style={{ display: "block", fontSize: 13, color: "var(--champagne-gold, #B79A68)", marginTop: 4 }}>
                अनमोल पलों को अमर कलाकृतियों में ढालते हुए।
              </span>
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              <a
                href={`tel:${siteConfig.contact.phone}`}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 10,
                  color: "#FAF9F6",
                  textDecoration: "none",
                  fontSize: 12,
                  fontFamily: "var(--font-ui, sans-serif)",
                  letterSpacing: "0.06em"
                }}
              >
                <Phone size={14} color="#B79A68" />
                <span>{siteConfig.contact.phoneDisplay}</span>
              </a>

              <a
                href={`mailto:${siteConfig.contact.email}`}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 10,
                  color: "#FAF9F6",
                  textDecoration: "none",
                  fontSize: 12,
                  fontFamily: "var(--font-ui, sans-serif)",
                  letterSpacing: "0.06em"
                }}
              >
                <Mail size={14} color="#B79A68" />
                <span>{siteConfig.contact.email}</span>
              </a>

              <div
                style={{
                  display: "inline-flex",
                  alignItems: "flex-start",
                  gap: 10,
                  color: "rgba(244, 240, 232, 0.6)",
                  fontSize: 12,
                  fontFamily: "var(--font-ui, sans-serif)",
                  lineHeight: 1.5
                }}
              >
                <MapPin size={14} color="#B79A68" style={{ marginTop: 2, flexShrink: 0 }} />
                <span>{siteConfig.location.address}</span>
              </div>
            </div>
          </div>

          {/* Column 2: Quick Navigation */}
          <div>
            <h4
              style={{
                fontFamily: "var(--font-ui, sans-serif)",
                fontSize: 10,
                letterSpacing: "0.24em",
                textTransform: "uppercase",
                color: "var(--champagne-gold, #B79A68)",
                marginBottom: 20
              }}
            >
              EXPLORE
            </h4>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 12 }}>
              {[
                { label: "Portfolio & Films", href: "/portfolio" },
                { label: "Services & Capabilities", href: "/services" },
                { label: "Collections & Pricing", href: "/packages" },
                { label: "Studio Philosophy", href: "/about" },
                { label: "Begin Your Story (Inquire)", href: "/contact" },
              ].map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    style={{
                      fontFamily: "var(--font-ui, sans-serif)",
                      fontSize: 12,
                      letterSpacing: "0.06em",
                      color: "rgba(244, 240, 232, 0.7)",
                      textDecoration: "none",
                      transition: "color 0.2s ease"
                    }}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Regional Coverage (UP First) */}
          <div>
            <h4
              style={{
                fontFamily: "var(--font-ui, sans-serif)",
                fontSize: 10,
                letterSpacing: "0.24em",
                textTransform: "uppercase",
                color: "var(--champagne-gold, #B79A68)",
                marginBottom: 20
              }}
            >
              UTTAR PRADESH &amp; BEYOND
            </h4>
            <ul
              style={{
                listStyle: "none",
                padding: 0,
                margin: 0,
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "10px 16px"
              }}
            >
              {upPriorityCities.map((city) => (
                <li key={city.name}>
                  <Link
                    href={`/contact?city=${encodeURIComponent(city.name)}`}
                    style={{
                      fontFamily: "var(--font-ui, sans-serif)",
                      fontSize: 11,
                      letterSpacing: "0.04em",
                      color: "rgba(244, 240, 232, 0.6)",
                      textDecoration: "none"
                    }}
                  >
                    {city.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/contact?city=Pan-India"
                  style={{
                    fontFamily: "var(--font-ui, sans-serif)",
                    fontSize: 11,
                    letterSpacing: "0.04em",
                    color: "#D4BA8A",
                    textDecoration: "none"
                  }}
                >
                  Pan-India Destination
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Studio Connect */}
          <div>
            <h4
              style={{
                fontFamily: "var(--font-ui, sans-serif)",
                fontSize: 10,
                letterSpacing: "0.24em",
                textTransform: "uppercase",
                color: "var(--champagne-gold, #B79A68)",
                marginBottom: 20
              }}
            >
              DIRECT CHANNELS
            </h4>
            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn outline"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "12px 18px",
                  fontSize: 11,
                  letterSpacing: "0.14em",
                  borderColor: "rgba(183, 154, 104, 0.3)",
                  color: "#FAF9F6",
                  textDecoration: "none"
                }}
              >
                <span>WHATSAPP STUDIO</span>
                <ArrowUpRight size={14} color="#D4BA8A" />
              </a>

              <a
                href={siteConfig.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="btn outline"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "12px 18px",
                  fontSize: 11,
                  letterSpacing: "0.14em",
                  borderColor: "rgba(183, 154, 104, 0.3)",
                  color: "#FAF9F6",
                  textDecoration: "none"
                }}
              >
                <span>INSTAGRAM @OM_MEDIA</span>
                <ArrowUpRight size={14} color="#D4BA8A" />
              </a>

              <p
                style={{
                  fontFamily: "var(--font-ui, sans-serif)",
                  fontSize: 10,
                  color: "rgba(244, 240, 232, 0.4)",
                  letterSpacing: "0.06em",
                  lineHeight: 1.5,
                  marginTop: 6
                }}
              >
                Fastest response via WhatsApp concierge (typically within 15 minutes).
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Horizontal Bar */}
        <div
          style={{
            paddingTop: 32,
            borderTop: "1px solid rgba(255, 255, 255, 0.08)",
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            alignItems: "center",
            gap: 16
          }}
        >
          <p
            style={{
              fontFamily: "var(--font-ui, sans-serif)",
              fontSize: 11,
              letterSpacing: "0.06em",
              color: "rgba(244, 240, 232, 0.5)",
              margin: 0
            }}
          >
            © {year} OM Media &amp; Productions. All rights reserved.
          </p>

          <p
            style={{
              fontFamily: "var(--font-ui, sans-serif)",
              fontSize: 11,
              letterSpacing: "0.08em",
              color: "rgba(183, 154, 104, 0.7)",
              margin: 0
            }}
          >
            Founded by Vinod Kumar · Rooted in Varanasi
          </p>
        </div>
      </div>
    </footer>
  );
}