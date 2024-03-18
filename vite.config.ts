import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import svgr from "vite-plugin-svgr"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), svgr()],
  resolve: {
    alias: {
      components: "/src/components",
      features: "/src/features",
      pages: "/src/pages",
      shared: "/src/shared",
      styles: "/src/styles",
      routes: "/src/routes",
      api: "/src/api",
      store: "/src/store",
      services: "/src/services",
      assets: "/src/assets",
    },
  },
})
