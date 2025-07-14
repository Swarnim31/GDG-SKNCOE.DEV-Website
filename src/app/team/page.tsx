import { TeamCard } from "@/components/team-card";
import { mockTeam } from "@/lib/data";
import { Linkedin } from "lucide-react";

export default function TeamPage() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tight">Our Team</h1>
        <p className="mt-4 text-lg text-muted-foreground">
          The driving force behind SknCoe-Dev.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {mockTeam.map((member) => (
          <TeamCard key={member.id} member={member} />
        ))}
      </div>
    </div>
  );
}
