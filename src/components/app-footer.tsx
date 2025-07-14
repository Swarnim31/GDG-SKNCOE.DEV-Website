import Link from "next/link";
import { Linkedin, Instagram, Youtube } from "lucide-react";
import { Button } from "./ui/button";
import Image from "next/image";

export function AppFooter() {
  return (
    <footer className="bg-background/80 backdrop-blur-sm border-t mt-auto">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col items-center justify-center text-center">
          <Link href="/" className="flex items-center gap-2 mb-4">
            <Image
              src="https://www.gstatic.com/devrel-devsite/prod/v2294f3a743c68e134394998d30c5e3f4e2f90a187140f04e0a78b94101e4c760/firebase/images/lockup.svg"
              alt="GDG SknCoe Logo"
              width={32}
              height={32}
              className="h-8 w-8"
            />
            <span className="text-xl font-bold tracking-tight">
              GDG SknCoe.DEV
            </span>
          </Link>
          <div className="flex space-x-2 mb-4">
            <Button asChild variant="ghost" size="icon">
              <Link
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </Link>
            </Button>
            <Button asChild variant="ghost" size="icon">
              <Link
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </Link>
            </Button>
            <Button asChild variant="ghost" size="icon">
              <Link
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
              >
                <Youtube className="h-5 w-5" />
              </Link>
            </Button>
          </div>
          <p className="text-sm text-muted-foreground">
            Made with ❤️ by the GDG SknCoe Team
          </p>
        </div>
      </div>
    </footer>
  );
}
