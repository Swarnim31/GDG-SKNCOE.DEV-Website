import { TeamCard } from "@/components/team-card";
import { mockTeam, mockGalleryImages } from "@/lib/data";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";

export default function TeamPage() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-black tracking-tight mb-4">Meet the Team</h1>
        <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
          The driving force behind GDG SknCoe.DEV, a passionate group of creators, thinkers, and innovators.
        </p>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-x-6 gap-y-12">
        {mockTeam.map((member) => (
          <TeamCard key={member.id} member={member} />
        ))}
      </div>

      <Separator className="my-20" />

      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold tracking-tight">Team Moments Gallery 📸</h2>
        <p className="mt-4 text-lg text-muted-foreground">
          A glimpse into our community events and activities.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {mockGalleryImages.map((image) => (
          <div key={image.id} className="group overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 relative aspect-w-1 aspect-h-1">
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              data-ai-hint={image.hint}
            />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300"></div>
            {image.caption && (
               <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-sm text-white/90 font-semibold text-center drop-shadow-md">{image.caption}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
