// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

// IMPORTANTE: cambiá 'portfolio' si el nombre de tu repo es distinto.
// Si usás un dominio custom (ej. ezequielgonzalez.dev), sacá el `base`
// y actualizá `site` con tu dominio.
export default defineConfig({
  site: 'https://ezequiel1409.github.io',
  base: '/portfolio',
  output: 'static',
  integrations: [
    tailwind({ applyBaseStyles: false }),
    sitemap(),
  ],
  compressHTML: true,
  build: {
    // Un solo inline CSS pequeño + chunks JS mínimos
    inlineStylesheets: 'auto',
  },
  vite: {
    build: {
      cssMinify: true,
    },
  },
});
