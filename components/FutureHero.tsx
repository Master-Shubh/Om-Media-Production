"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";
import styles from "./FutureHero.module.css";
import { whatsapp } from "@/lib/data";

export default function FutureHero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const stage = stageRef.current;
    if (!canvas || !stage) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let frame = 0;
    let raf = 0;
    let width = 0;
    let height = 0;
    const pointer = { x: 0, y: 0, tx: 0, ty: 0 };
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    type Particle = { x: number; y: number; z: number; size: number; speed: number; drift: number };
    let particles: Particle[] = [];

    const resize = () => {
      const rect = stage.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = rect.width;
      height = rect.height;
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const count = width < 700 ? 90 : 170;
      particles = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        z: Math.random(),
        size: Math.random() * 1.8 + 0.35,
        speed: Math.random() * 0.32 + 0.08,
        drift: Math.random() * Math.PI * 2,
      }));
    };

    const move = (event: PointerEvent) => {
      const rect = stage.getBoundingClientRect();
      pointer.tx = ((event.clientX - rect.left) / rect.width - 0.5) * 2;
      pointer.ty = ((event.clientY - rect.top) / rect.height - 0.5) * 2;
    };
    const leave = () => { pointer.tx = 0; pointer.ty = 0; };

    const render = () => {
      frame += 1;
      pointer.x += (pointer.tx - pointer.x) * 0.035;
      pointer.y += (pointer.ty - pointer.y) * 0.035;
      ctx.clearRect(0, 0, width, height);

      for (const p of particles) {
        if (!reduced) {
          p.y -= p.speed;
          p.drift += 0.004;
          p.x += Math.sin(p.drift) * 0.16;
          if (p.y < -10) { p.y = height + 10; p.x = Math.random() * width; }
        }
        const depth = 0.55 + p.z * 1.45;
        const x = p.x + pointer.x * (10 + p.z * 24);
        const y = p.y + pointer.y * (7 + p.z * 18);
        const alpha = 0.12 + p.z * 0.58;
        ctx.beginPath();
        ctx.arc(x, y, p.size * depth, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(244,224,151,${alpha})`;
        ctx.fill();
      }

      raf = requestAnimationFrame(render);
    };

    resize();
    stage.addEventListener("pointermove", move, { passive: true });
    stage.addEventListener("pointerleave", leave, { passive: true });
    window.addEventListener("resize", resize);
    raf = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(raf);
      stage.removeEventListener("pointermove", move);
      stage.removeEventListener("pointerleave", leave);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <section className={`${styles.hero} premium-hero`} ref={stageRef}>
      <div className={styles.backdrop} aria-hidden="true" />
      <canvas ref={canvasRef} className={styles.particles} aria-hidden="true" />
      <div className={styles.scanlines} aria-hidden="true" />
      <div className={styles.vignette} aria-hidden="true" />

      <div className={styles.scene} aria-hidden="true">
        <div className={`${styles.orbit} ${styles.orbitOne}`}><span /></div>
        <div className={`${styles.orbit} ${styles.orbitTwo}`}><span /></div>
        <div className={`${styles.orbit} ${styles.orbitThree}`}><span /></div>
        <div className={styles.lens}>
          <div className={styles.lensOuter} />
          <div className={styles.lensInner} />
          <div className={styles.lensCore} />
          <div className={styles.holoLogo}><img src="/logo/om-logo.svg" alt="" /></div>
        </div>
        <div className={styles.beam} />
      </div>

      <div className={styles.content}>
        <p className="eyebrow">WEDDINGS • EVENTS • FILMS • LIVE</p>
        <h1>Turning <i>Moments</i><br />into <i>Masterpieces.</i></h1>
        <p className={styles.copy}>Cinematic stories from Varanasi to the world.</p>
        <div className="actions">
          <Link className="btn gold" href="/portfolio"><span className="play-dot">▶</span> Watch Showreel</Link>
          <Link className="btn glass" href="/contact">Start Your Story <ArrowRight size={16} /></Link>
        </div>
        <div className="hero-stats">
          <div><strong>500+</strong><span>Happy Clients</span></div>
          <div><strong>1000+</strong><span>Events Covered</span></div>
          <div><strong>5+</strong><span>Years of Excellence</span></div>
        </div>
      </div>

      <div className={styles.signature} aria-hidden="true">Frames Beyond<br /><em>Time</em></div>
      <div className={styles.location}><MapPin size={13} /> Varanasi, U.P. India</div>
      <div className={styles.scrollHint} aria-hidden="true"><span /> SCROLL TO EXPLORE</div>
      <a className={styles.whatsapp} href={whatsapp} target="_blank" rel="noreferrer" aria-label="Chat on WhatsApp">WA</a>
    </section>
  );
}
