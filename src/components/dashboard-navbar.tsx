import Link from "next/link"
import { ModeToggle } from "@/components/mode-toggle"
import { Button } from "@/components/ui/button"
import { Menu } from 'lucide-react'

interface DashboardNavbarProps {
  onMenuClick?: () => void
}

export function DashboardNavbar({ onMenuClick }: DashboardNavbarProps) {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <div className="flex items-center flex-1">
          <Button variant="ghost" size="icon" onClick={onMenuClick} className="md:hidden">
            <Menu className="h-6 w-6" />
            <span className="sr-only">Toggle Sidebar</span>
          </Button>
          <div className="hidden md:flex">
            <Link href="/" className="flex items-center space-x-2">
              <span className="font-bold">SpendTrail</span>
            </Link>
          </div>
        </div>
        <div className="flex items-center justify-end space-x-2">
          <nav className="flex items-center">
            <ModeToggle />
          </nav>
        </div>
      </div>
    </header>
  )
}

