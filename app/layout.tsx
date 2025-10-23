import type React from "react"
import type { Metadata } from "next"
import { Inter, Merriweather, Roboto_Mono } from "next/font/google"
import "./globals.css"
import { HrvatskaBettingHeader } from "@/components/hrvatska-betting-header"
import { HrvatskaBettingFooter } from "@/components/hrvatska-betting-footer"
import { HrvatskaCookieBanner } from "@/components/hrvatska-cookie-banner"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

const merriweather = Merriweather({
  weight: ["300", "400", "700", "900"],
  subsets: ["latin"],
  variable: "--font-merriweather",
})

const robotoMono = Roboto_Mono({
  subsets: ["latin"],
  variable: "--font-roboto-mono",
})

export const metadata: Metadata = {
  title: "Stranice Klađenja Hrvatska - Najbolje Kladionice 2025 | stranicekladenjehrvatska.com",
  description:
    "Stručne recenzije najboljih stranica za sportsko klađenje u Hrvatskoj 2025. Usporedite bonuse, kvote i sigurnost licenciranih kladionica. Odgovorno klađenje 18+.",
  keywords: [
    "stranice klađenja hrvatska",
    "kladionice hrvatska 2025",
    "online klađenje hrvatska",
    "najbolje kladionice",
    "sportsko klađenje",
    "nogometno klađenje hrvatska",
    "bonusi kladionice",
    "legalne kladionice hrvatska",
    "usporedba kladionica",
    "sigurno klađenje",
    "odgovorno klađenje",
    "licencirane kladionice",
  ],
  authors: [{ name: "stranicekladenjehrvatska.com" }],
  creator: "stranicekladenjehrvatska.com",
  publisher: "stranicekladenjehrvatska.com",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "hr_HR",
    url: "https://stranicekladenjehrvatska.com",
    siteName: "stranicekladenjehrvatska.com",
    title: "Stranice Klađenja Hrvatska - Najbolje Kladionice 2025",
    description:
      "Stručne recenzije najboljih stranica za sportsko klađenje u Hrvatskoj. Usporedite bonuse, kvote i sigurnost licenciranih kladionica.",
    images: [
      {
        url: "https://stranicekladenjehrvatska.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Stranice Klađenja Hrvatska",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Stranice Klađenja Hrvatska - Najbolje Kladionice 2025",
    description: "Stručne recenzije najboljih stranica za sportsko klađenje u Hrvatskoj.",
    images: ["https://stranicekladenjehrvatska.com/og-image.jpg"],
  },
  alternates: {
    canonical: "https://stranicekladenjehrvatska.com",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="hr">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <meta name="theme-color" content="#171796" />
        <link rel="canonical" href="https://stranicekladenjehrvatska.com" />
      </head>
      <body className={`${inter.variable} ${merriweather.variable} ${robotoMono.variable} font-sans`}>
        <HrvatskaBettingHeader />
        {children}
        <HrvatskaBettingFooter />
        <HrvatskaCookieBanner />
      </body>
    </html>
  )
}
