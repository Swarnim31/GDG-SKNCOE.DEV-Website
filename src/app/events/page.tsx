import { EventList } from "@/components/event-list";
import { mockEvents } from "@/lib/data";

export default function EventsPage() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tight">Community Events</h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Discover workshops, tech talks, and community gatherings.
        </p>
      </div>
      <EventList events={mockEvents} />
    </div>
  );
}
