
"use client";

import { useState } from 'react';
import Image from "next/image";
import type { Event } from "@/lib/types";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, ArrowRight, Users, ChevronDown, ChevronUp } from "lucide-react";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { Card, CardContent } from "@/components/ui/card";

type EventListItemProps = {
  event: Event;
  index: number;
};

const gradientClasses = [
    "capsule-gradient-blue",
    "capsule-gradient-red",
    "capsule-gradient-green",
    "capsule-gradient-yellow",
    "capsule-gradient-purple",
];

export function EventListItem({ event, index }: EventListItemProps) {
    const [isOpen, setIsOpen] = useState(false);
    const gradientClass = gradientClasses[index % gradientClasses.length];

  return (
    <Collapsible open={isOpen} onOpenChange={setIsOpen}>
        <CollapsibleTrigger asChild>
            <div className={cn("flex items-center justify-between w-full p-4 rounded-full text-lg font-bold cursor-pointer transition-all duration-300 hover:shadow-lg hover:-translate-y-1 text-white", gradientClass)}>
                <span>{event.title}</span>
                {isOpen ? <ChevronUp className="h-6 w-6" /> : <ChevronDown className="h-6 w-6" />}
            </div>
        </CollapsibleTrigger>
        <CollapsibleContent>
            <Card className="mt-[-2rem] pt-[3rem] pb-4 z-[-1] relative shadow-lg rounded-3xl border-t-0">
                <CardContent>
                    <div className="grid md:grid-cols-3 gap-6">
                        <div className="md:col-span-1 relative h-48 w-full rounded-lg overflow-hidden">
                             <Image
                                src={event.imageUrl}
                                alt={event.title}
                                fill
                                className="object-cover"
                                data-ai-hint={event.imageHint}
                            />
                        </div>
                        <div className="md:col-span-2">
                            <Badge className="mb-3" variant={event.type === 'GDG Event' ? 'default' : 'secondary'}>{event.type}</Badge>
                            <p className="text-muted-foreground mb-4">{event.description}</p>
                            <div className="space-y-3 text-sm text-foreground mb-4">
                                <div className="flex items-center gap-2">
                                    <Calendar className="h-4 w-4 text-primary" />
                                    <span>{format(new Date(event.date), "PPP")}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <MapPin className="h-4 w-4 text-primary" />
                                    <span>{event.location}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Users className="h-4 w-4 text-primary" />
                                    <span>{event.organizer}</span>
                                </div>
                            </div>
                            <div className="flex flex-wrap gap-2 mb-4">
                                {event.tags.map((tag) => (
                                    <Badge key={tag} variant="outline">
                                    {tag}
                                    </Badge>
                                ))}
                            </div>
                            <a href="https://gdg.community.dev/gdg-on-campus-shrimati-kashibai-navale-college-of-engineering-pune-india/" target="_blank" rel="noopener noreferrer">
                                <Button className="w-full sm:w-auto btn-google rounded-full">
                                    Checkout More <ArrowRight className="ml-2 h-4 w-4" />
                                </Button>
                            </a>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </CollapsibleContent>
    </Collapsible>
  );
}
