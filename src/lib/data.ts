import type { Event, Resource } from "./types";

export const mockEvents: Event[] = [
  {
    id: "1",
    title: "GDG Cloud Community Day",
    description:
      "Join us for a full day of learning about Google Cloud technologies with hands-on workshops and expert sessions.",
    date: "2024-09-15",
    location: "Online",
    organizer: "GDG Cloud City",
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
    organizer: "Flutter Devs Pune",
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
    organizer: "Android Gurus",
    type: "GDG Event",
    imageUrl: "https://placehold.co/600x400.png",
    imageHint: "android phone",
    tags: ["Android", "Kotlin", "Jetpack Compose"],
  },
  {
    id: "4",
    title: "Intro to Web Accessibility",
    description:
      "A practical session on making your web applications accessible to everyone. Learn about ARIA, screen readers, and more.",
    date: "2024-09-20",
    location: "Online Workshop",
    organizer: "Web Weavers",
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
    organizer: "Firebase Fanatics",
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
    organizer: "CSS Masters",
    type: "Tech Session",
    imageUrl: "https://placehold.co/600x400.png",
    imageHint: "css code",
    tags: ["CSS", "Web Design", "Frontend"],
  },
];

export const mockTeam = [
  {
    id: "1",
    name: "Alex Johnson",
    role: "Lead Cloud Engineer",
    imageUrl: "https://placehold.co/400x400.png",
    imageHint: "person portrait",
    linkedinUrl: "https://www.linkedin.com/",
  },
  {
    id: "2",
    name: "Samantha Lee",
    role: "Senior Android Developer",
    imageUrl: "https://placehold.co/400x400.png",
    imageHint: "woman portrait",
    linkedinUrl: "https://www.linkedin.com/",
  },
  {
    id: "3",
    name: "David Chen",
    role: "AI/ML Specialist",
    imageUrl: "https://placehold.co/400x400.png",
    imageHint: "man portrait",
    linkedinUrl: "https://www.linkedin.com/",
  },
];

export const mockCapsules = [
    { id: '1', title: 'Git Stash', tip: 'Use `git stash -u` to include untracked files.' },
    { id: '2', title: 'CSS Flexbox', tip: '`justify-content` aligns on main axis, `align-items` on cross axis.' },
    { id: '3', title: 'React Keys', tip: 'Keys help React identify which items have changed, are added, or are removed.' },
    { id: '4', title: 'JS Destructuring', tip: 'Easily extract array values or object properties into distinct variables.' },
    { id: '5', title: 'TypeScript Enums', tip: 'Use enums for a set of named constants, like `enum Color {Red, Green}`.' },
    { id: '6', title: 'Next.js Image', tip: 'The `<Image>` component automatically optimizes images for performance.' },
    { id: '7', title: 'VS Code Shortcut', tip: '`Ctrl+D` selects next occurrence of the current word.' },
    { id: '8', title: 'Firebase Rules', tip: 'Always secure your Firestore database with proper security rules.' }
];

export const mockResources: Resource[] = [
  {
    id: "1",
    name: "Firebase",
    description: "An app development platform that helps you build and grow apps and games users love.",
    tag: "Web",
    link: "https://firebase.google.com/",
    imageUrl: "https://placehold.co/600x400.png",
    imageHint: "firebase logo",
  },
  {
    id: "2",
    name: "Gemini",
    description: "A family of generative AI models that lets developers generate content and build applications.",
    tag: "AI",
    link: "https://ai.google.dev/gemini-api",
    imageUrl: "https://placehold.co/600x400.png",
    imageHint: "ai abstract",
  },
    {
    id: "3",
    name: "Flutter",
    description: "Build, test, and deploy beautiful mobile, web, desktop, and embedded apps from a single codebase.",
    tag: "Mobile",
    link: "https://flutter.dev/",
    imageUrl: "https://placehold.co/600x400.png",
    imageHint: "flutter logo",
  },
   {
    id: "4",
    name: "Next.js",
    description: "The React framework for building full-stack web applications. Supports both server and client components.",
    tag: "Web",
    link: "https://nextjs.org/",
    imageUrl: "https://placehold.co/600x400.png",
    imageHint: "nextjs logo",
  },
   {
    id: "5",
    name: "Google Colab",
    description: "Write and execute Python in your browser, with zero configuration required and free access to GPUs.",
    tag: "AI",
    link: "https://colab.research.google.com/",
    imageUrl: "https://placehold.co/600x400.png",
    imageHint: "python code",
  },
   {
    id: "6",
    name: "Figma",
    description: "The collaborative interface design tool. Build, test, and ship better designs from start to finish.",
    tag: "UI/UX",
    link: "https://www.figma.com/",
    imageUrl: "https://placehold.co/600x400.png",
    imageHint: "design wireframe",
  }
];
