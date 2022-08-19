export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'idaproject-test',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: 'data:image/png;base64,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' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/sass/global-styles.sass'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios'
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/'
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
