import { ResourceList } from "@/components/resource-list";
import { mockResources } from "@/lib/data";

export default function ResourcesPage() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tight">
          Developer Resources
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">
          A curated list of tools, documentation, and assets to help you build.
        </p>
      </div>
      <ResourceList resources={mockResources} />
    </div>
  );
}
