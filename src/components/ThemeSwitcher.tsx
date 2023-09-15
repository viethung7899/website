import { Moon, Sun } from "lucide-react"
import { Button } from "./ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from "./ui/dropdown-menu"

type Theme = "system" | "light" | "dark"

const setTheme = (theme: Theme) => () => {
  if (
    theme === "dark" ||
    (theme === "system" &&
      window.matchMedia("(prefers-color-scheme: dark)").matches)
  ) {
    document.documentElement.classList.add("dark")
  } else {
    document.documentElement.classList.remove("dark")
  }

  if (typeof localStorage !== "undefined") {
    if (theme === "system") localStorage.removeItem("theme")
    else localStorage.setItem("theme", theme)
  }
}

export const ThemeSwitcher = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button size="icon" variant="secondary">
          <Sun className="h-4 w-4 dark:hidden" />
          <Moon className="hidden h-4 w-4 dark:block" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-24" align="end">
        <DropdownMenuItem onClick={setTheme("light")}>Light</DropdownMenuItem>
        <DropdownMenuItem onClick={setTheme("dark")}>Dark</DropdownMenuItem>
        <DropdownMenuItem onClick={setTheme("system")}>System</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
