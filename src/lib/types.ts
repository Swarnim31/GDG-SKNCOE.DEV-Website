
import type { Timestamp } from "firebase/firestore";

export type Event = {
  id: string;
  title: string;
  description: string;
  date: string;
  location: string;
  organizer: string;
  type: "GDG Event" | "Tech Session" | "Resource Update";
  imageUrl: string;
  imageHint: string;
  tags: string[];
};

export type Resource = {
  id: string;
  name: string;
  description: string;
  logoUrl: string;
  toolLink: string;
  learnLink: string;
  category: "google" | "ai" | "dev";
};

export type Capsule = {
  id:string;
  title: string;
  tip: string;
  category: "Web" | "AI" | "Mobile" | "Git" | "Tools";
  emoji: string;
};

export type Contributor = {
  name: string;
  role: string;
};

export type Project = {
  id: string;
  title: string;
  description: string;
  category: "Web" | "Mobile" | "AI" | "Cloud";
  tags: string[];
  contributors: Contributor[];
  link: string;
  imageUrl?: string;
  imageHint?: string;
  timestamp?: Timestamp;
};

export type GalleryImage = {
  id: string;
  src: string;
  alt: string;
  hint: string;
  caption?: string;
};

export type TeamUpAlert = {
    id:string;
    name: string;
    query: string;
    skills: string[];
    contact?: string;
    timestamp: Timestamp;
}
