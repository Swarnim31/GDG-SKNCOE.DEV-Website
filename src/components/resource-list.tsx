
"use client";

import { useState, useMemo } from "react";
import type { Resource } from "@/lib/types";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ResourceCard } from "@/components/resource-card";
import { Search } from "lucide-react";

type ResourceListProps = {
  resources: Resource[];
};

export function ResourceList({ resources }: ResourceListProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterTag, setFilterTag] = useState("all");

  const resourceTags = useMemo(() => {
    const tags = new Set(resources.map((resource) => resource.category));
    return ["all", ...Array.from(tags)];
  }, [resources]);

  const filteredResources = useMemo(() => {
    return resources
      .filter((resource) => {
        if (filterTag === "all") return true;
        return resource.category === filterTag;
      })
      .filter((resource) => {
        return resource.name.toLowerCase().includes(searchTerm.toLowerCase());
      });
  }, [resources, searchTerm, filterTag]);

  return (
    <div>
      <div className="flex flex-col md:flex-row gap-4 mb-8">
        <div className="relative flex-grow">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search for resources..."
            className="pl-10 w-full"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <Select value={filterTag} onValueChange={setFilterTag}>
          <SelectTrigger className="w-full md:w-[180px]">
            <SelectValue placeholder="Filter by tag" />
          </SelectTrigger>
          <SelectContent>
            {resourceTags.map((tag) => (
              <SelectItem key={tag} value={tag} className="capitalize">
                {tag === "all" ? "All Tags" : tag}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      {filteredResources.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredResources.map((resource) => (
            <ResourceCard key={resource.id} resource={resource} />
          ))}
        </div>
      ) : (
        <div className="text-center py-16">
          <p className="text-lg text-muted-foreground">
            No resources found. Try a different search or filter.
          </p>
        </div>
      )}
    </div>
  );
}
