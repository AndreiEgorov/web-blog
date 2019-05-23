// this is classic mode store. It is depricated in Nuxt 3

import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({
    state: {
      loadedPosts: []
    },
    mutations:{
      setPosts(state, posts){
        state.loadedPosts = posts
      }
    },
    actions:{
      setPosts(vuexContext, posts){
        vuexContext.commit('setPosts', posts)
      }
    },
    getters:{
      loadedPosts(state){
        return state.loadedPosts
      }
    }
  })
}

export default createStore
