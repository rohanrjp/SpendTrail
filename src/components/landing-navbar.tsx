import Link from "next/link"
import { ModeToggle } from "@/components/mode-toggle"

export function LandingNavbar() {
  return (
    <nav className="border-b">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <span className="text-2xl font-bold">SpendTrail</span>
        </Link>
        <div className="flex items-center space-x-4">
          <ModeToggle />
        </div>
      </div>
    </nav>
  )
}

