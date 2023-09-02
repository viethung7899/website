import { Moon, Sun } from "lucide-react"
import { Button } from "../ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "../ui/dropdown-menu"

type Theme = "system" | "light" | "dark"

const setTheme = (theme: Theme) => () => {
  if (theme === "dark" || (theme === "system" && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
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
        <Button size="icon" variant="ghost">
          <Sun className="dark:hidden w-4 h-4" />
          <Moon className="hidden dark:block w-4 h-4" />
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