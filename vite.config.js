import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        portfolio: resolve(__dirname, 'portfolio.html'),
        services: resolve(__dirname, 'services.html'),
        contact: resolve(__dirname, 'contact.html'),
        about: resolve(__dirname, 'about.html'),
        privacy: resolve(__dirname, 'privacy.html'),
        terms: resolve(__dirname, 'terms.html'),
        // Spanish versions
        'es/index': resolve(__dirname, 'es/index.html'),
        'es/portfolio': resolve(__dirname, 'es/portfolio.html'),
        'es/services': resolve(__dirname, 'es/services.html'),
        'es/contact': resolve(__dirname, 'es/contact.html'),
        'es/about': resolve(__dirname, 'es/about.html'),
        'es/privacy': resolve(__dirname, 'es/privacy.html'),
        'es/terms': resolve(__dirname, 'es/terms.html'),
      },
    },
  },
})
