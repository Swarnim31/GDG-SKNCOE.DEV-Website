
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
import { Search, Code, Cpu, FileJson, ListFilter } from "lucide-react";
import { motion } from "framer-motion";

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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  };
  
  const googleTools = filteredResources.filter(r => r.category === 'Google & Firebase');
  const aiTools = filteredResources.filter(r => r.category === 'AI');
  const devTools = filteredResources.filter(r => r.category === 'Developer');


  return (
    <div>
      <div className="flex justify-center mb-12 sticky top-20 z-40">
        <div className="p-1 rounded-full animated-gradient-border shadow-lg">
            <div className="flex items-center gap-2 bg-background/80 backdrop-blur-sm p-2 rounded-full">
              <div className="relative flex-grow sm:min-w-[300px]">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search for tools..."
                  className="pl-10 w-full h-11 text-base bg-transparent border-0 focus-visible:ring-0 focus-visible:ring-offset-0"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <div className="w-px h-6 bg-border mx-2"></div>
              <Select value={filterTag} onValueChange={setFilterTag}>
                <SelectTrigger className="w-auto h-11 text-base bg-transparent border-0 gap-2 focus:ring-0 focus:ring-offset-0">
                  <ListFilter className="h-5 w-5 text-muted-foreground" />
                  <SelectValue placeholder="Filter by category" />
                </SelectTrigger>
                <SelectContent>
                  {resourceTags.map((tag) => (
                    <SelectItem key={tag} value={tag} className="capitalize">
                      {tag === "all" ? "All Categories" : tag}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
        </div>
      </div>

      <div className="space-y-4 max-w-4xl mx-auto">
         {filteredResources.length > 0 ? (
            filteredResources.map((resource, index) => (
                <ResourceCard key={resource.id} resource={resource} index={index} />
            ))
         ) : (
            <div className="text-center py-16">
                <p className="text-lg text-muted-foreground">No tools found matching your criteria. Try a different search or filter.</p>
            </div>
         )}
      </div>

    </div>
  );
}
