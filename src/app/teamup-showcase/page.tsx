import { ProjectList } from "@/components/project-list";
import { mockProjects } from "@/lib/data";

export default function TeamUpShowcasePage() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tight">TeamUp Showcase</h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Explore collaborative projects built by our talented community members.
        </p>
      </div>
      <ProjectList projects={mockProjects} />
    </div>
  );
}
