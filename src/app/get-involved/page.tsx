
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
    return null;
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
            <Card className="text-center p-6 shadow-lg hover:shadow-2xl transition-shadow duration-300 capsule-gradient-red text-primary-foreground">
              <Award className="h-10 w-10 text-white mx-auto mb-3" />
              <p className="text-3xl font-bold">
                 <AnimatedCounter to={15} />+
              </p>
              <p className="text-white/80">Sessions Hosted</p>
            </Card>
            <Card className="text-center p-6 shadow-lg hover:shadow-2xl transition-shadow duration-300 capsule-gradient-green text-primary-foreground">
              <Users className="h-10 w-10 text-white mx-auto mb-3" />
              <p className="text-3xl font-bold">
                <AnimatedCounter to={500} />+
              </p>
              <p className="text-white/80">Participants Engaged</p>
            </Card>
            <Card className="text-center p-6 shadow-lg hover:shadow-2xl transition-shadow duration-300 capsule-gradient-yellow text-primary-foreground">
              <Handshake className="h-10 w-10 text-white mx-auto mb-3" />
              <p className="text-3xl font-bold">
                 <AnimatedCounter to={3} />
              </p>
              <p className="text-white/80">Clubs Collaborated</p>
            </Card>
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
            <Button size="lg" asChild className="btn-gemini rounded-full">
              <a href="#" target="_blank" rel="noopener noreferrer">
                Fill Interest Form <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
}
