"use client"
import { HrvatskaBettingLogo } from "./hrvatska-betting-logo"
import { Menu } from "lucide-react"
import { useState } from "react"

export function HrvatskaBettingHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-journal-border bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80">
      <div className="container mx-auto px-4">
        <div className="flex h-14 md:h-16 items-center justify-center relative">


          {/* Centered Logo */}
          <HrvatskaBettingLogo />

        </div>

      
      </div>
    </header>
  )
}
