import Link from "next/link";
import { SquarePen } from "lucide-react";
import { ArrowRightIcon, GitHubLogoIcon } from "@radix-ui/react-icons";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/mode-toggle";
import Image from "next/image"; // For the Notion logo

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="z-[50] sticky top-0 w-full bg-background/95 border-b backdrop-blur-sm dark:bg-black/[0.6] border-border/40">
        <div className="container h-14 flex items-center">
          <Link
            href="/"
            className="flex justify-start items-center hover:opacity-85 transition-opacity duration-300"
          >
            <SquarePen className="w-6 h-6 mr-3" />
            <span className="font-bold">PrincipleStack</span>
            <span className="sr-only">PrincipleStack</span>
          </Link>
          <nav className="ml-auto flex items-center gap-2">
            <Button
              variant="outline"
              size="icon"
              className="rounded-full w-8 h-8 bg-background"
              asChild
            >
              <Link href="https://github.com/salimi-my/shadcn-ui-sidebar">
                <GitHubLogoIcon className="h-[1.2rem] w-[1.2rem]" />
              </Link>
            </Button>
            <ModeToggle />
          </nav>
        </div>
      </header>
      <main className="min-h-[calc(100vh-57px-97px)] flex-1">
        <div className="container relative pb-10">
          <section className="mx-auto flex max-w-[980px] flex-col items-center gap-2 py-8 md:py-12 md:pb-8 lg:py-24 lg:pb-6">
            <h1 className="text-center text-3xl font-bold leading-tight tracking-tighter md:text-5xl lg:leading-[1.1]">
              An <span className="italic">interactive</span> library of principles from world-renowned thinkers.
            </h1>

            <div className="flex w-full items-center justify-center space-x-4 py-4 md:pb-6">
              <Button variant="default" asChild>
                <Link href="/feed">
                  Try it out
                  <ArrowRightIcon className="ml-2" />
                </Link>
              </Button>
            </div>
          </section>

          {/* First Notion Template Card with Dark/Light Mode Support */}
          <div className="w-full flex justify-center relative mt-8">
            <div className="border border-border/40 rounded-lg p-6 max-w-xl flex items-center bg-white dark:bg-[#111]">
              {/* Notion Icon */}
              <div className="flex-shrink-0 mr-4">
                <Image
                  src="/notion-icon.png" // Replace with the correct path to the Notion logo
                  alt="Notion Logo"
                  width={50}
                  height={50}
                  className="rounded"
                />
              </div>

              {/* Card Content */}
              <div className="flex-1">
                <h2 className="text-black dark:text-white text-lg font-semibold">Get Our Notion Template</h2>
                <p className="text-gray-600 dark:text-gray-400 text-sm">Where we share our favourite principles</p>
              </div>

              {/* Join Button */}
              <Button variant="outline" className="ml-auto dark:text-white">
                <Link href="/path-to-notion-template" download>
                  Join
                </Link>
              </Button>
            </div>
          </div>

          {/* Second Notion Template Card */}
          <div className="w-full flex justify-center relative mt-8">
            <div className="border border-border/40 rounded-lg p-6 max-w-xl flex items-center bg-white dark:bg-[#111]">
              {/* Notion Icon */}
              <div className="flex-shrink-0 mr-4">
                <Image
                  src="/logo2.png" // Replace with the correct path to the Notion logo
                  alt="Notion Logo"
                  width={50}
                  height={50}
                  className="rounded"
                />
              </div>

              {/* Card Content */}
              <div className="flex-1">
                <h2 className="text-black dark:text-white text-lg font-semibold">Email List</h2>
                <p className="text-gray-600 dark:text-gray-400 text-sm">Explore new ideas and projects with us.</p>
              </div>

              {/* Join Button */}
              <Button variant="outline" className="ml-auto dark:text-white">
                <Link href="/another-community-link" download>
                  Join
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </main>
      <footer className="py-6 md:py-0 border-t border-border/40">
        <div className="container flex flex-col items-center justify-center gap-4 md:h-24 md:flex-row">
          <p className="text-balance text-center text-sm leading-loose text-muted-foreground">
            Built on top of{" "}
            <Link
              href="https://ui.shadcn.com"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium underline underline-offset-4"
            >
              shadcn/ui
            </Link>
            . The source code is available on{" "}
            <Link
              href="https://github.com/salimi-my/shadcn-ui-sidebar"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium underline underline-offset-4"
            >
              GitHub
            </Link>
            .
          </p>
        </div>
      </footer>
    </div>
  );
}
