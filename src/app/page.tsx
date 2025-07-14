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
import { mockEvents, mockTeam, mockCapsules } from "@/lib/data";
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
import { Badge } from "@/components/ui/badge";

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
            Welcome to SknCoe-Dev
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Where ideas, code, and collaboration come together in a vibrant
            developer ecosystem.
          </p>
          <Button size="lg" asChild>
            <Link href="/#events">
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
          <h2 className="text-3xl font-bold text-center mb-12">
            <Sparkles className="inline-block h-8 w-8 text-amber-400 mr-2" />
            Tech Capsules
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {mockCapsules.map((capsule) => (
              <Card key={capsule.id} className="p-4 transform transition-transform duration-300 hover:scale-105 hover:shadow-lg">
                <CardHeader className="p-2 pt-0">
                  <CardTitle className="text-base font-semibold">{capsule.title}</CardTitle>
                </CardHeader>
                <CardContent className="p-2 pt-0">
                  <p className="text-sm text-muted-foreground">{capsule.tip}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Ask DevLinkBot Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="bg-gradient-to-r from-primary/80 to-secondary/80 text-primary-foreground p-8 md:p-12 text-center shadow-2xl">
            <CardHeader>
              <CardTitle className="text-3xl md:text-4xl font-bold mb-4">Have a question?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg mb-6 max-w-2xl mx-auto">
                Our AI-powered assistant, DevLinkBot, is here to help you with your developer queries.
              </p>
              <Button size="lg" variant="secondary" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90">
                <MessageCircle className="mr-2 h-5 w-5" /> Ask DevLinkBot
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
