import type { Link } from "@/lib/links"
import { cn } from "@/lib/utils"
import { buttonVariants } from "../ui/button"
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

export function Navigation({ links, active }: NavigationProps) {
  return (
    <NavigationMenu className="ml-2">
      <NavigationMenuList>
        {/* Mobile version */}
        <NavigationMenuItem className="sm:hidden">
          <NavigationMenuTrigger>{links.find(link => link.href === active)?.title || "Home"}</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-40">
              {links.map(({ title, href }) => (
                <li key={href}>
                  <NavigationMenuLink asChild className={cn(
                    buttonVariants({ variant: "ghost", className: "rounded-none" }),
                    "justify-start text-foreground/60"
                  )}>
                    <a href={href} className={cn(
                      "w-full",
                      isExternal(href) ? "after:content-['↗'] after:pl-1" : undefined
                    )}>
                      {title}
                    </a>
                  </NavigationMenuLink>
                </li>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        {/* Desktop version */}
        {links.map(({ title, href }) => (
          <NavigationMenuItem className="hidden sm:block">
            <NavigationMenuLink asChild className={cn(
              buttonVariants({ variant: "link" }),
              isExternal(href) ? "after:content-['↗'] after:ml-1" : undefined,
              href !== active ? "text-foreground/60 hover:text-foreground" : undefined
            )}>
              <a href={href}>{title}</a>
            </NavigationMenuLink>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  )
}

