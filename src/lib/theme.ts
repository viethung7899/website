export type Theme = "system" | "light" | "dark"

export const getTheme = () => {
  if (typeof localStorage !== "undefined") {
    const localTheme = localStorage.getItem("theme")
    if (localTheme === "light") return "light" as Theme
    if (localTheme === "dark") return "dark" as Theme
    return "system" as Theme
  }
  return "system" as Theme
}

export const setTheme = (theme: Theme) => {
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