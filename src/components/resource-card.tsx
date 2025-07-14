import Image from "next/image";
import Link from "next/link";
import type { Resource } from "@/lib/types";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

type ResourceCardProps = {
  resource: Resource;
};

export function ResourceCard({ resource }: ResourceCardProps) {
    const tagColors: { [key: string]: string } = {
    Web: "bg-blue-100/50 dark:bg-blue-900/20",
    Mobile: "bg-green-100/50 dark:bg-green-900/20",
    AI: "bg-red-100/50 dark:bg-red-900/20",
    "UI/UX": "bg-yellow-100/50 dark:bg-yellow-900/20",
  };
  const cardColor = tagColors[resource.tag] || "bg-card";

  return (
    <Card className={cn("flex flex-col h-full transition-transform duration-300 ease-in-out hover:-translate-y-1 hover:shadow-2xl", cardColor)}>
      <CardHeader className="p-0">
        <div className="relative h-48 w-full">
          <Image
            src={resource.imageUrl}
            alt={resource.name}
            fill
            className="object-cover"
            data-ai-hint={resource.imageHint}
          />
           <Badge className="absolute top-3 right-3" variant="secondary">{resource.tag}</Badge>
        </div>
      </CardHeader>
      <CardContent className="p-6 flex-grow">
        <CardTitle className="text-xl mb-2 line-clamp-2">
          {resource.name}
        </CardTitle>
        <CardDescription className="text-foreground/80 line-clamp-3">
          {resource.description}
        </CardDescription>
      </CardContent>
      <CardFooter className="p-6 pt-0 mt-auto">
        <Button asChild className="w-full mt-2">
          <Link href={resource.link} target="_blank" rel="noopener noreferrer">
            Try Now <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
