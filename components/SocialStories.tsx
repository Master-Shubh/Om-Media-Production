"use client";

import Image from "next/image";
import { socialTiles, siteConfig } from "@/lib/data";
import { Instagram, ArrowUpRight, Heart } from "lucide-react";

export default function SocialStories() {
  return (
    <section
      className="social-stories-section"
      style={{
        padding: "clamp(60px, 9vw, 120px) 24px",
        backgroundColor: "var(--bg-black, #080808)",
        position: "relative",
        overflow: "hidden",
        borderTop: "1px solid rgba(183, 154, 104, 0.12)",
        borderBottom: "1px solid rgba(183, 154, 104, 0.12)"
      }}
      aria-label="Follow OM Media Stories on Instagram"
    >
      {/* Background ambient lighting */}
      <div
        style={{
          position: "absolute",
          top: "10%",
          right: "5%",
          width: 400,
          height: 400,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(183, 154, 104, 0.04) 0%, transparent 70%)",
          pointerEvents: "none"
        }}
      />

      <div style={{ maxWidth: 1320, margin: "0 auto" }}>
        {/* Section Header */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            alignItems: "flex-end",
            gap: 24,
            marginBottom: 56
          }}
        >
          <div>
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                fontSize: 11,
                fontFamily: "var(--font-ui, sans-serif)",
                letterSpacing: "0.24em",
                textTransform: "uppercase",
                color: "var(--champagne-gold, #B79A68)",
                marginBottom: 12
              }}
            >
              <Instagram size={13} />
              <span>FOLLOW THE STORIES</span>
            </div>
            <h2
              style={{
                fontFamily: "var(--font-display, Georgia, serif)",
                fontSize: "clamp(2rem, 3.5vw, 3rem)",
                fontWeight: 400,
                color: "#FAF9F6",
                letterSpacing: "-0.01em",
                lineHeight: 1.15
              }}
            >
              Moments Unfolding in Real Time.
            </h2>
          </div>

          <a
            href={siteConfig.socials.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="btn outline"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              padding: "12px 24px",
              borderColor: "rgba(183, 154, 104, 0.3)",
              color: "#FAF9F6",
              textDecoration: "none",
              fontSize: 11,
              letterSpacing: "0.14em",
              textTransform: "uppercase"
            }}
          >
            <span>FOLLOW @Om_Media_and_Product</span>
            <ArrowUpRight size={14} color="#D4BA8A" />
          </a>
        </div>

        {/* 6-Card Editorial Instagram Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(140px, 1fr))",
            gap: 16
          }}
        >
          {socialTiles.map((tile) => (
            <a
              key={tile.id}
              href={tile.link}
              target="_blank"
              rel="noopener noreferrer"
              className="social-tile-card group"
              style={{
                position: "relative",
                aspectRatio: "4/5",
                overflow: "hidden",
                borderRadius: 4,
                backgroundColor: "#141416",
                border: "1px solid rgba(255, 255, 255, 0.06)",
                display: "block",
                textDecoration: "none"
              }}
            >
              {/* Image */}
              <img
                src={tile.image}
                alt={tile.title}
                loading="lazy"
                decoding="async"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  transition: "transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)",
                  filter: "brightness(0.92) contrast(1.04)"
                }}
              />

              {/* Top Tag Pill */}
              <div
                style={{
                  position: "absolute",
                  top: 12,
                  left: 12,
                  zIndex: 2,
                  backgroundColor: "rgba(8, 8, 8, 0.75)",
                  backdropFilter: "blur(8px)",
                  padding: "4px 8px",
                  borderRadius: 2,
                  border: "1px solid rgba(183, 154, 104, 0.25)"
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-ui, sans-serif)",
                    fontSize: 9,
                    letterSpacing: "0.18em",
                    textTransform: "uppercase",
                    color: "#D4BA8A",
                    fontWeight: 500
                  }}
                >
                  {tile.tag}
                </span>
              </div>

              {/* Hover Dark Overlay & Details */}
              <div
                className="social-tile-overlay"
                style={{
                  position: "absolute",
                  inset: 0,
                  background: "linear-gradient(to top, rgba(8, 8, 8, 0.92) 0%, rgba(8, 8, 8, 0.4) 60%, transparent 100%)",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-end",
                  padding: 16,
                  zIndex: 2,
                  opacity: 0,
                  transition: "opacity 0.35s ease"
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    marginBottom: 8
                  }}
                >
                  <div
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 4,
                      color: "#FAF9F6",
                      fontSize: 11
                    }}
                  >
                    <Heart size={12} fill="#B79A68" color="#B79A68" />
                    <span>{tile.likes}</span>
                  </div>
                  <Instagram size={14} color="#D4BA8A" />
                </div>
                <p
                  style={{
                    fontFamily: "var(--font-display, Georgia, serif)",
                    fontSize: 14,
                    color: "#FAF9F6",
                    lineHeight: 1.3,
                    margin: 0
                  }}
                >
                  {tile.title}
                </p>
                <span
                  style={{
                    fontFamily: "var(--font-ui, sans-serif)",
                    fontSize: 10,
                    letterSpacing: "0.14em",
                    color: "#B79A68",
                    marginTop: 4,
                    textTransform: "uppercase"
                  }}
                >
                  {tile.handle}
                </span>
              </div>
            </a>
          ))}
        </div>

        {/* Global CSS for hover effects */}
        <style jsx>{`
          .social-tile-card:hover img {
            transform: scale(1.06);
          }
          .social-tile-card:hover .social-tile-overlay {
            opacity: 1 !important;
          }
          .social-tile-card:hover {
            border-color: rgba(183, 154, 104, 0.4) !important;
          }
        `}</style>
      </div>
    </section>
  );
}
