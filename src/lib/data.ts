import type { Event } from "./types";

export const mockEvents: Event[] = [
  {
    id: "1",
    title: "GDG Cloud Community Day",
    description:
      "Join us for a full day of learning about Google Cloud technologies with hands-on workshops and expert sessions.",
    date: "2024-09-15",
    location: "Online",
    type: "GDG Event",
    imageUrl: "https://placehold.co/600x400.png",
    imageHint: "cloud technology",
    tags: ["Google Cloud", "DevOps", "AI/ML"],
  },
  {
    id: "2",
    title: "Flutter Forward Extended",
    description:
      "Catch up on the latest updates from the Flutter team. We will have live coding sessions and a Q&A panel.",
    date: "2024-10-02",
    location: "Virtual Event",
    type: "GDG Event",
    imageUrl: "https://placehold.co/600x400.png",
    imageHint: "mobile development",
    tags: ["Flutter", "Mobile", "Dart"],
  },
  {
    id: "3",
    title: "Android Dev Summit Recap",
    description:
      "A deep dive into the most important announcements from the Android Dev Summit. Demos and discussions included.",
    date: "2024-11-10",
    location: "Community Hall",
    type: "GDG Event",
    imageUrl: "https://placehold.co/600x400.png",
    imageHint: "android development",
    tags: ["Android", "Kotlin", "Jetpack Compose"],
  },
  {
    id: "4",
    title: "Intro to Web Accessibility",
    description:
      "A practical session on making your web applications accessible to everyone. Learn about ARIA, screen readers, and more.",
    date: "2024-09-20",
    location: "Online Workshop",
    type: "Tech Session",
    imageUrl: "https://placehold.co/600x400.png",
    imageHint: "web accessibility",
    tags: ["Web Dev", "A11y", "React"],
  },
  {
    id: "5",
    title: "Firebase for Startups",
    description:
      "Discover how to leverage Firebase to build and scale your startup faster. Covers Auth, Firestore, and Cloud Functions.",
    date: "2024-10-18",
    location: "Startup Hub",
    type: "Tech Session",
    imageUrl: "https://placehold.co/600x400.png",
    imageHint: "firebase startup",
    tags: ["Firebase", "Startups", "Backend"],
  },
  {
    id: "6",
    title: "Modern CSS Deep Dive",
    description:
      "Explore the latest features in CSS, including container queries, cascade layers, and new color spaces.",
    date: "2024-11-05",
    location: "Online",
    type: "Tech Session",
    imageUrl: "https://placehold.co/600x400.png",
    imageHint: "css code",
    tags: ["CSS", "Web Design", "Frontend"],
  },
];
