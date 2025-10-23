import Image from "next/image"
import { Star } from "lucide-react"
import type { BettingSite } from "@/types"
import Link from "next/link"

interface RatingListProps {
  sites: BettingSite[]
}

export function HrvatskaBettingRatingList({ sites }: RatingListProps) {
  const formatNumber = (num: number): string => {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")
  }

  const renderStars = (rating: number) => {
    const starElements = []
    const maxStars = 5
    const starValue = rating / 2

    for (let i = 0; i < maxStars; i++) {
      const fillPercentage = Math.min(Math.max((starValue - i) * 100, 0), 100)

      if (fillPercentage === 100) {
        starElements.push(<Star key={i} className="h-5 w-5 fill-journal-gold text-journal-gold" />)
      } else if (fillPercentage === 0) {
        starElements.push(<Star key={i} className="h-5 w-5 text-journal-light-gray" />)
      } else {
        starElements.push(
          <div key={i} className="relative h-5 w-5">
            <Star className="absolute h-5 w-5 text-journal-light-gray" />
            <div className="absolute overflow-hidden" style={{ width: `${fillPercentage}%` }}>
              <Star className="h-5 w-5 fill-journal-gold text-journal-gold" />
            </div>
          </div>,
        )
      }
    }

    return starElements
  }

  const getCardStyle = (index: number) => {
    if (index === 0) {
      return {
        container: "bg-gradient-to-br from-journal-gold/10 to-journal-white border-4 border-journal-gold shadow-xl",
        badge: "bg-gradient-to-br from-journal-gold to-yellow-600 text-journal-white shadow-lg",
        rankText: "Najbolji izbor",
        accentColor: "journal-gold",
      }
    } else if (index === 1) {
      return {
        container: "bg-journal-white border-3 border-journal-blue shadow-lg",
        badge: "bg-gradient-to-br from-journal-blue to-journal-blue-light text-journal-white shadow-md",
        rankText: "Najbolji kladioničar",
        accentColor: "journal-blue",
      }
    } else if (index === 2) {
      return {
        container: "bg-journal-white border-2 border-journal-green shadow-md",
        badge: "bg-gradient-to-br from-journal-green to-emerald-500 text-journal-white shadow-md",
        rankText: "Top ponuda",
        accentColor: "journal-green",
      }
    } else {
      return {
        container:
          "bg-journal-white border border-journal-border shadow-sm hover:border-journal-blue transition-colors",
        badge: "bg-journal-gray text-journal-white",
        rankText: `#${index + 1}`,
        accentColor: "journal-gray",
      }
    }
  }

  return (
    <section className="py-8 md:py-12 bg-gradient-to-b from-journal-paper via-journal-white to-journal-paper relative overflow-hidden">



      <div className="container mx-auto px-4 md:px-6 max-w-[1200px] relative z-10">
        <div className="grid gap-6">
          {sites.map((site, index) => {
            const showBadge = index < 3 && site.badges.length > 0
            const cardStyle = getCardStyle(index)

            return (
              <div
                key={site.id}
                className={`relative overflow-visible transition-all hover:shadow-2xl ${cardStyle.container}`}
              >
                {showBadge && (
                  <div className="absolute -top-3 -left-3 z-10">
                    <div
                      className={`${cardStyle.badge} px-4 py-2 rounded-full flex items-center justify-center border-2 border-journal-white whitespace-nowrap`}
                    >
                      <span className="text-xs font-bold uppercase tracking-wide">{cardStyle.rankText}</span>
                    </div>
                  </div>
                )}

                {/* Desktop Layout */}
                <Link
                  href={site.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hidden lg:block cursor-pointer hover:opacity-90 transition-opacity"
                >
                  <div className="grid grid-cols-[240px_1fr_200px_180px] items-center gap-6 p-6">
                    <div className="flex items-center justify-center bg-black border-r-2 border-journal-border p-6">
                      <div className="relative h-20 w-full">
                        <Image src={site.logo || "/placeholder.svg"} alt={site.name} fill className="object-contain" />
                      </div>
                    </div>

                    <div className="flex flex-col items-center justify-center text-center px-4">
                      <p className="text-xs font-mono uppercase tracking-widest text-journal-blue mb-2 font-bold">
                        BONUS DOBRODOŠLICE
                      </p>
                      <h3 className="text-2xl font-serif font-bold text-journal-black">{site.bonus}</h3>
                      {site.dopBonus && (
                        <p className="text-lg font-semibold mt-1 text-journal-black">{site.dopBonus}</p>
                      )}
                    </div>

                    <div className="flex flex-col items-center justify-center text-center px-4 border-l-2 border-journal-border">
                      <div className="text-5xl font-serif font-bold mb-2 text-journal-black">
                        {site.rating.toFixed(1)}
                      </div>
                      <div className="flex items-center justify-center gap-1 mb-1">{renderStars(site.rating)}</div>
                      <p className="text-xs text-journal-gray">({formatNumber(site.reviews)} recenzija)</p>
                    </div>

                    <div className="flex flex-col items-center justify-center gap-3 px-4">
                      <div className="w-full bg-gradient-to-r from-journal-blue to-journal-blue-light hover:from-journal-blue-light hover:to-journal-blue transition-all text-journal-white font-bold py-2 px-4 text-center uppercase tracking-wide text-sm border-2 border-journal-blue shadow-md">
                        Preuzmite bonus
                      </div>
                      <span className="text-journal-gray text-xs">Posjetite {site.name}</span>
                    </div>
                  </div>

                  <div className="border-t-2 border-journal-border px-6 py-3 bg-journal-paper">
                    <p className="text-journal-gray text-xs leading-relaxed text-center font-mono">
                      18+ | Primjenjuju se uvjeti i odredbe | Igrajte odgovorno | BeGambleAware.org
                    </p>
                  </div>
                </Link>

                {/* Tablet Layout */}
                <Link
                  href={site.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hidden md:block lg:hidden cursor-pointer hover:opacity-90 transition-opacity"
                >
                  <div className="grid grid-cols-[1fr_auto] min-h-[280px]">
                    <div className=" p-8 flex flex-col items-center justify-center border-r-2 border-journal-border">
                      <div className="relative h-24 w-48 mb-6 bg-black p-4">
                        <Image src={site.logo || "/placeholder.svg"} alt={site.name} fill className="object-contain max-w-[90%] mx-auto" />
                      </div>

                      <div className="flex items-center gap-3 mb-1 text-white">
                        <div className="flex gap-1">{renderStars(site.rating)}</div>
                        <span className="text-journal-black font-serif font-bold text-2xl">
                          {site.rating.toFixed(1)}
                        </span>
                      </div>
                      <p className="text-xs text-journal-gray">({formatNumber(site.reviews)} recenzija)</p>
                    </div>

                    <div className="p-8 flex flex-col items-center justify-center min-w-[240px] bg-journal-white">
                      <p className="text-xs font-mono uppercase tracking-widest text-journal-blue mb-3 font-bold">
                        BONUS DOBRODOŠLICE
                      </p>
                      <h3 className="text-journal-black text-2xl font-serif font-bold text-center mb-1">
                        {site.bonus}
                      </h3>
                      {site.dopBonus && (
                        <p className="text-journal-black text-base font-semibold mb-4">{site.dopBonus}</p>
                      )}
                      <div className="w-full bg-gradient-to-r from-journal-blue to-journal-blue-light hover:from-journal-blue-light hover:to-journal-blue transition-all text-journal-white font-bold py-4 px-6 text-center uppercase tracking-wide text-sm border-2 border-journal-blue shadow-md mb-2">
                        Preuzmite bonus
                      </div>
                      <span className="text-journal-gray text-xs">Posjetite {site.name}</span>
                    </div>
                  </div>

                  <div className="bg-journal-paper px-6 py-4 border-t-2 border-journal-border">
                    <p className="text-journal-gray text-xs leading-relaxed text-center font-mono">
                      18+ | Primjenjuju se uvjeti i odredbe | Igrajte odgovorno | BeGambleAware.org
                    </p>
                  </div>
                </Link>

                {/* Mobile Layout */}
                <Link
                  href={site.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="md:hidden block cursor-pointer hover:opacity-90 transition-opacity"
                >
                  <div className="grid grid-cols-[40%_60%] gap-0">
                    <div className=" p-6 flex flex-col items-center justify-center border-r-2 border-journal-border">
                      <div className="relative h-16 w-32 mb-4 bg-black p-4">
                        <Image src={site.logo || "/placeholder.svg"} alt={site.name} fill className="object-contain max-w-[95%] mx-auto" />
                      </div>

                      <div className="flex items-center gap-2 mb-1">
                        <div className="flex gap-0.5">{renderStars(site.rating)}</div>
                        <span className="text-journal-black font-serif font-bold text-lg">
                          {site.rating.toFixed(1)}
                        </span>
                      </div>
                      <p className="text-journal-gray text-[10px] text-center">
                        ({formatNumber(site.reviews)} recenzija)
                      </p>
                    </div>

                    <div className="p-4 flex flex-col items-center justify-center bg-journal-white">
                      <p className="text-[10px] font-mono uppercase tracking-wider text-journal-blue mb-2 font-bold">
                        BONUS DOBRODOŠLICE
                      </p>
                      <h3 className="text-journal-black text-lg font-serif font-bold text-center mb-1">{site.bonus}</h3>
                      {site.dopBonus && (
                        <p className="text-journal-black text-xs font-semibold mb-3">{site.dopBonus}</p>
                      )}
                      <div className="w-full bg-gradient-to-r from-journal-blue to-journal-blue-light text-journal-white font-bold py-3 px-3 text-center uppercase tracking-wide text-[11px] border-2 border-journal-blue mb-2">
                        Preuzmite bonus
                      </div>
                      <span className="text-journal-gray text-[10px]">Posjetite {site.name}</span>
                    </div>
                  </div>

                  <div className="bg-journal-paper px-4 py-3 border-t-2 border-journal-border">
                    <p className="text-journal-gray text-[10px] leading-relaxed text-center font-mono">
                      18+ | Primjenjuju se uvjeti i odredbe | Igrajte odgovorno
                    </p>
                  </div>
                </Link>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
