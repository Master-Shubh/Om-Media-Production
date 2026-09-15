import { notFound } from "next/navigation";
import Link from "next/link";
import { storyProjects, getWhatsAppLink } from "@/lib/data";
import Breadcrumb from "@/components/Breadcrumb";

export function generateStaticParams() {
  return storyProjects.map((story) => ({
    slug: story.slug,
  }));
}

export default async function StoryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const story = storyProjects.find((s) => s.slug === slug);

  if (!story) {
    notFound();
  }

  const nextStory = storyProjects.find((s) => s.slug !== slug) || storyProjects[0];
  const storyWaLink = getWhatsAppLink({
    page: `story-${story.slug}`,
    service: `${story.title} style wedding coverage`,
    city: story.location,
  });

  return (
    <main className="page">
      {/* ── STORY HERO ── */}
      <header
        style={{
          position: "relative",
          minHeight: "75vh",
          display: "flex",
          alignItems: "flex-end",
          overflow: "hidden",
          padding: "140px var(--gutter) 60px",
        }}
      >
        <img
          src={story.heroImage}
          alt={story.title}
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            filter: "brightness(0.4)",
          }}
        />

        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to top, rgba(6,6,7,0.98) 0%, rgba(6,6,7,0.4) 40%, rgba(6,6,7,0.2) 100%)",
          }}
        />

        <div style={{ position: "relative", zIndex: 2, maxWidth: 900 }}>
          <div style={{ display: "flex", justifyContent: "flex-start", marginBottom: 12 }}>
            <Breadcrumb
              items={[
                { label: "PORTFOLIO", href: "/portfolio" },
                { label: story.title },
              ]}
            />
          </div>
          <p className="eyebrow" style={{ marginBottom: 16 }}>
            {story.category} · {story.date}
          </p>
          <h1
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(46px, 6.5vw, 84px)",
              lineHeight: 0.94,
              color: "var(--ivory)",
              marginBottom: 20,
            }}
          >
            {story.title}
          </h1>
          <p
            style={{
              fontFamily: "var(--font-ui)",
              fontSize: "clamp(13px, 1.4vw, 16px)",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              color: "var(--champagne)",
              margin: 0,
            }}
          >
            {story.venue} · {story.location}
          </p>
        </div>
      </header>

      {/* ── THE NARRATIVE & FILM PREVIEW ── */}
      <section className="section" style={{ maxWidth: 1000, margin: "0 auto", paddingBottom: 40 }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 48, alignItems: "start" }}>
          <div>
            <p className="eyebrow" style={{ marginBottom: 16 }}>THE CELEBRATION NARRATIVE</p>
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(32px, 3.5vw, 48px)",
                lineHeight: 1.05,
                color: "var(--ivory)",
                marginBottom: 24,
              }}
            >
              Documented with <i>Reverence &amp; Cinema.</i>
            </h2>
            {story.storyNarrative.map((paragraph, i) => (
              <p key={i} className="body-copy" style={{ marginBottom: 18, fontSize: 15 }}>
                {paragraph}
              </p>
            ))}
          </div>

          <div className="glass-level-2" style={{ padding: 32, borderRadius: 4 }}>
            <p className="eyebrow" style={{ marginBottom: 16 }}>TANGIBLE DELIVERABLES</p>
            <h3
              style={{
                fontFamily: "var(--font-display)",
                fontSize: 24,
                color: "var(--ivory)",
                marginBottom: 16,
              }}
            >
              Preserved in this Collection
            </h3>
            <ul style={{ listStyle: "none", padding: 0, margin: "0 0 28px" }}>
              {story.deliverablesDelivered.map((item) => (
                <li
                  key={item}
                  style={{
                    fontSize: 12,
                    color: "var(--muted-light)",
                    padding: "10px 0",
                    borderBottom: "1px solid var(--line)",
                    display: "flex",
                    alignItems: "center",
                    gap: 10,
                  }}
                >
                  <span style={{ color: "var(--champagne)", fontSize: 10 }}>✦</span>
                  {item}
                </li>
              ))}
            </ul>

            <a
              href={storyWaLink}
              target="_blank"
              rel="noreferrer"
              className="btn gold"
              style={{ width: "100%" }}
            >
              ENQUIRE FOR YOUR WEDDING
            </a>
          </div>
        </div>
      </section>

      {/* ── CINEMATIC FILM PREVIEW (IF AVAILABLE) ── */}
      {story.teaserVideoUrl && (
        <section className="section" style={{ maxWidth: 1040, margin: "0 auto 40px", padding: "0 var(--gutter)" }}>
          <p className="eyebrow" style={{ textAlign: "center", marginBottom: 12 }}>THE CINEMATIC CUT</p>
          <h2 className="section-title" style={{ textAlign: "center", marginBottom: 36 }}>
            Featured Film <i>Preview</i>
          </h2>
          <div
            style={{
              position: "relative",
              width: "100%",
              aspectRatio: "16 / 9",
              borderRadius: 6,
              overflow: "hidden",
              border: "1px solid rgba(183, 154, 104, 0.3)",
              boxShadow: "0 25px 70px rgba(0,0,0,0.8)",
              backgroundColor: "#080808",
            }}
          >
            <video
              src={story.teaserVideoUrl}
              controls
              playsInline
              poster={story.heroImage}
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </div>
        </section>
      )}

      {/* ── PHOTO ESSAY GALLERY ── */}
      <section className="section" style={{ paddingTop: 20 }}>
        <p className="eyebrow" style={{ textAlign: "center", marginBottom: 12 }}>THE PHOTO ESSAY</p>
        <h2 className="section-title" style={{ textAlign: "center", marginBottom: 48 }}>
          Moments <i>Frozen in Time</i>
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: 24,
          }}
        >
          {story.photoGallery.map((photo, i) => (
            <figure
              key={i}
              className="glass-level-2"
              style={{
                margin: 0,
                borderRadius: 4,
                overflow: "hidden",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <div style={{ height: 360, overflow: "hidden" }}>
                <img
                  src={photo.src}
                  alt={photo.caption}
                  loading="lazy"
                  width={1200}
                  height={800}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    transition: "transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)",
                  }}
                  className="story-gallery-img"
                />
              </div>
              <figcaption
                style={{
                  padding: 16,
                  fontFamily: "var(--font-ui)",
                  fontSize: 11,
                  color: "var(--muted)",
                  lineHeight: 1.6,
                }}
              >
                {photo.caption}
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* ── CLIENT WORDS ── */}
      {story.clientQuote && (
        <section
          className="section glass-level-1"
          style={{
            maxWidth: 900,
            margin: "40px auto",
            textAlign: "center",
            padding: "64px 32px",
            borderRadius: 4,
          }}
        >
          <p className="eyebrow" style={{ marginBottom: 20 }}>FROM THE COUPLE</p>
          <blockquote
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(22px, 2.5vw, 32px)",
              fontStyle: "italic",
              color: "var(--ivory)",
              lineHeight: 1.5,
              marginBottom: 20,
            }}
          >
            &ldquo;{story.clientQuote.quote}&rdquo;
          </blockquote>
          <cite
            style={{
              fontFamily: "var(--font-ui)",
              fontSize: 10,
              fontWeight: 700,
              letterSpacing: "0.25em",
              textTransform: "uppercase",
              color: "var(--champagne)",
              fontStyle: "normal",
            }}
          >
            — {story.clientQuote.by}
          </cite>
        </section>
      )}

      {/* ── NEXT STORY & INQUIRY FOOTER ── */}
      <section
        className="section"
        style={{
          borderTop: "1px solid var(--line)",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: 24,
          marginTop: 64,
        }}
      >
        <div>
          <span
            style={{
              fontFamily: "var(--font-ui)",
              fontSize: 9,
              letterSpacing: "0.22em",
              color: "var(--muted)",
              textTransform: "uppercase",
              display: "block",
              marginBottom: 4,
            }}
          >
            EXPLORE NEXT STORY
          </span>
          <Link
            href={`/portfolio/${nextStory.slug}`}
            style={{
              fontFamily: "var(--font-display)",
              fontSize: 28,
              color: "var(--ivory)",
            }}
          >
            {nextStory.title} →
          </Link>
        </div>

        <Link href="/contact" className="btn gold">
          BEGIN YOUR STORY WITH OM
        </Link>
      </section>
    </main>
  );
}
