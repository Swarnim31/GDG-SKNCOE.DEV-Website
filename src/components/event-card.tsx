import Image from "next/image";
import type { Event } from "@/lib/types";
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
import { Calendar, MapPin, ArrowRight, Users } from "lucide-react";
import { format } from "date-fns";
import { cn } from "@/lib/utils";

type EventCardProps = {
  event: Event;
};

export function EventCard({ event }: EventCardProps) {
    const cardColor =
    event.type === "GDG Event"
      ? "bg-blue-100/50 dark:bg-blue-900/20"
      : "bg-green-100/50 dark:bg-green-900/20";
  return (
    <Card className={cn("flex flex-col h-full transition-transform duration-300 ease-in-out hover:-translate-y-1 hover:shadow-2xl", cardColor)}>
      <CardHeader className="p-0">
        <div className="relative h-48 w-full">
          <Image
            src={event.imageUrl}
            alt={event.title}
            fill
            className="object-cover"
            data-ai-hint={event.imageHint}
          />
          <Badge className="absolute top-3 right-3" variant={event.type === 'GDG Event' ? 'default' : 'secondary'}>{event.type}</Badge>
        </div>
      </CardHeader>
      <CardContent className="p-6 flex-grow">
        <CardTitle className="text-xl mb-2 line-clamp-2">{event.title}</CardTitle>
        <div className="space-y-2 text-sm text-muted-foreground mb-4">
          <div className="flex items-center gap-2">
            <Calendar className="h-4 w-4" />
            <span>{format(new Date(event.date), "PPP")}</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="h-4 w-4" />
            <span>{event.location}</span>
          </div>
           <div className="flex items-center gap-2">
            <Users className="h-4 w-4" />
            <span>{event.organizer}</span>
          </div>
        </div>
        <CardDescription className="text-foreground/80 line-clamp-3">
          {event.description}
        </CardDescription>
      </CardContent>
      <CardFooter className="p-6 pt-0 flex flex-col items-start gap-4 mt-auto">
        <div className="flex flex-wrap gap-2">
          {event.tags.map((tag) => (
            <Badge key={tag} variant="outline">
              {tag}
            </Badge>
          ))}
        </div>
        <Button className="w-full mt-2">
          Register Now <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </CardFooter>
    </Card>
  );
}
