export default function CookiePolicyPage() {
  return (
    <div className="bg-journal-paper min-h-screen">
      <div className="container mx-auto px-4 py-12 md:py-16 max-w-5xl">
        <article className="bg-white shadow-sm border border-journal-gray/20">
          <header className="text-center px-6 md:px-12 pt-12 pb-8 border-b-4 border-double border-journal-charcoal">
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-journal-black mb-3">
              Politika Kolačića
            </h1>
            <div className="w-24 h-1 bg-journal-gold mx-auto mb-4"></div>
            <p className="text-journal-gray font-medium">
              Posljednje ažuriranje:{" "}
              {new Date().toLocaleDateString("hr-HR", { year: "numeric", month: "long", day: "numeric" })}
            </p>
          </header>

          <div className="px-6 md:px-12 py-10 space-y-10">
            <section>
              <h2 className="font-serif text-2xl md:text-3xl font-bold text-journal-black mb-4 pb-2 border-b-2 border-journal-gold">
                Uvod u Kolačiće
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Kolačići predstavljaju male datoteke koje web stranice pohranjuju na vaš uređaj tijekom pregledavanja.
                Ove datoteke omogućavaju stranicama da zapamte vaše postavke, preferencije i aktivnosti, čineći vaše
                iskustvo pregledavanja bržim i personaliziranijim.
              </p>
              <p className="text-gray-700 leading-relaxed">
                stranicekladenjehrvatska.com koristi kolačiće isključivo u svrhu poboljšanja funkcionalnosti platforme i
                pružanja bolje korisničke usluge. Ova politika detaljno objašnjava koje vrste kolačića koristimo i kako
                možete kontrolirati njihovu upotrebu.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl md:text-3xl font-bold text-journal-black mb-4 pb-2 border-b-2 border-journal-gold">
                Svrha Korištenja Kolačića
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Na našoj platformi kolačići služe za nekoliko ključnih funkcija:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li>Održavanje sigurnosti i integriteta platforme</li>
                <li>Pamćenje vaših jezičnih i regionalnih postavki</li>
                <li>Analiza ponašanja korisnika radi poboljšanja sadržaja</li>
                <li>Personalizacija preporuka kladionica prema vašim interesima</li>
                <li>Mjerenje učinkovitosti naših informativnih kampanja</li>
                <li>Omogućavanje dijeljenja sadržaja na društvenim mrežama</li>
              </ul>
            </section>

            <section>
              <h2 className="font-serif text-2xl md:text-3xl font-bold text-journal-black mb-6 pb-2 border-b-2 border-journal-gold">
                Kategorije Kolačića
              </h2>

              <div className="space-y-6">
                <div className="border-l-4 border-croatia-blue pl-6 bg-journal-paper/30 py-4">
                  <h3 className="font-serif text-xl font-bold mb-3 text-journal-black">Nužni Kolačići</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Ovi kolačići su kritični za osnovne funkcije stranice poput navigacije i pristupa sigurnim
                    područjima. Bez njih platforma ne može funkcionirati pravilno. Ovi kolačići ne prikupljaju
                    informacije koje bi se mogle koristiti za marketing ili praćenje vaših aktivnosti na drugim
                    stranicama.
                  </p>
                </div>

                <div className="border-l-4 border-croatia-red pl-6 bg-journal-paper/30 py-4">
                  <h3 className="font-serif text-xl font-bold mb-3 text-journal-black">Analitički Kolačići</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Pomoću ovih kolačića prikupljamo agregirane podatke o tome kako posjetitelji koriste našu platformu.
                    Informacije poput broja posjeta, izvora prometa i najpopularnijih stranica pomažu nam optimizirati
                    sadržaj i poboljšati korisničko iskustvo. Svi podaci su anonimizirani i ne mogu se povezati s vašim
                    identitetom.
                  </p>
                </div>

                <div className="border-l-4 border-journal-charcoal pl-6 bg-journal-paper/30 py-4">
                  <h3 className="font-serif text-xl font-bold mb-3 text-journal-black">Funkcionalni Kolačići</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Ovi kolačići omogućavaju platformi da zapamti vaše izbore i pruži poboljšane, personalizirane
                    značajke. Na primjer, mogu zapamtiti vaš odabir jezika, regiju ili preferencije prikaza. Informacije
                    koje prikupljaju mogu biti anonimizirane i ne prate vašu aktivnost na drugim web stranicama.
                  </p>
                </div>

                <div className="border-l-4 border-journal-gold pl-6 bg-journal-paper/30 py-4">
                  <h3 className="font-serif text-xl font-bold mb-3 text-journal-black">Marketinški Kolačići</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Ovi kolačići prate vašu aktivnost na našoj platformi kako bi nam pomogli prikazati relevantan
                    sadržaj i preporuke. Mogu se koristiti za mjerenje učinkovitosti kampanja i ograničavanje broja puta
                    kada vidite određeni sadržaj. Uvijek možete onemogućiti ove kolačiće u postavkama.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="font-serif text-2xl md:text-3xl font-bold text-journal-black mb-4 pb-2 border-b-2 border-journal-gold">
                Kolačići Vanjskih Servisa
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                stranicekladenjehrvatska.com koristi usluge pouzdanih vanjskih partnera koji također mogu postavljati
                kolačiće:
              </p>
              <ul className="list-disc list-inside space-y-3 text-gray-700 ml-4">
                <li>
                  <strong>Analitički servisi:</strong> Koristimo Google Analytics za razumijevanje ponašanja korisnika i
                  optimizaciju platforme. Ovi kolačići prikupljaju anonimizirane podatke o vašim posjetama.
                </li>
                <li>
                  <strong>Društvene mreže:</strong> Integracije s društvenim mrežama omogućavaju vam dijeljenje
                  sadržaja. Ove platforme mogu postavljati vlastite kolačiće za praćenje interakcija.
                </li>
                <li>
                  <strong>Sigurnosni servisi:</strong> Koristimo sigurnosne alate za zaštitu od zlonamjernih aktivnosti
                  i osiguranje integriteta platforme.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="font-serif text-2xl md:text-3xl font-bold text-journal-black mb-4 pb-2 border-b-2 border-journal-gold">
                Kontrola nad Kolačićima
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Imate potpunu kontrolu nad kolačićima koje prihvaćate. Većina modernih preglednika omogućava upravljanje
                kolačićima kroz postavke:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li>Blokiranje svih kolačića</li>
                <li>Prihvaćanje samo kolačića s određenih stranica</li>
                <li>Brisanje kolačića nakon zatvaranja preglednika</li>
                <li>Primanje obavijesti prije postavljanja kolačića</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mt-4">
                Napomena: Onemogućavanje određenih kolačića može utjecati na funkcionalnost platforme i vaše korisničko
                iskustvo. Preporučujemo dopuštanje barem nužnih kolačića.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl md:text-3xl font-bold text-journal-black mb-4 pb-2 border-b-2 border-journal-gold">
                Ažuriranja Politike
              </h2>
              <p className="text-gray-700 leading-relaxed">
                stranicekladenjehrvatska.com zadržava pravo periodičnog ažuriranja ove politike kolačića kako bi
                odražavala promjene u tehnologiji, zakonodavstvu ili našim poslovnim praksama. Sve značajne promjene bit
                će istaknute na platformi, a datum posljednjeg ažuriranja uvijek je vidljiv na vrhu dokumenta.
              </p>
            </section>

            <section className="bg-journal-paper border-2 border-journal-gold p-8 rounded">
              <h2 className="font-serif text-2xl md:text-3xl font-bold text-journal-black mb-4">
                Pitanja o Kolačićima
              </h2>
              <p className="text-journal-gray font-medium mb-3">
                Za dodatne informacije o našoj upotrebi kolačića ili za postavljanje pitanja, kontaktirajte nas:
              </p>
              <p className="text-journal-black font-semibold">
                <a
                  href="mailto:info@stranicekladenjehrvatska.com"
                  className="text-croatia-blue hover:text-journal-gold underline transition-colors"
                >
                  info@stranicekladenjehrvatska.com
                </a>
              </p>
              <p className="text-gray-600 mt-2">Odgovaramo na sve upite u roku od 24 sata</p>
            </section>
          </div>
        </article>
      </div>
    </div>
  )
}
