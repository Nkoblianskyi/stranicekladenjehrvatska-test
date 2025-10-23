import type { ReactNode } from "react"

interface PolicySectionProps {
  title: string
  children: ReactNode
  delay?: number
}

export function PolicySection({ title, children }: PolicySectionProps) {
  return (
    <div className="mb-8">
      <h2 className="text-xl md:text-2xl font-bold mb-4 text-portugal-green border-b-2 border-portugal-gold/30 pb-2">
        {title}
      </h2>
      <div className="space-y-4">{children}</div>
    </div>
  )
}

interface PolicyParagraphProps {
  children: ReactNode
}

export function PolicyParagraph({ children }: PolicyParagraphProps) {
  return <p className="text-sm md:text-base leading-relaxed text-gray-700">{children}</p>
}

interface PolicyListProps {
  items: string[]
  type?: "bullet" | "number"
}

export function PolicyList({ items, type = "bullet" }: PolicyListProps) {
  const ListComponent = type === "bullet" ? "ul" : "ol"
  const listClass = type === "bullet" ? "list-disc" : "list-decimal"

  return (
    <ListComponent className={`${listClass} pl-5 space-y-2 text-sm md:text-base text-gray-700`}>
      {items.map((item, index) => (
        <li key={index} className="leading-relaxed">
          {item}
        </li>
      ))}
    </ListComponent>
  )
}

interface PolicyLinkProps {
  href: string
  children: ReactNode
  target?: string
  rel?: string
}

export function PolicyLink({ href, children, target, rel }: PolicyLinkProps) {
  return (
    <a
      href={href}
      className="text-portugal-green hover:text-portugal-gold underline transition-colors"
      target={target}
      rel={rel}
    >
      {children}
    </a>
  )
}
