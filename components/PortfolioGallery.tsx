"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import LightboxModal from "@/components/LightboxModal";
import {
  portfolioCategories,
  portfolioGallery,
  PortfolioCategory,
  PortfolioItem,
} from "@/lib/data";
import { Maximize2, Play } from "lucide-react";

interface PortfolioGalleryProps {
  isHomepage?: boolean;
}

export default function PortfolioGallery({ isHomepage = false }: PortfolioGalleryProps) {
  const [selectedCategory, setSelectedCategory] = useState<PortfolioCategory>("All");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  // Client-side instant filtering
  const filteredItems = useMemo(() => {
    if (selectedCategory === "All") {
      return isHomepage ? portfolioGallery.slice(0, 10) : portfolioGallery;
    }
    const matches = portfolioGallery.filter((item) => item.category === selectedCategory);
    return isHomepage ? matches.slice(0, 8) : matches;
  }, [selectedCategory, isHomepage]);

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
  };

  return (
    <section
      id="portfolio"
      className="portfolio-gallery-section"
      aria-labelledby="portfolio-heading"
      style={{
        padding: "clamp(60px, 9vw, 130px) var(--gutter)",
        maxWidth: "var(--max-w)",
        margin: "0 auto",
      }}
    >
      {/* Section Header */}
      <Reveal>
        <div style={{ textAlign: "center", maxWidth: 760, margin: "0 auto clamp(36px, 5vw, 60px)" }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
            <span style={{ width: 20, height: 1, background: "var(--champagne)", opacity: 0.7 }} />
            <span className="eyebrow">CURATED VISUAL ARCHIVE</span>
            <span style={{ width: 20, height: 1, background: "var(--champagne)", opacity: 0.7 }} />
          </div>

          <h2
            id="portfolio-heading"
            style={{
              fontFamily: "var(--font-display, Georgia, serif)",
              fontSize: "clamp(36px, 5.5vw, 72px)",
              fontWeight: 400,
              lineHeight: 1,
              letterSpacing: "-0.02em",
              color: "var(--ivory)",
              margin: "0 0 16px",
            }}
          >
            Chapters of <i>Sacred Emotion.</i>
          </h2>

          <p
            style={{
              fontFamily: "var(--font-ui, sans-serif)",
              fontSize: "14px",
              lineHeight: 1.8,
              color: "var(--muted)",
              margin: 0,
              fontWeight: 300,
            }}
          >
            Traditional rituals, candid emotions, and Varanasi riverfront celebrations.
          </p>
        </div>
      </Reveal>

      {/* 17 Categories Filter Bar — Client Side, Horizontally Scrollable on Mobile */}
      <Reveal>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-start",
            gap: 8,
            overflowX: "auto",
            paddingBottom: 16,
            marginBottom: 36,
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
          className="portfolio-filter-bar"
        >
          {portfolioCategories.map((cat) => {
            const isSelected = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                style={{
                  fontFamily: "var(--font-ui, sans-serif)",
                  fontSize: "9px",
                  fontWeight: 600,
                  letterSpacing: "0.22em",
                  textTransform: "uppercase",
                  padding: "9px 18px",
                  borderRadius: 2,
                  whiteSpace: "nowrap",
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                  border: isSelected
                    ? "1px solid var(--champagne)"
                    : "1px solid rgba(183, 154, 104, 0.18)",
                  background: isSelected
                    ? "var(--champagne)"
                    : "rgba(14, 14, 16, 0.5)",
                  color: isSelected ? "#080808" : "var(--ivory)",
                  boxShadow: isSelected
                    ? "0 4px 18px rgba(183, 154, 104, 0.25)"
                    : "none",
                }}
              >
                {cat}
              </button>
            );
          })}
        </div>
      </Reveal>

      {/* Asymmetric Editorial Portfolio Grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(12, 1fr)",
          gap: "20px",
        }}
        className="portfolio-editorial-grid"
      >
        {filteredItems.map((item, index) => {
          // Asymmetric column span pattern: 1st card 7 cols, 2nd card 5 cols, 3rd 4 cols, 4th 4 cols, 5th 4 cols...
          const colSpans = [
            "col-span-12 md:col-span-7",
            "col-span-12 md:col-span-5",
            "col-span-12 md:col-span-4",
            "col-span-12 md:col-span-4",
            "col-span-12 md:col-span-4",
            "col-span-12 md:col-span-6",
            "col-span-12 md:col-span-6",
            "col-span-12 md:col-span-8",
            "col-span-12 md:col-span-4",
            "col-span-12 md:col-span-6",
          ];
          const spanClass = colSpans[index % colSpans.length];

          return (
            <div
              key={item.id}
              className={`portfolio-card ${spanClass}`}
              onClick={() => openLightbox(index)}
              style={{
                position: "relative",
                borderRadius: 4,
                overflow: "hidden",
                cursor: "pointer",
                border: "1px solid rgba(183, 154, 104, 0.18)",
                minHeight: index % 3 === 0 ? 380 : 320,
                backgroundColor: "#0d0d0f",
              }}
            >
              {/* Image */}
              <img
                src={item.image}
                alt={item.title}
                loading="lazy"
                decoding="async"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  transition: "transform 1.1s cubic-bezier(0.16, 1, 0.3, 1), filter 0.5s ease",
                  filter: "brightness(0.88) contrast(1.05)",
                }}
                className="portfolio-img"
              />

              {/* Video Badge if video */}
              {item.isVideo && (
                <div
                  style={{
                    position: "absolute",
                    top: 18,
                    right: 18,
                    width: 38,
                    height: 38,
                    borderRadius: "50%",
                    background: "rgba(10, 10, 12, 0.8)",
                    border: "1px solid rgba(183, 154, 104, 0.4)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "var(--champagne-light)",
                    zIndex: 2,
                  }}
                >
                  <Play size={16} fill="currentColor" />
                </div>
              )}

              {/* Hover Dark Gradient Overlay */}
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background:
                    "linear-gradient(to top, rgba(8,8,8,0.92) 0%, rgba(8,8,8,0.3) 50%, transparent 80%)",
                  transition: "opacity 0.4s ease",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-end",
                  padding: "24px",
                }}
                className="portfolio-card-overlay"
              >
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                  <span
                    style={{
                      fontFamily: "var(--font-ui, sans-serif)",
                      fontSize: "8.5px",
                      fontWeight: 600,
                      letterSpacing: "0.26em",
                      textTransform: "uppercase",
                      color: "var(--champagne-light)",
                    }}
                  >
                    {item.categoryDisplay}
                  </span>
                  <div
                    style={{
                      width: 30,
                      height: 30,
                      borderRadius: "50%",
                      background: "rgba(183, 154, 104, 0.15)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "var(--champagne)",
                    }}
                  >
                    <Maximize2 size={13} />
                  </div>
                </div>

                <h3
                  style={{
                    fontFamily: "var(--font-display, Georgia, serif)",
                    fontSize: "clamp(20px, 2vw, 28px)",
                    fontWeight: 400,
                    color: "var(--ivory)",
                    margin: "8px 0 4px",
                    lineHeight: 1.15,
                  }}
                >
                  {item.title}
                </h3>

                <p
                  style={{
                    fontFamily: "var(--font-ui, sans-serif)",
                    fontSize: "11.5px",
                    color: "var(--muted)",
                    margin: 0,
                    fontWeight: 300,
                  }}
                >
                  {item.venue} &bull; {item.location}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Bottom CTA to view full archive if on homepage */}
      {isHomepage && (
        <Reveal>
          <div
            style={{
              textAlign: "center",
              marginTop: "clamp(36px, 5vw, 60px)",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 16,
            }}
          >
            <Link href="/portfolio" className="btn outline">
              VIEW COMPLETE PORTFOLIO ARCHIVE →
            </Link>
          </div>
        </Reveal>
      )}

      {/* Fullscreen Lightbox Modal */}
      <LightboxModal
        items={filteredItems}
        currentIndex={lightboxIndex !== null ? lightboxIndex : 0}
        isOpen={lightboxIndex !== null}
        onClose={closeLightbox}
        onNavigate={(newIdx) => setLightboxIndex(newIdx)}
      />
    </section>
  );
}
