
"use client";

import { useCollection } from "react-firebase-hooks/firestore";
import { collection, query, where, limit } from "firebase/firestore";
import { firestore } from "@/lib/firebase";
import { Skeleton } from "@/components/ui/skeleton";
import type { Capsule } from "@/lib/types";
import { Lightbulb } from "lucide-react";
import React from "react";

export function TechCapsuleDisplay() {
  const [currentDay, setCurrentDay] = React.useState<number>(1);
  const [capsuleData, setCapsuleData] = React.useState<Capsule | null>(null);

  React.useEffect(() => {
    // This will run only on the client, after hydration
    const date = new Date();
    setCurrentDay(date.getDate());
  }, []);

  const capsulesQuery = React.useMemo(() => {
    if (!currentDay) return null;
    return query(
      collection(firestore, "tech_Capsule"),
      where("day", "==", currentDay),
      limit(1)
    );
  }, [currentDay]);

  const [capsulesSnapshot, loading, error] = useCollection(capsulesQuery);

  React.useEffect(() => {
    if (capsulesSnapshot && !capsulesSnapshot.empty) {
      const doc = capsulesSnapshot.docs[0];
      setCapsuleData({ id: doc.id, ...doc.data() } as Capsule);
    } else {
      setCapsuleData(null);
    }
  }, [capsulesSnapshot]);
  
  const renderContent = () => {
    if (loading || !currentDay) {
      return (
         <div className="w-full max-w-2xl mx-auto p-8">
            <Skeleton className="h-8 w-3/4 mb-4" />
            <Skeleton className="h-4 w-1/4 mb-6" />
            <Skeleton className="h-6 w-full" />
        </div>
      );
    }

    if (error) {
       return <p className="text-destructive text-center">Error: Could not load tech capsule.</p>;
    }
    
    if (capsuleData) {
       return (
        <div className="w-full max-w-2xl mx-auto rounded-full p-8 shadow-lg transition-shadow hover:shadow-xl bg-gradient-to-r from-yellow-100 via-blue-100 to-green-100 dark:from-yellow-900/30 dark:via-blue-900/30 dark:to-green-900/30">
            <div className="flex flex-col text-left">
                <div className="flex items-center gap-4 mb-2">
                    <Lightbulb className="h-8 w-8 text-yellow-500 flex-shrink-0" />
                    <h3 className="text-2xl font-bold text-foreground tracking-tight">{capsuleData.title}</h3>
                </div>
                <p className="text-sm text-muted-foreground ml-12 mb-4">Day: {capsuleData.day}</p>
                <p className="text-lg text-foreground/80 ml-12">{capsuleData.tip}</p>
            </div>
        </div>
      );
    }

    return (
       <p className="text-muted-foreground text-center py-8">
        No tech capsule available for today. Check back tomorrow!
      </p>
    );
  };

  return <div className="w-full max-w-2xl mx-auto">{renderContent()}</div>;
}
