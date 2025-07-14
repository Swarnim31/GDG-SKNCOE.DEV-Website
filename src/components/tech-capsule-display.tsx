"use client";

import { useState, useEffect } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { mockCapsules } from "@/lib/data";
import type { Capsule } from "@/lib/types";
import { ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

const getDailyCapsule = (capsules: Capsule[]): Capsule => {
  const dayOfYear = Math.floor(
    (Date.now() - new Date(new Date().getFullYear(), 0, 0).valueOf()) / 86400000
  );
  const index = dayOfYear % capsules.length;
  return capsules[index];
};

export function TechCapsuleDisplay() {
  const [capsule, setCapsule] = useState<Capsule | null>(null);

  useEffect(() => {
    setCapsule(getDailyCapsule(mockCapsules));
  }, []);

  const getGradientClass = (category: string) => {
    switch (category.toLowerCase()) {
      case "web":
        return "capsule-gradient-blue";
      case "ai":
        return "capsule-gradient-red";
      case "mobile":
        return "capsule-gradient-green";
      case "git":
        return "capsule-gradient-yellow";
      case "tools":
      default:
        return "capsule-gradient-purple";
    }
  };

  if (!capsule) {
    return (
      <Card className="max-w-2xl w-full mx-auto animate-pulse bg-muted/50 h-[150px] rounded-full" />
    );
  }

  return (
    <div className="flex flex-col items-center gap-8 perspective-1000">
      <Card
        className={cn(
          "max-w-2xl w-full mx-auto shadow-lg hover:shadow-2xl transition-all duration-300 transform-style-3d",
          "hover:-translate-y-2 hover:rotate-x-6 hover:rotate-y-[-4deg]",
          "rounded-full text-primary-foreground p-4",
          getGradientClass(capsule.category)
        )}
      >
        <CardContent className="p-4 flex items-center gap-6">
           <div className="text-4xl">{capsule.emoji}</div>
           <div className="flex-grow">
              <CardTitle className="text-xl font-bold mb-1">
                {capsule.title}
              </CardTitle>
              <p className="text-lg opacity-90">{capsule.tip}</p>
           </div>
        </CardContent>
      </Card>
      <Button asChild variant="outline">
        <Link href="/resources">
          More Resources <ArrowRight className="ml-2 h-4 w-4" />
        </Link>
      </Button>
    </div>
  );
}
