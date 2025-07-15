
"use client";

import { useCollection } from "react-firebase-hooks/firestore";
import { collection, query, where, limit } from "firebase/firestore";
import { firestore } from "@/lib/firebase";
import { Skeleton } from "@/components/ui/skeleton";
import type { Capsule } from "@/lib/types";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Lightbulb } from "lucide-react";
import React from "react";

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
         <Card className="w-full max-w-2xl mx-auto">
          <CardHeader>
            <Skeleton className="h-6 w-1/2" />
          </CardHeader>
          <CardContent>
             <Skeleton className="h-4 w-full mb-2" />
             <Skeleton className="h-4 w-3/4" />
          </CardContent>
        </Card>
      );
    }

    if (error) {
       return <p className="text-destructive text-center">Error: Could not load tech capsule.</p>;
    }
    
    if (capsuleData) {
       return (
        <Card className="w-full max-w-2xl mx-auto animated-gradient-border p-1 shadow-lg">
           <Card className="w-full h-full bg-background/80 backdrop-blur-sm rounded-xl">
             <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Lightbulb className="h-6 w-6 text-yellow-500" />
                  {capsuleData.title}
                </CardTitle>
                <CardDescription>Day: {capsuleData.day}</CardDescription>
             </CardHeader>
             <CardContent>
                <p className="text-lg text-foreground/80">{capsuleData.tip}</p>
             </CardContent>
           </Card>
        </Card>
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
