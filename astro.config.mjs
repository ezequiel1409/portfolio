// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
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
    react(),
    tailwind({ applyBaseStyles: false }),
    sitemap(),
  ],
  image: {
    // sharp para optimizar imágenes a WebP/AVIF automáticamente
    service: { entrypoint: 'astro/assets/services/sharp' },
  },
  compressHTML: true,
  build: {
    // Un solo inline CSS pequeño + chunks JS mínimos
    inlineStylesheets: 'auto',
  },
  vite: {
    build: {
      cssMinify: true,
      rollupOptions: {
        output: {
          // Chunks separados solo para React (theme toggle = único componente interactivo)
          manualChunks: {
            react: ['react', 'react-dom'],
          },
        },
      },
    },
  },
});
