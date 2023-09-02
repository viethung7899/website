import type { Link } from "@/lib/links"
import { cn } from "@/lib/utils"
import { Button, buttonVariants } from "../ui/button"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger
} from "../ui/navigation-menu"

interface NavigationProps {
  links: Link[],
  active?: string
}

const isExternal = (href: string) => href.startsWith("https://")

export function DesktopNavigation({ links, active }: NavigationProps) {
  return <nav className="hidden sm:flex items-center">
    {links.map(({ title, href }) => (
      <Button asChild variant="ghost" className={href !== active ? "text-foreground/60" : ""}>
        <a
          key={href}
          href={href}
          title={title}
          target={isExternal(href) ? "_blank" : undefined}
          className={isExternal(href) ? "after:content-['↗'] after:ml-1" : ""}>{title}</a>
      </Button>
    ))}
  </nav>
}

export function MobileNavigation({ links, active }: NavigationProps) {
  return (
    <NavigationMenu className="sm:hidden">
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>{links.find(link => link.href === active)?.title || "Home"}</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-40">
              {links.map(({ title, href }) => (
                <li key={href} className={cn(
                  buttonVariants({ variant: "ghost" }),
                  "justify-start text-foreground/60"
                )}>
                  <NavigationMenuLink asChild>
                    <a href={href} className={isExternal(href) ? "after:content-['↗'] after:ml-1" : ""}>
                      {title}
                    </a>
                  </NavigationMenuLink>
                </li>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}

