
"use client";

import { Button } from "@/components/ui/button";
import { Rocket } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export function TechCapsuleLink() {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const targetElement = document.getElementById("tech-capsules");
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Link href="#tech-capsules" onClick={handleClick}>
      <Button
        className={cn(
          "h-16 w-16 rounded-full shadow-2xl transition-transform hover:scale-110",
          "capsule-gradient-fire animate-float"
        )}
        aria-label="Go to Tech Capsules"
      >
        <Rocket className="h-8 w-8" />
      </Button>
    </Link>
  );
}
