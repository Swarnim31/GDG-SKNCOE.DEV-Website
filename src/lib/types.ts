export type Event = {
  id: string;
  title: string;
  description: string;
  date: string;
  location: string;
  type: "GDG Event" | "Tech Session" | "Resource Update";
  imageUrl: string;
  imageHint: string;
  tags: string[];
};
