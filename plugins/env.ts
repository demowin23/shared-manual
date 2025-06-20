import { defineNuxtPlugin, useRuntimeConfig } from 'nuxt/app'

export default defineNuxtPlugin(() => {
  const config = useRuntimeConfig()
  
  return {
    provide: {
      env: {
        URL_BE: config.public.URL_BE
      }
    }
  }
})