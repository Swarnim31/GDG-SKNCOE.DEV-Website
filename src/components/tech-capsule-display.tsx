
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
  const [currentDay, setCurrentDay] = useState<number>(1);
  const [capsuleData, setCapsuleData] = useState<Capsule | null>(null);

  // 3. Fetch a document from the Firestore collection `tech_Capsule` where the field `day` equals `currentDay`.
  const capsulesQuery = query(
    collection(firestore, "tech_Capsule"),
    where("day", "==", currentDay)
  );
  const [capsulesSnapshot, loading, error] = useCollection(capsulesQuery);

  useEffect(() => {
    // 4. Store the result in a variable named `capsuleData`.
    if (capsulesSnapshot && !capsulesSnapshot.empty) {
      const doc = capsulesSnapshot.docs[0];
      setCapsuleData({ id: doc.id, ...doc.data() } as Capsule);
    } else {
      setCapsuleData(null);
    }
  }, [capsulesSnapshot]);
  
  const renderContent = () => {
    if (loading) {
      return (
        <Skeleton className="max-w-2xl w-full mx-auto bg-muted/50 h-[150px] rounded-full" />
      );
    }
    // 7. Optionally, show fallback text like "No tech capsule available" if no data is found.
    if (error || !capsuleData) {
      return (
        <Card className="max-w-2xl w-full mx-auto bg-muted/50 h-[150px] rounded-full flex items-center justify-center">
          <CardContent className="p-4 text-center text-muted-foreground">
            <p>No tech capsule available for today. Check back tomorrow!</p>
          </CardContent>
        </Card>
      );
    }
    
    return (
      <Card
        className={cn(
          "max-w-2xl w-full mx-auto shadow-lg hover:shadow-2xl transition-all duration-300 transform-style-3d",
          "hover:-translate-y-2 hover:rotate-x-6 hover:rotate-y-[-4deg]",
          "rounded-full text-primary-foreground p-4",
          "capsule-gradient-fire"
        )}
      >
        <CardContent className="p-4 flex items-center gap-6">
          <div className="text-4xl">{capsuleData.emoji}</div>
          <div className="flex-grow">
            {/* 5. Bind the Heading Text to `capsuleData.title`. */}
            <CardTitle className="text-xl font-bold mb-1">
              {capsuleData.title}
            </CardTitle>
            {/* 6. Bind the Paragraph Text to `capsuleData.tip`. */}
            <p className="text-lg opacity-90">{capsuleData.tip}</p>
          </div>
        </CardContent>
      </Card>
    );
  };

  return (
    <div className="flex flex-col items-center gap-8 perspective-1000">
      {/* 1. A Text element for the current day */}
      <div className="text-center text-muted-foreground">
        Current Day: {currentDay}
      </div>
      {renderContent()}
      <Button asChild className="btn-gemini rounded-full">
        <Link href="/resources">
          More Resources <ArrowRight className="ml-2 h-4 w-4" />
        </Link>
      </Button>
    </div>
  );
}
