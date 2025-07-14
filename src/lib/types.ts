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
  tag: string;
  link: string;
  imageUrl: string;
  imageHint: string;
};

export type Capsule = {
  id: string;
  title: string;
  tip: string;
  category: "Web" | "AI" | "Mobile" | "Git" | "Tools";
};

export type Project = {
  id: string;
  title: string;
  description: string;
  category: "Web" | "Mobile" | "AI";
  tags: string[];
  contributors: {
    name: string;
    role: string;
  }[];
  link: string;
  imageUrl: string;
  imageHint: string;
};
