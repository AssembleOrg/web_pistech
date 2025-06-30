// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
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
});