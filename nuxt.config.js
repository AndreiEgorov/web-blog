import pkg from './package'

export default {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: "my cool Web Dev Blog" }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto+Mono|Source+Sans+Pro' }

    ]
  },

  /*
  ** Customize the progress-bar color aka loading bar
  */
  loading: { color: '#fa923f', failedColor:"red", height: "10px", duration: 5000 },
  // if you have an spa and not universal then use loading indicator to get a spinner
  // loadingIndicator: {
  //   name: "circle",
  //   color: "#fa923f"
  // },
  /*
  ** Global CSS
  */
  css: [
    "~assets/styles/main.css"
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
  ],

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
    }
  },
  //set own env variables
  env:{
    fbAPIKey: 'AIzaSyBHtgq6Z_VWVXXkEu39_VoADrvrs0DWMrI',
    baseUrl: process.env.BASE_URL ||  "https://web-blog-50516.firebaseio.com"
  },
  // switch root directory if needed; make sure there are your node modules
  // rootDir: '/',

  // override some settings of the nuxt router
  router:{
    // middleware attached here will run on all routes
    middleware: "log"

    //bunch of properties inside => see nuxt docs
    // ...

    // extendRoutes(routes, resolve){
    //   // routes are routes generated by nuxt
    //   // "pages" page will load on every page
    //   routes.push({
    //     path:"*",
    //     compoente: resolve(__dirname, 'pages/index.vue')
    //
    //   })
    // },

    // define a class to an active link
    // linkActiveClass: 'active'

  },
  //animation during route change
  transition:{
    name: 'fade',
    mode: 'out-in'
  }

}

