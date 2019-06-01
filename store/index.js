import Vuex from "vuex";
import axios from "axios";

const createStore = () => {
  return new Vuex.Store({
    state: {
      loadedPosts: [],
      token: null
    },
    mutations: {
      setPosts(state, posts) {
        state.loadedPosts = posts;
      },
      addPost(state, post) {
        state.loadedPosts.push(post)
      },

      editPost(state, editedPost) {
        const postIndex = state.loadedPosts.findIndex(
          post => post.id === editedPost.id
        );
        state.loadedPosts[postIndex] = editedPost
      },
      setToken(state, token) {
        state.token = token;
      },
      clearToken(state) {
        state.token = null
      }
    },
    actions: {
      nuxtServerInit(vuexContext, context) {
        return axios
        // grab base url from process env after setting it up in nuxt config
          .get(process.env.baseUrl + "/posts.json")
          .then(res => {
            const postsArray = [];
            for (const key in res.data) {
              postsArray.push({...res.data[key], id: key});
            }
            vuexContext.commit("setPosts", postsArray);
          })
          .catch(e => context.error(e));
      },
      addPost(vuexContext, post) {
        const createdPost = {
          ...post,
          updatedDate: new Date()
        }
        console.log("My post", post)
        return axios
          .post(`https://web-blog-50516.firebaseio.com/posts.json?auth=${vuexContext.state.token}`, createdPost)
          .then(result => {
            vuexContext.commit('addPost', {...createdPost, id: result.data.name})
          })
          .catch(e => console.log(e));
      },
      editPost(vuexContext, editedPost) {
        return axios.put(`https://web-blog-50516.firebaseio.com/posts/${editedPost.id}.json?auth=${vuexContext.state.token}`, editedPost)

          .then(res => {
            vuexContext.commit('editPost', editedPost)
          })
          .catch(e => console.log(e))
      },
      setPosts(vuexContext, posts) {
        vuexContext.commit("setPosts", posts);
      },

      authenticateUser(vuexContext, authData) {
        let authUrl = `https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=${process.env.fbAPIKey}`;
        if (!authData.isLogin) {
          authUrl = `https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=${process.env.fbAPIKey}`;
        }

        return axios.post(authUrl, {
          email: authData.email,
          password: authData.password,
          returnSecureToken: true,
        })
          .then(result => {
            console.log('RESULT', result);
            vuexContext.commit('setToken', result.data.idToken);
            console.log("EXPIRES IN", result.data.expiresIn)
            // sinse setTimeout takes time in ms => * 1000
            localStorage.setItem('token', result.data.idToken);
            localStorage.setItem('tokenExpiration', new Date().getTime() + result.data.expiresIn * 1000)
            vuexContext.dispatch('setLogoutTimer', 3600 * 1000)
          })
          .catch(e => console.log(e))
      },
      setLogoutTimer(vuexContext, duration) {
        setTimeout(() => {
          vuexContext.commit("clearToken")
        }, duration);

      },
      initAuth(vuexContext){
        const token  = localStorage.getItem("token");
        const expirationDate =  localStorage.getItem("tokenExpiration")
        console.log({
          token,
          expirationDate
        });

        if(new Date().getTime() > +expirationDate || !token){
          return;
        }

        vuexContext.commit("setToken", token)
        vuexContext.dispatch("setLogoutTimer", +expirationDate - new Date().getTime())
      }

    },
    getters: {
      loadedPosts(state) {
        return state.loadedPosts;
      },
      isAuthenticated(state) {
        return state.token != null;
      }
    }
  });
};

export default createStore;
