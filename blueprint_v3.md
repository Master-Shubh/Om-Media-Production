# OM MEDIA & PRODUCTIONS
## MASTER WEBSITE BLUEPRINT — V3.0 (LOCKED SPECIFICATION)

### Brand Direction
> **Cinematic Luxury × Futuristic 3D × Glassmorphism × Indian Heritage × Editorial Storytelling**

### Brand Position
**OM Media & Productions**  
**Wedding Films · Photography · Production**  
*A cinematic wedding media & production house rooted in Varanasi, creating photographs, films and live experiences for celebrations across India and beyond.*

---

## 01 — PRIMARY OBJECTIVE & JOURNEY
Visitor journey:
**ATTENTION** → **EMOTION** → **CURIOSITY** → **QUALITY PROOF** → **SERVICES** → **TRUST** → **PACKAGE** → **ENQUIRY** → **WHATSAPP / CONSULTATION**

- **Primary CTA:** BEGIN YOUR STORY →
- **Secondary CTA:** WATCH SHOWREEL ▶
- **Persistent CTA:** Smart Contextual WhatsApp

---

## 02 — VISUAL DNA & COLOR SYSTEM
- **Obsidian (`#080808`):** Primary background.
- **Deep Black (`#030303`):** Hero / transitions / curtain.
- **Warm Ivory (`#F4F0E8`):** Primary text.
- **Champagne Gold (`#B79A68`):** Brand accent & borders.
- **Bright Gold (`#D4BA8A`):** Very selective specular highlights.
- **Muted Grey (`#8D8A84`):** Secondary information.

---

## 03 — GLASSMORPHISM HIERARCHY
Glassmorphism is the core UI language with a **3-tier optical hierarchy** (avoiding uniform blur everywhere):

### Level 01 — Ultra Subtle
- **Use:** Floating Header, Studio Metrics, small micro-UI tags
- **Optics:** `backdrop-filter: blur(16px)`, `background: rgba(14, 14, 15, 0.45)`, 1px delicate border (`rgba(183, 154, 104, 0.12)`)

### Level 02 — Medium
- **Use:** Service cards, collection cards, capability wall, portfolio metadata
- **Optics:** `backdrop-filter: blur(24px) saturate(140%)`, `background: rgba(14, 14, 15, 0.65)`, 1px border (`rgba(183, 154, 104, 0.20)`), subtle internal highlight (`inset 0 1px 0 rgba(255,255,255,0.08)`)

### Level 03 — Strong
- **Use:** Showreel modal, mobile navigation menu, contact/enquiry confirmation panel
- **Optics:** `backdrop-filter: blur(36px) saturate(160%)`, `background: rgba(10, 10, 12, 0.92)`, champagne focus glow (`rgba(183, 154, 104, 0.35)`)

---

## 04 — TYPOGRAPHY HIERARCHY
- **Display:** Cormorant Garamond (Luxury/editorial serif)
- **UI & Body:** Manrope (Modern/futuristic geometric sans)
- **Scale:** H1 (`clamp(54px, 7.5vw, 108px)`), H2 (`clamp(40px, 5vw, 72px)`), H3 (`clamp(24px, 3vw, 36px)`), Body (`14px–16px`), UI (`12px–14px`), Micro (`8px–10px`).

---

## 05 — 3D OM CINEMATIC LENS (3-STATE SYSTEM)
Hero signature 3D visual asset with **3 distinct behavioral states**:
1. **Idle State:** Slow autonomous floating and rotation.
2. **Interactive State:** Mouse/pointer driven X/Y parallax (smooth 0.06 lerp) + specular iris reaction.
3. **Scroll State:** Moves deeper into scene z-space as user scrolls down.
- **Mobile Graceful Degradation:** Lightweight static 3D state on mobile / touch devices to prevent GPU battery drain.

---

## 06 — MOTION PHILOSOPHY (PROGRESSIVE VISUAL COMPLEXITY)
- **24+ motion primitives available** within a unified motion system; individual sections use only the effects required by their visual narrative.
- **Progressive Visual Complexity:** Never load everything at max complexity at once.
  - Hero: 3D Lens + Background Video + Light Particles
  - Philosophy & Metrics: Pure editorial typography & whitespace
  - Showreel: Full cinematic video modal
  - Services & Capabilities: Interactive glass hover states
  - Full `prefers-reduced-motion` compliance.

---

## 07 — STUDIO METRICS (VERIFIED NON-NUMERIC TRUST MARKERS)
Until business statistics are verified with official documentation, use bulletproof non-numeric trust markers:
- **VARANASI BASED**
- **WEDDINGS · FILMS · PRODUCTION**
- **AVAILABLE ACROSS INDIA**
- **WORLDWIDE DESTINATION**

---

## 08 — SERVICES & CAPABILITIES ARCHITECTURE
### 4 Strategic Domains
1. **01 — WEDDING STORIES:** Traditional Photography, Candid Photography, Traditional Videography, Cinematography.
2. **02 — CINEMATIC PRODUCTION:** Drones, Gimbals, Cranes, Wedding Highlight Films, Teasers, Reels.
3. **03 — LIVE EXPERIENCE:** Multi-Camera Live Broadcast, LED Stage Walls, Real-Time Event Feeds.
4. **04 — PRESERVATION:** Master Handcrafted Albums, 4K Color Grading, Sound Mastering, Archival Vaults.

### Production Capabilities Wall (Section 20)
9 in-house infrastructure components (Multi-Cam, Drones, Gimbals, Jib Cranes, Live Streaming, LED Walls, Spatial Audio, Color Science, Master Albums) presented with glass Level-02 cards.

---

## 09 — COLLECTIONS (NAMING LOCKED)
- **ESSENTIAL:** Core artistic coverage for intimate celebrations.
- **SIGNATURE (Visually Dominant):** Most chosen comprehensive photography & cinematic experience.
- **LUXE:** Full studio production for multi-day grand celebrations.
- CTA: `REQUEST COLLECTION GUIDE →`

---

## 10 — ENQUIRY ENGINE & CONFIRMATION SCREEN
Multi-step enquiry flow on `/contact`:
- Name, Phone, Email, Dates, Sacred Venue, City, Function types, Services requested.
- **Enquiry Confirmation Screen:**
  ```text
  THANK YOU.
  YOUR STORY HAS REACHED OM.
  We'll get back to you shortly.
  [ CHAT ON WHATSAPP ]
  REFERENCE: OM-2026-XXXX
  ```

---

## 11 — SMART WHATSAPP ROUTING
Contextual WhatsApp link generation:
- General Homepage: *"Hi OM Media & Productions, I would like to enquire about my wedding..."*
- Service Page: *"Hi OM Media & Productions, I'm interested in [Service Domain]..."*
- Post-Submission: *"Hi OM Media & Productions, I just submitted an enquiry [Reference: OM-2026-XXXX]..."*

---

## 12 — MOBILE FIRST-CLASS EXPERIENCE
- Mobile is not a shrunk desktop; it is designed first-class.
- Simplified 3D lens (zero GPU thermal throttling)
- Fullscreen glass navigation menu with 44px+ touch targets
- Single-story vertical editorial layouts
- Accordion services with immediate tap feedback
- Sticky dual mobile contact bar (WhatsApp + Inquire)

---

## 13 — 15-SECTION MASTER HOMEPAGE HIERARCHY
```
01  PRELOADER (OM Monogram · 00—100 Counter · Soft Split)
02  HEADER (Level-01 Glass · Monogram Scroll Collapse · Magnetic CTA)
03  CINEMATIC 3D HERO (Video · 3-State 3D Lens · Particles · Micro UI)
04  BRAND STATEMENT ("We don't just capture moments. We preserve the feeling.")
05  STUDIO METRICS (Verified Trust Markers)
06  CINEMATIC SHOWREEL (Film Frame · Modal Player)
07  FEATURED STORIES (Editorial Magazine Alternating Layout)
08  SERVICES (4 Strategic Domains with Image Preview)
09  PRODUCTION CAPABILITIES (In-House Gear & Infrastructure Wall)
10  VARANASI EXPERIENCE (Slow Ganga Cinema · 25°19′N 82°59′E)
11  OM APPROACH (01 Discover · 02 Curate · 03 Create · 04 Preserve)
12  COLLECTIONS (Essential · Signature · Luxe Glass Cards)
13  TESTIMONIALS (Verified Quotes Only)
14  CINEMATIC CTA ("Your Story Deserves to be Remembered." + Dual CTA)
15  FOOTER (Architectural Monogram Watermark · "Crafted with intention.")
```
