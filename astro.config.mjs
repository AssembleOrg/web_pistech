// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@tailwindcss/vite';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import partytown from '@astrojs/partytown';

// https://astro.build/config
export default defineConfig({
  site: 'https://pistech.com', // Replace with your actual domain
  integrations: [
    react(),
    sitemap(),
    partytown({
      config: {
        forward: ['dataLayer.push']
      }
    })
  ],
  vite: {
    plugins: [tailwind()],
  },
  // Performance optimizations
  build: {
    // Enable inline stylesheets for better performance
    inlineStylesheets: 'auto',
  },
  // Enable image optimization
  image: {
    service: {
      entrypoint: 'astro/assets/services/sharp',
    },
  },
  // SEO and performance settings
  compressHTML: true,
  output: 'static'
});