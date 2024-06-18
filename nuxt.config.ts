
export default defineNuxtConfig({
  devtools: { enabled: false },
  app: {
    baseURL: '/nuxt-project/',
    buildAssetsDir: 'assets',
  },
  css: ['~/assets/styles/main.scss'],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@import "~/assets/styles/variables.scss";',
        },
      },
    },
  },
})
