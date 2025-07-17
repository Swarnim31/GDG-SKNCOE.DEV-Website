
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
import { ArrowRight, User, Github } from "lucide-react";
import { cn } from "@/lib/utils";

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  const categoryColors: { [key: string]: string } = {
    Web: "border-blue-500/50",
    Mobile: "border-green-500/50",
    AI: "border-red-500/50",
    Cloud: "border-purple-500/50",
  };
  const cardColor = categoryColors[project.category] || "border-border";

  return (
    <Card className={cn("flex flex-col h-full transition-transform duration-300 ease-in-out hover:-translate-y-2 hover:shadow-2xl border-t-4", cardColor)}>
      <CardHeader>
         <Badge className="w-fit" variant="secondary">{project.category}</Badge>
        <CardTitle className="text-xl pt-2 line-clamp-1">{project.title}</CardTitle>
      </CardHeader>
      <CardContent className="flex-grow">
        <CardDescription className="text-foreground/80 line-clamp-2 h-10 mb-4">
          {project.description}
        </CardDescription>

         <div className="mb-4">
            <h4 className="text-sm font-semibold mb-2 text-muted-foreground">Contributors</h4>
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
          {project.techStack.map((tag) => (
            <Badge key={tag} variant="outline">
              {tag}
            </Badge>
          ))}
        </div>
        <Button asChild className="w-full mt-auto btn-gemini rounded-full">
          <Link href={project.githubURL} target="_blank" rel="noopener noreferrer">
            <Github className="mr-2 h-4 w-4" />
            View on GitHub
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
