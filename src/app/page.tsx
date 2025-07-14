import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { EventCard } from "@/components/event-card";
import { mockEvents, mockTeam } from "@/lib/data";
import {
  Code,
  BrainCircuit,
  Smartphone,
  Palette,
  Cloud,
  ArrowRight,
  Sparkles,
  MessageCircle,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { TechCapsuleDisplay } from "@/components/tech-capsule-display";
import { DevLinkBot } from "@/components/devlink-bot";

export default function Home() {
  const domains = [
    {
      icon: <Code className="h-8 w-8 text-primary" />,
      title: "Web Development",
      description: "Explore the latest in web technologies and frameworks.",
    },
    {
      icon: <BrainCircuit className="h-8 w-8 text-primary" />,
      title: "Artificial Intelligence",
      description: "Dive into machine learning, AI models, and GenAI.",
    },
    {
      icon: <Smartphone className="h-8 w-8 text-primary" />,
      title: "Android",
      description: "Build innovative applications for the Android ecosystem.",
    },
    {
      icon: <Palette className="h-8 w-8 text-primary" />,
      title: "UI/UX Design",
      description: "Craft beautiful and intuitive user experiences.",
    },
    {
      icon: <Cloud className="h-8 w-8 text-primary" />,
      title: "Cloud Computing",
      description: "Leverage the power of the cloud for your applications.",
    },
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4">
            Welcome to SknCoe-Dev– Your Developer Ecosystem
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Where ideas, code, and collaboration come together.
          </p>
          <Button size="lg" asChild>
            <Link href="/events">
              Explore Events <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Upcoming Events Section */}
      <section id="events" className="py-16 bg-card/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">
            Upcoming Events
          </h2>
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {mockEvents.slice(0, 3).map((event) => (
                <CarouselItem
                  key={event.id}
                  className="md:basis-1/2 lg:basis-1/3"
                >
                  <div className="p-1">
                    <EventCard event={event} />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden sm:flex" />
            <CarouselNext className="hidden sm:flex" />
          </Carousel>
        </div>
      </section>

      {/* Meet the Team Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-12">Meet the Team</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {mockTeam.map((member) => (
              <Card
                key={member.id}
                className="overflow-hidden transform transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl"
              >
                <CardContent className="p-0">
                  <div className="relative h-64 w-full">
                    <Image
                      src={member.imageUrl}
                      alt={member.name}
                      fill
                      className="object-cover"
                      data-ai-hint={member.imageHint}
                    />
                  </div>
                  <div className="p-6 text-center">
                    <p className="text-xl font-bold">{member.name}</p>
                    <p className="text-primary">{member.role}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <Button variant="outline" asChild>
            <Link href="/team">
              View All Team Members <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Explore Domains Section */}
      <section className="py-16 bg-card/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">
            Explore Our Domains
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {domains.map((domain, index) => (
              <Card
                key={index}
                className="p-6 flex flex-col items-center text-center transform transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="p-3 bg-primary/10 rounded-full mb-4">
                  {domain.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{domain.title}</h3>
                <p className="text-muted-foreground">{domain.description}</p>
              </Card>
            ))}
             <Card className="p-6 flex flex-col items-center text-center transform transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl bg-primary/10 border-primary">
                <div className="p-3 bg-primary/20 rounded-full mb-4">
                    <Sparkles className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">And more...</h3>
                <p className="text-muted-foreground">We are constantly exploring new frontiers in technology.</p>
              </Card>
          </div>
        </div>
      </section>

      {/* Tech Capsules Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-4">
            <Sparkles className="inline-block h-8 w-8 text-amber-400 mr-2" />
            Tech Capsules
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-xl mx-auto">
            Get a daily dose of bite-sized developer knowledge. A new tip appears every day!
          </p>
          <TechCapsuleDisplay />
        </div>
      </section>
      
      {/* DevLinkBot floating component */}
      <DevLinkBot />
    </div>
  );
}
