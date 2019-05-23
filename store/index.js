// this is classic mode store. It is depricated in Nuxt 3

import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({
    state: {
      loadedPosts: []
    },
    mutations: {
      setPosts(state, posts) {
        state.loadedPosts = posts
      }
    },
    actions: {
      // nuxtServerInit action will be dispatched automatically by nuxt only once to preload data into store
      nuxtServerInit(vuexContext, context) {
        return new Promise((resolve, reject) => {

          setTimeout(() => {
            vuexContext.commit('setPosts', [ {
              id: "1",
              title: "HOOHOH",
              previewText: "THIS IS  our post",
              thumbnail: "https://zdnet1.cbsistatic.com/hub/i/2018/01/26/b4fe5bfc-6e3b-4575-b8db-f06caadc1a71/b54b41fb82647ceee2c18a6912f0e8db/tech-transport-future-intro.jpg"
            },
              {
                id: "2",
                title: "SECOND POSt",
                previewText: "THIS IS  our post",
                thumbnail: "https://zdnet1.cbsistatic.com/hub/i/2018/01/26/b4fe5bfc-6e3b-4575-b8db-f06caadc1a71/b54b41fb82647ceee2c18a6912f0e8db/tech-transport-future-intro.jpg"

              }])
            resolve()
          }, 2000)
        })
      },
      setPosts(vuexContext, posts) {
        vuexContext.commit('setPosts', posts)
      }
    },
    getters: {
      loadedPosts(state) {
        return state.loadedPosts
      }
    }
  })
}

export default createStore



