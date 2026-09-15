import Link from "next/link";

export default function NotFound() {
  return (
    <main
      style={{
        minHeight: "100svh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        padding: "120px 20px",
        background: "var(--obsidian)",
        position: "relative",
      }}
    >
      {/* Ambient background monogram */}
      <span
        style={{
          position: "absolute",
          fontFamily: "var(--font-display)",
          fontSize: "clamp(120px, 20vw, 280px)",
          color: "rgba(183, 154, 104, 0.04)",
          userSelect: "none",
          pointerEvents: "none",
          lineHeight: 1,
        }}
        aria-hidden="true"
      >
        OM
      </span>

      <p className="eyebrow" style={{ marginBottom: 24 }}>404 · SCENE NOT FOUND</p>

      <h1
        style={{
          fontFamily: "var(--font-display)",
          fontSize: "clamp(48px, 6vw, 92px)",
          fontWeight: 400,
          lineHeight: 0.94,
          letterSpacing: "-0.03em",
          color: "var(--ivory)",
          marginBottom: 20,
        }}
      >
        The Frame is <i>Empty.</i>
      </h1>

      <p
        className="body-copy"
        style={{ maxWidth: 460, margin: "0 auto 36px", fontSize: 15 }}
      >
        The page you are looking for has moved or does not exist in our visual archives.
        Let&apos;s get you back to the celebration.
      </p>

      <Link href="/" className="btn gold" aria-label="Return to OM Media home">
        RETURN TO THE STUDIO
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
          <path d="M1 11L11 1M11 1H4M11 1V8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        </svg>
      </Link>
    </main>
  );
}
