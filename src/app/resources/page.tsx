
"use client";

import { ResourceCard } from "@/components/resource-card";
import { googleTools, aiTools, devTools } from "@/lib/data";
import { motion } from "framer-motion";
import { FileJson, Cpu, Code } from "lucide-react";

export default function ResourcesPage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold tracking-tight">
          Developer Resource Explorer
        </h1>
        <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
          A curated collection of essential tools and platforms to accelerate your development workflow.
        </p>
      </div>

      {/* Google & Firebase Tools */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-8 flex items-center gap-3">
          <FileJson className="h-7 w-7 text-blue-500" />
          Google & Firebase Tools
        </h2>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {googleTools.map((resource) => (
            <ResourceCard key={resource.id} resource={resource} />
          ))}
        </motion.div>
      </section>

      {/* AI Tools */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-8 flex items-center gap-3">
          <Cpu className="h-7 w-7 text-red-500" />
          AI Tools / Agents
        </h2>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {aiTools.map((resource) => (
            <ResourceCard key={resource.id} resource={resource} />
          ))}
        </motion.div>
      </section>

      {/* Developer Tools */}
      <section>
        <h2 className="text-2xl font-bold mb-8 flex items-center gap-3">
          <Code className="h-7 w-7 text-green-500" />
          Developer Tools
        </h2>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {devTools.map((resource) => (
            <ResourceCard key={resource.id} resource={resource} />
          ))}
        </motion.div>
      </section>
    </div>
  );
}
