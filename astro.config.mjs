// @ts-check
import { defineConfig } from 'astro/config'
import sitemap from '@astrojs/sitemap'
import react from '@astrojs/react'
import tailwindcss from '@tailwindcss/vite'

import cloudflare from '@astrojs/cloudflare';

// https://astro.build/config
export default defineConfig({
  site: 'https://dondeayudarvenezuela.com',
  output: 'static',
  integrations: [
    sitemap({
      serialize(item) {
        item.lastmod = new Date().toISOString()
        return item
      },
    }),
    react(),
  ],

  vite: {
    plugins: [tailwindcss()],
  },

  adapter: cloudflare(),
})