import type {
  ImageMetadata,
  PortfolioItem,
  SiteContent,
  WorkCategory,
} from "@/content/types";

export const heroImage: ImageMetadata = {
  src: "/images/hero-placeholder.svg",
  alt: "Placeholder reserved for Denzel Marani's featured portrait photography",
  width: 1120,
  height: 1440,
};

export const contactImage: ImageMetadata = {
  src: "/images/contact-placeholder.svg",
  alt: "Placeholder reserved for a closing image from Denzel Marani's portfolio",
  width: 1000,
  height: 1250,
};

const featuredWorks: PortfolioItem[] = [
  {
    id: "public-moments",
    category: "events-publicity",
    categoryLabel: "Events & Publicity",
    title: "Public Moments",
    description:
      "Event documentation informed by school publicity work and official NDP25 media operations.",
    plate: "Work 01 / Placeholder",
    accent: "blue",
    image: {
      src: "/images/event-placeholder.svg",
      alt: "Placeholder reserved for event and publicity photography",
      width: 1600,
      height: 900,
    },
  },
  {
    id: "character-in-frame",
    category: "cosplay",
    categoryLabel: "Cosplay",
    title: "Character in Frame",
    description:
      "Collaborative work shaped around costume, expression, and the energy of Singapore's cosplay community.",
    plate: "Work 02 / Placeholder",
    accent: "coral",
    image: {
      src: "/images/portrait-placeholder.svg",
      alt: "Placeholder reserved for cosplay character photography",
      width: 1600,
      height: 1100,
    },
  },
  {
    id: "controlled-light",
    category: "portraiture",
    categoryLabel: "Portraiture",
    title: "Controlled Light",
    description:
      "A developing studio practice exploring deliberate lighting, colour, and creative direction.",
    plate: "Work 03 / Placeholder",
    accent: "gold",
    image: {
      src: "/images/studio-placeholder.svg",
      alt: "Placeholder reserved for studio portrait photography",
      width: 1200,
      height: 1600,
    },
  },
  {
    id: "between-places",
    category: "miscellaneous",
    categoryLabel: "Miscellaneous",
    title: "Between Places",
    description:
      "Personal observations across street photography and the overlooked details between destinations.",
    plate: "Work 04 / Placeholder",
    accent: "blue",
    image: {
      src: "/images/personal-placeholder.svg",
      alt: "Placeholder reserved for street and personal photography",
      width: 1200,
      height: 1200,
    },
  },
  {
    id: "on-assignment",
    category: "events-publicity",
    categoryLabel: "Events & Publicity",
    title: "On Assignment",
    description:
      "Coverage focused on the people, atmosphere, and defining moments of a live programme.",
    plate: "Work 05 / Placeholder",
    accent: "coral",
    image: {
      src: "/images/philosophy-placeholder.svg",
      alt: "Placeholder reserved for live event coverage",
      width: 1600,
      height: 1000,
    },
  },
  {
    id: "quiet-presence",
    category: "portraiture",
    categoryLabel: "Portraiture",
    title: "Quiet Presence",
    description:
      "Portrait studies built through simple direction, attentive framing, and natural expression.",
    plate: "Work 06 / Placeholder",
    accent: "gold",
    image: {
      src: "/images/contact-placeholder.svg",
      alt: "Placeholder reserved for an environmental portrait",
      width: 1000,
      height: 1250,
    },
  },
  {
    id: "after-the-transformation",
    category: "cosplay",
    categoryLabel: "Cosplay",
    title: "After the Transformation",
    description:
      "Costume-led portraits balancing character performance with the individual behind it.",
    plate: "Work 07 / Placeholder",
    accent: "blue",
    image: {
      src: "/images/hero-placeholder.svg",
      alt: "Placeholder reserved for a dramatic cosplay portrait",
      width: 1120,
      height: 1440,
    },
  },
  {
    id: "room-in-motion",
    category: "events-publicity",
    categoryLabel: "Events & Publicity",
    title: "Room in Motion",
    description:
      "Unobtrusive documentation of interactions, transitions, and the pace of an active event.",
    plate: "Work 08 / Placeholder",
    accent: "gold",
    image: {
      src: "/images/event-placeholder.svg",
      alt: "Placeholder reserved for candid event photography",
      width: 1600,
      height: 900,
    },
  },
  {
    id: "direct-gaze",
    category: "portraiture",
    categoryLabel: "Portraiture",
    title: "Direct Gaze",
    description:
      "A concise portrait study centred on expression, clean composition, and controlled colour.",
    plate: "Work 09 / Placeholder",
    accent: "coral",
    image: {
      src: "/images/portrait-placeholder.svg",
      alt: "Placeholder reserved for a close portrait study",
      width: 1600,
      height: 1100,
    },
  },
  {
    id: "constructed-worlds",
    category: "cosplay",
    categoryLabel: "Cosplay",
    title: "Constructed Worlds",
    description:
      "Location and lighting choices used to support character, mood, and visual storytelling.",
    plate: "Work 10 / Placeholder",
    accent: "blue",
    image: {
      src: "/images/studio-placeholder.svg",
      alt: "Placeholder reserved for a location cosplay photograph",
      width: 1200,
      height: 1600,
    },
  },
  {
    id: "open-sky",
    category: "miscellaneous",
    categoryLabel: "Miscellaneous",
    title: "Open Sky",
    description:
      "Personal studies of aviation, birds, and movement across open space.",
    plate: "Work 11 / Placeholder",
    accent: "gold",
    image: {
      src: "/images/personal-placeholder.svg",
      alt: "Placeholder reserved for aviation or bird photography",
      width: 1200,
      height: 1200,
    },
  },
  {
    id: "night-observations",
    category: "miscellaneous",
    categoryLabel: "Miscellaneous",
    title: "Night Observations",
    description:
      "Experiments in low-light and astrophotography made through patient observation.",
    plate: "Work 12 / Placeholder",
    accent: "coral",
    image: {
      src: "/images/philosophy-placeholder.svg",
      alt: "Placeholder reserved for low-light and astrophotography",
      width: 1600,
      height: 1000,
    },
  },
];

const additionalWorkTitles: Record<WorkCategory, readonly string[]> = {
  "events-publicity": [
    "Ceremony in Focus",
    "On the Ground",
    "Audience & Atmosphere",
    "Behind the Programme",
    "Decisive Moments",
    "Public Narrative",
    "Closing Frame",
  ],
  portraiture: [
    "Available Light",
    "Quiet Geometry",
    "In Context",
    "Study in Blue",
    "Shared Space",
    "Close Distance",
    "Still Character",
  ],
  cosplay: [
    "Heroic Silhouette",
    "Armour & Gesture",
    "In Character",
    "Story at Dusk",
    "Crafted Detail",
    "Worlds Between",
    "Final Pose",
  ],
  miscellaneous: [
    "Flight Path",
    "Urban Interval",
    "Wings at Rest",
    "Celestial Study",
    "Passing Light",
    "Field Notes",
    "After Midnight",
  ],
};

const categoryDefaults: Record<
  WorkCategory,
  Pick<PortfolioItem, "categoryLabel" | "description" | "image">
> = {
  "events-publicity": {
    categoryLabel: "Events & Publicity",
    description:
      "A reserved slot for event coverage focused on people, atmosphere, and the shape of a public moment.",
    image: {
      src: "/images/event-placeholder.svg",
      alt: "Placeholder reserved for event and publicity photography",
      width: 1600,
      height: 900,
    },
  },
  portraiture: {
    categoryLabel: "Portraiture",
    description:
      "A reserved slot for a portrait study built around expression, setting, and considered direction.",
    image: {
      src: "/images/portrait-placeholder.svg",
      alt: "Placeholder reserved for portrait photography",
      width: 1600,
      height: 1100,
    },
  },
  cosplay: {
    categoryLabel: "Cosplay",
    description:
      "A reserved slot for a character-led collaboration shaped by costume, performance, and location.",
    image: {
      src: "/images/studio-placeholder.svg",
      alt: "Placeholder reserved for cosplay photography",
      width: 1200,
      height: 1600,
    },
  },
  miscellaneous: {
    categoryLabel: "Miscellaneous",
    description:
      "A reserved slot for personal observations across street, birding, aviation, and night photography.",
    image: {
      src: "/images/personal-placeholder.svg",
      alt: "Placeholder reserved for personal photography",
      width: 1200,
      height: 1200,
    },
  },
};

const categoryStarts: Record<WorkCategory, number> = {
  "events-publicity": 13,
  portraiture: 20,
  cosplay: 27,
  miscellaneous: 34,
};

const accents: PortfolioItem["accent"][] = ["blue", "coral", "gold"];

function toId(title: string) {
  return title
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

// Generate consistent placeholder records until final images and metadata are supplied.
const additionalWorks = (
  Object.entries(additionalWorkTitles) as Array<
    [WorkCategory, readonly string[]]
  >
).flatMap(([category, titles]) =>
  titles.map((title, index) => {
    const workNumber = categoryStarts[category] + index;
    const defaults = categoryDefaults[category];

    return {
      id: toId(title),
      category,
      categoryLabel: defaults.categoryLabel,
      title,
      description: defaults.description,
      plate: `Work ${String(workNumber).padStart(2, "0")} / Placeholder`,
      accent: accents[index % accents.length],
      image: {
        ...defaults.image,
        alt: `Placeholder reserved for ${title.toLowerCase()} photography`,
      },
    } satisfies PortfolioItem;
  }),
);

const works: PortfolioItem[] = [...featuredWorks, ...additionalWorks];

export const portfolioContent = {
  chronicle: works.slice(0, 6),
  works,
  specializations: [
    {
      id: "01",
      title: "Events & Publicity",
      description:
        "Coverage for school, club, organizational, and corporate settings, supported by experience working inside publicity teams.",
    },
    {
      id: "02",
      title: "Portraiture",
      description:
        "Collaborative portrait sessions focused on personality, expression, deliberate framing, and considered post-production.",
    },
    {
      id: "03",
      title: "Cosplay",
      description:
        "Character-led sessions developed around costume, performance, location, and creative collaboration.",
    },
  ],
  secondaryInterests: [
    { title: "Street", code: "OBS" },
    { title: "Birding", code: "WLD" },
    { title: "Aviation", code: "AIR" },
    { title: "Astrophotography", code: "NIT" },
  ],
  timeline: [
    {
      id: "freelance",
      tag: "CURRENT",
      period: "SEP 2025 — PRESENT",
      title: "Freelance & Hobbyist Practice",
      description:
        "Portrait and cosplay collaborations with a developing focus on controlled lighting, studio work, and considered post-production.",
      current: true,
    },
    {
      id: "dis",
      tag: "DIS",
      period: "MAR 2025 — AUG 2025",
      title: "Media Operations",
      description:
        "Photographer with the Digital and Intelligence Service Information Centre, contributing to publicity work and official NDP25 coverage.",
    },
    {
      id: "school",
      tag: "SCHOOL",
      period: "2018 — 2023",
      title: "Student Media & Publicity",
      description:
        "Photographed school events and supported Student Council media, publicity, and photography activities through secondary school and junior college.",
    },
  ],
  skillGroups: [
    {
      id: "capture",
      title: "Capture",
      skills: ["Event coverage", "Portrait direction", "Controlled lighting"],
    },
    {
      id: "post",
      title: "Post-production",
      skills: ["Lightroom colour correction", "DaVinci Resolve"],
    },
    {
      id: "communication",
      title: "Communication",
      skills: ["Publicity management", "English", "Mandarin"],
    },
  ],
  contacts: [
    {
      id: "email",
      label: "Email",
      value: "thrudenzeyes@gmail.com",
      href: "mailto:thrudenzeyes@gmail.com",
    },
    {
      id: "portrait-instagram",
      label: "Portrait / Instagram",
      value: "@thrudenzeyes",
      href: "https://www.instagram.com/thrudenzeyes/",
      external: true,
    },
    {
      id: "portfolio-instagram",
      label: "Portfolio / Instagram",
      value: "@thrudenzvision",
      href: "https://www.instagram.com/thrudenzvision/",
      external: true,
    },
  ],
} satisfies SiteContent;
