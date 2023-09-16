import react from "@astrojs/react"
import tailwind from "@astrojs/tailwind"
import vercel from "@astrojs/vercel/serverless"
import { defineConfig } from "astro/config"

// https://astro.build/config
export default defineConfig({
  site: "https://vhn.vercel.app",
  integrations: [
    react(),
    tailwind({
      applyBaseStyles: false
    })
  ],
  output: "hybrid",
  adapter: vercel({
    webAnalytics: {
      enabled: true
    }
  })
})
