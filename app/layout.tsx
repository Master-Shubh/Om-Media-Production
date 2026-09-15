import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import "./globals.css";
import { site, siteConfig } from "@/lib/data";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Preloader from "@/components/Preloader";
import CustomCursor from "@/components/CustomCursor";

/* ── FONTS ────────────────────────────────────────────────────── */
const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
  preload: true,
});

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-manrope",
  display: "swap",
  preload: true,
});

/* ── METADATA ─────────────────────────────────────────────────── */
const baseUrl = "https://www.ommediaproductions.com";

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "OM Media & Productions | Luxury Wedding Films & Photography in Varanasi",
    template: "%s | OM Media & Productions",
  },
  description:
    "Cinematic wedding films, photography and production house rooted in Varanasi, Uttar Pradesh. Creating timeless masterpieces for celebrations across UP and India.",
  keywords: [
    "Wedding Photographer Varanasi",
    "Wedding Cinematography Varanasi",
    "Cinematic Wedding Films Varanasi",
    "Luxury Wedding Photography Uttar Pradesh",
    "Wedding Photographer Lucknow",
    "Drone Wedding Photography Varanasi",
    "Live Wedding Broadcasting Varanasi",
    "Pre-Wedding Photographer Varanasi",
    "Wedding Videography Uttar Pradesh",
  ],
  openGraph: {
    title: "OM Media & Productions | Luxury Wedding Films & Photography",
    description:
      "Cinematic wedding films, photography and live production rooted in Varanasi, Uttar Pradesh. Turning moments into masterpieces across India.",
    type: "website",
    locale: "en_IN",
    url: baseUrl,
    siteName: "OM Media & Productions",
  },
  twitter: {
    card: "summary_large_image",
    title: "OM Media & Productions",
    description: "Cinematic wedding films and photography from Varanasi, Uttar Pradesh.",
  },
  icons: {
    icon: "/icon.svg",
    shortcut: "/icon.svg",
    apple: "/icon.svg",
  },
  robots: {
    index: true,
    follow: true,
  },
};

/* ── ROOT LAYOUT ─────────────────────────────────────────────── */
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const sameAs = Object.values(siteConfig.socials).filter(Boolean);

  /* Schema: ProfessionalService + LocalBusiness */
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "ProfessionalService"],
    name: site.name,
    description: metadata.description,
    telephone: site.phone,
    email: site.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: "Sharnath",
      addressLocality: "Varanasi",
      addressRegion: "Uttar Pradesh",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "25.3176",
      longitude: "82.9739",
    },
    url: baseUrl,
    sameAs,
    serviceType: [
      "Wedding Photography",
      "Cinematic Wedding Films",
      "Pre-Wedding Photography",
      "Drone Photography",
      "Live Broadcasting",
    ],
    areaServed: {
      "@type": "Country",
      name: "India",
    },
  };

  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${manrope.variable}`}
    >
      <body>
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        {/* Cinematic Preloader — first visit only */}
        <Preloader />

        {/* Custom cursor — desktop only */}
        <CustomCursor />

        {/* App Shell */}
        {children && (
          <>
            <Header />
            {children}
            <Footer />
          </>
        )}
      </body>
    </html>
  );
}