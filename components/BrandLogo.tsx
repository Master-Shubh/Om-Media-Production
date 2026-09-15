"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";

export interface BrandLogoProps {
  variant?: "full" | "monogram" | "mark" | "wordmark";
  theme?: "dark" | "light";
  className?: string;
  size?: "sm" | "md" | "lg" | "xl";
  href?: string;
  priority?: boolean;
}

export default function BrandLogo({
  variant = "full",
  theme = "dark",
  className = "",
  size = "md",
  href,
  priority = false
}: BrandLogoProps) {
  // Dimensions mapping
  const dimensions = {
    sm: { width: variant === "full" ? 120 : 36, height: variant === "full" ? 48 : 36 },
    md: { width: variant === "full" ? 160 : 48, height: variant === "full" ? 64 : 48 },
    lg: { width: variant === "full" ? 220 : 68, height: variant === "full" ? 88 : 68 },
    xl: { width: variant === "full" ? 280 : 96, height: variant === "full" ? 112 : 96 },
  }[size];

  const content = (
    <div
      className={`brand-logo-root ${className}`}
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 12,
        position: "relative",
        userSelect: "none"
      }}
      aria-label="OM Media & Productions"
    >
      {variant === "full" && (
        <div
          style={{
            position: "relative",
            width: dimensions.width,
            height: dimensions.height,
            display: "flex",
            alignItems: "center"
          }}
        >
          {/* Real OM Media & Productions high-res official logo asset */}
          <img
            src="/logo/om-logo.jpg"
            alt="OM Media & Productions — Wedding Films · Photography · Production"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "contain",
              filter: theme === "light"
                ? "brightness(1.1) drop-shadow(0 2px 12px rgba(183,154,104,0.3))"
                : "drop-shadow(0 0 16px rgba(183, 154, 104, 0.25))",
              borderRadius: 2
            }}
          />
        </div>
      )}

      {variant === "monogram" && (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 8,
            height: dimensions.height
          }}
        >
          {/* OM Monogram with Camera Aperture & Tilak Motif */}
          <svg
            width={dimensions.height}
            height={dimensions.height}
            viewBox="0 0 100 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{
              filter: "drop-shadow(0 0 10px rgba(183, 154, 104, 0.35))"
            }}
          >
            {/* Outer golden aperture ring */}
            <circle cx="36" cy="56" r="28" stroke="#D4BA8A" strokeWidth="2.5" opacity="0.85" />
            <circle cx="36" cy="56" r="22" stroke="#B79A68" strokeWidth="1" strokeDasharray="3 3" opacity="0.6" />
            
            {/* Aperture blades */}
            <path d="M36 34 L48 50" stroke="#D4BA8A" strokeWidth="1.5" strokeLinecap="round" opacity="0.8" />
            <path d="M50 44 L44 62" stroke="#D4BA8A" strokeWidth="1.5" strokeLinecap="round" opacity="0.8" />
            <path d="M48 62 L30 66" stroke="#D4BA8A" strokeWidth="1.5" strokeLinecap="round" opacity="0.8" />
            <path d="M30 64 L22 48" stroke="#D4BA8A" strokeWidth="1.5" strokeLinecap="round" opacity="0.8" />
            <path d="M24 46 L36 34" stroke="#D4BA8A" strokeWidth="1.5" strokeLinecap="round" opacity="0.8" />
            <circle cx="36" cy="56" r="6" fill="#080808" stroke="#D4BA8A" strokeWidth="1" />

            {/* Letter M with golden serif and film strip */}
            <path
              d="M52 82 V36 L68 62 L84 36 V82"
              stroke="#D4BA8A"
              strokeWidth="4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            {/* Film strip sweep across M */}
            <path
              d="M50 74 Q 68 62 90 76"
              stroke="#B79A68"
              strokeWidth="2.5"
              strokeDasharray="2 3"
              strokeLinecap="round"
              opacity="0.9"
            />

            {/* Sacred tilak / flame crest above M */}
            <path
              d="M68 28 C66 22 68 16 68 12 C68 16 70 22 68 28 Z"
              fill="#E05338"
            />
            <circle cx="68" cy="31" r="2" fill="#E05338" />
          </svg>
          <div style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
            <span
              style={{
                fontFamily: "var(--font-display, Georgia, serif)",
                fontSize: 16,
                letterSpacing: "0.15em",
                color: "#FAF9F6",
                lineHeight: 1
              }}
            >
              OM
            </span>
            <span
              style={{
                fontFamily: "var(--font-ui, sans-serif)",
                fontSize: 6.5,
                letterSpacing: "0.26em",
                color: "#B79A68",
                textTransform: "uppercase",
                marginTop: 2
              }}
            >
              STUDIO
            </span>
          </div>
        </div>
      )}

      {variant === "mark" && (
        <div
          style={{
            width: dimensions.width,
            height: dimensions.height,
            display: "grid",
            placeItems: "center"
          }}
        >
          <svg
            width={dimensions.width}
            height={dimensions.height}
            viewBox="0 0 48 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="24" cy="24" r="22" stroke="rgba(183,154,104,0.3)" strokeWidth="1" />
            <circle cx="18" cy="27" r="11" stroke="#D4BA8A" strokeWidth="1.5" />
            <path d="M26 38 V18 L34 30 L42 18 V38" stroke="#D4BA8A" strokeWidth="2" strokeLinecap="round" />
            <circle cx="34" cy="12" r="1.5" fill="#E05338" />
          </svg>
        </div>
      )}

      {variant === "wordmark" && (
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
          <span
            style={{
              fontFamily: "var(--font-display, Georgia, serif)",
              fontSize: 20,
              fontWeight: 400,
              letterSpacing: "0.1em",
              color: "#FAF9F6",
              lineHeight: 1
            }}
          >
            OM MEDIA &amp; PRODUCTIONS
          </span>
          <span
            style={{
              fontFamily: "var(--font-ui, sans-serif)",
              fontSize: 8,
              fontWeight: 600,
              letterSpacing: "0.28em",
              color: "#B79A68",
              textTransform: "uppercase",
              marginTop: 4
            }}
          >
            VARANASI · UTTAR PRADESH
          </span>
        </div>
      )}
    </div>
  );

  if (href) {
    return (
      <Link href={href} style={{ textDecoration: "none", color: "inherit", display: "inline-block" }}>
        {content}
      </Link>
    );
  }

  return content;
}
