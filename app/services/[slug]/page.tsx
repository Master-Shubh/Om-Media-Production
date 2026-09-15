import { notFound } from "next/navigation";
import Link from "next/link";
import { services, getWhatsAppLink } from "@/lib/data";
import Breadcrumb from "@/components/Breadcrumb";
import { Check } from "lucide-react";

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.id }));
}

export default async function ServiceDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const dept = services.find((s) => s.id === slug);

  if (!dept) {
    notFound();
  }

  const deptWaLink = getWhatsAppLink({ service: dept.title });

  return (
    <main className="page">
      {/* ── DEPARTMENT HERO ── */}
      <header
        style={{
          position: "relative",
          minHeight: "65vh",
          display: "flex",
          alignItems: "flex-end",
          overflow: "hidden",
          padding: "140px var(--gutter) 60px",
        }}
      >
        <img
          src={dept.image}
          alt={dept.title}
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            filter: "brightness(0.35)",
          }}
        />

        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to top, rgba(6,6,7,0.98) 0%, rgba(6,6,7,0.4) 50%, rgba(6,6,7,0.2) 100%)",
          }}
        />

        <div style={{ position: "relative", zIndex: 2, maxWidth: 900 }}>
          <div style={{ display: "flex", justifyContent: "flex-start", marginBottom: 12 }}>
            <Breadcrumb
              items={[
                { label: "SERVICES", href: "/services" },
                { label: dept.shortTitle },
              ]}
            />
          </div>
          <p className="eyebrow" style={{ marginBottom: 16 }}>
            DEPARTMENT {dept.departmentNumber} · PRODUCTION EXCELLENCE
          </p>
          <h1
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(42px, 6vw, 76px)",
              lineHeight: 0.94,
              color: "var(--ivory)",
              marginBottom: 18,
            }}
          >
            {dept.title}
          </h1>
          <p
            style={{
              fontFamily: "var(--font-ui)",
              fontSize: "clamp(13px, 1.4vw, 16px)",
              color: "var(--champagne-light)",
              maxWidth: 640,
              margin: 0,
            }}
          >
            {dept.tagline}
          </p>
        </div>
      </header>

      {/* ── TECHNICAL APPROACH & DELIVERABLES ── */}
      <section className="section" style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: 56, alignItems: "start" }}>
          <div>
            <p className="eyebrow" style={{ marginBottom: 14 }}>OUR TECHNICAL APPROACH</p>
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(30px, 3.5vw, 44px)",
                lineHeight: 1.05,
                color: "var(--ivory)",
                marginBottom: 20,
              }}
            >
              Crafted for the moments <i>that endure.</i>
            </h2>
            <p className="body-copy" style={{ marginBottom: 20, fontSize: 15 }}>
              {dept.description}
            </p>
            <p className="body-copy" style={{ marginBottom: 28, fontSize: 15 }}>
              {dept.approach}
            </p>

            <div
              className="glass-level-1"
              style={{
                padding: 24,
                borderRadius: 4,
                borderLeft: "2px solid var(--champagne)",
              }}
            >
              <span
                style={{
                  fontFamily: "var(--font-ui)",
                  fontSize: 8,
                  fontWeight: 700,
                  letterSpacing: "0.25em",
                  textTransform: "uppercase",
                  color: "var(--champagne)",
                  display: "block",
                  marginBottom: 6,
                }}
              >
                PROPRIETARY HARDWARE SUITE:
              </span>
              <p style={{ fontSize: 13, color: "var(--ivory)", margin: 0, fontStyle: "italic" }}>
                {dept.equipmentHighlight}
              </p>
            </div>
          </div>

          <div className="glass-level-2" style={{ padding: "36px 32px", borderRadius: 6 }}>
            <p className="eyebrow" style={{ marginBottom: 14 }}>DEPARTMENT DELIVERABLES</p>
            <h3
              style={{
                fontFamily: "var(--font-display)",
                fontSize: 26,
                color: "var(--ivory)",
                marginBottom: 20,
              }}
            >
              Included in this Discipline
            </h3>

            <ul style={{ listStyle: "none", padding: 0, margin: "0 0 32px" }}>
              {dept.keyDeliverables.map((item) => (
                <li
                  key={item}
                  style={{
                    fontSize: 13,
                    color: "var(--ivory)",
                    padding: "12px 0",
                    borderBottom: "1px solid var(--line)",
                    display: "flex",
                    alignItems: "flex-start",
                    gap: 12,
                  }}
                >
                  <Check size={16} color="var(--champagne)" style={{ flexShrink: 0, marginTop: 2 }} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              <Link href="/contact" className="btn gold" style={{ width: "100%" }}>
                BOOK THIS DEPARTMENT FOR YOUR DATE
              </Link>
              <a
                href={deptWaLink}
                target="_blank"
                rel="noreferrer"
                className="btn outline"
                style={{ width: "100%" }}
              >
                DISCUSS SPECIFICATIONS ON WHATSAPP
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── FREQUENTLY ASKED QUESTIONS ── */}
      {dept.faqs && dept.faqs.length > 0 && (
        <section className="section" style={{ maxWidth: 900, margin: "0 auto 60px" }}>
          <p className="eyebrow" style={{ textAlign: "center", marginBottom: 12 }}>CLARITY &amp; LOGISTICS</p>
          <h2 className="section-title" style={{ textAlign: "center", marginBottom: 40 }}>
            Frequently Asked <i>Questions</i>
          </h2>

          <div style={{ display: "grid", gap: 20 }}>
            {dept.faqs.map((faq, i) => (
              <div key={i} className="glass-level-2" style={{ padding: 28, borderRadius: 4 }}>
                <h3
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: 20,
                    color: "var(--champagne-light)",
                    marginBottom: 10,
                  }}
                >
                  {faq.question}
                </h3>
                <p style={{ fontSize: 13, color: "var(--muted)", lineHeight: 1.7, margin: 0 }}>
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* ── NAVIGATION TO OTHER DEPARTMENTS ── */}
      <section
        className="section"
        style={{
          borderTop: "1px solid var(--line)",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: 20,
        }}
      >
        <Link href="/services" className="text-link">
          ← VIEW ALL 5 PRODUCTION DEPARTMENTS
        </Link>
        <Link href="/packages" className="text-link">
          EXPLORE COMPLETE WEDDING COLLECTIONS →
        </Link>
      </section>
    </main>
  );
}
