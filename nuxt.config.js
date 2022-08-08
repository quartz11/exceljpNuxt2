
export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "excellence-jp",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/Excel_logo.ico" }],
    script: [{ src: 'https://code.jquery.com/jquery-3.6.0.min.js' },],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ["@/assets/css/main.css"],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: ["~/components"],

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: ["@nuxtjs/fontawesome", "@nuxt/postcss8"],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    "@nuxtjs/i18n",
  ],
  target: "static",

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {},
      },
    },
  },

  fontawesome: {
    icons: {
      solid: true,
      brands: true,
    },
  },

  i18n: {
    locales: [
      {
        code: "jp",
        file: "jp.js",
      },
      {
        code: "en",
        file: "en.js",
      },
      {
        code: "th",
        file: "th.js",
      },
      {
        code: "cn",
        file: "cn.js",
      },
    ],
    // silentFallbackWarn: true,
    langDir: "assets/lang/",
    defaultLocale: "en",
    vueI18n: {
      fallbackLocale: "en",
    },
  },
};
