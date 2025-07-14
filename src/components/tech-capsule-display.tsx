"use client";

import { useState, useEffect } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
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
    // This logic runs only on the client to avoid hydration mismatch
    setCapsule(getDailyCapsule(mockCapsules));
  }, []);

  const getBadgeVariant = (category: string) => {
    switch (category.toLowerCase()) {
      case "web":
        return "default";
      case "ai":
        return "destructive";
      case "mobile":
        return "secondary";
      default:
        return "outline";
    }
  };

  if (!capsule) {
    return (
      <Card className="max-w-2xl w-full mx-auto animate-pulse bg-muted/50 h-[150px]" />
    );
  }

  return (
    <div className="flex flex-col items-center gap-8">
      <Card
        className={cn(
          "max-w-2xl w-full mx-auto shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1",
          "border-l-4",
          capsule.category.toLowerCase() === 'web' && 'border-primary',
          capsule.category.toLowerCase() === 'ai' && 'border-destructive',
          capsule.category.toLowerCase() === 'mobile' && 'border-green-500',
          capsule.category.toLowerCase() === 'git' && 'border-orange-500',
          capsule.category.toLowerCase() === 'tools' && 'border-yellow-500',
        )}
      >
        <CardHeader>
          <div className="flex justify-between items-start">
            <CardTitle className="text-xl flex items-center gap-2">
              <Sparkles className="h-5 w-5 text-yellow-500"/>
              {capsule.title}
            </CardTitle>
            <Badge variant={getBadgeVariant(capsule.category)}>
              {capsule.category}
            </Badge>
          </div>
        </CardHeader>
        <CardContent>
          <p className="text-lg text-muted-foreground">{capsule.tip}</p>
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
