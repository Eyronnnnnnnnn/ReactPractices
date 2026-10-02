import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  // Prevent inheriting the parent project's Tailwind v3 PostCSS configuration.
  css: { postcss: { plugins: [] } },
})
