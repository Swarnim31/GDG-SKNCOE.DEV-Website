
"use client";

import { useState, useMemo } from "react";
import type { Event } from "@/lib/types";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { EventListItem } from "@/components/event-list-item";
import { ListFilter, Search } from "lucide-react";

type EventListProps = {
  events: Event[];
};

export function EventList({ events }: EventListProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterType, setFilterType] = useState("all");

  const eventTypes = useMemo(() => {
    const types = new Set(events.map((event) => event.type));
    return ["all", ...Array.from(types)];
  }, [events]);

  const filteredEvents = useMemo(() => {
    return events
      .filter((event) => {
        if (filterType === "all") return true;
        return event.type === filterType;
      })
      .filter((event) => {
        return event.title.toLowerCase().includes(searchTerm.toLowerCase());
      });
  }, [events, searchTerm, filterType]);

  return (
    <div>
      <div className="flex justify-center mb-12 sticky top-20 z-40">
        <div className="p-1 rounded-full animated-gradient-border shadow-lg">
          <div className="flex items-center gap-2 bg-background/80 backdrop-blur-sm p-2 rounded-full">
            <div className="relative flex-grow sm:min-w-[300px]">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search for events..."
                className="pl-10 w-full h-11 text-base bg-transparent border-0 focus-visible:ring-0 focus-visible:ring-offset-0"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="w-px h-6 bg-border mx-2" />
            <Select value={filterType} onValueChange={setFilterType}>
              <SelectTrigger className="w-auto h-11 text-base bg-transparent border-0 gap-2 focus:ring-0 focus:ring-offset-0">
                 <ListFilter className="h-5 w-5 text-muted-foreground" />
                <SelectValue placeholder="Filter by type" />
              </SelectTrigger>
              <SelectContent>
                {eventTypes.map((type) => (
                  <SelectItem key={type} value={type} className="capitalize">
                    {type === 'all' ? 'All Types' : type}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>

      {filteredEvents.length > 0 ? (
        <div className="space-y-4 max-w-4xl mx-auto">
          {filteredEvents.map((event, index) => (
            <EventListItem key={event.id} event={event} index={index} />
          ))}
        </div>
      ) : (
        <div className="text-center py-16">
            <p className="text-lg text-muted-foreground">No events found. Try a different search or filter.</p>
        </div>
      )}
    </div>
  );
}
