"use client";

import { useState, useMemo, useEffect } from "react";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { EventCard } from "@/components/event-card";
import { mockEvents } from "@/lib/data";
import type { Event } from "@/lib/types";
import { Skeleton } from "@/components/ui/skeleton";
import { Search } from "lucide-react";

export default function Home() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterType, setFilterType] = useState("all");
  const [loading, setLoading] = useState(true);
  const [events, setEvents] = useState<Event[]>([]);

  useEffect(() => {
    // Simulate fetching data
    const timer = setTimeout(() => {
      setEvents(mockEvents);
      setLoading(false);
    }, 1000); // 1 second delay
    return () => clearTimeout(timer);
  }, []);

  const filteredEvents = useMemo(() => {
    return events
      .filter((event) => {
        if (filterType === "all") return true;
        return event.type.replace(/\s+/g, "-").toLowerCase() === filterType;
      })
      .filter(
        (event) =>
          event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          event.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
          event.tags.some((tag) =>
            tag.toLowerCase().includes(searchTerm.toLowerCase())
          )
      );
  }, [events, searchTerm, filterType]);

  const gdgEvents = filteredEvents.filter((e) => e.type === "GDG Event");
  const otherEvents = filteredEvents.filter((e) => e.type !== "GDG Event");

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="bg-card p-6 rounded-lg shadow-md mb-8">
        <h1 className="text-3xl font-bold tracking-tight mb-2">
          Community Events & Resources
        </h1>
        <p className="text-muted-foreground mb-6">
          Find and share developer events, sessions, and resources.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="relative flex-grow">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search for events, topics..."
              className="pl-10"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              aria-label="Search events"
            />
          </div>
          <Select value={filterType} onValueChange={setFilterType}>
            <SelectTrigger className="w-full sm:w-[180px]">
              <SelectValue placeholder="Filter by type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Types</SelectItem>
              <SelectItem value="gdg-event">GDG Events</SelectItem>
              <SelectItem value="tech-session">Tech Sessions</SelectItem>
              <SelectItem value="resource-update">Resource Updates</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {loading ? (
        <div className="space-y-8">
          <div>
            <Skeleton className="h-8 w-1/4 mb-4" />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[...Array(3)].map((_, i) => (
                <Skeleton key={i} className="h-[400px] rounded-lg" />
              ))}
            </div>
          </div>
          <div>
            <Skeleton className="h-8 w-1/4 mb-4" />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[...Array(3)].map((_, i) => (
                <Skeleton key={i} className="h-[400px] rounded-lg" />
              ))}
            </div>
          </div>
        </div>
      ) : (
        <div className="space-y-12">
          {gdgEvents.length > 0 && (
            <section>
              <h2 className="text-2xl font-bold mb-6">GDG Event Listings</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {gdgEvents.map((event) => (
                  <EventCard key={event.id} event={event} />
                ))}
              </div>
            </section>
          )}

          {otherEvents.length > 0 && (
            <section>
              <h2 className="text-2xl font-bold mb-6">
                Upcoming Sessions & Updates
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {otherEvents.map((event) => (
                  <EventCard key={event.id} event={event} />
                ))}
              </div>
            </section>
          )}

          {filteredEvents.length === 0 && !loading && (
            <div className="text-center py-16">
              <h3 className="text-xl font-semibold">No events found</h3>
              <p className="text-muted-foreground mt-2">
                Try adjusting your search or filters.
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
