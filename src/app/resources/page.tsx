
"use client";

import { ResourceCard } from "@/components/resource-card";
import { googleTools, aiTools, devTools } from "@/lib/data";
import { motion } from "framer-motion";
import { FileJson, Cpu, Code } from "lucide-react";
import Image from "next/image";

export default function ResourcesPage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

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

      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
          <Image
            src="https://www.gstatic.com/devrel-devsite/prod/v874c5d871cf34262c5b3d9d683664d471a41493a3841e2f893a3b54435b87c71/firebase/images/lockup.svg"
            width={24}
            height={24}
            alt="Google"
            className="h-8 w-auto"
          />
          Google & Firebase Tools
        </h2>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {googleTools.map((resource, i) => (
            <ResourceCard
              key={resource.id}
              resource={resource}
              gradientFrom="from-blue-500/80"
              gradientTo="to-green-500/80"
              hoverGradientFrom="hover:from-green-500/80"
              hoverGradientTo="hover:to-blue-500/80"
            />
          ))}
        </motion.div>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
          <Image
             src="https://www.gstatic.com/lamda/images/gemini_lockup_gm_horizontal_20231206_blue_158x26_v2_hr.svg"
             width={24}
             height={24}
             alt="AI"
             className="h-6 w-auto"
           />
          AI Tools / Agents
        </h2>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {aiTools.map((resource) => (
             <ResourceCard
              key={resource.id}
              resource={resource}
              gradientFrom="from-red-500/80"
              gradientTo="to-yellow-500/80"
              hoverGradientFrom="hover:from-yellow-500/80"
              hoverGradientTo="hover:to-red-500/80"
            />
          ))}
        </motion.div>
      </section>

      <section>
        <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
          <Code className="h-7 w-7 text-green-500" />
          Developer Tools
        </h2>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {devTools.map((resource) => (
             <ResourceCard
              key={resource.id}
              resource={resource}
              gradientFrom="from-purple-500/80"
              gradientTo="to-pink-500/80"
              hoverGradientFrom="hover:from-pink-500/80"
              hoverGradientTo="hover:to-purple-500/80"
            />
          ))}
        </motion.div>
      </section>
    </div>
  );
}
