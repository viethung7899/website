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
}

export function Navigation({ links }: NavigationProps) {
  return (
    <NavigationMenu className="ml-2">
      <NavigationMenuList>
        {/* Mobile version */}
        <NavigationMenuItem className="sm:hidden">
          <NavigationMenuTrigger>{"Home"}</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-40">
              {links.map(({ title, href }) => (
                <li key={href}>
                  <NavigationMenuLink asChild className={cn(
                    buttonVariants({ variant: "ghost", className: "rounded-none" }),
                    "justify-start text-foreground/60"
                  )}>
                    <a href={href} className="w-full">
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
              "text-foreground/60 hover:text-foreground"
            )}>
              <a href={href}>{title}</a>
            </NavigationMenuLink>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  )
}

