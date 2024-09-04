"use client"

import Link from "next/link"
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { BrainIcon, CompassIcon, HomeIcon, InfoIcon, LayersIcon, LightbulbIcon, MenuIcon, PuzzleIcon, UsersIcon } from "@/components/Icons"
import { useStore } from "@/lib/GlobalStore"


const Navbar = () => {
    const { userData, setUserData } = useStore();

    return (
        <header className="bg-primary text-primary-foreground fixed top-0 z-50 w-full py-4 px-6 flex items-center justify-between">
            <Link href="#" className="flex items-center gap-2" prefetch={false}>
                <BrainIcon className="h-6 w-6" />
                <span className="text-lg font-semibold">MBTI Test</span>
            </Link>
            <nav className="hidden md:flex items-center gap-6">
                <Link href="/" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
                    Home
                </Link>
                <Link href="/#what-is-mbti" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
                    What is MBTI?
                </Link>
                {!userData ?
                    <Link href="/login" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
                        Login
                    </Link>
                    :
                    <Button onClick={() => {localStorage.removeItem("userData"); window.location.reload()}}>
                        Logout
                    </Button>
                }
            </nav>
            <Sheet>
                <SheetTrigger asChild>
                    <Button variant="outline" size="icon" className="md:hidden">
                        <MenuIcon className="h-6 w-6" />
                        <span className="sr-only">Toggle navigation menu</span>
                    </Button>
                </SheetTrigger>
                <SheetContent side="left" className="sm:max-w-xs">
                    <nav className="grid gap-6 text-lg font-medium">
                        <Link href="#" className="flex items-center gap-4 px-2.5 text-primary-foreground" prefetch={false}>
                            <HomeIcon className="h-5 w-5" />
                            Home
                        </Link>
                        <Link href="#" className="flex items-center gap-4 px-2.5 text-primary-foreground" prefetch={false}>
                            <InfoIcon className="h-5 w-5" />
                            What is MBTI?
                        </Link>
                        <Link href="#" className="flex items-center gap-4 px-2.5 text-primary-foreground" prefetch={false}>
                            <UsersIcon className="h-5 w-5" />
                            Personality Analysts
                        </Link>
                    </nav>
                </SheetContent>
            </Sheet>
        </header>
    )
}

export default Navbar
