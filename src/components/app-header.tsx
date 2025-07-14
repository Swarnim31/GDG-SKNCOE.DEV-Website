import Link from "next/link";
import { Button } from "@/components/ui/button";
import { CodeXml } from "lucide-react";

export function AppHeader() {
  return (
    <header className="bg-card border-b sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        <Link href="/" className="flex items-center gap-2">
          <CodeXml className="h-8 w-8 text-primary" />
          <span className="text-xl font-bold tracking-tight">SknCoe-Dev</span>
        </Link>
        <nav className="flex items-center gap-2">
          <Button asChild variant="ghost">
            <Link href="/">Events</Link>
          </Button>
          <Button asChild>
            <Link href="/submit">Submit Content</Link>
          </Button>
        </nav>
      </div>
    </header>
  );
}
