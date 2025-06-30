// https://nuxt.com/docs/api/configuration/nuxt-config
import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  devtools: { enabled: true },
  css: [
    '~/assets/css/bootstrap.css',
    '~/assets/css/default.css',
    '~/assets/css/font-awesome.css',
    '~/assets/css/jquery.mmenu.css',
    '~/assets/css/menu_top.css',
    '~/assets/css/news.css',
    '~/assets/css/nivo-slider.css',
    '~/assets/css/product.css',
    '~/assets/css/style-build.css',
    '~/assets/css/style_menu.css',
    '~/assets/css/main.css',
    '~/assets/css/reponsive.css',
    '@fortawesome/fontawesome-free/css/all.min.css'
  ],
  modules: [
    '@pinia/nuxt',
    '@nuxt/image',
    '@nuxt/content'
  ],
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      title: 'Chung cư',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' }
      ],
      link: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: 'anonymous' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap' },
        { rel: 'icon', type: 'image/png', href: '/images/logo.png' }
      ]
    }
  },

  // Performance optimizations
  nitro: {
    compressPublicAssets: true,
    minify: true
  },

  vite: {
    build: {
      cssMinify: true,
      minify: 'terser',
      terserOptions: {
        compress: {
          drop_console: true
        }
      }
    },
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@import "@/assets/styles/variables.scss";'
        }
      }
    }
  },

  // Image optimization
  image: {
    provider: 'ipx',
    screens: {
      xs: 320,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
      xxl: 1536
    },
    presets: {
      thumbnail: {
        modifiers: {
          format: 'webp',
          width: 200,
          height: 200
        }
      },
      preview: {
        modifiers: {
          format: 'webp',
          width: 400,
          height: 300
        }
      }
    }
  },

  // PWA configuration
  pwa: {
    manifest: {
      name: 'Sổ tay chung cư',
      short_name: 'STCC',
      description: 'Thông tin bất động sản toàn quốc',
      theme_color: '#ffffff',
      icons: [
        {
          src: 'icon-72x72.png',
          sizes: '72x72',
          type: 'image/png'
        },
        {
          src: 'icon-192x192.png',
          sizes: '192x192',
          type: 'image/png'
        },
        {
          src: 'icon-512x512.png',
          sizes: '512x512',
          type: 'image/png'
        }
      ]
    },
    workbox: {
      runtimeCaching: [
        {
          urlPattern: 'https://dadiland.com/api/.*',
          handler: 'NetworkFirst',
          options: {
            cacheName: 'api-cache',
            expiration: {
              maxEntries: 100,
              maxAgeSeconds: 60 * 60 * 24 // 24 hours
            }
          }
        },
        {
          urlPattern: 'https://dadiland.com/img/.*',
          handler: 'CacheFirst',
          options: {
            cacheName: 'image-cache',
            expiration: {
              maxEntries: 100,
              maxAgeSeconds: 60 * 60 * 24 * 7 // 7 days
            }
          }
        }
      ]
    }
  },

  runtimeConfig: {
    URL_BE: process.env.URL_BE || 'http://127.0.0.1:4000',
    public: {
      URL_BE: process.env.URL_BE || 'http://127.0.0.1:4000',
    }
  }
}) 