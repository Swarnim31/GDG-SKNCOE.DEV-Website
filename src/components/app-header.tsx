import Link from "next/link";
import { Button } from "@/components/ui/button";
import { CodeXml } from "lucide-react";
import { ThemeToggle } from "./theme-toggle";

export function AppHeader() {
  return (
    <header className="bg-card border-b sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        <Link href="/" className="flex items-center gap-2">
          <CodeXml className="h-8 w-8 text-primary" />
          <span className="text-xl font-bold tracking-tight">SknCoe-Dev</span>
        </Link>
        <div className="flex items-center gap-2">
          <nav className="hidden md:flex items-center gap-2">
            <Button asChild variant="ghost">
              <Link href="/">Home</Link>
            </Button>
            <Button asChild variant="ghost">
              <Link href="/events">Events</Link>
            </Button>
             <Button asChild variant="ghost">
              <Link href="/resources">Resources</Link>
            </Button>
            <Button asChild variant="ghost">
              <Link href="/team">Team</Link>
            </Button>
            <Button asChild variant="ghost">
              <Link href="/get-involved">Get Involved</Link>
            </Button>
          </nav>
          <Button asChild>
            <Link href="/submit">Submit Content</Link>
          </Button>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
