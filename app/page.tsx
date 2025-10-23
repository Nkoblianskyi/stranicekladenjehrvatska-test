"use client"

import { bettingSites } from "@/types"
import { HrvatskaBettingHero } from "@/components/hrvatska-betting-hero"
import { HrvatskaBettingRatingList } from "@/components/hrvatska-betting-rating-list"
import { HrvatskaBettingTopOffersModal } from "@/components/hrvatska-betting-top-offers-modal"
import { HrvatskaBettingOurChoice } from "@/components/hrvatska-betting-our-choice"
import { HrvatskaBettingResponsibleGambling } from "@/components/hrvatska-betting-responsible-gambling"
import { HrvatskaBettingSportsNews } from "@/components/hrvatska-betting-sports-news"
import { HrvatskaBettingFAQ } from "@/components/hrvatska-betting-faq"
import Script from "next/script"

const structuredData = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "stranicekladenjehrvatska.com",
  url: "https://stranicekladenjehrvatska.com",
  description: "Stručne recenzije najboljih stranica za sportsko klađenje u Hrvatskoj",
  inLanguage: "hr",
  publisher: {
    "@type": "Organization",
    name: "stranicekladenjehrvatska.com",
    url: "https://stranicekladenjehrvatska.com",
  },
}

export default function Home() {
  return (
    <>
      <div className="min-h-screen bg-journal-paper">
        <main className="relative z-10  mx-auto">
          <HrvatskaBettingHero />
          <HrvatskaBettingRatingList sites={bettingSites} />
          <HrvatskaBettingResponsibleGambling />
          <HrvatskaBettingSportsNews />
          <HrvatskaBettingFAQ />
          <HrvatskaBettingOurChoice sites={bettingSites} />
        </main>
        <HrvatskaBettingTopOffersModal sites={bettingSites} />
      </div>
    </>
  )
}
