import { TeamCard } from "@/components/team-card";
import { mockTeam, mockGalleryImages } from "@/lib/data";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";

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

      <Separator className="my-16" />

      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold tracking-tight">Team Moments Gallery</h2>
        <p className="mt-4 text-lg text-muted-foreground">
          A glimpse into our community events and activities.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {mockGalleryImages.map((image) => (
          <div key={image.id} className="group overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
            <div className="relative aspect-w-16 aspect-h-9">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transform transition-transform duration-300 group-hover:scale-105"
                data-ai-hint={image.hint}
              />
            </div>
            {image.caption && (
              <div className="p-3 bg-card">
                <p className="text-sm text-muted-foreground italic text-center">{image.caption}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
