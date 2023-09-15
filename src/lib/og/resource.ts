import { readFileSync } from "node:fs"
import type { Font } from "satori"

export const imageBase64 = readFileSync(
  "src/assets/og-background.png"
).toString("base64")
const regular = readFileSync("src/assets/fonts/Inter-Regular.woff")
const semibold = readFileSync("src/assets/fonts/Inter-SemiBold.woff")
const bold = readFileSync("src/assets/fonts/Inter-Bold.woff")

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
  },
  {
    name: "Inter",
    data: bold,
    weight: 700
  }
] satisfies Font[]
