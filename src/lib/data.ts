
import type { Event, Resource, Capsule, Project, GalleryImage } from "./types";

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

export const mockGalleryImages: GalleryImage[] = [
  { id: '1', src: 'https://placehold.co/600x400.png', alt: 'Team working on a project', hint: 'team collaboration', caption: 'Hackathon brainstorming session.' },
  { id: '2', src: 'https://placehold.co/600x400.png', alt: 'Group photo at a tech talk', hint: 'group photo', caption: 'Post-event group picture!' },
  { id: '3', src: 'https://placehold.co/600x400.png', alt: 'Presenter at a workshop', hint: 'public speaking', caption: 'Live coding workshop in action.' },
  { id: '4', src: 'https://placehold.co/600x400.png', alt: 'Team members networking', hint: 'people talking', caption: 'Networking at the annual meetup.' },
  { id: '5', src: 'https://placehold.co/600x400.png', alt: 'Celebrating a project launch', hint: 'team celebration', caption: 'Celebrating the launch of our new app.' },
  { id: '6', src: 'https://placehold.co/600x400.png', alt: 'Casual team lunch', hint: 'team lunch', caption: 'Team lunch at our favorite spot.' },
];

export const mockCapsules: Capsule[] = [
    { id: '1', title: 'Git Stash', tip: 'Use `git stash -u` to include untracked files.', category: 'Git', emoji: '🗂️' },
    { id: '2', title: 'CSS Flexbox', tip: '`justify-content` aligns on main axis, `align-items` on cross axis.', category: 'Web', emoji: '↔️' },
    { id: '3', title: 'React Keys', tip: 'Keys help React identify which items have changed, are added, or are removed.', category: 'Web', emoji: '🔑' },
    { id: '4', title: 'JS Destructuring', tip: 'Easily extract array values or object properties into distinct variables.', category: 'Web', emoji: '💡' },
    { id: '5', title: 'TypeScript Enums', tip: 'Use enums for a set of named constants, like `enum Color {Red, Green}`.', category: 'Web', emoji: '🏷️' },
    { id: '6', title: 'Next.js Image', tip: 'The `<Image>` component automatically optimizes images for performance.', category: 'Web', emoji: '🖼️' },
    { id: '7', title: 'VS Code Shortcut', tip: '`Ctrl+D` selects next occurrence of the current word.', category: 'Tools', emoji: '⌨️' },
    { id: '8', title: 'Firebase Rules', tip: 'Always secure your Firestore database with proper security rules.', category: 'Web', emoji: '🔒' },
    { id: '9', title: 'Gemini System Prompt', tip: 'Use a `system` instruction to guide the model\'s behavior and personality.', category: 'AI', emoji: '🤖' },
    { id: '10', title: 'Flutter Widgets', tip: 'In Flutter, almost everything is a widget, from a button to padding.', category: 'Mobile', emoji: '📱' },
    { id: '11', title: 'Android Vector Drawables', tip: 'Use Vector Drawables for sharp, scalable icons that reduce APK size.', category: 'Mobile', emoji: '✏️' },
];

export const googleTools: Resource[] = [
  {
    id: 'g-1',
    name: 'Firebase',
    description: 'An app development platform that helps you build and grow apps and games users love, backed by Google.',
    logoUrl: 'https://www.gstatic.com/devrel-devsite/prod/v874c5d871cf34262c5b3d9d683664d471a41493a3841e2f893a3b54435b87c71/firebase/images/lockup.svg',
    toolLink: 'https://firebase.google.com/',
    learnLink: 'https://firebase.google.com/docs',
    category: 'google',
  },
  {
    id: 'g-2',
    name: 'Gemini',
    description: 'A family of generative AI models from Google AI, designed for multimodal reasoning and advanced tasks.',
    logoUrl: 'https://www.gstatic.com/lamda/images/gemini_lockup_gm_horizontal_20231206_blue_158x26_v2_hr.svg',
    toolLink: 'https://ai.google.dev/',
    learnLink: 'https://ai.google.dev/docs',
    category: 'google',
  },
  {
    id: 'g-3',
    name: 'Google Colab',
    description: 'Write and execute Python in your browser with zero configuration, free access to GPUs, and easy sharing.',
    logoUrl: 'https://colab.research.google.com/img/colab_favicon_256px.png',
    toolLink: 'https://colab.research.google.com/',
    learnLink: 'https://colab.research.google.com/',
    category: 'google',
  },
  {
    id: 'g-4',
    name: 'Flutter',
    description: 'Google\'s UI toolkit for building beautiful, natively compiled applications for mobile, web, and desktop from a single codebase.',
    logoUrl: 'https://storage.googleapis.com/cms-storage-bucket/4fd5520fe28eb2a65a44.svg',
    toolLink: 'https://flutter.dev/',
    learnLink: 'https://flutter.dev/docs',
    category: 'google',
  },
  {
    id: 'g-5',
    name: 'Android Studio',
    description: 'The official integrated development environment (IDE) for Google\'s Android operating system.',
    logoUrl: 'https://developer.android.com/static/studio/images/new-studio-logo-1-1.svg',
    toolLink: 'https://developer.android.com/studio',
    learnLink: 'https://developer.android.com/docs',
    category: 'google',
  },
  {
    id: 'g-6',
    name: 'Google Cloud',
    description: 'A suite of cloud computing services that runs on the same infrastructure that Google uses internally for its end-user products.',
    logoUrl: 'https://cloud.google.com/images/social-icon-google-cloud-1200-v2.png',
    toolLink: 'https://cloud.google.com/',
    learnLink: 'https://cloud.google.com/docs',
    category: 'google',
  },
];

export const aiTools: Resource[] = [
  {
    id: 'ai-1',
    name: 'ChatGPT',
    description: 'A conversational AI model by OpenAI, capable of understanding and generating human-like text.',
    logoUrl: 'https://openai.com/favicon.ico',
    toolLink: 'https://chat.openai.com/',
    learnLink: 'https://platform.openai.com/docs',
    category: 'ai',
  },
  {
    id: 'ai-2',
    name: 'Claude AI',
    description: 'A family of large language models developed by Anthropic, focused on safety and helpfulness.',
    logoUrl: 'https://www.anthropic.com/images/icons/apple-touch-icon.png',
    toolLink: 'https://claude.ai/',
    learnLink: 'https://docs.anthropic.com/claude/reference/getting-started-with-the-api',
    category: 'ai',
  },
  {
    id: 'ai-3',
    name: 'Perplexity',
    description: 'An AI-powered search engine and conversational assistant that provides direct answers with citations.',
    logoUrl: 'https://www.perplexity.ai/favicon.svg',
    toolLink: 'https://www.perplexity.ai/',
    learnLink: 'https://docs.perplexity.ai/',
    category: 'ai',
  },
  {
    id: 'ai-4',
    name: 'Poe by Quora',
    description: 'A platform to ask questions, get instant answers, and have back-and-forth conversations with a variety of AI bots.',
    logoUrl: 'https://poe.com/favicon.ico',
    toolLink: 'https://poe.com/',
    learnLink: 'https://developer.poe.com/server-bots/official-bots-and-pricing',
    category: 'ai',
  },
  {
    id: 'ai-5',
    name: 'Vercel v0',
    description: 'A generative UI system by Vercel that creates custom components on the fly from text prompts.',
    logoUrl: 'https://assets.vercel.com/image/upload/front/favicon/vercel/favicon.ico',
    toolLink: 'https://v0.dev/',
    learnLink: 'https://v0.dev/faq',
    category: 'ai',
  },
   {
    id: 'ai-6',
    name: 'Phind',
    description: 'An AI search engine and pair programmer for developers, providing code examples and technical answers.',
    logoUrl: 'https://phind.com/favicon.ico',
    toolLink: 'https://phind.com/',
    learnLink: 'https://phind.com/api',
    category: 'ai',
  },
];

export const devTools: Resource[] = [
  {
    id: 'dev-1',
    name: 'Next.js',
    description: 'The React framework for building full-stack web applications with server-side rendering and static site generation.',
    logoUrl: 'https://nextjs.org/favicon.ico',
    toolLink: 'https://nextjs.org/',
    learnLink: 'https://nextjs.org/docs',
    category: 'dev',
  },
  {
    id: 'dev-2',
    name: 'Figma',
    description: 'A collaborative interface design tool that allows teams to design, prototype, and gather feedback all in one place.',
    logoUrl: 'https://static.figma.com/app/icon/1/favicon.png',
    toolLink: 'https://www.figma.com/',
    learnLink: 'https://help.figma.com/hc/en-us',
    category: 'dev',
  },
  {
    id: 'dev-3',
    name: 'Tailwind CSS',
    description: 'A utility-first CSS framework for rapidly building custom user interfaces without leaving your HTML.',
    logoUrl: 'https://tailwindcss.com/favicons/favicon.ico?v=3',
    toolLink: 'https://tailwindcss.com/',
    learnLink: 'https://tailwindcss.com/docs/installation',
    category: 'dev',
  },
  {
    id: 'dev-4',
    name: 'GitHub',
    description: 'A web-based platform for version control using Git, plus project management and collaboration features.',
    logoUrl: 'https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png',
    toolLink: 'https://github.com/',
    learnLink: 'https://docs.github.com/en',
    category: 'dev',
  },
  {
    id: 'dev-5',
    name: 'VS Code',
    description: 'A free, lightweight, and powerful source-code editor that runs on your desktop and is available for Windows, macOS and Linux.',
    logoUrl: 'https://code.visualstudio.com/favicon.ico',
    toolLink: 'https://code.visualstudio.com/',
    learnLink: 'https://code.visualstudio.com/docs',
    category: 'dev',
  },
   {
    id: 'dev-6',
    name: 'Supabase',
    description: 'An open-source Firebase alternative providing a Postgres database, authentication, storage, and auto-generated APIs.',
    logoUrl: 'https://supabase.com/favicon/favicon.ico',
    toolLink: 'https://supabase.com/',
    learnLink: 'https://supabase.com/docs',
    category: 'dev',
  },
];


export const mockProjects: Project[] = [
  {
    id: "1",
    title: "Community Event Platform",
    description: "A full-stack web app for managing GDG events, registrations, and feedback, built with Next.js and Firebase.",
    category: "Web",
    tags: ["Next.js", "Firebase", "Tailwind CSS", "Genkit"],
    contributors: [
      { name: "Alice", role: "Frontend Dev" },
      { name: "Bob", role: "Backend Dev" },
    ],
    link: "https://github.com/",
    imageUrl: "https://placehold.co/600x400.png",
    imageHint: "web application screenshot"
  },
  {
    id: "2",
    title: "Campus Companion App",
    description: "A cross-platform mobile app to help students navigate campus, find study spots, and connect with peers.",
    category: "Mobile",
    tags: ["Flutter", "Dart", "Firebase Auth"],
    contributors: [
      { name: "Charlie", role: "Flutter Dev" },
      { name: "Diana", role: "UI/UX Designer" },
    ],
    link: "https://github.com/",
    imageUrl: "https://placehold.co/600x400.png",
    imageHint: "mobile app screen"
  },
  {
    id: "3",
    title: "AI-Powered News Summarizer",
    description: "An AI tool that fetches the latest tech news and provides concise, easy-to-read summaries using Gemini.",
    category: "AI",
    tags: ["Python", "Gemini", "Flask", "Genkit"],
    contributors: [
      { name: "Eve", role: "AI Engineer" },
      { name: "Frank", role: "API Developer" },
    ],
    link: "https://github.com/",
    imageUrl: "https://placehold.co/600x400.png",
    imageHint: "artificial intelligence abstract"
  },
  {
    id: "4",
    title: "Cloud Function Automation",
    description: "A set of serverless functions to automate community management tasks like sending reminders and updating leaderboards.",
    category: "Web",
    tags: ["Google Cloud", "Node.js", "Firestore"],
    contributors: [
      { name: "Grace", role: "Cloud Engineer" },
    ],
    link: "https://github.com/",
    imageUrl: "https://placehold.co/600x400.png",
    imageHint: "cloud infrastructure diagram"
  }
];
