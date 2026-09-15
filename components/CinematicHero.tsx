"use client";

import Link from "next/link";
import { useEffect, useRef, useState, useCallback } from "react";

interface CinematicHeroProps {
  onPlayShowreel?: () => void;
}

export const heroSlides = [
  {
    src: "/images/hero-wedding.jpg",
    title: "Sandstone Mandap on Sacred Ganga",
    titleHi: "गंगा तट पर वैदिक मंडप",
    tag: "VARANASI MANDAP",
    tagHi: "वाराणसी मंडप",
    location: "Varanasi Ghats, UP",
    alt: "Varanasi Sandstone Mandap on Holy Ganga Ghat",
  },
  {
    src: "/images/bride-varanasi.jpg",
    title: "Royal Banarasi Silk & Polki Splendor",
    titleHi: "शाही बनारसी रेशम व दुल्हन श्रृंगार",
    tag: "ROYAL BRIDAL",
    tagHi: "शाही दुल्हन",
    location: "Varanasi Heritage",
    alt: "Royal Banarasi Silk Bridal Portrait with Polki Jewelry",
  },
  {
    src: "/images/groom-lucknow.jpg",
    title: "Awadhi Royal Sherwani & Safa",
    titleHi: "अवधी नज़ाकत, शेरवानी व साफ़ा",
    tag: "ROYAL GROOM",
    tagHi: "अवधी दूल्हा",
    location: "Lucknow Heritage",
    alt: "Awadhi Royal Groom in Embroidered Sherwani with Safa",
  },
  {
    src: "/images/ganga-couple.jpg",
    title: "Assi Ghat Sunrise Boat Romance",
    titleHi: "अस्सी घाट भोर की नौका यात्रा",
    tag: "PRE-WEDDING",
    tagHi: "प्री-वेडिंग",
    location: "Ganga Ghats, Kashi",
    alt: "Pre-wedding boat portrait at Assi Ghat dawn",
  },
  {
    src: "/images/sacred-pheras.jpg",
    title: "Sacred Vedic Agni Pheras & Petals",
    titleHi: "पवित्र अग्नि के सात फेरे",
    tag: "SACRED RITUALS",
    tagHi: "पवित्र फेरे",
    location: "Varanasi Mandap",
    alt: "Sacred Agni Pheras with rose petal shower",
  },
  {
    src: "/images/haldi-ceremony.jpg",
    title: "Joyous Haldi Marigold Explosion",
    titleHi: "हल्दी उत्सव व गेंदा पुष्प वर्षा",
    tag: "HALDI CELEBRATION",
    tagHi: "हल्दी उत्सव",
    location: "Uttar Pradesh Celebration",
    alt: "Vibrant Haldi ceremony with marigold petal explosion",
  },
  {
    src: "/images/mehendi-art.jpg",
    title: "Intricate Bridal Henna Masterpiece",
    titleHi: "दुल्हन की बारीक शगुन मेहंदी",
    tag: "MEHENDI NIGHT",
    tagHi: "मेहंदी उत्सव",
    location: "Artisan Heritage",
    alt: "Intricate Bridal Mehendi Henna Art",
  },
  {
    src: "/images/sangeet-dance.jpg",
    title: "High-Octane Sangeet Performance",
    titleHi: "भव्य संगीत संध्या व लाइव डांस",
    tag: "SANGEET SYMPHONY",
    tagHi: "संगीत संध्या",
    location: "Live Stage Production",
    alt: "High-energy Sangeet night choreography with concert lights",
  },
  {
    src: "/images/jaimala-stage.jpg",
    title: "Monumental Varmala & Cold Pyro",
    titleHi: "भव्य जयमाला व आतिशबाजी मंच",
    tag: "STAGE PRODUCTION",
    tagHi: "शुभ वरमाला",
    location: "Grand Celebration Stage",
    alt: "Grand Jaimala Varmala stage with cold pyro fireworks",
  },
  {
    src: "/images/bidai-emotion.jpg",
    title: "Tears of Love & Heartfelt Bidai",
    titleHi: "आँखों में स्नेह, भावुक विदाई",
    tag: "RAW EMOTIONS",
    tagHi: "भावुक विदाई",
    location: "Pure Emotional Capture",
    alt: "Emotional and heartfelt Bidai tearful farewell moment",
  },
  {
    src: "/images/mandap-details.jpg",
    title: "Regal Mandap Artistry & Brass Bells",
    titleHi: "पीतल की घंटियां व वैदिक मंडप",
    tag: "MANDAP DESIGN",
    tagHi: "मंडप कला",
    location: "Vedic Design Details",
    alt: "Royal Brass Bell and Flower Mandap Setup",
  },
  {
    src: "/images/varanasi-dawn.jpg",
    title: "Spiritual Dawn on Varanasi Ghats",
    titleHi: "काशी घाटों पर भोर की गंगा आरती",
    tag: "HERITAGE ATMOSPHERE",
    tagHi: "काशी धरोहर",
    location: "Assi to Dashashwamedh",
    alt: "Historic Varanasi Ghats at Morning Aarti",
  },
  {
    src: "/images/live-production-crane.jpg",
    title: "32ft Jimmy Jib Live Broadcast Unit",
    titleHi: "32 फीट जिमी जिब क्रेन व लाइव यूनिट",
    tag: "LIVE PRODUCTION",
    tagHi: "लाइव प्रोडक्शन",
    location: "In-House Tech Fleet",
    alt: "Multi-camera live production crane setup",
  },
];

export default function CinematicHero({ onPlayShowreel }: CinematicHeroProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const lineRef = useRef<HTMLSpanElement>(null);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  }, []);

  /* 2-second auto animation transition */
  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 2000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  /* Subtle Organic Champagne Light Dust Particles */
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return;

    let raf = 0;
    let width = 0;
    let height = 0;
    const pointer = { x: 0, y: 0, tx: 0, ty: 0 };

    type Particle = {
      x: number;
      y: number;
      size: number;
      speed: number;
      drift: number;
      alpha: number;
    };
    let particles: Particle[] = [];

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      const count = width < 768 ? 35 : 75;
      particles = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        size: Math.random() * 1.4 + 0.3,
        speed: Math.random() * 0.22 + 0.06,
        drift: Math.random() * Math.PI * 2,
        alpha: Math.random() * 0.38 + 0.12,
      }));
    };

    const onPointerMove = (e: PointerEvent) => {
      pointer.tx = (e.clientX / width - 0.5) * 16;
      pointer.ty = (e.clientY / height - 0.5) * 16;
    };

    const render = () => {
      pointer.x += (pointer.tx - pointer.x) * 0.035;
      pointer.y += (pointer.ty - pointer.y) * 0.035;
      ctx.clearRect(0, 0, width, height);

      for (const p of particles) {
        p.y -= p.speed;
        p.drift += 0.0025;
        p.x += Math.sin(p.drift) * 0.12;

        if (p.y < -10) {
          p.y = height + 10;
          p.x = Math.random() * width;
        }

        const renderX = p.x + pointer.x;
        const renderY = p.y + pointer.y;

        ctx.beginPath();
        ctx.arc(renderX, renderY, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(212, 186, 138, ${p.alpha})`;
        ctx.fill();
      }

      raf = requestAnimationFrame(render);
    };

    resize();
    window.addEventListener("resize", resize);
    window.addEventListener("pointermove", onPointerMove, { passive: true });
    raf = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", onPointerMove);
    };
  }, []);

  /* Slow Parallax on scroll */
  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return;

    const slider = sliderRef.current;
    const section = sectionRef.current;
    const text = textRef.current;
    if (!section || !slider || !text) return;

    let raf = 0;
    let ticking = false;

    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      raf = requestAnimationFrame(() => {
        const scrollY = window.scrollY;
        const height = section.offsetHeight;
        const progress = Math.min(scrollY / height, 1);

        slider.style.transform = `scale(${1 + progress * 0.04})`;
        text.style.transform = `translateY(${-progress * 24}px)`;

        ticking = false;
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  const handleShowreelClick = (e: React.MouseEvent) => {
    if (onPlayShowreel) {
      e.preventDefault();
      onPlayShowreel();
    } else {
      const showreelEl = document.getElementById("showreel");
      if (showreelEl) {
        e.preventDefault();
        showreelEl.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="cinematic-hero"
      style={{
        position: "relative",
        minHeight: "100svh",
        display: "flex",
        alignItems: "center",
        overflow: "hidden",
        backgroundColor: "#030303",
      }}
      aria-label="OM Media & Productions — Turning Moments into Masterpieces"
    >
      {/* ── CINEMATIC AUTO-ANIMATED BACKGROUND SLIDESHOW (1-SEC AUTO CYCLE) ── */}
      <div
        ref={sliderRef}
        aria-label="Automated Indian Wedding Visuals Showcase"
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          overflow: "hidden",
          willChange: "transform",
        }}
      >
        {heroSlides.map((slide, idx) => {
          const isActive = idx === currentSlide;
          const isAdjacent =
            idx === (currentSlide + 1) % heroSlides.length ||
            idx === (currentSlide - 1 + heroSlides.length) % heroSlides.length;
          const shouldLoad = isActive || isAdjacent;

          return (
            <div
              key={slide.src}
              aria-hidden={!isActive}
              style={{
                position: "absolute",
                inset: 0,
                width: "100%",
                height: "100%",
                opacity: isActive ? 1 : 0,
                transition: "opacity 1.0s cubic-bezier(0.4, 0, 0.2, 1)",
                zIndex: isActive ? 1 : 0,
                willChange: "opacity",
              }}
            >
              {shouldLoad && (
                <img
                  src={slide.src}
                  alt={slide.alt || slide.title}
                  fetchPriority={isActive ? "high" : "low"}
                  loading={isActive ? "eager" : "lazy"}
                  decoding="async"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    objectPosition: "center 38%",
                    filter: "brightness(0.82) contrast(1.08) saturate(1.15)",
                    transform: isActive ? "scale(1.05)" : "scale(1.0)",
                    transition: "transform 2.4s cubic-bezier(0.16, 1, 0.3, 1), filter 0.8s ease",
                    willChange: "transform",
                  }}
                />
              )}
            </div>
          );
        })}
      </div>

      {/* ── PARTICLE CANVAS ── */}
      <canvas
        ref={canvasRef}
        style={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
          zIndex: 2,
        }}
        aria-hidden="true"
      />

      {/* ── CINEMATIC GRADIENT OVERLAYS (VIBRANT BACKGROUND + CRISP LEGIBILITY) ── */}
      {/* 1. Left Editorial Text Veil */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(90deg, rgba(6,6,6,0.76) 0%, rgba(6,6,6,0.52) 36%, rgba(6,6,6,0.18) 68%, rgba(6,6,6,0.06) 100%)",
          pointerEvents: "none",
          zIndex: 2,
        }}
      />
      {/* 2. Bottom Smooth Scrim into Next Section */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(to top, rgba(6,6,6,0.92) 0%, rgba(6,6,6,0.42) 16%, rgba(6,6,6,0) 36%)",
          pointerEvents: "none",
          zIndex: 2,
        }}
      />
      {/* 3. Top Header Contrast Shade */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(to bottom, rgba(6,6,6,0.6) 0%, rgba(6,6,6,0) 18%)",
          pointerEvents: "none",
          zIndex: 2,
        }}
      />

      {/* ── HERO CONTENT: EDITORIAL LUXURY TYPOGRAPHY ── */}
      <div
        style={{
          position: "relative",
          zIndex: 3,
          width: "100%",
          maxWidth: "var(--max-w)",
          margin: "0 auto",
          padding: "130px var(--gutter) 70px",
          display: "flex",
          alignItems: "center",
        }}
        className="hero-grid"
      >
        {/* Authentic Wedding & Production Typography */}
        <div ref={textRef} style={{ willChange: "transform", maxWidth: "min(840px, 100%)" }}>
          {/* Eyebrow */}
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 12,
              marginBottom: 20,
            }}
          >
            <span
              style={{
                width: 24,
                height: 1,
                background: "var(--champagne)",
                opacity: 0.85,
                boxShadow: "0 0 8px var(--champagne)",
              }}
            />
            <p
              className="eyebrow"
              style={{
                margin: 0,
                textShadow: "0 2px 10px rgba(0,0,0,0.9)",
                letterSpacing: "0.28em",
              }}
            >
              WEDDING FILMS · PHOTOGRAPHY · PRODUCTION
            </p>
          </div>

          {/* Main Display Heading */}
          <h1
            style={{
              fontFamily: "var(--font-display, Georgia, serif)",
              fontSize: "clamp(36px, 6.8vw, 104px)",
              fontWeight: 400,
              lineHeight: 0.94,
              letterSpacing: "-0.03em",
              color: "#FAF9F6",
              margin: "0 0 24px",
              textShadow: "0 3px 25px rgba(0,0,0,0.92), 0 6px 50px rgba(0,0,0,0.98)",
            }}
          >
            Turning Moments
            <br />
            into <i style={{ color: "var(--champagne-light)", fontStyle: "italic", textShadow: "0 0 20px rgba(212,186,138,0.4)" }}>Masterpieces.</i>
          </h1>

          {/* Supporting Statement */}
          <div style={{ maxWidth: 560, margin: "0 0 36px" }}>
            <p
              style={{
                fontFamily: "var(--font-ui, Arial, sans-serif)",
                fontSize: "clamp(14px, 1.35vw, 17px)",
                lineHeight: 1.8,
                color: "#F4F0E8",
                margin: "0 0 8px",
                fontWeight: 400,
                textShadow: "0 2px 14px rgba(0,0,0,0.9)",
              }}
            >
              Cinematic wedding stories, crafted in Varanasi and across Uttar Pradesh.
            </p>
            <p
              className="hindi-text"
              style={{
                fontFamily: "var(--font-hindi, 'Nirmala UI', 'Mangal', sans-serif)",
                fontSize: "clamp(13px, 1.2vw, 15px)",
                lineHeight: 1.65,
                color: "var(--champagne-light)",
                margin: 0,
                fontWeight: 400,
                letterSpacing: "0.03em",
                wordSpacing: "0.22em",
                textShadow: "0 2px 12px rgba(0,0,0,0.95)",
              }}
            >
              काशी की पावन धरा से सम्पूर्ण भारत तक — विवाह के अनमोल पलों का जीवंत सिनेमा।
            </p>
          </div>

          {/* Primary & Secondary Action CTAs */}
          <div className="actions" style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
            <a
              href="#showreel"
              onClick={handleShowreelClick}
              className="btn gold"
              aria-label="Watch our cinematic showreel"
              style={{ minWidth: 190, display: "inline-flex", alignItems: "center", gap: 6 }}
            >
              <span style={{ fontSize: 9 }}>▶</span>
              <span>WATCH SHOWREEL · शोरील ↗</span>
            </a>

            <Link
              href="/contact"
              className="btn outline"
              aria-label="Begin your wedding story with OM Media"
              style={{ minWidth: 180 }}
            >
              <span>बुकिंग पूछताछ · INQUIRE</span>
            </Link>
          </div>

          {/* Available Across India Indicator */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 8,
              marginTop: 28,
            }}
          >
            <span
              style={{
                width: 6,
                height: 6,
                borderRadius: "50%",
                backgroundColor: "var(--champagne)",
                boxShadow: "0 0 8px var(--champagne)",
              }}
            />
            <span
              style={{
                fontFamily: "var(--font-ui, sans-serif)",
                fontSize: "9px",
                fontWeight: 600,
                letterSpacing: "0.26em",
                textTransform: "uppercase",
                color: "var(--muted-light)",
                textShadow: "0 1px 8px rgba(0,0,0,0.9)",
              }}
            >
              AVAILABLE ACROSS INDIA
            </span>
          </div>
        </div>
      </div>

      {/* ── MICRO-LOCATION INDICATOR (VARANASI · UTTAR PRADESH · INDIA) ── */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          left: 28,
          bottom: "50%",
          transform: "translateY(50%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 6,
          zIndex: 3,
        }}
        className="hero-vertical-meta"
      >
        <span
          style={{
            fontFamily: "var(--font-ui, Arial, sans-serif)",
            fontSize: 8,
            fontWeight: 600,
            letterSpacing: "0.32em",
            textTransform: "uppercase",
            color: "rgba(212,186,138,0.9)",
            writingMode: "vertical-rl",
            transform: "rotate(180deg)",
            textShadow: "0 1px 6px rgba(0,0,0,0.9)",
          }}
        >
          VARANASI · UTTAR PRADESH · INDIA
        </span>
      </div>

      {/* ── PROGRESS STRIP (BOTTOM CENTER) ── */}
      <div
        aria-label="Slideshow progress indicators"
        style={{
          position: "absolute",
          bottom: 24,
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          alignItems: "center",
          gap: 5,
          zIndex: 4,
          padding: "6px 12px",
          background: "rgba(10,10,12,0.65)",
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",
          borderRadius: 20,
          border: "1px solid rgba(212,186,138,0.2)",
        }}
      >
        {heroSlides.map((slide, idx) => {
          const isActive = idx === currentSlide;
          return (
            <button
              key={slide.src}
              onClick={() => setCurrentSlide(idx)}
              aria-label={`Show ${slide.title}`}
              style={{
                width: isActive ? 20 : 6,
                height: 4,
                borderRadius: 2,
                backgroundColor: isActive ? "var(--champagne)" : "rgba(255,255,255,0.28)",
                boxShadow: isActive ? "0 0 8px var(--champagne)" : "none",
                transition: "all 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
                border: "none",
                padding: 0,
                cursor: "pointer",
              }}
            />
          );
        })}
      </div>

      {/* ── LIVE SLIDESHOW BADGE & FRAME COUNTER (BOTTOM RIGHT) ── */}
      <div
        className="hero-slide-badge"
        style={{
          position: "absolute",
          right: "clamp(16px, 4vw, 40px)",
          bottom: "clamp(20px, 3vh, 32px)",
          zIndex: 4,
          display: "flex",
          alignItems: "center",
          gap: 12,
          padding: "8px 14px",
          background: "rgba(10, 10, 12, 0.82)",
          backdropFilter: "blur(16px)",
          WebkitBackdropFilter: "blur(16px)",
          border: "1px solid rgba(212, 186, 138, 0.28)",
          borderRadius: 999,
          boxShadow: "0 8px 32px rgba(0, 0, 0, 0.6)",
        }}
      >
        <span
          style={{
            width: 7,
            height: 7,
            borderRadius: "50%",
            backgroundColor: "#22c55e",
            boxShadow: "0 0 8px #22c55e",
            display: "inline-block",
          }}
          aria-hidden="true"
        />
        <div style={{ display: "flex", flexDirection: "column", gap: 1 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <span
              style={{
                fontFamily: "var(--font-mono, monospace)",
                fontSize: 10,
                color: "var(--champagne-light)",
                fontWeight: 700,
                letterSpacing: "0.06em",
              }}
            >
              {String(currentSlide + 1).padStart(2, "0")}/{String(heroSlides.length).padStart(2, "0")}
            </span>
            <span
              style={{
                fontSize: 8.5,
                fontWeight: 700,
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                color: "rgba(255,255,255,0.92)",
              }}
            >
              {heroSlides[currentSlide].tagHi} · {heroSlides[currentSlide].tag}
            </span>
          </div>
          <span
            style={{
              fontSize: 11,
              fontFamily: "var(--font-display, serif)",
              color: "rgba(244,240,232,0.9)",
              maxWidth: 240,
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
            }}
          >
            {heroSlides[currentSlide].titleHi}
          </span>
        </div>

        {/* Micro Prev/Next Buttons */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 4,
            marginLeft: 4,
            borderLeft: "1px solid rgba(212,186,138,0.2)",
            paddingLeft: 8,
          }}
        >
          <button
            onClick={prevSlide}
            aria-label="Previous wedding image"
            style={{
              background: "transparent",
              border: "none",
              color: "var(--champagne)",
              cursor: "pointer",
              padding: "4px",
              fontSize: 10,
              lineHeight: 1,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            ◀
          </button>
          <button
            onClick={nextSlide}
            aria-label="Next wedding image"
            style={{
              background: "transparent",
              border: "none",
              color: "var(--champagne)",
              cursor: "pointer",
              padding: "4px",
              fontSize: 10,
              lineHeight: 1,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            ▶
          </button>
        </div>
      </div>
    </section>
  );
}
