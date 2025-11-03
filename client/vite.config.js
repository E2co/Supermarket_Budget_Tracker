import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      // Ensure these assets are in your client/public folder
      includeAssets: ['favicon.ico', 'apple-touch-icon.png'], 
      
      manifest: {
        name: 'Supermarket Budget Tracker',
        short_name: 'Grocery Tracker',
        description: 'Keep track of your grocery spending with ease',
        theme_color: '#10b981', // Matches your --color-primary
        background_color: '#ffffff',
        display: 'standalone', // Opens fullscreen without browser UI
        orientation: 'portrait', // Recommended for mobile budget apps
        scope: '/',
        start_url: '/',
        icons: [
          {
            src: '/pwa-72x72.png',
            sizes: '72x72',
            type: 'image/png'
          },
          {
            src: '/pwa-192x192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: '/pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any'
          },
          {
            src: '/maskable-icon-512x512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'maskable' // For Android adaptive icons
          }
        ]
      },
      workbox: {
        // Cache all static assets (JS, CSS, HTML, images)
        globPatterns: ['**/*.{js,css,html,ico,png,svg,woff,woff2}'], 
        // Strategy for external assets like Google Fonts
        runtimeCaching: [
          {
            urlPattern: /^https:\/\/fonts\.googleapis\.com\/.*/i,
            handler: 'CacheFirst',
            options: {
              cacheName: 'google-fonts-cache',
              expiration: {
                maxEntries: 10,
                maxAgeSeconds: 60 * 60 * 24 * 365 // 1 year
              },
              cacheableResponse: {
                statuses: [0, 200]
              }
            }
          }
        ],
        maximumFileSizeToCacheInBytes: 5 * 1024 * 1024 // 5MB
      },
      devOptions: {
        enabled: true, 
        type: 'module'
      }
    })
  ]
})