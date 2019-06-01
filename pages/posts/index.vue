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
    // middleware takes a string of a filename of middleware
    middleware: ['log', 'auth'],
    computed: {
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
