"use client";

import * as React from "react";
import Link from "next/link";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "./ui/button";
import { Menu } from "lucide-react";
import Image from "next/image";

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
            <Image
              src="https://www.gstatic.com/devrel-devsite/prod/v2294f3a743c68e134394998d30c5e3f4e2f90a187140f04e0a78b94101e4c760/firebase/images/lockup.svg"
              alt="GDG SknCoe Logo"
              width={32}
              height={32}
              className="h-8 w-8"
            />
            <span className="text-xl font-bold tracking-tight">GDG SknCoe.DEV</span>
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
            <Link href="/teamup-showcase" onClick={() => setIsOpen(false)}>Showcase</Link>
          </Button>
          <Button asChild variant="ghost" className="justify-start text-base">
            <Link href="/resources" onClick={() => setIsOpen(false)}>Resources</Link>
          </Button>
           <Button asChild variant="ghost" className="justify-start text-base">
            <Link href="/team" onClick={() => setIsOpen(false)}>Our Team</Link>
          </Button>
          <Button asChild variant="ghost" className="justify-start text-base">
            <Link href="/get-involved" onClick={() => setIsOpen(false)}>About GDG</Link>
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  );
}
