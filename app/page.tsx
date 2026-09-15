import CinematicHero from "@/components/CinematicHero";
import StudioMetrics from "@/components/StudioMetrics";
import StudioPhilosophy from "@/components/StudioPhilosophy";
import Showreel from "@/components/Showreel";
import ServicesEditorial from "@/components/ServicesEditorial";
import Deliverables from "@/components/Deliverables";
import ProductionCapabilities from "@/components/ProductionCapabilities";
import BehindTheFrame from "@/components/BehindTheFrame";
import VaranasiSection from "@/components/VaranasiSection";
import VenuesSection from "@/components/VenuesSection";
import Collections from "@/components/Collections";
import DateChecker from "@/components/DateChecker";
import Testimonials from "@/components/Testimonials";
import SocialStories from "@/components/SocialStories";
import CinematicCTA from "@/components/CinematicCTA";
import MobileFloatingDock from "@/components/MobileFloatingDock";

export default function Home() {
  return (
    <main>
      {/* 01 — 10/10 Full Viewport Cinematic Hero with 3D OM Lens */}
      <CinematicHero />

      {/* 02 — Qualitative Trust Markers (No Fake Numbers) */}
      <StudioMetrics />

      {/* 03 — Editorial Brand Statement & Cultural Anchor */}
      <StudioPhilosophy />

      {/* 04 — Full-Width Cinematic Showreel Frame & Cinema Player Modal */}
      <Showreel />

      {/* 05 — Production Departments Ecosystem (Desktop Hover Reveal & Mobile Accordion) */}
      <ServicesEditorial />

      {/* 06 — Transparent Deliverables Architecture ("What You Receive") */}
      <Deliverables />

      {/* 07 — In-House Hardware & Production Infrastructure Wall ("More Than A Camera") */}
      <ProductionCapabilities />

      {/* 08 — Behind The Frame (BTS Discipline & Engineering Proof) */}
      <BehindTheFrame />

      {/* 09 — Uttar Pradesh First & Pan-India Geographic Architecture */}
      <VaranasiSection />

      {/* 10 — Celebrations We've Been Part Of (Heritage & Modern Luxury Venues) */}
      <VenuesSection />

      {/* 11 — Curated Collections & Interactive 14-Parameter Comparison Modal */}
      <Collections />

      {/* 12 — Interactive Celebration Date & City Availability Checker */}
      <DateChecker />

      {/* 13 — Client Words & 5.0 Google Review Badge */}
      <Testimonials />

      {/* 14 — Instagram Editorial Grid ("Follow The Stories") */}
      <SocialStories />

      {/* 15 — Final Monumental Cinematic Call to Action */}
      <CinematicCTA />

      {/* 16 — Persistent Mobile Conversion Dock (WhatsApp & Inquire Date) */}
      <MobileFloatingDock />
    </main>
  );
}
