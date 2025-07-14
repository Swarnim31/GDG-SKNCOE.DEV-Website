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

type EventCardProps = {
  event: Event;
};

export function EventCard({ event }: EventCardProps) {
  return (
    <Card className="flex flex-col overflow-hidden h-full transform hover:-translate-y-1 transition-transform duration-300 ease-in-out shadow-lg hover:shadow-2xl">
      <CardHeader className="p-0">
        <div className="relative h-48 w-full">
          <Image
            src={event.imageUrl}
            alt={event.title}
            fill
            className="object-cover"
            data-ai-hint={event.imageHint}
          />
          <Badge className="absolute top-2 right-2" variant={event.type === 'GDG Event' ? 'default' : 'secondary'}>{event.type}</Badge>
        </div>
      </CardHeader>
      <CardContent className="p-4 flex-grow">
        <CardTitle className="text-xl font-bold mb-2 line-clamp-2">{event.title}</CardTitle>
        <div className="w-full space-y-2 text-sm text-muted-foreground mb-4">
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
        <CardDescription className="text-muted-foreground line-clamp-3">
          {event.description}
        </CardDescription>
      </CardContent>
      <CardFooter className="p-4 pt-0 flex-col items-start gap-4">
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
