import Link from "next/link";
import Image from "next/image";
import { UserRoundSearch } from "lucide-react";

import { ArrowRightIcon, DiscordLogoIcon } from "@radix-ui/react-icons";

import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/mode-toggle";

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="z-[50] sticky top-0 w-full bg-background/95 border-b backdrop-blur-sm dark:bg-black/[0.6] border-border/40">
        <div className="container h-14 flex items-center">
          <Link
            href="/"
            className="flex justify-start items-center hover:opacity-85 transition-opacity duration-300"
          >
            <UserRoundSearch className="w-6 h-6 mr-3" />
            <span className="font-bold">LLM Search Engine</span>
            <span className="sr-only">LLM Search Engine</span>
          </Link>
          <nav className="ml-auto flex items-center gap-2">
            <ModeToggle />
            <Button
              variant="outline"
              size="icon"
              className="rounded-full w-8 h-8 bg-background"
              asChild
            >
              <Link href="https://discord.com/">
                <DiscordLogoIcon className="h-[1.2rem] w-[1.2rem]" />
              </Link>
            </Button>
          </nav>
        </div>
      </header>
      <main className="min-h-[calc(100vh-57px-97px)] flex-1">
        <div className="container relative pb-10">
          <section className="mx-auto flex max-w-[980px] flex-col items-center gap-2 py-8 md:py-12 md:pb-8 lg:py-24 lg:pb-6">
            <h1 className="text-center text-3xl font-bold leading-tight tracking-tighter md:text-5xl lg:leading-[1.1]">
              LLM Search Engine
            </h1>
            <span className="max-w-[750px] text-center text-lg font-light text-foreground">
              Lorem ipsum
            </span>
            <div className="flex w-full items-center justify-center space-x-4 py-4 md:pb-6">
              <Button variant="default" asChild>
                <Link href="/dashboard">
                  Get Started
                  <ArrowRightIcon className="ml-2" />
                </Link>
              </Button>
            </div>
          </section>
        </div>
      </main>
      <footer className="py-6 md:py-0 border-t border-border/40">
        <div className="container flex flex-col items-center justify-center gap-4 md:h-24 md:flex-row">
          <p className="text-balance text-center text-sm leading-loose text-muted-foreground">
            Chainlit app |
            <Link
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium underline underline-offset-4"
            >
              | Chainlit
            </Link>
          </p>
        </div>
      </footer>
    </div>
  );
}
