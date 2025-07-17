
"use client";

import Image from "next/image";
import Link from "next/link";
import type { Resource } from "@/lib/types";
import { Button } from "@/components/ui/button";
import { ExternalLink, ChevronDown, ChevronUp } from "lucide-react";
import { cn } from "@/lib/utils";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { Card, CardContent } from "@/components/ui/card";
import { useState } from "react";

type ResourceCardProps = {
  resource: Resource;
  index: number;
};

const gradientClasses = [
    "capsule-gradient-blue",
    "capsule-gradient-red",
    "capsule-gradient-green",
    "capsule-gradient-yellow",
    "capsule-gradient-purple",
    "capsule-gradient-fire",
];

export function ResourceCard({ resource, index }: ResourceCardProps) {
  const [isOpen, setIsOpen] = useState(false);
  const gradientClass = gradientClasses[index % gradientClasses.length];

  return (
    <Collapsible open={isOpen} onOpenChange={setIsOpen}>
        <CollapsibleTrigger asChild>
            <div className={cn("flex items-center justify-between w-full p-4 rounded-full text-lg font-bold cursor-pointer transition-all duration-300 hover:shadow-lg hover:-translate-y-1 text-white relative z-10", gradientClass)}>
                <div className="flex items-center gap-4">
                  <div className="relative h-8 w-8 flex-shrink-0 bg-white/20 rounded-full p-1.5 flex items-center justify-center shadow-inner">
                      <Image
                        src={resource.logoUrl}
                        alt={`${resource.name} logo`}
                        fill
                        className="object-contain"
                      />
                  </div>
                  <span>{resource.name}</span>
                </div>
                {isOpen ? <ChevronUp className="h-6 w-6" /> : <ChevronDown className="h-6 w-6" />}
            </div>
        </CollapsibleTrigger>
        <CollapsibleContent>
            <Card className="mt-[-2rem] pt-[3rem] pb-4 z-0 relative shadow-lg rounded-3xl border-t-0">
                <CardContent className="p-4">
                  <p className="text-muted-foreground mb-4">
                    {resource.description}
                  </p>
                  <div className="flex flex-col sm:flex-row gap-2">
                    <Button asChild className="w-full btn-gemini rounded-full">
                      <Link
                        href={resource.toolLink}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Open Tool <ExternalLink className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                    <Button asChild variant="secondary" className="w-full rounded-full">
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
            </Card>
        </CollapsibleContent>
    </Collapsible>
  );
}
