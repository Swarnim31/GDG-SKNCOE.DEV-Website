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
          <div
            className="p-0.5 rounded-full bg-gradient-to-r from-blue-500 via-green-500 to-yellow-500 self-start mb-4"
            onClick={() => setIsOpen(false)}
          >
            <Link
              href="/"
              className="flex items-center gap-2 bg-card rounded-full px-3 py-1"
            >
              <Image
                src="https://res.cloudinary.com/startup-grind/image/upload/c_fill,dpr_2.0,f_auto,g_center,h_1080,q_100,w_1080/v1/gcs/platform-data-goog/events/gdg%20skncoe5_kltEGo5.png"
                alt="GDG SknCoe Logo"
                width={32}
                height={32}
                className="h-8 w-8"
              />
              <span className="text-xl font-bold tracking-tight">
                GDG SknCoe.DEV
              </span>
            </Link>
          </div>
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
