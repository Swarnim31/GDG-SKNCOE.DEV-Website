import Image from "next/image";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Linkedin } from "lucide-react";

// Assuming TeamMember type is defined in a types file, or we can define it here
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
    <Card className="overflow-hidden text-center transform transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl flex flex-col h-full">
      <div className="relative h-64 w-full">
        <Image
          src={member.imageUrl}
          alt={member.name}
          fill
          className="object-cover"
          data-ai-hint={member.imageHint}
        />
      </div>
      <CardContent className="p-6 flex flex-col flex-grow">
        <div className="flex-grow">
          <p className="text-xl font-bold">{member.name}</p>
          <p className="text-primary mb-4">{member.role}</p>
        </div>
        <Button asChild variant="outline" size="icon">
          <Link href={member.linkedinUrl} target="_blank" rel="noopener noreferrer">
            <Linkedin className="h-5 w-5" />
            <span className="sr-only">LinkedIn Profile</span>
          </Link>
        </Button>
      </CardContent>
    </Card>
  );
}
