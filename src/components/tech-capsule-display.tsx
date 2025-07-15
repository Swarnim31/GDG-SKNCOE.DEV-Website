
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
  const [capsule, setCapsule] = useState<Capsule | null>(null);
  const [currentDay, setCurrentDay] = useState<number>(1);

  useEffect(() => {
    setCurrentDay(new Date().getDate());
  }, []);

  const capsulesQuery = query(
    collection(firestore, "tech_Capsule"),
    where("day", "==", currentDay)
  );
  const [capsulesSnapshot, loading, error] = useCollection(capsulesQuery);

  useEffect(() => {
    if (capsulesSnapshot && !capsulesSnapshot.empty) {
      const doc = capsulesSnapshot.docs[0];
      setCapsule({ id: doc.id, ...doc.data() } as Capsule);
    } else {
        setCapsule(null);
    }
  }, [capsulesSnapshot]);
  
  const renderContent = () => {
    if (loading) {
        return (
             <Skeleton className="max-w-2xl w-full mx-auto bg-muted/50 h-[150px] rounded-full" />
        );
    }
    if (error || !capsule) {
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
                <div className="text-4xl">{capsule.emoji}</div>
                <div className="flex-grow">
                    <CardTitle className="text-xl font-bold mb-1">
                    {capsule.title}
                    </CardTitle>
                    <p className="text-lg opacity-90">{capsule.tip}</p>
                </div>
            </CardContent>
        </Card>
    )
  }

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
