import Link from "next/link";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "./ui/button";
import { CodeXml, Menu } from "lucide-react";

export function AppNavMobile() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon" className="md:hidden">
          <Menu />
          <span className="sr-only">Toggle Menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left">
        <SheetHeader>
          <Link
            href="/"
            className="flex items-center gap-2 mb-4"
            onClick={() => setIsOpen(false)}
          >
            <CodeXml className="h-8 w-8 text-primary" />
            <span className="text-xl font-bold tracking-tight">SknCoe</span>
          </Link>
        </SheetHeader>
        <div className="flex flex-col gap-2">
          <Button asChild variant="ghost" className="justify-start text-base">
            <Link href="/" onClick={() => setIsOpen(false)}>Home</Link>
          </Button>
          <Button asChild variant="ghost" className="justify-start text-base">
            <Link href="/events" onClick={() => setIsOpen(false)}>Events</Link>
          </Button>
          <Button asChild variant="ghost" className="justify-start text-base">
            <Link href="/team" onClick={() => setIsOpen(false)}>Team</Link>
          </Button>
          <Button asChild variant="ghost" className="justify-start text-base">
            <Link href="#" onClick={() => setIsOpen(false)}>Projects</Link>
          </Button>
          <Button asChild variant="ghost" className="justify-start text-base">
            <Link href="/resources" onClick={() => setIsOpen(false)}>Resources</Link>
          </Button>
          <Button asChild variant="ghost" className="justify-start text-base">
            <Link href="/get-involved#join" onClick={() => setIsOpen(false)}>Join Us</Link>
          </Button>
          <Button asChild variant="ghost" className="justify-start text-base">
            <Link href="/get-involved#contact" onClick={() => setIsOpen(false)}>Contact</Link>
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  );
}
