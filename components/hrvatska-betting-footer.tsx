"use client"

import Link from "next/link"
import Image from "next/image"

export function HrvatskaBettingFooter() {
  return (
    <footer className="bg-journal-charcoal text-white border-t-2 border-journal-gold">
      <div className="container mx-auto px-4 py-8 md:py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* About Column */}
          <div>
            <h3 className="font-serif font-bold text-lg mb-4">O nama</h3>
            <p className="text-sm text-gray-300 leading-relaxed">
              stranicekladenjehrvatska je vaš pouzdani vodič kroz svijet online klađenja u Hrvatskoj. Pružamo stručne
              recenzije i usporedbe najboljih kladionica.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-serif font-bold text-lg mb-4">Brzi linkovi</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-gray-300 hover:text-journal-gold transition-colors">
                  Početna
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-journal-gold transition-colors">
                  O nama
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-serif font-bold text-lg mb-4">Pravne informacije</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/privacy-policy" className="text-gray-300 hover:text-journal-gold transition-colors">
                  Politika privatnosti
                </Link>
              </li>
              <li>
                <Link href="/cookie-policy" className="text-gray-300 hover:text-journal-gold transition-colors">
                  Politika kolačića
                </Link>
              </li>
            </ul>
          </div>

        </div>

        {/* Responsible Gambling Organizations */}
        <div className="border-t border-gray-700 pt-6 mb-6">
          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-8">
            <Image
              src="/quinn.png"
              alt="BeGambleAware"
              width={120}
              height={40}
              className="h-8 md:h-10 w-auto opacity-80 hover:opacity-100 transition-opacity"
            />
            <Image
              src="/gamble-aware.png"
              alt="GambleAware"
              width={120}
              height={40}
              className="h-8 md:h-10 w-auto opacity-80 hover:opacity-100 transition-opacity"
            />
            <Image
              src="/gamcare.png"
              alt="GamCare"
              width={120}
              height={40}
              className="h-8 md:h-10 w-auto opacity-80 hover:opacity-100 transition-opacity"
            />
            <Image
              src="/GamblingCare-w.png"
              alt="Gambling Therapy"
              width={120}
              height={40}
              className="h-8 md:h-10 w-auto opacity-80 hover:opacity-100 transition-opacity"
            />
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 pt-6 text-center">
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} stranicekladenjehrvatska.com. Sva prava pridržana. Klađenje može izazvati ovisnost.
            18+
          </p>
        </div>
      </div>
    </footer>
  )
}
