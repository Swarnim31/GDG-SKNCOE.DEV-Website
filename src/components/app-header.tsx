import Link from "next/link";
import { Button } from "@/components/ui/button";
import { CodeXml } from "lucide-react";
import { ThemeToggle } from "./theme-toggle";
import { AppNavMobile } from "./app-nav-mobile";

export function AppHeader() {
  return (
    <header className="bg-background/80 backdrop-blur-sm border-b sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        <Link href="/" className="flex items-center gap-2">
          <CodeXml className="h-8 w-8 text-primary" />
          <span className="text-xl font-bold tracking-tight">SknCoe-Dev</span>
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
            <AppNavMobile />
          </div>
        </div>
      </div>
    </header>
  );
}
