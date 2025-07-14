import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { EventCard } from "@/components/event-card";
import { mockEvents, mockTeam } from "@/lib/data";
import {
  Code,
  BrainCircuit,
  Palette,
  Cloud,
  ArrowRight,
  Sparkles,
  Handshake,
  Shield,
  CalendarCheck,
  Feather,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { TechCapsuleDisplay } from "@/components/tech-capsule-display";
import { TechCapsuleLink } from "@/components/tech-capsule-link";
import { AskBot } from "@/components/ask-bot";

export default function Home() {
  const domains = [
    {
      icon: <Code className="h-8 w-8 text-blue-600" />,
      title: "Web Development",
      description: "Explore the latest in web technologies and frameworks.",
      color: "bg-blue-100/50 dark:bg-blue-900/20",
    },
    {
      icon: <BrainCircuit className="h-8 w-8 text-red-600" />,
      title: "Artificial Intelligence",
      description: "Dive into machine learning, AI models, and GenAI.",
      color: "bg-red-100/50 dark:bg-red-900/20",
    },
    {
      icon: <Palette className="h-8 w-8 text-yellow-600" />,
      title: "UI/UX Design",
      description: "Craft beautiful and intuitive user experiences.",
      color: "bg-yellow-100/50 dark:bg-yellow-900/20",
    },
    {
      icon: <Cloud className="h-8 w-8 text-green-600" />,
      title: "Cloud Computing",
      description: "Leverage the power of the cloud for your applications.",
      color: "bg-green-100/50 dark:bg-green-900/20",
    },
     {
      icon: <Feather className="h-8 w-8 text-pink-600" />,
      title: "Women in Tech",
      description: "Empowering and supporting women in the technology field.",
      color: "bg-pink-100/50 dark:bg-pink-900/20",
    },
    {
      icon: <Handshake className="h-8 w-8 text-purple-600" />,
      title: "Sponsorship",
      description: "Forge partnerships to support our community's growth.",
      color: "bg-purple-100/50 dark:bg-purple-900/20",
    },
    {
      icon: <CalendarCheck className="h-8 w-8 text-indigo-600" />,
      title: "Event Management",
      description: "Organize and execute memorable tech events and workshops.",
      color: "bg-indigo-100/50 dark:bg-indigo-900/20",
    },
    {
      icon: <Shield className="h-8 w-8 text-gray-600" />,
      title: "Cyber Security",
      description: "Exploring the world of digital protection and ethical hacking.",
      color: "bg-gray-200/60 dark:bg-gray-800/20",
    },
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter mb-4">
            Welcome to SknCoe-Dev– Your Developer Ecosystem
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Where ideas, code, and collaboration come together.
          </p>
          <Button size="lg" asChild className="btn-google font-bold text-lg">
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
            {mockTeam.map((member, index) => (
              <Card
                key={member.id}
                className="overflow-hidden transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl"
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {domains.map((domain, index) => (
              <Card
                key={index}
                className={`p-6 flex flex-col items-center text-center transition-all duration-300 hover:-translate-y-2 hover:shadow-xl border-t-4 border-transparent ${domain.color}`}
              >
                <div className={`p-3 rounded-full mb-4 ${domain.color}`}>
                  {domain.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{domain.title}</h3>
                <p className="text-muted-foreground flex-grow">{domain.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Capsules Section */}
      <section id="tech-capsules" className="py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-center mb-4 flex items-center justify-center gap-2">
              <Sparkles className="h-8 w-8 text-yellow-500" />
              Tech Capsules
            </h2>
            <p className="text-center text-muted-foreground max-w-xl mx-auto">
              Get a daily dose of bite-sized developer knowledge. A new tip appears every day!
            </p>
          </div>
          <TechCapsuleDisplay />
        </div>
      </section>
      
      {/* Floating Buttons */}
      <div className="fixed bottom-6 right-6 z-[100] flex flex-col items-center gap-4">
        <TechCapsuleLink />
      </div>
      <div className="fixed bottom-6 left-6 z-[100] flex flex-col items-center gap-4">
        <AskBot />
      </div>
    </div>
  );
}
