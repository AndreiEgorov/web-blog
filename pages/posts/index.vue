<template>
  <div class="posts-page">
    <PostList :posts="loadedPosts"/>
  </div>
</template>

<script>
  import PostList from '~/components/Posts/PostList.vue'

  export default {
    name: "index",
    components: {
      PostList
    },

    fetch(context) {
      to only fetch if (aka prepopulate store state) if there is nothing in it
      if(context.store.state.loadedPosts.length > 0) {
        return null
      }
      return new Promise((resolve, reject) => {
        // in case of successful resolve the below happens

        setTimeout(() => {

          resolve({
            loadedPosts: [
              {
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

              }
            ]
          })
        }, 2000)
        // in case of reject the below happens and nuxt error page comes up
        // reject(new Error())
      }).then(data => {
          // access store via context since inside fetch you dont have access to "this"
        context.store.commit('setPosts', data.loadedPosts)
        }

      ).catch(e => {
        //context.error will bring up the nuxt error page up
        context.error(e)
      });
    },
   computed:{
      loadedPosts() {
        return this.$store.getters.loadedPosts
      }
   }

  }
</script>

<style scoped>
  .posts-page {
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>
