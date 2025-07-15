
"use client";

import { useCollection } from "react-firebase-hooks/firestore";
import { collection, query, where, limit } from "firebase/firestore";
import { firestore } from "@/lib/firebase";
import { Skeleton } from "@/components/ui/skeleton";
import type { Capsule } from "@/lib/types";
import { LayoutGrid } from "lucide-react";
import React from "react";
import { cn } from "@/lib/utils";

export function TechCapsuleDisplay() {
  const [currentDay, setCurrentDay] = React.useState<number>(1);
  const [capsuleData, setCapsuleData] = React.useState<Capsule | null>(null);

  const capsulesQuery = React.useMemo(() => {
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
    if (loading) {
      return (
        <div className="w-full max-w-2xl mx-auto">
          <Skeleton className="h-24 w-full rounded-full" />
        </div>
      );
    }

    if (error) {
       return <p className="text-destructive text-center">Error: Could not load tech capsule.</p>;
    }
    
    if (capsuleData) {
       return (
        <div className={cn(
            "w-full max-w-3xl mx-auto rounded-full p-6 shadow-lg transition-all hover:shadow-xl hover:-translate-y-1",
            "flex items-center gap-6",
            "capsule-gradient-fire text-white"
        )}>
            <div className="flex-shrink-0">
                <LayoutGrid className="h-10 w-10 text-white/80" />
            </div>
            <div className="flex flex-col text-left">
                <h3 className="text-2xl font-bold tracking-tight">{capsuleData.title}</h3>
                <p className="text-lg text-white/90">{capsuleData.tip}</p>
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

  return <div className="w-full max-w-3xl mx-auto">{renderContent()}</div>;
}
