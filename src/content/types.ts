export interface ImageMetadata {
  src: string;
  alt: string;
  width: number;
  height: number;
  credit?: string;
}

export type WorkCategory =
  | "events-publicity"
  | "portraiture"
  | "cosplay"
  | "miscellaneous";

export interface PortfolioItem {
  id: string;
  category: WorkCategory;
  categoryLabel: string;
  title: string;
  description: string;
  plate: string;
  accent: "blue" | "coral" | "gold";
  image: ImageMetadata;
}

export interface Specialization {
  id: string;
  title: string;
  description: string;
}

export interface TimelineEntry {
  id: string;
  tag: string;
  period: string;
  title: string;
  description: string;
  current?: boolean;
}

export interface SkillGroup {
  id: string;
  title: string;
  skills: readonly string[];
}

export interface ContactLink {
  id: string;
  label: string;
  value: string;
  href: string;
  external?: boolean;
}

export interface SiteContent {
  chronicle: PortfolioItem[];
  works: PortfolioItem[];
  specializations: Specialization[];
  secondaryInterests: ReadonlyArray<{
    title: string;
    code: string;
  }>;
  timeline: TimelineEntry[];
  skillGroups: SkillGroup[];
  contacts: ContactLink[];
}
