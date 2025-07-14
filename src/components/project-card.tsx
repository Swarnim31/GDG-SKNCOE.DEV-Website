import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/lib/types";
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
import { ArrowRight, User } from "lucide-react";

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card className="flex flex-col h-full transition-transform duration-300 ease-in-out hover:-translate-y-2 hover:shadow-2xl">
      <CardHeader className="p-0">
        <div className="relative h-56 w-full">
          <Image
            src={project.imageUrl}
            alt={project.title}
            fill
            className="object-cover"
            data-ai-hint={project.imageHint}
          />
           <Badge className="absolute top-3 right-3" variant="secondary">{project.category}</Badge>
        </div>
      </CardHeader>
      <CardContent className="p-6 flex-grow">
        <CardTitle className="text-xl mb-2 line-clamp-1">{project.title}</CardTitle>
        <CardDescription className="text-foreground/80 line-clamp-2 h-10 mb-4">
          {project.description}
        </CardDescription>

         <div className="mb-4">
            <h4 className="text-sm font-semibold mb-2 text-foreground/80">Contributors</h4>
            <div className="flex flex-col space-y-2 text-sm text-muted-foreground">
                {project.contributors.map((c, i) => (
                    <div key={i} className="flex items-center gap-2">
                        <User className="h-4 w-4" />
                        <span>{c.name} - <span className="text-primary/80">{c.role}</span></span>
                    </div>
                ))}
            </div>
        </div>
      </CardContent>
      <CardFooter className="p-6 pt-0 flex flex-col items-start gap-4 mt-auto">
         <div className="flex flex-wrap gap-2 mb-2">
          {project.tags.map((tag) => (
            <Badge key={tag} variant="outline">
              {tag}
            </Badge>
          ))}
        </div>
        <Button asChild className="w-full mt-auto">
          <Link href={project.link} target="_blank" rel="noopener noreferrer">
            View More <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
