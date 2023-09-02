import type { Link } from "@/lib/links"
import { Button } from "../ui/button"

interface NavigationProps {
  links: Link[],
  active?: string
}

const isExternal = (href: string) => href.startsWith("https://")

export const DesktopLinks: React.FC<NavigationProps> = ({ links, active }) => {
  return <nav className="hidden sm:flex items-center">
    {links.map(({ title, href }) => (
      <Button asChild variant="ghost" className={href !== active ? "text-foreground/60" : ""}>
        <a
          key={href} 
          href={href} 
          title={title} 
          target={isExternal(href) ? "_blank" : undefined}
          className={isExternal(href) ? "after:content-['↗'] after:ml-1": ""}>{title}</a>
      </Button>
    ))}
  </nav>
}
