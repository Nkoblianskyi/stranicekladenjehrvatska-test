"use client"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogClose } from "@/components/ui/dialog"
import { X } from "lucide-react"

interface AdvertiserInfoModalProps {
  isOpen: boolean
  onClose: () => void
}

export function AdvertiserInfoModal({ isOpen, onClose }: AdvertiserInfoModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="w-[90vw] max-w-[600px] p-0 bg-white rounded-xl shadow-xl overflow-hidden border border-gray-200">
        {/* Header */}
        <div className="relative bg-white border-b border-gray-200 px-6 py-5">
          <DialogHeader>
            <DialogTitle className="text-2xl text-gray-900 font-bold pr-8">Oglašivačke Informacije</DialogTitle>
          </DialogHeader>
          <DialogClose className="absolute right-4 top-4 rounded-lg bg-gray-100 p-2 opacity-70 transition-all hover:opacity-100 hover:bg-gray-900 hover:text-white focus:outline-none focus:ring-2 focus:ring-gray-900">
            <X className="h-4 w-4" />
            <span className="sr-only">Zatvori</span>
          </DialogClose>
        </div>

        {/* Content */}
        <div className="px-6 py-6 space-y-6 max-h-[70vh] overflow-y-auto">
          {/* Section 1 */}
          <div className="space-y-3">
            <h3 className="font-bold text-lg text-gray-900 border-b border-gray-200 pb-2">O Našoj Usluzi</h3>
            <div className="space-y-3 text-gray-700 leading-relaxed">
              <p>
                kladenjehr.com je besplatna usluga koja vam pomaže pronaći platforme za klađenje. Primamo naknade od
                istaknutih brendova, što utječe na njihov položaj.
              </p>
              <p>
                Sve istaknute stranice su licencirane od strane uglednih tijela. Trudimo se biti točni, ali ne možemo
                biti odgovorni za netočnosti.
              </p>
              <p>
                Bonusi i ponude podložni su promjenama. Uvijek pročitajte potpune uvjete na stranici operatera prije
                preuzimanja.
              </p>
            </div>
          </div>

          {/* Section 2 */}
          <div className="space-y-3">
            <h3 className="font-bold text-lg text-gray-900 border-b border-gray-200 pb-2">Dobno Ograničenje</h3>
            <div className="space-y-3 text-gray-700 leading-relaxed">
              <p>
                Ova stranica je za osobe od 18 godina ili starije. Korištenjem naše stranice potvrđujete da ispunjavate
                ovaj uvjet.
              </p>
              <p>
                Kockanje bi trebalo biti samo za zabavu. Nikada se ne kockajte s novcem koji si ne možete priuštiti
                izgubiti.
              </p>
              <p>Ako se borite s problemima kockanja, potražite pomoć od stručnih službi podrške.</p>
            </div>
          </div>

          {/* Close button */}
          <div className="pt-2">
            <button
              onClick={onClose}
              className="w-full bg-gray-900 hover:bg-gray-800 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
            >
              Razumijem
            </button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
