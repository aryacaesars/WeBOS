import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Terminal, Shield, Layers } from "lucide-react"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-gray-900 backdrop-blur">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <Terminal className="h-6 w-6 text-primary" />
              <span className="font-bold text-white">WeBOS</span>
            </Link>
          </div>
          <nav className="flex items-center gap-8">
            <Link
              href="#features"
              className="text-sm font-medium text-white hover:text-primary hover:underline underline-offset-4"
            >
              Features
            </Link>
            <Link
              href="#about"
              className="text-sm font-medium text-white hover:text-primary hover:underline underline-offset-4"
            >
              About
            </Link>
            <Link
              href="/simulation"
              className="rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90"
            >
              Try Now
            </Link>
          </nav>
        </div>
      </header>

      <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  Experience Linux on the Web
                </h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  WeBOS is a web-based operating system simulation that lets you experience Linux KDE Plasma right in
                  your browser. Complete with a working terminal, file system, and desktop environment.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link
                  href="/simulation"
                  className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                >
                  Try Simulation
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
                <Link
                  href="#features"
                  className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                >
                  Learn More
                </Link>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="relative h-[300px] w-full overflow-hidden rounded-xl border bg-background p-2 md:h-[400px]">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="WeBOS Desktop Preview"
                  width={600}
                  height={400}
                  className="h-full w-full object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8">
            <div className="space-y-2 max-w-[800px]">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Features</h2>
              <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Explore the capabilities of our web-based operating system simulation
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl items-center gap-8 py-8 md:grid-cols-3">
            <div className="flex flex-col justify-center space-y-4 text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                <Terminal className="h-6 w-6" />
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold">Working Terminal</h3>
                <p className="text-muted-foreground">
                  Use real bash commands like mkdir, cd, chmod, cat, and more directly in your browser.
                </p>
              </div>
            </div>
            <div className="flex flex-col justify-center space-y-4 text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                <Layers className="h-6 w-6" />
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold">KDE Plasma Interface</h3>
                <p className="text-muted-foreground">
                  Experience the look and feel of Linux KDE Plasma desktop environment with panels, widgets, and
                  applications.
                </p>
              </div>
            </div>
            <div className="flex flex-col justify-center space-y-4 text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                <Shield className="h-6 w-6" />
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold">Boot Process</h3>
                <p className="text-muted-foreground">
                  Complete boot sequence with GRUB menu, kernel selection, and login screen for an authentic experience.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">About WeBOS</h2>
                <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  WeBOS is an educational project designed to help people learn about Linux operating systems in an
                  interactive way. Our simulation provides a realistic experience of using a Linux desktop environment
                  without having to install anything.
                </p>
              </div>
            </div>
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h3 className="text-xl font-bold">Why WeBOS?</h3>
                <p className="text-muted-foreground">
                  Whether you're a student learning about operating systems, a developer wanting to practice Linux
                  commands, or just curious about Linux, WeBOS provides a safe, accessible environment to explore and
                  learn.
                </p>
                <div className="flex flex-col gap-2 min-[400px]:flex-row pt-4">
                  <Link
                    href="/simulation"
                    className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                  >
                    Start Simulation
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="w-full border-t py-6 bg-gray-900">
        <div className="container flex flex-col items-center justify-center gap-4 md:flex-row md:justify-between">
          <p className="text-center text-sm leading-loose text-white md:text-left">
            © {new Date().getFullYear()} WeBOS. All rights reserved.
          </p>
          <div className="flex gap-4">
            <Link
              href="#"
              className="text-sm font-medium text-white hover:text-primary hover:underline underline-offset-4"
            >
              Terms
            </Link>
            <Link
              href="#"
              className="text-sm font-medium text-white hover:text-primary hover:underline underline-offset-4"
            >
              Privacy
            </Link>
            <Link
              href="#"
              className="text-sm font-medium text-white hover:text-primary hover:underline underline-offset-4"
            >
              Contact
            </Link>
          </div>
        </div>
      </footer>
    </main>
  )
}
