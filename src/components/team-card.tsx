import Image from "next/image";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Linkedin } from "lucide-react";
import { cn } from "@/lib/utils";

type TeamMember = {
  id: string;
  name: string;
  role: string;
  imageUrl: string;
  imageHint: string;
  linkedinUrl: string;
};

type TeamCardProps = {
  member: TeamMember;
  index: number;
};

export function TeamCard({ member, index }: TeamCardProps) {
  return (
    <div
      className={cn(
        "team-card-container relative p-1 rounded-2xl overflow-hidden group animate-fade-in-up",
        "bg-gradient-to-br from-primary/20 via-transparent to-secondary/20"
      )}
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <Card className="overflow-hidden text-center h-full rounded-xl bg-background/80 backdrop-blur-sm">
        <div className="relative h-64 w-full">
          <Image
            src={member.imageUrl}
            alt={member.name}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
            data-ai-hint={member.imageHint}
          />
        </div>
        <CardContent className="p-6 flex flex-col flex-grow items-center">
          <div className="flex-grow">
            <p className="text-xl font-bold">{member.name}</p>
            <p className="text-primary mb-4">{member.role}</p>
          </div>
          <Button asChild variant="outline" size="icon" className="mt-4 rounded-full border-primary/50 hover:bg-primary/10">
            <Link href={member.linkedinUrl} target="_blank" rel="noopener noreferrer">
              <Linkedin className="h-5 w-5 text-primary" />
              <span className="sr-only">LinkedIn Profile</span>
            </Link>
          </Button>
        </CardContent>
      </Card>
      <div className="absolute inset-0 rounded-2xl border border-transparent group-hover:border-primary/50 transition-all duration-300 -z-10 group-hover:shadow-[0_0_20px_theme(colors.primary/0.3)]"></div>
    </div>
  );
}
