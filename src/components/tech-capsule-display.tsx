
"use client";

import { useState, useEffect } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import type { Capsule } from "@/lib/types";
import { ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { useCollection } from "react-firebase-hooks/firestore";
import { collection, query, where } from "firebase/firestore";
import { firestore } from "@/lib/firebase";
import { Skeleton } from "@/components/ui/skeleton";

export function TechCapsuleDisplay() {
  const [capsuleData, setCapsuleData] = useState<Capsule | null>(null);

  // Firestore query for testing, where day === 1
  const capsulesQuery = query(
    collection(firestore, "tech_Capsule"),
    where("day", "==", 1)
  );

  const [capsulesSnapshot, loading, error] = useCollection(capsulesQuery);

  useEffect(() => {
    if (capsulesSnapshot && !capsulesSnapshot.empty) {
      // We found a document. Get the first one and set it to state.
      const doc = capsulesSnapshot.docs[0];
      setCapsuleData({ id: doc.id, ...doc.data() } as Capsule);
    } else {
      // No document found for the query.
      setCapsuleData(null);
    }
  }, [capsulesSnapshot]);

  const renderContent = () => {
    if (loading) {
      return (
        <Card className="max-w-2xl w-full mx-auto shadow-lg bg-muted/50 rounded-lg flex flex-col items-center justify-center p-4 h-[134px]">
          <Skeleton className="h-4 w-1/3 mb-4" />
          <Skeleton className="h-4 w-3/4" />
        </Card>
      );
    }

    if (error || !capsuleData) {
      return (
        <Card className="max-w-2xl w-full mx-auto bg-muted/50 rounded-lg flex items-center justify-center h-[134px]">
          <CardContent className="p-4 text-center text-muted-foreground">
            <p>No tech capsule available for today. Check back tomorrow!</p>
          </CardContent>
        </Card>
      );
    }

    // Data is loaded and available
    return (
      <Card
        className={cn(
          "max-w-2xl w-full mx-auto shadow-lg hover:shadow-2xl transition-all duration-300 transform-style-3d",
          "hover:-translate-y-2",
          "rounded-lg text-primary-foreground p-4",
          "capsule-gradient-fire"
        )}
      >
        <CardContent className="p-4 flex flex-col items-center gap-2 text-center">
           <div className="text-sm opacity-80">(For debugging) Day: {capsuleData.day}</div>
          <CardTitle className="text-xl font-bold mb-1">
            {capsuleData.title}
          </CardTitle>
          <p className="text-lg opacity-90">{capsuleData.tip}</p>
        </CardContent>
      </Card>
    );
  };

  return (
    <div className="flex flex-col items-center gap-8 perspective-1000">
      {renderContent()}
      <Button asChild className="btn-gemini rounded-full">
        <Link href="/resources">
          More Resources <ArrowRight className="ml-2 h-4 w-4" />
        </Link>
      </Button>
    </div>
  );
}
