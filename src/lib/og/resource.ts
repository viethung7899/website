import { readFileSync } from "node:fs"
import type { Font } from "satori"

export const background = readFileSync("src/assets/og-background.png").toString(
  "base64"
)
export const profile = readFileSync("src/assets/me.png").toString("base64")
const regular = readFileSync("src/assets/fonts/Inter-Regular.woff")
const semibold = readFileSync("src/assets/fonts/Inter-SemiBold.woff")

export const fonts = [
  {
    name: "Inter",
    data: regular,
    weight: 400
  },
  {
    name: "Inter",
    data: semibold,
    weight: 600
  }
] satisfies Font[]
