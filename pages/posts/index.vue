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
    // callback func is needed to let asyncData know when we are finished.
    // context contains plenty of useful parameters for check here for more: https://nuxtjs.org/api/context/
    asyncData(context, callback) {
      setTimeout(() => {
        console.log("CONTEXT", context)
        // null is to indicate that there is no error
        callback(null, {
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
