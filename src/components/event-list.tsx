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
import { EventCard } from "@/components/event-card";
import { Search } from "lucide-react";

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
      <div className="flex flex-col md:flex-row gap-4 mb-8">
        <div className="relative flex-grow">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search for events..."
            className="pl-10 w-full"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <Select value={filterType} onValueChange={setFilterType}>
          <SelectTrigger className="w-full md:w-[180px]">
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
      {filteredEvents.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredEvents.map((event) => (
            <EventCard key={event.id} event={event} />
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
