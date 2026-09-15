import Link from "next/link";
import { storyProjects } from "@/lib/data";
import PortfolioGallery from "@/components/PortfolioGallery";
import CinematicCTA from "@/components/CinematicCTA";
import Breadcrumb from "@/components/Breadcrumb";
import { ArrowUpRight } from "lucide-react";

export const metadata = {
  title: "Portfolio & Curated Visual Archives | OM Media & Productions",
  description:
    "Explore our cinematic wedding films, real celebration stories, and photo essays captured in Varanasi, Lucknow, and destination venues across India.",
};

export default function PortfolioPage() {
  return (
    <main className="page">
      {/* Editorial Page Header */}
      <header className="page-hero" style={{ textAlign: "center", maxWidth: 900, margin: "0 auto", padding: "140px 24px 60px" }}>
        <Breadcrumb items={[{ label: "PORTFOLIO" }]} />
        <p className="eyebrow">CURATED VISUAL ARCHIVES</p>
        <h1 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(40px, 6vw, 76px)", lineHeight: 1, margin: "16px 0 24px" }}>
          Stories Immortalized in <i>Cinema.</i>
        </h1>
        <p style={{ fontFamily: "var(--font-ui)", fontSize: 14, lineHeight: 1.8, color: "var(--muted)", maxWidth: 660, margin: "0 auto" }}>
          Each wedding celebration is documented as an editorial story. Explore our complete wedding films, real celebration stories, and ceremonial photo essays across Varanasi and destination venues.
        </p>
      </header>

      {/* Featured Real Wedding Story Case Studies */}
      <section className="section" style={{ maxWidth: 1320, margin: "0 auto", padding: "0 24px 80px" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 36, flexWrap: "wrap", gap: 16 }}>
          <div>
            <span style={{ fontFamily: "var(--font-ui)", fontSize: 10, letterSpacing: "0.24em", color: "var(--champagne)", textTransform: "uppercase" }}>
              FEATURED CELEBRATION STORIES
            </span>
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(28px, 3.5vw, 42px)", color: "var(--ivory)", margin: "6px 0 0" }}>
              Complete Editorial Narratives
            </h2>
          </div>
          <span style={{ fontSize: 12, color: "var(--muted)", fontFamily: "var(--font-ui)" }}>
            Select a celebration to view its full film &amp; photo essay
          </span>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))",
            gap: 28,
          }}
        >
          {storyProjects.map((story, i) => (
            <article
              key={story.slug}
              className="glass-level-2"
              style={{
                borderRadius: 4,
                overflow: "hidden",
                display: "flex",
                flexDirection: "column",
                border: "1px solid rgba(183, 154, 104, 0.2)",
                backgroundColor: "#0C0C0E",
              }}
            >
              {/* Media Container */}
              <Link
                href={`/portfolio/${story.slug}`}
                style={{
                  position: "relative",
                  height: 340,
                  overflow: "hidden",
                  display: "block",
                }}
              >
                <img
                  src={story.heroImage}
                  alt={story.title}
                  loading={i < 2 ? "eager" : "lazy"}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    transition: "transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)",
                    filter: "brightness(0.9) contrast(1.05)",
                  }}
                  className="portfolio-thumb"
                />
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background: "linear-gradient(to top, rgba(8,8,8,0.92) 0%, rgba(8,8,8,0.2) 60%, transparent 100%)",
                  }}
                />

                <div
                  style={{
                    position: "absolute",
                    top: 16,
                    left: 16,
                    padding: "4px 12px",
                    background: "rgba(8,8,8,0.75)",
                    border: "1px solid rgba(183,154,104,0.3)",
                    borderRadius: 2,
                    backdropFilter: "blur(10px)",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "var(--font-ui)",
                      fontSize: 8,
                      fontWeight: 700,
                      letterSpacing: "0.22em",
                      color: "var(--champagne-light)",
                      textTransform: "uppercase",
                    }}
                  >
                    {story.category}
                  </span>
                </div>

                <div style={{ position: "absolute", bottom: 20, left: 20, right: 20 }}>
                  <span
                    style={{
                      fontFamily: "var(--font-ui)",
                      fontSize: 9,
                      letterSpacing: "0.2em",
                      color: "var(--champagne)",
                      textTransform: "uppercase",
                      display: "block",
                      marginBottom: 6,
                    }}
                  >
                    {story.venue} · {story.location}
                  </span>
                  <h3
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "clamp(24px, 2.2vw, 30px)",
                      fontWeight: 400,
                      lineHeight: 1.15,
                      color: "var(--ivory)",
                      margin: 0,
                    }}
                  >
                    {story.title}
                  </h3>
                </div>
              </Link>

              {/* Story Excerpt & CTAs */}
              <div style={{ padding: 24, display: "flex", flexDirection: "column", flex: 1 }}>
                <p style={{ fontSize: 13, color: "var(--muted)", lineHeight: 1.7, marginBottom: 20 }}>
                  {story.storyNarrative[0]}
                </p>

                <div style={{ marginTop: "auto", paddingTop: 16, borderTop: "1px solid rgba(255,255,255,0.06)", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <Link
                    href={`/portfolio/${story.slug}`}
                    className="btn gold"
                    style={{
                      padding: "10px 18px",
                      fontSize: 11,
                      letterSpacing: "0.14em",
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 6,
                    }}
                  >
                    <span>VIEW FULL STORY</span>
                    <ArrowUpRight size={13} />
                  </Link>

                  <span style={{ fontSize: 11, color: "var(--muted)", fontFamily: "var(--font-ui)" }}>
                    {story.date}
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Full 17-Category Filterable Archive with Lightbox */}
      <div style={{ borderTop: "1px solid rgba(183, 154, 104, 0.15)", paddingTop: 40 }}>
        <PortfolioGallery isHomepage={false} />
      </div>

      {/* Cinematic Call to Action */}
      <CinematicCTA />
    </main>
  );
}
