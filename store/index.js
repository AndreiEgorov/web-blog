// this is classic mode store. It is depricated in Nuxt 3

import Vuex from 'vuex'
import axios from 'axios'
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
       return axios.get('https://web-blog-50516.firebaseio.com/posts.json')
               .then(res => {
                 const postArray = [];
                 for (const key in res.data){
                   postArray.push({...res.data[key], id: key})
                 }
           vuexContext.commit('setPosts', postArray)
         })
         .catch(e => context.error(e))
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



