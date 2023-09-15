import { OGMain } from "@/lib/og/image"
import { fonts, imageBase64 } from "@/lib/og/resource"
import satori from "satori"
import sharp from "sharp"

export async function GET() {
  const svg = await satori(
    OGMain({ imageBase64 }),
    {
      width: 1200,
      height: 630,
      fonts,
    },
  )

  const png = sharp(Buffer.from(svg)).png()

  return new Response(await png.toBuffer(), {
    headers: {
      "Content-Type": "image/png",
    },
  })
}