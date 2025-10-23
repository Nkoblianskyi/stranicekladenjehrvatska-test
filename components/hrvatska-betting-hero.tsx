"use client"

import { useState } from "react"
import { AdvertiserInfoModal } from "./hrvatska-betting-advertiser-modal"
import Image from "next/image"

export function HrvatskaBettingHero() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const openModal = () => {
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
  }

  return (
    <section className="relative h-[150px] md:h-[250px] overflow-hidden bg-journal-charcoal">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-50"
        style={{
          backgroundImage: `url('/modern-sports-stadium-crowd-atmosphere-football-so.jpg')`,
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-journal-charcoal/90 via-journal-charcoal/70 to-journal-charcoal/80"></div>

      <div className="container mx-auto sm:max-w-[1200px] relative z-10 px-4 h-full flex flex-col justify-center py-3 md:py-4">
        <div className="max-w-3xl">
          <div className="mb-1 md:mb-1.5">
            <span className="text-[9px] md:text-[10px] font-mono uppercase tracking-wider text-journal-gold/90 border-l-2 border-journal-gold pl-2">
              Stručna analiza 2025
            </span>
          </div>

          <h1 className="text-xl md:text-3xl lg:text-4xl font-serif font-bold text-journal-white mb-1 md:mb-2 leading-tight text-balance">
            Najbolje Kladionice u <span className="text-journal-gold">Hrvatskoj</span>
          </h1>

          <div className="w-16 md:w-24 h-0.5 bg-journal-gold/60 mb-1 md:mb-2"></div>

          <p className="text-journal-white/90 text-[11px] md:text-xs leading-relaxed mb-2 md:mb-3 max-w-2xl">
            Profesionalna procjena licenciranih platformi za sportsko klađenje. Provjerene licence, poštena isplata,
            povoljni bonusi.
          </p>

          <div className="flex flex-wrap gap-1.5 md:gap-2.5 text-[9px] md:text-[11px]">
            <span className="text-journal-white/80 text-sm">
              <span className="text-red-600 font-semibold">18+</span>
            </span>
            <span className="text-journal-white/40">•</span>
            <span className="text-journal-white/80 flex items-center flex-row gap-1">
              <span className="text-journal-green font-semibold">100%</span> Licencirano <Image src='/flag.png' width={16} height={16} alt="flag" />
            </span>
            <span className="text-journal-white/40">•</span>
            <span className="text-journal-white/80">
              Ažurirano{" "}
              <span className="font-semibold">
                {new Date().toLocaleDateString("hr-HR", { month: "short", year: "numeric" })}
              </span>
            </span>
            <span className="text-journal-white/40 hidden md:inline">•</span>
            <button
              onClick={openModal}
              className="text-journal-blue/80 hover:text-journal-blue transition-colors underline decoration-dotted underline-offset-2 hidden md:inline"
            >
              Informacije o oglašavanju
            </button>
          </div>
        </div>
      </div>

      <AdvertiserInfoModal isOpen={isModalOpen} onClose={closeModal} />
    </section>
  )
}
