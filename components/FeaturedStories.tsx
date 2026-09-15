import Link from "next/link";
import Reveal from "@/components/Reveal";
import { featuredStories } from "@/lib/data";

/**
 * FeaturedStories — Editorial alternating magazine layout.
 * Odd stories: image left, copy right.
 * Even stories: copy left, image right.
 *
 * TODO: Replace story images with actual OM Media portfolio shots.
 */
export default function FeaturedStories() {
  return (
    <section className="stories-section" aria-label="Featured stories">
      {/* Section header */}
      <div className="stories-header">
        <Reveal>
          <p className="eyebrow">OUR WORK</p>
        </Reveal>
        <Reveal>
          <div className="section-head" style={{ marginBottom: 0 }}>
            <h2 className="section-title">Featured <i>Stories</i></h2>
            <Link href="/portfolio" className="text-link" aria-label="Explore all portfolio work">
              EXPLORE ALL WORK
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                <path d="M2 12L12 2M12 2H5M12 2V9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
            </Link>
          </div>
        </Reveal>
      </div>

      {/* Story items */}
      {featuredStories.map((story, i) => (
        <Reveal key={story.id}>
          <article className="story-item" aria-label={story.title}>
            {/* Image column */}
            <div className="story-image-col">
              <Link
                href={story.href ?? "/portfolio"}
                aria-label={`View story: ${story.title}`}
                tabIndex={0}
              >
                <div className="story-image-wrap">
                  <img
                    className="story-image"
                    src={story.image}
                    alt={story.imageAlt ?? `${story.title} — OM Media`}
                    loading="lazy"
                    width={1200}
                    height={800}
                    style={{
                      // vary aspect treatment by index for editorial feel
                      objectPosition: i % 3 === 0 ? "center top" : i % 3 === 1 ? "center" : "center 30%",
                    }}
                  />
                  <div className="story-overlay" aria-hidden="true">
                    <span className="story-view-label">VIEW STORY</span>
                  </div>
                </div>
              </Link>
            </div>

            {/* Copy column */}
            <div className="story-copy-col">
              <div className="story-meta-top">
                <span className="story-number">{String(i + 1).padStart(2, "0")}</span>
                <span className="story-category">{story.category}</span>
              </div>

              <h3 className="story-title">{story.title}</h3>
              <p className="story-location">{story.location}</p>

              {story.description && (
                <p className="story-desc">{story.description}</p>
              )}

              <Link
                href={story.href ?? "/portfolio"}
                className="story-link"
                aria-label={`Explore story: ${story.title}`}
              >
                EXPLORE STORY
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                  <path d="M2 12L12 2M12 2H5M12 2V9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
              </Link>
            </div>
          </article>
        </Reveal>
      ))}
    </section>
  );
}
