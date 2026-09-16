/**
 * OM MEDIA & PRODUCTIONS — CENTRALIZED CONTENT & MEDIA ARCHITECTURE
 * 
 * Cinematic Luxury × Indian Heritage × Modern Film Studio
 * Rooted in Varanasi, Uttar Pradesh — Serving Celebrations Across India
 * 
 * All media references, copy, and packages are defined here for easy updates.
 */

export interface SiteConfig {
  name: string;
  wordmark: string;
  tagline: string;
  supportingStatement: string;
  brandStory: string;
  founder: string;
  established: string;
  location: {
    city: string;
    state: string;
    country: string;
    address: string;
    coordinates: string;
  };
  contact: {
    phone: string;
    phoneDisplay: string;
    email: string;
    whatsapp: string;
  };
  socials: {
    instagram: string;
    youtube: string;
    facebook: string;
  };
}

export const siteConfig: SiteConfig = {
  name: "OM Media & Productions",
  wordmark: "OM MEDIA & PRODUCTIONS",
  tagline: "Turning Moments into Masterpieces.",
  supportingStatement: "Cinematic wedding stories, crafted in Varanasi and across Uttar Pradesh.",
  brandStory: "A cinematic wedding media and production house rooted in Varanasi, Uttar Pradesh, creating photographs, films and live experiences for celebrations across India.",
  founder: "Vinod Kumar",
  established: "Varanasi, India",
  location: {
    city: "Varanasi",
    state: "Uttar Pradesh",
    country: "India",
    address: "Sarnath, Varanasi, Uttar Pradesh 221007, India",
    coordinates: "25°22′N 83°01′E"
  },
  contact: {
    phone: "8853104540",
    phoneDisplay: "+91 88531 04540",
    email: "MR.VINODKR.8853@GMAIL.COM",
    whatsapp: "918853104540"
  },
  socials: {
    instagram: "https://instagram.com/Om_Media_and_Product",
    youtube: "https://youtube.com/@OmMediaProductions",
    facebook: ""
  }
};

export const site = {
  name: siteConfig.name,
  founder: siteConfig.founder,
  tagline: siteConfig.tagline,
  supportingStatement: siteConfig.supportingStatement,
  location: `${siteConfig.location.city}, ${siteConfig.location.state}, ${siteConfig.location.country}`,
  coordinates: siteConfig.location.coordinates,
  phone: siteConfig.contact.phone,
  phoneDisplay: siteConfig.contact.phoneDisplay,
  email: siteConfig.contact.email,
  instagram: "@Om_Media_and_Product"
};

/* ── CENTRALIZED MEDIA ASSETS (EASILY REPLACEABLE) ── */
export const mediaAssets = {
  // Hero Video & Poster
  heroVideo: "https://videos.pexels.com/video-files/3735186/3735186-uhd_2560_1440_25fps.mp4",
  heroPoster: "/images/hero-wedding.jpg",
  
  // Showreel Video
  showreelVideo: "https://videos.pexels.com/video-files/3735186/3735186-uhd_2560_1440_25fps.mp4",
  showreelPoster: "/images/jaimala-stage.jpg",

  // Brand Story & Varanasi Atmosphere
  varanasiRiverGhats: "/images/varanasi-dawn.jpg",
  philosophyEditorial: "/images/bride-varanasi.jpg",
  ctaBackground: "/images/hero-wedding.jpg"
};

/* ── CONTEXTUAL WHATSAPP ROUTING ── */
export function getWhatsAppLink(context?: {
  page?: string;
  service?: string;
  ref?: string;
  date?: string;
  city?: string;
  packageTier?: string;
  photoTitle?: string;
}): string {
  let message = "Hello OM Media & Productions,\n\nI would like to enquire about my upcoming wedding celebration.";

  if (context?.ref) {
    message = `Hello OM Media & Productions,\n\nI have just submitted an enquiry on your website.\nReference ID: ${context.ref}\n\nCould we please check date availability and discuss the production plan?`;
  } else if (context?.packageTier) {
    message = `Hello OM Media & Productions,\n\nI am interested in your ${context.packageTier} collection for my wedding.\nCould you share full package details, deliverables, and date availability?`;
  } else if (context?.service) {
    message = `Hello OM Media & Productions,\n\nI would like to enquire about your ${context.service} services for our upcoming celebration.`;
  } else if (context?.date) {
    message = `Hello OM Media & Productions,\n\nI would like to check studio availability for wedding dates around ${context.date} in ${context?.city || "Uttar Pradesh"}.`;
  } else if (context?.photoTitle) {
    message = `Hello OM Media & Productions,\n\nI loved the work in '${context.photoTitle}' from your portfolio.\nCould you share details on creating a similar visual style for our wedding?`;
  }

  return `https://wa.me/${siteConfig.contact.whatsapp}?text=${encodeURIComponent(message)}`;
}

export const whatsapp = getWhatsAppLink();

/* ── PRIMARY & SECONDARY SERVICES ECOSYSTEM ── */
export interface ServiceDepartment {
  id: string;
  number: string;
  departmentNumber?: string;
  title: string;
  shortTitle: string;
  tagline: string;
  description: string;
  secondaryTags: string[];
  equipmentHighlight: string;
  keyDeliverables: string[];
  approach: string;
  image: string;
  videoPreview?: string;
  faqs?: { question: string; answer: string }[];
}

export const primaryServices: ServiceDepartment[] = [
  {
    id: "wedding-photography",
    number: "01",
    departmentNumber: "01",
    title: "WEDDING PHOTOGRAPHY",
    shortTitle: "Photography",
    tagline: "Editorial bridal portraits, raw candid emotions & timeless ritual coverage",
    description: "Dual-squad system: dedicated candid photographers for raw emotions, alongside portrait masters for Vedic rituals and family formals.",
    secondaryTags: ["Candid Photography", "Traditional Photography", "Editorial Bridal", "Ritual Formals", "Fine-Art Albums"],
    equipmentHighlight: "Dual-slot full-frame sensors, fast f/1.2 & f/1.4 prime portrait glass, off-camera creative lighting kits",
    keyDeliverables: [
      "Curated editorial bridal and couple portrait suite",
      "Comprehensive color-graded high-resolution digital gallery",
      "Full traditional ritual & ancestral family formal coverage",
      "Private high-speed online gallery for extended family worldwide",
      "Heirloom lay-flat album selection suite"
    ],
    approach: "We believe the most poignant memories happen in the quiet moments between staged events—a father's silent pride, spontaneous laughter during haldi, and the holy reverence of the pheras.",
    image: "/images/bride-varanasi.jpg",
    faqs: [
      {
        question: "How many photographs do we receive?",
        answer: "For a multi-day wedding celebration, we typically deliver between 800 to 1,500 meticulously curated and color-graded high-resolution photographs, along with a full archival gallery of all ceremony moments."
      },
      {
        question: "How does the dual-squad photography system work?",
        answer: "One team is strictly dedicated to unscripted candid moments without interrupting the flow of events, while our senior portrait masters coordinate ancestral group portraits, stage formals, and sacred mandap rituals."
      }
    ]
  },
  {
    id: "cinematic-wedding-films",
    number: "02",
    departmentNumber: "02",
    title: "CINEMATIC WEDDING FILMS",
    shortTitle: "Cinematic Films",
    tagline: "Feature-film aesthetics, narrative storytelling & calibrated color grading",
    description: "Multi-angle cinema rigs, motorized gimbals, aerial perspectives, and multi-track audio crafting emotion-packed feature films.",
    secondaryTags: ["Cinematography", "Highlight Films", "Teasers & Reels", "4K Color Grading", "Multi-Track Audio"],
    equipmentHighlight: "Sony Cinema Line rigs (FX series), motorized 3-axis gimbals, prime cinema lenses, wireless multi-track audio lavaliers",
    keyDeliverables: [
      "Cinematic Teaser Trailer (60-90 seconds for social media release)",
      "Master 4K Cinematic Highlight Film (3-5 minutes)",
      "Long-Form Documentary Ceremony Film (full sacred rituals & speeches)",
      "Same-Day Edit Teaser option for Reception dinner premiere",
      "Delivered in 4K resolution on signature engraved presentation drive"
    ],
    approach: "Our cinema directors maintain an unobtrusive presence during intimate ceremonies, capturing raw emotion without staging or intrusive lighting.",
    image: "/images/hero-wedding.jpg",
    faqs: [
      {
        question: "What is the turnaround time for our wedding film?",
        answer: "You receive your 60-second social teaser within 7-10 days following the wedding. The master 4K highlight film and full documentary ceremony cuts are completed within 6 to 8 weeks after meticulous audio mastering and cinema color grading."
      },
      {
        question: "Can we choose the music for our wedding film?",
        answer: "We welcome your musical inspirations and favorite genres. Our cinema directors carefully match licensed soundtracks to the tempo and emotional rhythm of each ceremony segment to ensure a timeless result."
      }
    ]
  },
  {
    id: "pre-wedding-stories",
    number: "03",
    departmentNumber: "03",
    title: "PRE-WEDDING STORIES",
    shortTitle: "Pre-Wedding",
    tagline: "Poetic narratives set against the ancient Ghats and royal fortresses of India",
    description: "Thoughtfully directed narratives from misty Ganga sunrise boats to dramatic sandstone fort courtyards celebrating your authentic chemistry.",
    secondaryTags: ["Concept Direction", "Ghats & Riverfront", "Historic Forts", "Story Teasers", "Fine-Art Portraits"],
    equipmentHighlight: "Ultra-compact cinema rigs, 4K aerial drones, natural diffusion filters for morning golden hour",
    keyDeliverables: [
      "Narrative 3-Minute 4K Pre-Wedding Film",
      "Reception Premiere Teaser Cut",
      "Curated suite of 40+ Fine-Art High-Resolution Portraits",
      "Styling & Location Coordination Guide"
    ],
    approach: "We avoid clichéd posing. We guide you into relaxed natural interactions—conversations, shared smiles, and quiet walks that feel effortlessly genuine.",
    image: "/images/ganga-couple.jpg",
    faqs: [
      {
        question: "Where do you typically shoot pre-weddings in Varanasi?",
        answer: "We specialize in atmospheric dawn sessions at Assi Ghat, boat journeys along Chet Singh Ghat and Darbhanga Ghat, the historic architecture of Ramnagar Fort, and quiet heritage lanes before morning crowds arrive."
      },
      {
        question: "Do you travel outside Varanasi for pre-weddings?",
        answer: "Yes, our pre-wedding team frequently travels across Uttar Pradesh (Lucknow heritage palaces, Chunar Fort, Ayodhya sarayu ghats) as well as royal palaces in Rajasthan and destination landscapes."
      }
    ]
  },
  {
    id: "live-production",
    number: "04",
    departmentNumber: "04",
    title: "LIVE PRODUCTION",
    shortTitle: "Live Production",
    tagline: "Hollywood-scale Jimmy Jib crane, live multi-cam switching & massive LED walls",
    description: "Full in-house broadcast infrastructure: 32ft crane, multi-cam vision switching, stage LED walls, and global live streaming.",
    secondaryTags: ["Jimmy Jib Crane", "Live Broadcasting", "LED Stage Walls", "Multi-Cam Vision Switcher", "Drone Units"],
    equipmentHighlight: "32-foot Jimmy Jib crane with motorized pan-tilt head, multi-channel SDI/HDMI vision mixers, outdoor P3/P4 LED wall panels",
    keyDeliverables: [
      "Real-time live multi-camera feeds projected onto stage LED walls",
      "Private secure YouTube/custom link live streaming for international guests",
      "Master ISO recordings of each camera angle plus program master",
      "Sweeping overhead crane shots of Jaimala, Baraat & Stage entry"
    ],
    approach: "Our technical directors run wedding stages with broadcast precision, coordinating smoothly between crane sweeps and close-up emotional expressions.",
    image: "/images/live-production-crane.jpg",
    faqs: [
      {
        question: "What space is needed for the 32ft Jimmy Jib crane?",
        answer: "The crane requires an operating radius of approximately 12-15 feet on solid, level ground. Our technical crew conducts a preliminary venue site inspection to establish safety perimeters and optimal sweep angles."
      },
      {
        question: "How does the live LED wall and streaming work?",
        answer: "We deploy an on-site master control deck with broadcast SDI cabling. Live camera feeds are mixed in real time with custom graphics and broadcast to venue screens and private low-latency streams simultaneously."
      }
    ]
  }
];

export const services = primaryServices;

export const secondaryServiceTags = [
  "Traditional Photography",
  "Candid Photography",
  "Cinematography",
  "Drone Aerials",
  "3-Axis Gimbal",
  "Jimmy Jib Crane",
  "Live Broadcasting",
  "LED / Screens",
  "Instagram Reels",
  "Color Grading",
  "Heirloom Albums",
  "Same-Day Content",
  "Event Production"
];

/* ── DELIVERABLES ARCHITECTURE ("WHAT YOU RECEIVE") ── */
export interface DeliverableGroup {
  id: string;
  category: string;
  title: string;
  subtitle: string;
  items: { name: string; desc: string; format: string }[];
}

export const deliverablesData: DeliverableGroup[] = [
  {
    id: "cinematic-films",
    category: "CINEMATIC FILM",
    title: "Feature Films & Teasers",
    subtitle: "Color-graded 4K master visual stories crafted with narrative intention.",
    items: [
      { name: "Teaser Trailer", desc: "Fast-paced cinematic montage set to music for immediate social release", format: "60–90 Sec / 4K" },
      { name: "Highlight Film", desc: "Our signature emotional narrative with vows, speeches, and ceremony crescendos", format: "3–5 Mins / 4K" },
      { name: "Full Ceremony Film", desc: "Long-form documentary cut preserving all rituals, mantras, and speeches unedited", format: "60–120 Mins / 4K" }
    ]
  },
  {
    id: "photography",
    category: "PHOTOGRAPHY",
    title: "Master High-Resolution Still Gallery",
    subtitle: "Every decisive moment, detail, and portrait color-corrected with timeless tones.",
    items: [
      { name: "Curated Bridal Suite", desc: "Fine-art portraits capturing bridal jewellery, lehenga, and quiet reflection", format: "Full-Res RAW Dev" },
      { name: "Candid Story Gallery", desc: "Unstaged, raw emotional moments across family, laughter, and sacred pheras", format: "High-Res JPEG/TIFF" },
      { name: "Complete Ritual Formals", desc: "Exhaustive documentation of ancestral traditions, family groupings, and guests", format: "Color Corrected" }
    ]
  },
  {
    id: "social",
    category: "SOCIAL MEDIA",
    title: "Mobile-Optimized Vertical Cinema",
    subtitle: "Tailored 9:16 reels and teasers ready for instant sharing with family and friends.",
    items: [
      { name: "Signature Instagram Reels", desc: "High-impact vertical cuts synchronized with trending music & audio moments", format: "9:16 Vertical / 4K" },
      { name: "Same-Day Teaser Cut", desc: "Edited on-location and screened during the Reception party (Signature/Luxe)", format: "Next-Day Delivery" }
    ]
  },
  {
    id: "delivery",
    category: "DELIVERY & ARCHIVE",
    title: "Private Online Gallery & Digital Vault",
    subtitle: "Convenient global access with guaranteed permanent archival protection.",
    items: [
      { name: "Private Web Gallery", desc: "Password-protected gallery with one-click full-resolution downloads for guests", format: "Web & Mobile" },
      { name: "Signature Presentation Drive", desc: "Engraved 64GB high-speed USB presentation drive in a handcrafted wooden keepsake box", format: "Physical Drive" },
      { name: "Permanent Cloud Vault", desc: "Redundant cloud backup safeguarding your master wedding footage for years", format: "Archival Vault" }
    ]
  },
  {
    id: "heirloom",
    category: "HEIRLOOM CRAFT",
    title: "Master Handcrafted Fine-Art Albums",
    subtitle: "Generational physical keepsakes bound by master press artisans.",
    items: [
      { name: "50-Sheet Lay-Flat Album", desc: "100 pages of thick archival photographic silver-halide paper bound in Italian leather", format: "12x18 / 12x15" },
      { name: "Master Wall Canvas Prints", desc: "Two museum-grade framed fine-art prints ready to hang in your home", format: "Large Format" },
      { name: "Parent Album Duplicates", desc: "Companion albums for parents preserving the full collection (Add-on/Luxe)", format: "Duplicate Sets" }
    ]
  }
];

/* ── PRODUCTION HARDWARE & INFRASTRUCTURE ("MORE THAN A CAMERA.") ── */
export interface CapabilityItem {
  number: string;
  title: string;
  highlight: string;
  description: string;
  tag: string;
}

export const productionCapabilities: CapabilityItem[] = [
  {
    number: "01",
    title: "Multi-Camera Cinema Rigs",
    highlight: "Sony Cinema Line & High-Speed Prime Glass",
    description: "Multi-camera cinema setups with fast f/1.2 primes for true shallow depth and creamy bokeh in low-light rituals.",
    tag: "Cinema Glass"
  },
  {
    number: "02",
    title: "Heavy-Duty Jimmy Jib Crane",
    highlight: "32-Foot Monumental Overhead Motion",
    description: "32ft crane with 360° motorized head for sweeping overhead views of grand baraat entries and jaimala stages.",
    tag: "Hollywood Crane"
  },
  {
    number: "03",
    title: "Dual-Pilot 4K Aerial Drones",
    highlight: "Licensed Day & Twilight Flight Unit",
    description: "Licensed drone pilots for dramatic aerial shots of heritage ghats, forts, and open-air lawns.",
    tag: "4K Aerial Unit"
  },
  {
    number: "04",
    title: "3-Axis Motorized Gimbals",
    highlight: "Fluid Dynamic Cinematic Tracking",
    description: "Ultra-smooth stabilization for fluid tracking through palace corridors and energetic sangeet dances.",
    tag: "Gimbal Stabilization"
  },
  {
    number: "05",
    title: "Multi-Track Field Audio",
    highlight: "Studio-Grade Lavalier & Ambient Recording",
    description: "Discrete wireless lavaliers and stereo ambient mics capturing mantras, vows, and laughter with studio clarity.",
    tag: "Acoustic Fidelity"
  },
  {
    number: "06",
    title: "Live Vision Switching & Broadcast",
    highlight: "Multi-Channel SDI Real-Time Mixing",
    description: "Multi-camera video switchers routing live feeds to on-stage LED walls and private global streams.",
    tag: "Live Broadcast"
  },
  {
    number: "07",
    title: "High-Definition Stage LED Walls",
    highlight: "Outdoor High-Brightness P3/P4 Displays",
    description: "Massive outdoor displays ensuring all 1,000+ guests have a front-row view of sacred ceremonies.",
    tag: "Stage Visuals"
  },
  {
    number: "08",
    title: "Same-Day Editing Suites",
    highlight: "On-Location Rapid Production Unit",
    description: "Mobile editing workstations cutting and color-grading teasers within hours for reception premieres.",
    tag: "Same-Day Edit"
  },
  {
    number: "09",
    title: "Handcrafted Heirloom Press",
    highlight: "Archival Lay-Flat Italian Leather Binding",
    description: "Archival silver-halide paper pressed into Italian leather-bound heirloom albums built to endure generations.",
    tag: "Heirloom Press"
  }
];

/* ── BEHIND THE FRAME (BTS MOMENTS) ── */
export interface BtsStory {
  id: string;
  step: string;
  title: string;
  discipline: string;
  description: string;
  image: string;
}

export const btsStories: BtsStory[] = [
  {
    id: "bts-rigs",
    step: "01",
    title: "The Cinema Rigs on Location",
    discipline: "PRODUCTION RIGS",
    description: "Precise camera positions and prime focal lengths planned so directors never obstruct sacred moments.",
    image: "/images/live-production-crane.jpg"
  },
  {
    id: "bts-sound",
    step: "02",
    title: "Sound Is Half The Film",
    discipline: "FIELD ACOUSTICS",
    description: "Dedicated multi-track lavaliers capturing Vedic mantras, shehnai, and emotional vows.",
    image: "/images/sacred-pheras.jpg"
  },
  {
    id: "bts-grading",
    step: "03",
    title: "The Color Grading Suite",
    discipline: "POST-PRODUCTION LAB",
    description: "Every shot individually balanced on calibrated displays for rich, timeless skin tones.",
    image: "/images/ganga-couple.jpg"
  },
  {
    id: "bts-broadcast",
    step: "04",
    title: "Live Multi-Cam Switching",
    discipline: "STAGE BROADCAST DECK",
    description: "Live camera switching projected onto massive LED walls for amphitheater wedding crowds.",
    image: "/images/sangeet-dance.jpg"
  }
];

/* ── UTTAR PRADESH FIRST & PAN-INDIA REGIONAL FOCUS ── */
export interface CityFocus {
  name: string;
  region: string;
  highlight: string;
  isPrimary?: boolean;
}

export const upPriorityCities: CityFocus[] = [
  { name: "Varanasi", region: "Home Studio & Sacred Ghats", highlight: "Assi Ghat, BrijRama Palace, Taj Ganges, Ramnagar", isPrimary: true },
  { name: "Lucknow", region: "Awadh Heritage & Royal Lawns", highlight: "Clarks Avadh, Taj Mahal Lucknow, Fairlawn", isPrimary: true },
  { name: "Prayagraj", region: "Sangam Waterfront & Estates", highlight: "Civil Lines, Heritage Waterfront Venues", isPrimary: true },
  { name: "Ayodhya", region: "Sacred Celebrations on Saryu", highlight: "Heritage Riverfront Lawns & Royal Enclaves", isPrimary: true },
  { name: "Kanpur", region: "Grand Amphitheaters & Banquets", highlight: "The Landmark, Royal Cliff, Premier Estates", isPrimary: true },
  { name: "Agra", region: "Mughal Architecture & Palaces", highlight: "ITC Mughal, Oberoi Amarvilas, Heritage Lawns" },
  { name: "Mathura & Vrindavan", region: "Braj Heritage & Temple Lawns", highlight: "Brij Eternity, Vrinda Orchid, Sacred Enclaves" },
  { name: "Noida & Ghaziabad", region: "Modern NCR Luxury Resorts", highlight: "Jaypee Greens, Grand Ballrooms, Luxury Lawns" },
  { name: "Gorakhpur", region: "Eastern UP Grand Celebrations", highlight: "Royal Banquets & Destination Resorts" },
  { name: "Bareilly & Meerut", region: "Grand Family Heritage Weddings", highlight: "Historic Estates & Open-Air Amphitheaters" }
];

/* ── TRUSTED DESTINATIONS & HERITAGE VENUES ── */
export interface HeritageVenue {
  name: string;
  city: string;
  category: string;
  description: string;
  image: string;
}

export const heritageVenues: HeritageVenue[] = [
  {
    name: "Ganga Ghats & Namo Ghat",
    city: "Varanasi",
    category: "SACRED RIVERFRONT",
    description: "Ancient stone steps, Namo Ghat sculptures, and floating diyas creating an incomparable ceremony atmosphere.",
    image: "/images/real-namo-ghat.jpg"
  },
  {
    name: "BrijRama & River Palaces",
    city: "Varanasi",
    category: "PALATIAL RIVERFRONT",
    description: "Maratha riverfront architecture with royal boat processions and carved sandstone reception courtyards.",
    image: "/images/hero-wedding.jpg"
  },
  {
    name: "Chunar & Ramnagar Fortresses",
    city: "Ramnagar / Chunar",
    category: "HISTORIC FORTRESS",
    description: "18th-century stone ramparts and dramatic sunset horizons ideal for crane sweeps and royal entries.",
    image: "/images/ganga-couple.jpg"
  },
  {
    name: "Taj Ganges & Luxury Lawns",
    city: "Varanasi & Lucknow",
    category: "GRAND BANQUET GROUNDS",
    description: "Expansive manicured lawns for multi-thousand guest celebrations with stage LED and drone coverage.",
    image: "/images/jaimala-stage.jpg"
  }
];

/* ── 17 PORTFOLIO CATEGORIES & CURATED GALLERY ── */
export const portfolioCategories = [
  "All",
  "Weddings",
  "Bride",
  "Groom",
  "Couples",
  "Rituals",
  "Haldi",
  "Mehendi",
  "Sangeet",
  "Reception",
  "Portraits",
  "Details",
  "Emotions",
  "Family",
  "Venues",
  "Films",
  "Pre-Wedding"
] as const;

export type PortfolioCategory = typeof portfolioCategories[number];

export interface PortfolioItem {
  id: string;
  title: string;
  category: PortfolioCategory;
  categoryDisplay: string;
  location: string;
  venue: string;
  image: string;
  aspect?: "portrait" | "landscape" | "square";
  caption: string;
  isVideo?: boolean;
  videoUrl?: string;
  projectSlug?: string;
}

export const portfolioGallery: PortfolioItem[] = [
  {
    id: "om-p-01",
    title: "Sandstone Mandap at Twilight",
    category: "Weddings",
    categoryDisplay: "WEDDING CINEMA",
    location: "Varanasi, UP",
    venue: "Heritage Palace on Ganga",
    image: "/images/hero-wedding.jpg",
    aspect: "landscape",
    caption: "The sacred mandap illuminated beneath ancient sandstone arches overlooking the Ganga river.",
    projectSlug: "royal-varanasi-heritage-wedding"
  },
  {
    id: "om-p-02",
    title: "Banarasi Silk & Royal Polki",
    category: "Bride",
    categoryDisplay: "EDITORIAL BRIDAL",
    location: "Varanasi, UP",
    venue: "Palace Quarters",
    image: "/images/bride-varanasi.jpg",
    aspect: "portrait",
    caption: "Intricate Banarasi zardozi work and heritage polki jewellery captured in soft natural morning light.",
    projectSlug: "royal-varanasi-heritage-wedding"
  },
  {
    id: "om-p-03",
    title: "The Royal Safa & Regalia",
    category: "Groom",
    categoryDisplay: "GROOM PORTRAIT",
    location: "Lucknow, UP",
    venue: "Heritage Courtyard",
    image: "/images/groom-lucknow.jpg",
    aspect: "portrait",
    caption: "Awadhi handcrafted sherwani with pearl kanthamala and royal silk safa.",
    projectSlug: "lucknow-royal-heritage-wedding"
  },
  {
    id: "om-p-04",
    title: "Ganga Twilight Boat Prelude",
    category: "Couples",
    categoryDisplay: "COUPLE PORTRAIT",
    location: "Varanasi, UP",
    venue: "Assi Ghat Riverfront",
    image: "/images/ganga-couple.jpg",
    aspect: "landscape",
    caption: "Drifting past ancient river ghats as temple bells chime across the water at sundown.",
    projectSlug: "dawn-on-assi-ghat-pre-wedding"
  },
  {
    id: "om-p-05",
    title: "The Sacred Agni Pheras",
    category: "Rituals",
    categoryDisplay: "SACRED RITUALS",
    location: "Prayagraj, UP",
    venue: "Riverfront Estate",
    image: "/images/sacred-pheras.jpg",
    aspect: "landscape",
    caption: "Sacred Vedic chants and holy fire reflecting off pure gold silk during the seven vows.",
    projectSlug: "royal-varanasi-heritage-wedding"
  },
  {
    id: "om-p-06",
    title: "Marigold Showers & Yellow Petals",
    category: "Haldi",
    categoryDisplay: "HALDI CELEBRATION",
    location: "Varanasi, UP",
    venue: "Open Lawn Courtyard",
    image: "/images/haldi-ceremony.jpg",
    aspect: "portrait",
    caption: "Spontaneous laughter as yellow marigold petals shower over the bride and groom.",
    projectSlug: "royal-varanasi-heritage-wedding"
  },
  {
    id: "om-p-07",
    title: "Intricate Henna Invocations",
    category: "Mehendi",
    categoryDisplay: "MEHENDI ARTISTRY",
    location: "Ayodhya, UP",
    venue: "Riverside Pavilion",
    image: "/images/mehendi-art.jpg",
    aspect: "portrait",
    caption: "Dark bridal henna detailing hidden initials, lotus motifs, and temple peacocks.",
    projectSlug: "royal-varanasi-heritage-wedding"
  },
  {
    id: "om-p-08",
    title: "High-Energy Sangeet Symphony",
    category: "Sangeet",
    categoryDisplay: "SANGEET NIGHT",
    location: "Kanpur, UP",
    venue: "The Grand Amphitheater",
    image: "/images/sangeet-dance.jpg",
    aspect: "landscape",
    caption: "Dynamic multi-cam crane sweep capturing high-energy choreography under theatrical stage lighting.",
    projectSlug: "monumental-stage-live-production"
  },
  {
    id: "om-p-09",
    title: "Grand Reception Gala",
    category: "Reception",
    categoryDisplay: "RECEPTION NIGHT",
    location: "Noida, UP",
    venue: "Grand Luxury Ballrooms",
    image: "/images/jaimala-stage.jpg",
    aspect: "landscape",
    caption: "The newlyweds stepping onto the monumental stage with cold pyrotechnics and warm golden spotlights.",
    projectSlug: "monumental-stage-live-production"
  },
  {
    id: "om-p-10",
    title: "Red Lace Grace & Blossoms",
    category: "Portraits",
    categoryDisplay: "FINE-ART PORTRAIT",
    location: "Varanasi, UP",
    venue: "Studio Atelier",
    image: "/images/real-red-saree-portrait.jpg",
    aspect: "portrait",
    caption: "Fine-art portrait celebrating crimson lace elegance and delicate white blossoms.",
    projectSlug: "royal-varanasi-heritage-wedding"
  },
  {
    id: "om-p-11",
    title: "Brass Lamps & Jasmine Garlands",
    category: "Details",
    categoryDisplay: "CEREMONIAL DETAILS",
    location: "Varanasi, UP",
    venue: "Heritage Mandap",
    image: "/images/mandap-details.jpg",
    aspect: "square",
    caption: "Handcrafted brass oil lamps, mogra flower canopies, and sacred vermillion details.",
    projectSlug: "royal-varanasi-heritage-wedding"
  },
  {
    id: "om-p-12",
    title: "A Father's Unspoken Blessing",
    category: "Emotions",
    categoryDisplay: "RAW EMOTION",
    location: "Lucknow, UP",
    venue: "Awadh Palace",
    image: "/images/bidai-emotion.jpg",
    aspect: "landscape",
    caption: "The silent tear and gentle touch of a father's hand during the emotional bidai moment.",
    projectSlug: "lucknow-royal-heritage-wedding"
  },
  {
    id: "om-p-13",
    title: "Laughter in Turmeric",
    category: "Rituals",
    categoryDisplay: "HALDI RITUAL",
    location: "Varanasi, UP",
    venue: "Heritage Courtyard",
    image: "/images/real-haldi-candid.jpg",
    aspect: "portrait",
    caption: "Joyous laughter and pure blessings amidst the vibrant turmeric celebration.",
    projectSlug: "royal-varanasi-heritage-wedding"
  },
  {
    id: "om-p-14",
    title: "Namo Ghat Twilight Perspective",
    category: "Venues",
    categoryDisplay: "HERITAGE VENUE",
    location: "Varanasi, UP",
    venue: "Namo Ghat, Varanasi",
    image: "/images/real-namo-ghat.jpg",
    aspect: "portrait",
    caption: "Iconic Namaste folded hands against the twilight sky at Namo Ghat Varanasi.",
    projectSlug: "dawn-on-assi-ghat-pre-wedding"
  },
  {
    id: "om-p-15",
    title: "Cinematic Wedding Teaser Cut",
    category: "Films",
    categoryDisplay: "CINEMA FILM",
    location: "Chunar Fort, UP",
    venue: "Historic Fort Amphitheater",
    image: "/images/live-production-crane.jpg",
    aspect: "landscape",
    caption: "Hollywood-scale multi-cam wedding teaser trailer featuring 32ft crane arcs and drone vistas.",
    isVideo: true,
    videoUrl: "https://videos.pexels.com/video-files/3735186/3735186-uhd_2560_1440_25fps.mp4",
    projectSlug: "grand-fort-destination-wedding"
  },
  {
    id: "om-p-16",
    title: "Whispered Promises in the Mist",
    category: "Pre-Wedding",
    categoryDisplay: "PRE-WEDDING NARRATIVE",
    location: "Varanasi, UP",
    venue: "Sandstone River Alleys",
    image: "/images/ganga-couple.jpg",
    aspect: "portrait",
    caption: "Quiet hand-in-hand stroll through the timeless stone alleys of Varanasi at sunrise.",
    projectSlug: "dawn-on-assi-ghat-pre-wedding"
  }
];

/* ── REAL-WEDDING STORY PROJECTS (`/portfolio/[slug]`) ── */
export interface StoryProject {
  slug: string;
  title: string;
  couple: string;
  category: "Weddings" | "Cinematography" | "Pre-Wedding" | "Events";
  location: string;
  venue: string;
  date: string;
  heroImage: string;
  teaserVideoUrl?: string;
  highlightVideoUrl?: string;
  storyNarrative: string[];
  photoGallery: { src: string; caption: string; category?: string }[];
  deliverablesDelivered: string[];
  clientQuote?: { quote: string; by: string };
}

export const storyProjects: StoryProject[] = [
  {
    slug: "royal-varanasi-heritage-wedding",
    title: "Royal Varanasi Heritage Wedding",
    couple: "Devika & Aaditya",
    category: "Weddings",
    location: "Varanasi, Uttar Pradesh",
    venue: "Heritage Palace on the Ganga Riverfront",
    date: "Winter 2025",
    heroImage: "/images/hero-wedding.jpg",
    teaserVideoUrl: "https://videos.pexels.com/video-files/3735186/3735186-uhd_2560_1440_25fps.mp4",
    highlightVideoUrl: "",
    storyNarrative: [
      "A celebration deeply rooted in the ancient spirituality and regal traditions of Kashi. Set against the sandstone arches of the Ganga ghats, Devika and Aaditya's wedding brought together classical shehnai melodies, sacred Vedic fire rituals, and grand riverfront hospitality.",
      "Our cinematography crew deployed four synchronized cameras, capturing the intimate bridal preparations in the palace quarters as well as the monumental entry on traditional royal boats under the twilight sky.",
      "The final master film weaved together evening Ganga aarti blessings, spontaneous family moments during the varmala, and the emotional bidai framed by floating river diyas."
    ],
    photoGallery: [
      { src: "/images/hero-wedding.jpg", caption: "The royal mandap illuminated beneath heritage sandstone arches" },
      { src: "/images/bride-varanasi.jpg", caption: "Devika's handcrafted Banarasi bridal silk and antique polki jewellery" },
      { src: "/images/sacred-pheras.jpg", caption: "Intimate candid glances captured during the sacred pheras" },
      { src: "/images/ganga-couple.jpg", caption: "Twilight boat procession along the Varanasi ghats" }
    ],
    deliverablesDelivered: [
      "5-Minute 4K Cinematic Highlight Film",
      "Full Traditional Rituals Documentary (2 Hours)",
      "50-Sheet Handcrafted Leather Heirloom Album",
      "Two Custom Framed Master Portrait Prints",
      "64GB Engraved Presentation Drive in Wooden Box"
    ],
    clientQuote: {
      quote: "OM Media didn't just record our wedding—they made us feel like stars in our own cinematic classic. Watching our film brings tears of joy every single time.",
      by: "Devika & Aaditya"
    }
  },
  {
    slug: "dawn-on-assi-ghat-pre-wedding",
    title: "Dawn on Assi Ghat Pre-Wedding",
    couple: "Priyal & Rohan",
    category: "Pre-Wedding",
    location: "Assi Ghat to Chet Singh Fort, Varanasi",
    venue: "Varanasi Ghats & Ancient Riverfront",
    date: "Autumn 2025",
    heroImage: "/images/ganga-couple.jpg",
    storyNarrative: [
      "Captured in the peaceful stillness of early morning at Assi Ghat, this pre-wedding film focuses on subtle emotion, temple bells, and soft golden river mist.",
      "From quiet hand-in-hand walks through labyrinthine stone alleys to wooden boat rides surrounded by migratory seagulls, we created a poetic visual prelude to their celebration."
    ],
    photoGallery: [
      { src: "/images/ganga-couple.jpg", caption: "First golden rays illuminating the sacred riverfront" },
      { src: "/images/real-namo-ghat.jpg", caption: "Iconic Namo Ghat folded hands against the twilight sky" },
      { src: "/images/varanasi-dawn.jpg", caption: "Chet Singh Fort backdrop framed with aerial perspective" }
    ],
    deliverablesDelivered: [
      "3-Minute 4K Narrative Pre-Wedding Film",
      "Curated 40 Fine-Art Digital Portraits",
      "Reception Premiere Teaser Cut"
    ],
    clientQuote: {
      quote: "Their team's calm demeanour during the early morning shoot was incredible. The candid captures and Ganga ghat drone shots are breathtaking.",
      by: "Priyal & Rohan"
    }
  },
  {
    slug: "lucknow-royal-heritage-wedding",
    title: "Nawabi Grandeur Heritage Wedding",
    couple: "Zoya & Farhan",
    category: "Weddings",
    location: "Lucknow, Uttar Pradesh",
    venue: "Palatial Heritage Courtyard & Lawn",
    date: "Winter 2024",
    heroImage: "/images/groom-lucknow.jpg",
    storyNarrative: [
      "A celebration defined by Nawabi grace, classical kathak rhythms, and royal Mughal architecture in the heart of Lucknow.",
      "Our team deployed prime cinema lenses and subtle gimbal movements to capture the intricate chikankari embroidery, fragrant ittar bars, and grand dastarkhwan feasts."
    ],
    photoGallery: [
      { src: "/images/groom-lucknow.jpg", caption: "Groom in royal ivory sherwani and heirloom emerald necklace" },
      { src: "/images/sangeet-dance.jpg", caption: "Candlelit courtyard setup under ancient banyan trees" }
    ],
    deliverablesDelivered: [
      "4-Minute 4K Wedding Highlight Film",
      "Full Nikah Documentary Film",
      "Master Handcrafted 50-Sheet Album"
    ],
    clientQuote: {
      quote: "The elegance and cultural respect shown by the OM Media crew was remarkable. Our families are in love with the film.",
      by: "Zoya & Farhan"
    }
  },
  {
    slug: "grand-fort-destination-wedding",
    title: "Grand Fort Destination Celebration",
    couple: "Megha & Shashank",
    category: "Cinematography",
    location: "Chunar Fort Region, Uttar Pradesh",
    venue: "Historic Fort Courtyard & Amphitheater",
    date: "Spring 2025",
    heroImage: "/images/jaimala-stage.jpg",
    storyNarrative: [
      "A massive three-day royal destination celebration blending royal entry traditions with high-energy sangeet performances.",
      "OM Media deployed a 14-member crew including a 32-foot heavy crane, dual drone pilots, and four synchronized cinema cameras to document the monumental scale."
    ],
    photoGallery: [
      { src: "/images/jaimala-stage.jpg", caption: "Grand fort ramparts illuminated with ceremonial lanterns" },
      { src: "/images/sangeet-dance.jpg", caption: "Sangeet stage production with high-definition LED backdrops" },
      { src: "/images/live-production-crane.jpg", caption: "Sweeping overhead angle of the royal varmala" }
    ],
    deliverablesDelivered: [
      "6-Minute Extended 4K Wedding Highlight Film",
      "2-Minute Reception Premiere Teaser",
      "Dual 50-Sheet Master Albums for Both Families",
      "64GB Pen Drive & 2 Large Framed Canvas Prints",
      "Multi-Cam Stage LED Feed Master Recordings"
    ],
    clientQuote: {
      quote: "Production quality at international standards. From the teaser to the handcrafted photo album, every deliverable screams luxury.",
      by: "Megha & Shashank"
    }
  },
  {
    slug: "monumental-stage-live-production",
    title: "Monumental Grand Stage Celebration",
    couple: "Ananya & Varun",
    category: "Events",
    location: "Varanasi, Uttar Pradesh",
    venue: "Grand Banquet Grounds & Open Lawn",
    date: "Winter 2024",
    heroImage: "/images/live-production-crane.jpg",
    storyNarrative: [
      "A grand wedding attended by over 1,500 guests featuring a massive stage with custom high-definition LED walls and live multi-camera broadcast.",
      "OM Media provided the full audio-visual production suite, simultaneously streaming the ceremony live to family across North America and Europe while driving on-stage visual displays."
    ],
    photoGallery: [
      { src: "/images/live-production-crane.jpg", caption: "Multi-camera live switching console in action" },
      { src: "/images/jaimala-stage.jpg", caption: "Stage LED wall backdrop during the grand entry" }
    ],
    deliverablesDelivered: [
      "Live Multi-Cam Program Master Recording",
      "Global Private Live Streaming Broadcast Suite",
      "Full Traditional Video & Photo Coverage"
    ]
  }
];

export const portfolioConfig = {
  categories: portfolioCategories,
  projects: storyProjects.map(story => ({
    id: story.slug,
    title: story.title,
    category: story.category,
    type: "video" as const,
    mediaUrl: story.heroImage,
    videoLink: story.highlightVideoUrl || "",
    slug: story.slug,
    venue: story.venue,
    location: story.location
  }))
};

export const featuredStories = storyProjects.slice(0, 3).map(s => ({
  id: s.slug,
  title: s.title,
  category: s.category.toUpperCase(),
  location: s.venue,
  description: s.storyNarrative[0],
  image: s.heroImage,
  imageAlt: `${s.title} by OM Media & Productions`,
  href: `/portfolio/${s.slug}`
}));

/* ── COLLECTIONS & TRANSPARENT PACKAGE ARCHITECTURE ── */
export interface PackagePlan {
  id: string;
  name: string;
  tierSubtitle: string;
  priceNote?: string;
  idealFor: string;
  teamCrew: string[];
  coverageEvents: string;
  equipmentHighlight: string[];
  deliverables: string[];
  features: string[];
  isDominant?: boolean;
}

export const packages: PackagePlan[] = [
  {
    id: "essential",
    name: "Essential Collection",
    tierSubtitle: "CORE WEDDING PRODUCTION",
    priceNote: "Customized according to event days",
    idealFor: "Intimate single-day weddings, traditional ceremonies, and focused family celebrations.",
    teamCrew: [
      "1 Senior Traditional Photographer",
      "1 Senior Traditional Videographer",
      "1 Aerial Drone Cinematographer"
    ],
    coverageEvents: "Full single-day celebration (Mehendi / Haldi / Wedding)",
    equipmentHighlight: [
      "Full-frame professional cameras with portrait glass",
      "Dedicated wireless lavalier audio setup",
      "4K aerial drone for establishment shots"
    ],
    deliverables: [
      "Full Traditional Photography documentation of all ceremonies",
      "Comprehensive Traditional Videography (complete ceremony cut)",
      "Aerial Drone perspectives of venue and key entries",
      "Custom Handcrafted 50-Sheet Lay-Flat Album (100 Pages)",
      "Two Master Framed Photographic Prints (ready to hang)",
      "High-Speed 64GB USB Presentation Drive with digital masters"
    ],
    features: [
      "High-Resolution Color-Corrected Digital Gallery",
      "Full Ceremony Raw Video Archive",
      "Direct consultation with founder Vinod Kumar",
      "Delivery turnaround within 30 to 45 business days"
    ]
  },
  {
    id: "signature",
    name: "Signature Collection",
    tierSubtitle: "OUR MOST REQUESTED CINEMATIC EXPERIENCE",
    priceNote: "Comprehensive 2-day multi-camera production",
    idealFor: "Grand multi-day weddings desiring cinema-grade films, unscripted candid emotions, and master heirloom preservation.",
    teamCrew: [
      "1 Lead Wedding Cinema Director",
      "1 Motorized 3-Axis Gimbal Cinema Operator",
      "1 Dedicated Senior Candid Photographer",
      "1 Traditional Family Formal Photographer",
      "1 Traditional Videographer",
      "1 Licensed Aerial Drone Pilot"
    ],
    coverageEvents: "Two days comprehensive coverage (Haldi, Mehendi, Sangeet, Wedding & Reception)",
    equipmentHighlight: [
      "Multi-camera Sony Cinema Line Rigs with cinema primes",
      "Motorized 3-axis gimbal dynamic tracking",
      "Multi-track studio audio recording for mantras & vows",
      "Dual-pilot 4K aerial drone coverage"
    ],
    deliverables: [
      "4K Cinematic Wedding Highlight Film (3 to 5 minutes master grade)",
      "Social Media Teaser Trailer (60-90 seconds) delivered within 10 days",
      "Full Long-Form Traditional Ceremony Film with studio audio",
      "Complete Candid & Traditional High-Resolution Photo Suite",
      "Master Handcrafted Fine-Art Album (50 Sheets / 100 Pages)",
      "Two Premium Framed Master Photographic Prints",
      "Signature 64GB USB Presentation Drive in bespoke wooden case"
    ],
    features: [
      "Pre-wedding consultation & timeline coordination",
      "Dedicated multi-track audio recording of sacred vows",
      "Color grading on reference calibrated studio monitors",
      "Interactive digital album proofing prior to binding",
      "Drone & Gimbal motion coverage throughout both days"
    ],
    isDominant: true
  },
  {
    id: "premium",
    name: "Premium & Luxe Collection",
    tierSubtitle: "FULL-SCALE STUDIO PRODUCTION & BROADCAST",
    priceNote: "Hollywood-scale multi-day grand celebration",
    idealFor: "Monumental multi-day destination celebrations, royal heritage weddings, and high-attendance amphitheater events.",
    teamCrew: [
      "Full Multi-Camera Cinema Director & Operator Crew",
      "Dedicated 32-Foot Heavy Jib Crane Operator & Tech Crew",
      "Dual Aerial Drone Cinematographers (Day & Night)",
      "2 Senior Candid Photographers & 2 Traditional Photographers",
      "Live Vision Switching Engineer & Broadcast Technician"
    ],
    coverageEvents: "Three or more days of complete celebration coverage",
    equipmentHighlight: [
      "32-Foot Jimmy Jib Crane with motorized Dutch-head",
      "High-definition P3 outdoor LED wall displays",
      "Multi-channel SDI vision mixing broadcast console",
      "Bonded multi-SIM low-latency global streaming backpack"
    ],
    deliverables: [
      "2-Minute Cinematic Reception Premiere Video (same-day/next-day edit)",
      "Two Separate Cinematic Highlight Films (Extended Varmala & Sangeet Cuts)",
      "Feature-Length Cinematic Documentary Film (25 to 40 minutes)",
      "Full Multi-Camera Live Broadcast onto stage LED walls & TV monitors",
      "Live Private Global Streaming Broadcast for overseas guests",
      "Master Deluxe 50-Sheet Fine-Art Wedding Album",
      "Parent Album Duplicate Set for both families",
      "Two Master Framed Wall Prints & 64GB Signature Drive"
    ],
    features: [
      "End-to-end in-house cinema gear, heavy crane, and live LED infrastructure",
      "On-site mobile switching station with zero rental middleman",
      "Direct on-location production management by Vinod Kumar",
      "Complete uncompressed digital raw archive vault",
      "Priority post-production expedited delivery"
    ]
  }
];

/* ── INTERACTIVE PACKAGE COMPARISON MATRIX (14 PARAMETERS) ── */
export interface ComparisonRow {
  feature: string;
  category: "Coverage" | "Team" | "Cinema Gear" | "Films" | "Photography" | "Broadcast & Albums";
  essential: string;
  signature: string;
  premium: string;
}

export const comparisonMatrix: ComparisonRow[] = [
  { feature: "Celebration Coverage", category: "Coverage", essential: "1 Day (Up to 8 hrs)", signature: "2 Days (Comprehensive)", premium: "3+ Days (Unlimited)" },
  { feature: "Dedicated Team Size", category: "Team", essential: "3 Crew Members", signature: "6 Crew Members", premium: "10–14 Crew Members" },
  { feature: "Cinema Director & Drone", category: "Team", essential: "Drone Operator Only", signature: "Cinema Director + Drone Pilot", premium: "Full Cinema Unit + Dual Pilots" },
  { feature: "Candid vs Traditional Photographers", category: "Photography", essential: "1 Senior Traditional", signature: "1 Candid + 1 Traditional", premium: "2 Candid + 2 Traditional" },
  { feature: "Heavy Jimmy Jib Crane (32ft)", category: "Cinema Gear", essential: "Optional Add-on", signature: "Optional Add-on", premium: "Included (Jaimala & Stage)" },
  { feature: "3-Axis Motorized Gimbal", category: "Cinema Gear", essential: "—", signature: "Included (Sony Cinema)", premium: "Included (Multiple Units)" },
  { feature: "Teaser Trailer (60-90s)", category: "Films", essential: "—", signature: "Included (10-Day Delivery)", premium: "Included (Same-Day / 48 Hrs)" },
  { feature: "Cinematic Highlight Film", category: "Films", essential: "—", signature: "Included (3–5 Mins)", premium: "Included (Two Extended Cuts)" },
  { feature: "Full Documentary Ceremony Film", category: "Films", essential: "Included (Traditional)", signature: "Included (Master Graded)", premium: "Included (Feature-Length)" },
  { feature: "High-Res Edited Stills Gallery", category: "Photography", essential: "300+ Images", signature: "600+ Images", premium: "1,200+ Master Images" },
  { feature: "Master Lay-Flat Album (100 Pages)", category: "Broadcast & Albums", essential: "1 Album (Italian Leather)", signature: "1 Master Album (Fine-Art)", premium: "1 Master + 2 Parent Duplicates" },
  { feature: "Stage LED Wall & Live Feeds", category: "Broadcast & Albums", essential: "Optional Add-on", signature: "Optional Add-on", premium: "Included (Stage Wall & Displays)" },
  { feature: "Global Live Private Streaming", category: "Broadcast & Albums", essential: "Optional Add-on", signature: "Optional Add-on", premium: "Included (Bonded Multi-SIM)" },
  { feature: "Engraved Presentation Box & 64GB USB", category: "Broadcast & Albums", essential: "Included", signature: "Included", premium: "Included (Signature Box)" }
];

/* ── PRODUCTION ADD-ONS ── */
export const productionAddOns = [
  { item: "Dedicated Heavy Jib Crane (Per Event)", note: "Sweeping dramatic overhead camera angles for grand stage entries" },
  { item: "Aerial Drone Cinematography Unit", note: "Dual-pilot licensed 4K aerial bird's-eye perspective" },
  { item: "Stage High-Definition LED Wall Panels", note: "Massive outdoor visual displays with live camera feed switching" },
  { item: "Live Global Multi-Cam Streaming Suite", note: "Bonded multi-SIM stream broadcast with private link for overseas family" },
  { item: "Pre-Wedding Cinematic Film & Shoot", note: "Single-day heritage narrative shoot on Varanasi ghats or heritage fort" },
  { item: "Duplicate Parent Albums", note: "Identical handcrafted leather-bound keepsake albums for parents" },
  { item: "Same-Day Teaser Cut for Reception", note: "Edited on-site and projected during reception dinner" }
];

/* ── AUTHENTIC CLIENT WORDS & REVIEWS ── */
export interface TestimonialItem {
  quote: string;
  name: string;
  occasion: string;
  location: string;
  year: string;
  rating: number;
}

export const testimonials: TestimonialItem[] = [
  {
    quote: "OM Media didn't just record our wedding—they made us feel like stars in our own cinematic classic. Their team's respect for our Vedic rituals was exceptional.",
    name: "Devika & Aaditya",
    occasion: "ROYAL VARANASI WEDDING",
    location: "VARANASI, UP",
    year: "2025",
    rating: 5
  },
  {
    quote: "Their team's calm demeanour during chaotic moments was incredible. The candid captures and sunrise drone shots over the Ganga ghats are breathtaking.",
    name: "Priyal & Rohan",
    occasion: "HERITAGE PRE-WEDDING & WEDDING",
    location: "RAMNAGAR, UP",
    year: "2025",
    rating: 5
  },
  {
    quote: "Production quality at international standards—from the teaser trailer to the handcrafted album, every deliverable screams luxury. Vinod ji's personal coordination gave us absolute peace of mind.",
    name: "Megha & Shashank",
    occasion: "GRAND DESTINATION WEDDING",
    location: "CHUNAR FORT REGION, UP",
    year: "2025",
    rating: 5
  }
];

/* ── SOCIAL / INSTAGRAM TILES ("FOLLOW THE STORIES") ── */
export interface SocialTile {
  id: string;
  title: string;
  handle: string;
  image: string;
  tag: string;
  likes: string;
  link: string;
}

export const socialTiles: SocialTile[] = [
  {
    id: "st-1",
    title: "Varanasi Ganga Twilight Pheras",
    handle: "@Om_Media_and_Product",
    image: "/images/hero-wedding.jpg",
    tag: "WEDDING FILM",
    likes: "2.4k",
    link: "https://instagram.com/Om_Media_and_Product"
  },
  {
    id: "st-2",
    title: "Pure Banarasi Silk Bridal Elegance",
    handle: "@Om_Media_and_Product",
    image: "/images/bride-varanasi.jpg",
    tag: "BRIDAL PORTRAIT",
    likes: "1.9k",
    link: "https://instagram.com/Om_Media_and_Product"
  },
  {
    id: "st-3",
    title: "Golden Hour Boat Ride at Assi Ghat",
    handle: "@Om_Media_and_Product",
    image: "/images/ganga-couple.jpg",
    tag: "PRE-WEDDING",
    likes: "3.1k",
    link: "https://instagram.com/Om_Media_and_Product"
  },
  {
    id: "st-4",
    title: "Monumental Jaimala Crane Sweep",
    handle: "@Om_Media_and_Product",
    image: "/images/live-production-crane.jpg",
    tag: "LIVE PRODUCTION",
    likes: "4.2k",
    link: "https://instagram.com/Om_Media_and_Product"
  },
  {
    id: "st-5",
    title: "Sacred Fire & Vedic Mantras",
    handle: "@Om_Media_and_Product",
    image: "/images/sacred-pheras.jpg",
    tag: "RITUALS",
    likes: "1.8k",
    link: "https://instagram.com/Om_Media_and_Product"
  },
  {
    id: "st-6",
    title: "Intricate Bridal Henna & Chooda Art",
    handle: "@Om_Media_and_Product",
    image: "/images/mehendi-art.jpg",
    tag: "MEHENDI ART",
    likes: "2.1k",
    link: "https://instagram.com/Om_Media_and_Product"
  }
];

/* ── 4-STEP PRODUCTION APPROACH ── */
export const approachSteps = [
  {
    num: "01",
    title: "DISCOVER",
    subtitle: "Understanding the Narrative",
    desc: "We begin by listening to your love story, family traditions, venues, ceremonial timelines, and preferred aesthetic tones."
  },
  {
    num: "02",
    title: "CURATE",
    subtitle: "Technical & Crew Blueprint",
    desc: "We assign dedicated cinema directors, candid shooters, drone pilots, and crane technicians tailored to your venue's spatial architecture."
  },
  {
    num: "03",
    title: "CREATE",
    subtitle: "Unobtrusive Cinematic Capture",
    desc: "During the celebration, our crew documents raw emotion and sacred rituals with cinematic framing without staging or disrupting sacred moments."
  },
  {
    num: "04",
    title: "PRESERVE",
    subtitle: "Color Science & Archival Finishing",
    desc: "In post-production, we color grade every frame, master multi-track audio, and handcraft heirloom physical albums built to endure."
  }
];
