
"use client";

import { ResourceList } from "@/components/resource-list";
import { googleTools, aiTools, devTools } from "@/lib/data";
import { motion } from "framer-motion";
import { FileJson, Cpu, Code } from "lucide-react";

export default function ResourcesPage() {
  const allResources = [...googleTools, ...aiTools, ...devTools];

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-black tracking-tight mb-4">
          Developer Resource Explorer
        </h1>
        <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
          A curated collection of essential tools and platforms to accelerate
          your development workflow.
        </p>
      </div>

      <ResourceList resources={allResources} />
    </div>
  );
}
