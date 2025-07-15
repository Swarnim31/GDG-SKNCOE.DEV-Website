
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
import { Menu, User } from "lucide-react";
import Image from "next/image";

export function AppNavMobile() {
  const [isOpen, setIsOpen] = React.useState(false);

  const closeSheet = () => setIsOpen(false);

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
            onClick={closeSheet}
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
                className="h-8 w-8 rounded-full"
              />
              <span className="text-xl font-bold tracking-tight">
                GDG SknCoe.DEV
              </span>
            </Link>
          </div>
        </SheetHeader>
        <div className="flex flex-col gap-2">
          <Button variant="ghost" className="w-full justify-start text-base" onClick={closeSheet} asChild>
            <Link href="/">Home</Link>
          </Button>
          <Button variant="ghost" className="w-full justify-start text-base" onClick={closeSheet} asChild>
            <Link href="/events">Events</Link>
          </Button>
          <Button variant="ghost" className="w-full justify-start text-base" onClick={closeSheet} asChild>
            <Link href="/teamup-showcase">Showcase</Link>
          </Button>
          <Button variant="ghost" className="w-full justify-start text-base" onClick={closeSheet} asChild>
            <Link href="/resources">Resources</Link>
          </Button>
          <Button variant="ghost" className="w-full justify-start text-base" onClick={closeSheet} asChild>
            <Link href="/team">Our Team</Link>
          </Button>
          <Button variant="ghost" className="w-full justify-start text-base" onClick={closeSheet} asChild>
            <Link href="/chat">Chat</Link>
          </Button>
          <Button variant="ghost" className="w-full justify-start text-base" onClick={closeSheet} asChild>
            <Link href="/get-involved">About GDG</Link>
          </Button>
          <Button variant="ghost" className="w-full justify-start text-base" onClick={closeSheet} asChild>
            <Link href="/join">Join</Link>
          </Button>
          <Button variant="ghost" className="w-full justify-start text-base gap-2" onClick={closeSheet} asChild>
             <Link href="/profile">
                <User className="h-5 w-5" /> Profile
             </Link>
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  );
}
