import { defineNuxtPlugin, useRuntimeConfig } from 'nuxt/app'

export default defineNuxtPlugin(() => {
  const config = useRuntimeConfig()
  
  return {
    provide: {
      env: {
        URL_BE: process.env.URL_BE || 'http://127.0.0.1:4000'
      }
    }
  }
}) 