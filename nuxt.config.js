export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'frontend',
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
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~/plugins/axios.js' },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/buefy
    'nuxt-buefy',
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/axios',
    '@nuxtjs/auth-next',
  ],

  auth: {
    strategies: {
      cookie: {
        cookie: {
          name: 'csrftoken',
        },
        token: {
          required: false,
          type: false
        },
        user: {
          property: false
        },
        redirect: {
          login: '/',
          logout: '/',
          callback: false,
          home: '/protected'
        },
        endpoints: {
          // csrf: {
          //   url: 'http://localhost:8000/dj-rest-auth/csrf/', method: "post"
          // },
          login: { url: 'http://localhost:8000/dj-rest-auth/login/' },
          logout: { url: 'http://localhost:8000/dj-rest-auth/logout/' },
          user: { url: 'http://localhost:8000/dj-rest-auth/user/' },
        },
        localStorage: false,
      }
    }
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
