import Link from "next/link"
import Image from "next/image"

export function HrvatskaBettingLogo() {
  return (
    <Link href="/" className="flex items-center gap-2">
      <Image src="/favicon.ico" alt="Hrvatska Betting Logo" width={32} height={32} />
      <div className="flex items-center gap-1 text-xl md:text-2xl font-bold uppercase tracking-tight">
        <span className="text-croatia-red">STRANICE</span>
        <span className="text-croatia-blue">KLAĐENJA</span>
        <span className="text-croatia-red">HRVATSKA</span>
      </div>
    </Link>
  )
}
