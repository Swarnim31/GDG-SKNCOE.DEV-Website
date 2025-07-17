
"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "./theme-toggle";
import { AppNavMobile } from "./app-nav-mobile";
import Image from "next/image";
import { User } from "lucide-react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "@/lib/firebase";

export function AppHeader() {
  const [user, loading, error] = useAuthState(auth);

  return (
    <header className="bg-background/80 backdrop-blur-sm border-b sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        <Link href="/" className="flex items-center gap-2">
            <Image
              src="https://res.cloudinary.com/startup-grind/image/upload/c_fill,dpr_2.0,f_auto,g_center,h_1080,q_100,w_1080/v1/gcs/platform-data-goog/events/gdg%20skncoe5_kltEGo5.png"
              alt="GDG SknCoe Logo"
              width={32}
              height={32}
              className="h-8 w-8 rounded-full"
            />
            <span className="text-xl font-bold tracking-tight hidden sm:inline-block">GDG SknCoe.DEV</span>
        </Link>
        <div className="flex items-center gap-4">
          <nav className="hidden md:flex items-center gap-1">
            <Button asChild variant="link" className="text-muted-foreground hover:text-foreground hover:no-underline">
              <Link href="/">Home</Link>
            </Button>
            <Button asChild variant="link" className="text-muted-foreground hover:text-foreground hover:no-underline">
              <Link href="/events">Events</Link>
            </Button>
            <Button asChild variant="link" className="text-muted-foreground hover:text-foreground hover:no-underline">
              <Link href="/teamup-showcase">Showcase</Link>
            </Button>
            <Button asChild variant="link" className="text-muted-foreground hover:text-foreground hover:no-underline">
              <Link href="/resources">Resources</Link>
            </Button>
            <Button asChild variant="link" className="text-muted-foreground hover:text-foreground hover:no-underline">
              <Link href="/team">Our Team</Link>
            </Button>
            <Button asChild variant="link" className="text-muted-foreground hover:text-foreground hover:no-underline">
              <Link href="/get-involved">About GDG</Link>
            </Button>
          </nav>
          <div className="flex items-center gap-2">
            <ThemeToggle />
            {!user && !loading && (
              <Button asChild className="btn-gemini rounded-full hidden md:inline-flex">
                <Link href="/join">Join</Link>
              </Button>
            )}
            <Link href="/profile" passHref>
              <Button variant="outline" size="icon" className="rounded-full hidden md:inline-flex">
                <User className="h-5 w-5" />
                <span className="sr-only">Profile</span>
              </Button>
            </Link>
            <AppNavMobile />
          </div>
        </div>
      </div>
    </header>
  );
}
