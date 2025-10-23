export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-croatia-blue via-journal-charcoal to-croatia-red py-20 md:py-32">
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
              Vaš Pouzdani Vodič Kroz Svijet Klađenja
            </h1>
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed">
              Otkrijte najbolje kladionice u Hrvatskoj uz stručne analize, iskrene recenzije i ekskluzivne bonuse
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16 md:py-24 max-w-6xl">
        {/* Mission Statement */}
        <div className="mb-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block px-4 py-2 bg-croatia-blue/10 text-croatia-blue font-bold rounded-full mb-4">
                NAŠA MISIJA
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Transparentnost. Pouzdanost. Stručnost.
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                stranicekladenjehrvatska je nastao iz potrebe za iskrenim i nepristranim izvorom informacija o online
                kladionicama u Hrvatskoj. Umjesto marketinških floskula, nudimo vam stvarne podatke temeljene na
                detaljnim testiranjima i analizi.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Naš cilj je jednostavan: pomoći vam pronaći kladionicu koja najbolje odgovara vašim potrebama i
                zaštititi vas od nepouzdanih operatera.
              </p>
            </div>
            <div className="bg-white rounded-2xl shadow-xl p-8 border-t-4 border-croatia-red">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-croatia-blue/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl font-bold text-croatia-blue">1</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-xl mb-2">Detaljno Testiranje</h3>
                    <p className="text-gray-600">Svaka kladionica prolazi kroz 200+ provjera prije objave</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-croatia-red/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl font-bold text-croatia-red">2</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-xl mb-2">Redovita Ažuriranja</h3>
                    <p className="text-gray-600">Dnevno pratimo promjene kvota, bonusa i usluga</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-journal-gold/20 flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl font-bold text-journal-gold">3</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-xl mb-2">Korisnička Zaštita</h3>
                    <p className="text-gray-600">Promoviranje odgovornog klađenja i sigurnih praksi</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* What We Do */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <div className="inline-block px-4 py-2 bg-croatia-red/10 text-croatia-red font-bold rounded-full mb-4">
              ŠTO RADIMO
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Naše Usluge</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Sve što trebate znati o klađenju na jednom mjestu</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-shadow border-b-4 border-croatia-blue">

              <h3 className="text-2xl font-bold mb-4 text-gray-900">Recenzije Kladionica</h3>
              <p className="text-gray-600 leading-relaxed">
                Detaljne analize svih licenciranih kladionica u Hrvatskoj. Testiramo sve - od registracije do isplate
                dobitaka.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-shadow border-b-4 border-croatia-red">

              <h3 className="text-2xl font-bold mb-4 text-gray-900">Ekskluzivni Bonusi</h3>
              <p className="text-gray-600 leading-relaxed">
                Pregovaramo posebne ponude za naše korisnike. Dobijete više nego što biste direktno na stranici
                kladionice.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-shadow border-b-4 border-journal-gold">

              <h3 className="text-2xl font-bold mb-4 text-gray-900">Usporedbe Kvota</h3>
              <p className="text-gray-600 leading-relaxed">
                Pratimo kvote na najpopularnije događaje i pokazujemo vam gdje dobijete najbolju vrijednost za svoj
                ulog.
              </p>
            </div>
          </div>
        </div>

        {/* Our Team */}
        <div className="mb-20 bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-12 md:p-16 text-white">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-block px-4 py-2 bg-white/10 text-white font-bold rounded-full mb-4">NAŠ TIM</div>
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Stručnjaci Iza Platforme</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white/5 backdrop-blur rounded-xl p-6 border border-white/10">
                <h3 className="text-2xl font-bold mb-3 text-journal-gold">Analitički Tim</h3>
                <p className="text-white/80 leading-relaxed">
                  Naši analitičari imaju preko 15 godina iskustva u industriji sportskog klađenja. Svakodnevno prate
                  tržište, testiraju platforme i analiziraju podatke kako bi vam donijeli najpreciznije informacije.
                </p>
              </div>

              <div className="bg-white/5 backdrop-blur rounded-xl p-6 border border-white/10">
                <h3 className="text-2xl font-bold mb-3 text-journal-gold">Tehnički Stručnjaci</h3>
                <p className="text-white/80 leading-relaxed">
                  Sigurnost je prioritet. Naš tehnički tim provjerava enkripciju, metode plaćanja i zaštitu podataka
                  svake kladionice prije nego što je preporučimo.
                </p>
              </div>

              <div className="bg-white/5 backdrop-blur rounded-xl p-6 border border-white/10">
                <h3 className="text-2xl font-bold mb-3 text-journal-gold">Sportski Eksperti</h3>
                <p className="text-white/80 leading-relaxed">
                  Poznavanje sporta je ključno. Naši eksperti prate sve od nogometa do tenisa, omogućujući vam uvid u
                  najbolje tržišta i prilike za klađenje.
                </p>
              </div>

              <div className="bg-white/5 backdrop-blur rounded-xl p-6 border border-white/10">
                <h3 className="text-2xl font-bold mb-3 text-journal-gold">Korisnička Podrška</h3>
                <p className="text-white/80 leading-relaxed">
                  Naš tim za podršku dostupan je putem emaila za sva vaša pitanja. Odgovaramo brzo i detaljno, jer vaše
                  zadovoljstvo je naš uspjeh.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Methodology */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <div className="inline-block px-4 py-2 bg-journal-gold/20 text-journal-gold font-bold rounded-full mb-4">
              METODOLOGIJA
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Kako Ocjenjujemo</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Naš sustav ocjenjivanja temelji se na objektivnim kriterijima i stvarnim testiranjima
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="grid md:grid-cols-5 divide-y md:divide-y-0 md:divide-x divide-gray-200">
              <div className="p-8 text-center hover:bg-gray-50 transition-colors">
                <div className="text-4xl font-bold text-croatia-blue mb-2">40%</div>
                <div className="font-bold text-lg mb-2">Sigurnost</div>
                <p className="text-sm text-gray-600">Licence, regulacija, zaštita podataka</p>
              </div>
              <div className="p-8 text-center hover:bg-gray-50 transition-colors">
                <div className="text-4xl font-bold text-croatia-red mb-2">25%</div>
                <div className="font-bold text-lg mb-2">Ponuda</div>
                <p className="text-sm text-gray-600">Sportovi, tržišta, live klađenje</p>
              </div>
              <div className="p-8 text-center hover:bg-gray-50 transition-colors">
                <div className="text-4xl font-bold text-journal-gold mb-2">20%</div>
                <div className="font-bold text-lg mb-2">Kvote</div>
                <p className="text-sm text-gray-600">Konkurentnost i margine</p>
              </div>
              <div className="p-8 text-center hover:bg-gray-50 transition-colors">
                <div className="text-4xl font-bold text-gray-700 mb-2">10%</div>
                <div className="font-bold text-lg mb-2">Korisničko Iskustvo</div>
                <p className="text-sm text-gray-600">Dizajn, brzina, mobilna verzija</p>
              </div>
              <div className="p-8 text-center hover:bg-gray-50 transition-colors">
                <div className="text-4xl font-bold text-gray-700 mb-2">5%</div>
                <div className="font-bold text-lg mb-2">Bonusi</div>
                <p className="text-sm text-gray-600">Uvjeti i realna vrijednost</p>
              </div>
            </div>
          </div>
        </div>

        {/* Responsible Gambling */}
        <div className="bg-gradient-to-r from-red-50 to-orange-50 rounded-2xl p-12 border-l-8 border-red-500">
          <div className="max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Odgovorno Klađenje</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Klađenje je zabava, ali može postati problem. stranicekladenjehrvatska aktivno promovira odgovorno
              klađenje i surađuje s organizacijama koje pružaju pomoć.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Kladite se samo novcem koji možete priuštiti izgubiti. Postavite limite. Tražite pomoć ako osjećate da
              gubite kontrolu.
            </p>
            <div className="flex flex-wrap gap-4">
              <span className="px-4 py-2 bg-white rounded-lg shadow text-sm font-medium">18+</span>
              <span className="px-4 py-2 bg-white rounded-lg shadow text-sm font-medium">Postavi Limite</span>
              <span className="px-4 py-2 bg-white rounded-lg shadow text-sm font-medium">Traži Pomoć</span>
              <span className="px-4 py-2 bg-white rounded-lg shadow text-sm font-medium">Igraj Odgovorno</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}
