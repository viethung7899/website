import react from "@astrojs/react"
import tailwind from "@tailwindcss/vite"
import vercel from "@astrojs/vercel/serverless"
import { defineConfig } from "astro/config"

// https://astro.build/config
export default defineConfig({
  site: "https://vhng.dev",
  integrations: [
    react(),
  ],
  output: "hybrid",
  adapter: vercel({
    webAnalytics: {
      enabled: true
    }
  }),
  vite: {
    plugins: [tailwind()]
  }
})
