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

type ResourceCardProps = {
  resource: Resource;
};

export function ResourceCard({ resource }: ResourceCardProps) {
  return (
    <Card className="flex flex-col overflow-hidden h-full transform hover:-translate-y-1 transition-transform duration-300 ease-in-out shadow-lg hover:shadow-2xl">
      <CardHeader className="p-0">
        <div className="relative h-48 w-full">
          <Image
            src={resource.imageUrl}
            alt={resource.name}
            fill
            className="object-cover"
            data-ai-hint={resource.imageHint}
          />
           <Badge className="absolute top-2 right-2" variant="secondary">{resource.tag}</Badge>
        </div>
      </CardHeader>
      <CardContent className="p-4 flex-grow">
        <CardTitle className="text-xl font-bold mb-2 line-clamp-2">
          {resource.name}
        </CardTitle>
        <CardDescription className="text-muted-foreground line-clamp-3">
          {resource.description}
        </CardDescription>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Button asChild className="w-full mt-2 bg-gradient-to-r from-primary/90 to-secondary/90 text-primary-foreground hover:shadow-lg hover:from-primary hover:to-secondary">
          <Link href={resource.link} target="_blank" rel="noopener noreferrer">
            Try Now <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
