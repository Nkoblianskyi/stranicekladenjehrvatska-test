export interface BettingSite {
  id: number
  name: string
  logo: string
  bonus: string
  dopBonus?: string
  url: string
  rating: number
  stars: number
  reviews: number
  badges: string[]
  terms: string
  isTopRating?: boolean
  isTopLine?: boolean
  isPopular?: boolean
  isTrending?: boolean
}

export const bettingSites: BettingSite[] = [

  {
    id: 1,
    name: "SuperSport",
    logo: "/supersport.png", // Changed from .svg to .jpg
    bonus: "Do 100€",
    url: "https://www.supersport.hr/",
    rating: 9.7,
    stars: 5,
    reviews: 6541,
    badges: ["NAJBOLJA OCJENA", "VRHUNSKI IZBOR"],
    terms: "18+ • Bezpečna platforma • Provjereno • Igrajte odgovorno",
    isPopular: true,
    isTrending: true,
  },

  {
    id: 2,
    name: "Germania Sport",
    logo: "/germania.svg", // Changed from .svg to .jpg
    bonus: "Cash Out na Klađenju Uživo",
    url: "https://www.germaniasport.hr/",
    rating: 9.6,
    stars: 5,
    reviews: 4785,
    badges: ["POPULARNO", "TREND"],
    terms: "18+ • Sigurna igra • Provjereno • Primjenjuju se uvjeti",
    isPopular: true,
    isTrending: true,
  },
  {
    id: 3,
    name: "PSK",
    logo: "/psk.webp", // Changed from .svg to .jpg
    bonus: "Dvaput Je Dvaput 2x100€",
    dopBonus: "",
    url: "https://www.psk.hr/",
    rating: 9.4,
    stars: 5,
    reviews: 7412,
    badges: ["TREND"],
    terms: "18+ • Odgovorno klađenje • Licencirano • Vrijede T&C",
    isTrending: true,
  },
  {
    id: 4,
    name: "Favbet",
    logo: "/favbet.svg", // Changed from .svg to .jpg
    bonus: "Do 300€",
    dopBonus: "+ 30€ Oklade Bez Rizika",
    url: "https://www.favbet.hr/",
    rating: 9.2,
    stars: 5,
    reviews: 4687,
    badges: [],
    terms: "18+ • Odgovorno klađenje • Licencirano • Primjenjuju se T&C",

  },

]
