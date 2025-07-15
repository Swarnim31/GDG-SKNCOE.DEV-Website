
import type { Timestamp } from "firebase/firestore";

export type Event = {
  id: string;
  title: string;
  description: string;
  date: string;
  location: string;
  organizer: string;
  type: "GDG Event" | "Tech Session" | "Resource Update" | "Info Session" | "Conference" | "Workshop / Study Group";
  imageUrl: string;
  imageHint: string;
  tags: string[];
};

export type Resource = {
  id: string;
  name: string;
  description: string;
  category: 'Google & Firebase' | 'AI' | 'Developer';
  logoUrl: string;
  toolLink: string;
  learnLink: string;
};

export type Capsule = {
  id:string;
  title: string;
  tip: string;
  category: "Web" | "AI" | "Mobile" | "Git" | "Tools";
  emoji: string;
  day: number;
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
  techStack: string[];
  contributors: Contributor[];
  githubURL: string;
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
    email?: string;
    timestamp: Timestamp;
}
