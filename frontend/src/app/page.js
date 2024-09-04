// import Image from "next/image";

// export default function Home() {
//   return (
//     <main className="flex min-h-screen justify-center items-center">
//       hello
//     </main>
//   );
// }

import Link from "next/link"
import { Button } from "@/components/ui/button"
import Image from "next/image";
import { BrainIcon, CompassIcon, HomeIcon, InfoIcon, LayersIcon, LightbulbIcon, MenuIcon, PuzzleIcon, UsersIcon } from "@/components/Icons"


export default function Component() {
  return (
    <div className="flex flex-col mt-10 min-h-[100dvh]">

      <main className="flex-1">
        <section className="bg-muted py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="grid gap-8 md:grid-cols-2 items-center">
              <div className="space-y-4">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">MBTI Personality Test</h1>
                <p className="text-muted-foreground md:text-xl">
                  Answer a series of questions to discover your unique personality type.
                </p>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button className="inline-flex h-10 items-center justify-center rounded-md px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50">
                    <Link
                      href={"/test"}
                    >
                      Start the Test
                    </Link>
                  </Button>
                  <Link
                    href="#"
                    className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                    prefetch={false}
                  >
                    Learn More
                  </Link>
                </div>
              </div>
              <Image
                src="/placeholder.svg"
                width="550"
                height="550"
                alt="Hero"
                className="mx-auto aspect-square overflow-hidden rounded-xl object-cover "
              />
            </div>
          </div>
        </section>
        <section className="py-12 md:py-24" id="what-is-mbti">
          <div className="container px-4 md:px-6">
            <div className="space-y-8">
              <div className="space-y-4 text-center">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">What is MBTI?</h2>
                <p className="text-muted-foreground md:text-xl">
                  The Myers-Briggs Type Indicator (MBTI) is a personality assessment tool that helps individuals
                  understand their unique personality preferences and how they interact with the world.
                </p>
              </div>
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                <div className="space-y-4 flex flex-col items-center text-center">
                  <CompassIcon className="h-12 w-12 text-primary" />
                  <h3 className="text-xl font-bold">Identify Your Preferences</h3>
                  <p className="text-muted-foreground">
                    The MBTI assessment helps you understand your natural tendencies and preferences, such as how you
                    gather information, make decisions, and interact with the world.
                  </p>
                </div>
                <div className="space-y-4 flex flex-col items-center text-center">
                  <PuzzleIcon className="h-12 w-12 text-primary" />
                  <h3 className="text-xl font-bold">Understand Yourself Better</h3>
                  <p className="text-muted-foreground">
                    By knowing your MBTI type, you can gain insights into your strengths, weaknesses, communication
                    style, and how you approach problem-solving.
                  </p>
                </div>
                <div className="space-y-4 flex flex-col items-center text-center">
                  <LayersIcon className="h-12 w-12 text-primary" />
                  <h3 className="text-xl font-bold">Improve Relationships</h3>
                  <p className="text-muted-foreground">
                    Understanding your MBTI type and the types of others can help you communicate more effectively,
                    resolve conflicts, and build stronger relationships.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="bg-muted py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="space-y-20">
              <div className="space-y-4 text-center">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">MBTI Personality Types</h2>
                <p className="text-muted-foreground md:text-xl">
                  Discover which of the 16 MBTI personality types best describes you.
                </p>
              </div>
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                <div className="space-y-4 flex flex-col items-center text-center">
                  <CompassIcon className="h-12 w-12 text-primary" />
                  <h3 className="text-xl font-bold">Extrovert (E)</h3>
                  <p className="text-muted-foreground">Energized by the external world and social interactions.</p>
                </div>
                <div className="space-y-4 flex flex-col items-center text-center">
                  <CompassIcon className="h-12 w-12 text-primary" />
                  <h3 className="text-xl font-bold">Introvert (I)</h3>
                  <p className="text-muted-foreground">Energized by the internal world and solitary activities.</p>
                </div>
                <div className="space-y-4 flex flex-col items-center text-center">
                  <PuzzleIcon className="h-12 w-12 text-primary" />
                  <h3 className="text-xl font-bold">Sensing (S)</h3>
                  <p className="text-muted-foreground">Focus on facts, details, and practical information.</p>
                </div>
                <div className="space-y-4 flex flex-col items-center text-center">
                  <PuzzleIcon className="h-12 w-12 text-primary" />
                  <h3 className="text-xl font-bold">Intuitive (N)</h3>
                  <p className="text-muted-foreground">Focus on patterns, possibilities, and abstract concepts.</p>
                </div>
                <div className="space-y-4 flex flex-col items-center text-center">
                  <LayersIcon className="h-12 w-12 text-primary" />
                  <h3 className="text-xl font-bold">Thinking (T)</h3>
                  <p className="text-muted-foreground">Prioritize logic, analysis, and objective decision-making.</p>
                </div>
                <div className="space-y-4 flex flex-col items-center text-center">
                  <LayersIcon className="h-12 w-12 text-primary" />
                  <h3 className="text-xl font-bold">Feeling (F)</h3>
                  <p className="text-muted-foreground">Prioritize empathy, values, and subjective decision-making.</p>
                </div>
                <div className="space-y-4 flex flex-col items-center text-center">
                  <LayersIcon className="h-12 w-12 text-primary" />
                  <h3 className="text-xl font-bold">Judging (J)</h3>
                  <p className="text-muted-foreground">Prefer structure, organization, and closure.</p>
                </div>
                <div className="space-y-4 flex flex-col items-center text-center">
                  <LayersIcon className="h-12 w-12 text-primary" />
                  <h3 className="text-xl font-bold">Perceiving (P)</h3>
                  <p className="text-muted-foreground">Prefer flexibility, spontaneity, and open-ended exploration.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="bg-muted py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="space-y-8">
              <div className="space-y-4 text-center">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Take the MBTI Test</h2>
                <p className="text-muted-foreground md:text-xl">
                  Answer a series of questions to discover your unique personality type.
                </p>
              </div>
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                <div className="space-y-4 flex flex-col items-center text-center">
                  <BrainIcon className="h-12 w-12 text-primary" />
                  <h3 className="text-xl font-bold">Personality Assessment</h3>
                  <p className="text-muted-foreground">
                    Take our comprehensive MBTI assessment to uncover your unique personality preferences.
                  </p>
                  <Button className="inline-flex h-10 items-center justify-center rounded-md px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50">
                    Start the Test
                  </Button>
                </div>
                <div className="space-y-4 flex flex-col items-center text-center">
                  <LightbulbIcon className="h-12 w-12 text-primary" />
                  <h3 className="text-xl font-bold">Personalized Insights</h3>
                  <p className="text-muted-foreground">
                    Receive a detailed report on your personality type and practical tips to leverage your strengths.
                  </p>
                  <Button className="inline-flex h-10 items-center justify-center rounded-md px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50">
                    Get Insights
                  </Button>
                </div>
                <div className="space-y-4 flex flex-col items-center text-center">
                  <UsersIcon className="h-12 w-12 text-primary" />
                  <h3 className="text-xl font-bold">Expert Guidance</h3>
                  <p className="text-muted-foreground">
                    Schedule a consultation with one of our MBTI certified practitioners to dive deeper into your
                    personality.
                  </p>
                  <Button className="inline-flex h-10 items-center justify-center rounded-md px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50">
                    Book a Session
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-primary text-primary-foreground py-6 w-full shrink-0">
        <div className="container px-4 md:px-6 flex flex-col gap-2 sm:flex-row items-center justify-between">
          <p className="text-xs">&copy; 2024 MBTI Test. All rights reserved.</p>
          <nav className="sm:ml-auto flex gap-4 sm:gap-6">
            <Link href="#" className="text-xs hover:underline underline-offset-4" prefetch={false}>
              Privacy Policy
            </Link>
            <Link href="#" className="text-xs hover:underline underline-offset-4" prefetch={false}>
              Terms of Service
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  )
}
