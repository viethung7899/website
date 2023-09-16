import react from "@astrojs/react"
import tailwind from "@astrojs/tailwind"
import vercel from "@astrojs/vercel/serverless"
import { defineConfig } from "astro/config"
import svelte from "@astrojs/svelte"

// https://astro.build/config
export default defineConfig({
  site: "https://vhn.vercel.app",
  integrations: [
    react(),
    tailwind({
      applyBaseStyles: false
    }),
    svelte()
  ],
  output: "hybrid",
  adapter: vercel({
    webAnalytics: {
      enabled: true
    }
  })
})
