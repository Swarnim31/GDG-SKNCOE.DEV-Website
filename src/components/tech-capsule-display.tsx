
"use client";

import { useCollection } from "react-firebase-hooks/firestore";
import { collection } from "firebase/firestore";
import { firestore } from "@/lib/firebase";
import { Skeleton } from "@/components/ui/skeleton";
import type { Capsule } from "@/lib/types";

export function TechCapsuleDisplay() {
  const [capsulesSnapshot, loading, error] = useCollection(
    collection(firestore, "tech_Capsule")
  );

  return (
    <div className="w-full max-w-2xl mx-auto p-4 border-2 border-dashed border-destructive rounded-lg">
      <h3 className="font-bold text-lg mb-2 text-center">
        Testing Firestore…
      </h3>

      {loading && (
        <div className="space-y-2">
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-3/4" />
        </div>
      )}

      {error && (
        <p className="text-destructive">Error: {error.message}</p>
      )}

      {capsulesSnapshot && (
        <div className="space-y-4">
          {capsulesSnapshot.docs.length === 0 ? (
            <p className="text-muted-foreground text-center">The "tech_Capsule" collection is empty.</p>
          ) : (
            capsulesSnapshot.docs.map(doc => {
              const data = doc.data() as Omit<Capsule, 'id'>;
              return (
                <div key={doc.id} className="p-2 border rounded-md bg-muted/50">
                  <p><strong>Title:</strong> {data.title}</p>
                  <p><strong>Tip:</strong> {data.tip}</p>
                  <p><strong>Day:</strong> {data.day} (Type: {typeof data.day})</p>
                </div>
              );
            })
          )}
        </div>
      )}
    </div>
  );
}
