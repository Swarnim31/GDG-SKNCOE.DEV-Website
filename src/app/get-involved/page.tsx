
"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Award,
  Users,
  Handshake,
  Code,
  PenTool,
  Megaphone,
  Mail,
  Linkedin,
  Instagram,
  ArrowRight,
} from "lucide-react";
import React from "react";
import { AnimatedCounter } from "@/components/animated-counter";

const milestones = [
  { year: "2021", event: "Chapter Inception" },
  { year: "2022", event: "First Major Workshop" },
  { year: "2022", event: "Cloud Study Jams" },
  { year: "2023", event: "Flutter Festival" },
  { year: "2023", event: "Hackathon Partnership" },
  { year: "2024", event: "Google I/O Extended" },
];

const roles = [
  {
    icon: <Code className="h-10 w-10 text-primary mb-4" />,
    title: "Developer",
    description: "Contribute to open-source projects, build apps, and lead technical workshops. All skill levels welcome.",
  },
  {
    icon: <PenTool className="h-10 w-10 text-primary mb-4" />,
    title: "Designer",
    description: "Shape the visual identity of our community. Create graphics, UI/UX for projects, and branding materials.",
  },
  {
    icon: <Megaphone className="h-10 w-10 text-primary mb-4" />,
    title: "Content & Outreach",
    description: "Manage social media, write blog posts, and help us grow our community by reaching more students.",
  },
];

export default function GetInvolvedPage() {
  const [isMounted, setIsMounted] = React.useState(false);

  React.useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null; // or a loading skeleton
  }

  return (
    <div className="bg-background text-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        
        {/* Section 1: About GDG SknCoe */}
        <section id="about" className="mb-20 md:mb-28 text-center">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            About GDG SknCoe
          </h1>
          <p className="max-w-3xl mx-auto text-lg text-muted-foreground mb-12">
            Google Developer Group SknCoe is a community of student developers passionate about Google technologies. Our vision is to create a vibrant ecosystem for learning, sharing, and building innovative solutions. Through workshops, talks, and collaborative projects, we empower students to grow their skills and make a real-world impact.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-16">
            <Card className="text-center p-6 shadow-lg hover:shadow-2xl transition-shadow duration-300 bg-blue-100/50 dark:bg-blue-900/20">
              <Award className="h-10 w-10 text-primary mx-auto mb-3" />
              <p className="text-3xl font-bold">
                 <AnimatedCounter to={15} />+
              </p>
              <p className="text-muted-foreground">Sessions Hosted</p>
            </Card>
            <Card className="text-center p-6 shadow-lg hover:shadow-2xl transition-shadow duration-300 bg-green-100/50 dark:bg-green-900/20">
              <Users className="h-10 w-10 text-primary mx-auto mb-3" />
              <p className="text-3xl font-bold">
                <AnimatedCounter to={500} />+
              </p>
              <p className="text-muted-foreground">Participants Engaged</p>
            </Card>
            <Card className="text-center p-6 shadow-lg hover:shadow-2xl transition-shadow duration-300 bg-yellow-100/50 dark:bg-yellow-900/20">
              <Handshake className="h-10 w-10 text-primary mx-auto mb-3" />
              <p className="text-3xl font-bold">
                 <AnimatedCounter to={3} />
              </p>
              <p className="text-muted-foreground">Clubs Collaborated</p>
            </Card>
          </div>

          <h3 className="text-2xl font-bold mb-8">Our Journey</h3>
          <div className="relative">
            <div className="flex overflow-x-auto space-x-8 pb-4 scrollbar-thin scrollbar-thumb-primary/50 scrollbar-track-muted">
              {milestones.map((milestone, index) => (
                <div key={index} className="flex-shrink-0 w-48 text-center">
                  <div className="bg-primary text-primary-foreground rounded-full h-12 w-12 flex items-center justify-center mx-auto font-bold text-lg mb-2">{milestone.year}</div>
                  <p className="text-muted-foreground">{milestone.event}</p>
                </div>
              ))}
            </div>
             <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-border/50 -translate-y-1/2 -z-10"></div>
          </div>
        </section>

        {/* Section 2: Join Us */}
        <section id="join" className="mb-20 md:mb-28">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">Why Join Us?</h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              Become part of a dynamic team and contribute to a thriving developer community.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {roles.map((role) => (
              <Card key={role.title} className="p-8 text-center transform transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl bg-card">
                {role.icon}
                <h4 className="text-xl font-bold mb-2">{role.title}</h4>
                <p className="text-muted-foreground">{role.description}</p>
              </Card>
            ))}
          </div>
          <div className="text-center">
            <Button size="lg" asChild className="bg-gradient-to-r from-primary/90 to-secondary/90 text-primary-foreground hover:shadow-lg hover:from-primary hover:to-secondary">
              <a href="#" target="_blank" rel="noopener noreferrer">
                Fill Interest Form <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
          </div>
        </section>

        {/* Section 3: Contact */}
        <section id="contact">
           <div className="text-center mb-12">
             <h2 className="text-3xl md:text-4xl font-bold">Contact Us</h2>
             <p className="mt-4 text-lg text-muted-foreground">Have questions? We’d love to hear from you.</p>
           </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
             <Card className="p-8">
               <CardHeader className="p-0 mb-6">
                 <CardTitle>Send us a Message</CardTitle>
               </CardHeader>
               <CardContent className="p-0">
                  <form className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Name</Label>
                      <Input id="name" placeholder="Your Name" />
                    </div>
                     <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" placeholder="your.email@example.com" />
                    </div>
                     <div className="space-y-2">
                      <Label htmlFor="message">Message</Label>
                      <Textarea id="message" placeholder="Your message..." rows={5} />
                    </div>
                    <Button type="submit" className="w-full">Send Message</Button>
                  </form>
               </CardContent>
             </Card>

             <div className="space-y-8">
                <Card className="p-6">
                    <h4 className="font-bold text-lg mb-4">Get in Touch</h4>
                    <div className="space-y-4 text-muted-foreground">
                        <a href="mailto:contact@gdgskncoe.com" className="flex items-center gap-4 hover:text-primary transition-colors">
                            <Mail className="h-6 w-6"/>
                            <span>contact@gdgskncoe.dev</span>
                        </a>
                        <div className="flex space-x-4 pt-2">
                           <Button asChild variant="outline" size="icon">
                             <a href="#" target="_blank" rel="noopener noreferrer">
                                <Linkedin className="h-5 w-5" />
                                <span className="sr-only">LinkedIn</span>
                             </a>
                           </Button>
                           <Button asChild variant="outline" size="icon">
                             <a href="#" target="_blank" rel="noopener noreferrer">
                                <Instagram className="h-5 w-5" />
                                <span className="sr-only">Instagram</span>
                             </a>
                           </Button>
                        </div>
                    </div>
                </Card>
                <Card className="overflow-hidden">
                   <div className="aspect-w-16 aspect-h-9 bg-muted">
                    {/* Replace with your Google Maps embed code */}
                    <iframe 
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3784.776652462802!2d73.81822107494553!3d18.44820608262799!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc295c01b1b6811%3A0x62419a978d46427e!2sSKNCOE%2C%20Pune!5e0!3m2!1sen!2sin!4v1721300947706!5m2!1sen!2sin" 
                      width="100%" 
                      height="300" 
                      style={{border:0}} 
                      allowFullScreen={false} 
                      loading="lazy" 
                      referrerPolicy="no-referrer-when-downgrade"
                      className="w-full h-full"
                      ></iframe>
                   </div>
                </Card>
             </div>
          </div>
        </section>
      </div>
    </div>
  );
}

// Custom scrollbar utility for Tailwind
// Add the following to your globals.css or a utility CSS file if it doesn't exist
/*
@layer utilities {
  .scrollbar-thin {
    scrollbar-width: thin;
    scrollbar-color: hsl(var(--primary)) hsl(var(--muted));
  }
  .scrollbar-thumb-primary\/50::-webkit-scrollbar-thumb {
    background-color: hsl(var(--primary) / 0.5);
    border-radius: 4px;
  }
  .scrollbar-track-muted::-webkit-scrollbar-track {
    background: hsl(var(--muted));
  }
  .scrollbar-thumb-primary\/50::-webkit-scrollbar {
    height: 8px;
  }
}
*/