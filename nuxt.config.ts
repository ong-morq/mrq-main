export default defineNuxtConfig({
  // SSR trebuie să fie true pentru ca generatorul să poată "scana" paginile
  ssr: true,

  nitro: {
    preset: 'cloudflare-pages',
    // Prerendering se asigură că paginile din /content sunt generate ca fișiere statice
    prerender: {
      routes: ['/'],
      crawlLinks: true
    }
  },

  modules: [
    '@nuxt/content',
    'vuetify-nuxt-module',
    '@nuxtjs/i18n'
  ],

  content: {
    documentDriven: false
  },

  vuetify: {
    vuetifyOptions: {
      theme: {
        defaultTheme: 'morquioTheme',
        themes: {
          morquioTheme: {
            colors: {
              primary: '#5C7DA5',
              secondary: '#8EB19D',
              background: '#FDFDFD',
              surface: '#FFFFFF',
            }
          }
        }
      }
    }
  },

  i18n: {
    locales: [
      { code: 'ro', iso: 'ro-RO', name: 'Română', file: 'ro.json' }
    ],
    lazy: true,
    langDir: 'locales',
    defaultLocale: 'ro',
    strategy: 'prefix_except_default', // Mai sigur pentru SEO și rute statice
    detectBrowserLanguage: false
  },

  devtools: { enabled: true }
})