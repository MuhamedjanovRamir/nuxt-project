
export default defineNuxtConfig({
  devtools: { enabled: false },
  app: {
    baseURL: '/nuxt-project/',
  },
  css: ['~/assets/styles/main.scss'],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "~/assets/styles/variables.scss" as *;'
        }
      }
    }
  },
})
