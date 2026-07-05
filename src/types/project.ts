export type ProjectTag =
  | "UX/UI"
  | "UI Design"
  | "Web Design"
  | "Development"
  | "Product Design"
  | "Product Designer"
  | "Plataforma Web";

export interface ProcessStep {
  label: string;
  description: string;
}

export interface CaseStudySections {
  challenge: string;
  solution: string;
  /** Some projects describe their process as a single paragraph, others as labeled steps. */
  process: string | ProcessStep[];
  result: string;
}

export interface GalleryImage {
  src: string;
  alt: string;
  /** Intrinsic pixel dimensions, required by next/image to size the box correctly without distortion. */
  width: number;
  height: number;
}

export interface Project {
  id: string;
  slug: string;
  title: string;
  description: string;
  coverImage: string;
  year: string;
  client: string;
  featured: boolean;
  tags: ProjectTag[];
  /** Case-study-only fields — optional so future projects can be added incrementally. */
  duration?: string;
  role?: string;
  website?: string;
  figma?: string;
  sections?: CaseStudySections;
  gallery?: GalleryImage[];
  video?: string;
}
