
"use client";

import Image from "next/image";
import Link from "next/link";
import type { Resource } from "@/lib/types";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronDown, ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

type ResourceCardProps = {
  resource: Resource;
  gradientFrom: string;
  gradientTo: string;
  hoverGradientFrom: string;
  hoverGradientTo: string;
};

export function ResourceCard({
  resource,
  gradientFrom,
  gradientTo,
  hoverGradientFrom,
  hoverGradientTo,
}: ResourceCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  const cardVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.95 },
    visible: { opacity: 1, y: 0, scale: 1 },
  };

  return (
    <motion.div variants={cardVariants} className="group">
      <Card
        className={cn(
          "relative flex flex-col h-full transition-all duration-300 ease-in-out",
          "bg-card/50 dark:bg-card/70 backdrop-blur-sm overflow-hidden",
           "group-hover:scale-105 group-hover:shadow-2xl group-hover:shadow-primary/10"
        )}
      >
        <div
          className={cn(
            "absolute inset-0 bg-gradient-to-br transition-all duration-500",
            gradientFrom,
            gradientTo,
            `group-hover:${hoverGradientFrom}`,
            `group-hover:${hoverGradientTo}`
          )}
        ></div>
        <div className="absolute inset-0 bg-background/80 dark:bg-background/90 group-hover:bg-background/70 dark:group-hover:bg-background/80 transition-all duration-300"></div>

        <div className="relative">
          <CardHeader
            className="flex flex-row items-center justify-between cursor-pointer p-4"
            onClick={() => setIsExpanded(!isExpanded)}
          >
            <div className="flex items-center gap-4">
              <div className="relative h-10 w-10 flex-shrink-0 bg-background/50 rounded-lg p-1.5 flex items-center justify-center shadow-inner-sm">
                <Image
                  src={resource.logoUrl}
                  alt={`${resource.name} logo`}
                  fill
                  className="object-contain"
                />
              </div>
              <p className="text-lg font-bold">{resource.name}</p>
            </div>
            <motion.div
              animate={{ rotate: isExpanded ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <ChevronDown className="h-6 w-6 text-muted-foreground" />
            </motion.div>
          </CardHeader>

          <AnimatePresence>
            {isExpanded && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="overflow-hidden"
              >
                <CardContent className="p-4 pt-0">
                  <p className="text-muted-foreground mb-4">
                    {resource.description}
                  </p>
                  <div className="flex flex-col sm:flex-row gap-2">
                    <Button asChild className="w-full btn-google">
                      <Link
                        href={resource.toolLink}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Open Tool <ExternalLink className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                    <Button asChild variant="secondary" className="w-full">
                      <Link
                        href={resource.learnLink}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Learn More
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </Card>
    </motion.div>
  );
}
