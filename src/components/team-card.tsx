import Image from "next/image";
import Link from "next/link";
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
};

export function TeamCard({ member }: TeamCardProps) {
  return (
    <div className="flex flex-col items-center text-center gap-4 group">
       <div className="p-1 rounded-full animated-gradient-border shadow-lg transition-transform duration-300 group-hover:scale-105">
          <div className="relative h-32 w-32">
              <Image
                src={member.imageUrl}
                alt={member.name}
                fill
                className="object-cover rounded-full"
                data-ai-hint={member.imageHint}
              />
          </div>
       </div>
       <div className="flex flex-col items-center">
        <p className="text-base font-bold">{member.name}</p>
        <p className="text-sm text-primary mb-1">{member.role}</p>
        <Button asChild variant="ghost" size="icon" className="h-7 w-7 rounded-full text-muted-foreground hover:text-primary">
          <Link href={member.linkedinUrl} target="_blank" rel="noopener noreferrer">
            <Linkedin className="h-4 w-4" />
            <span className="sr-only">LinkedIn Profile</span>
          </Link>
        </Button>
      </div>
    </div>
  );
}
