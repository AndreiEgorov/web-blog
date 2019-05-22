<template>
  <section class="posts-list">
    <PostPreview
      id="1"
      :is-admin="isAdmin"
      title="First Post"
      previewText="This is first Post preview"
      thumbnail="https://zdnet1.cbsistatic.com/hub/i/2018/01/26/b4fe5bfc-6e3b-4575-b8db-f06caadc1a71/b54b41fb82647ceee2c18a6912f0e8db/tech-transport-future-intro.jpg"
    />
    <PostPreview
      id="2"
      :is-admin="isAdmin"
      title="Second Post"
      previewText="This is second Post preview"
      thumbnail="https://zdnet1.cbsistatic.com/hub/i/2018/01/26/b4fe5bfc-6e3b-4575-b8db-f06caadc1a71/b54b41fb82647ceee2c18a6912f0e8db/tech-transport-future-intro.jpg"
    />
    <PostPreview
      id="3"
      :is-admin="isAdmin"
      title="Third Post"
      previewText="This is third Post preview"
      thumbnail="https://zdnet1.cbsistatic.com/hub/i/2018/01/26/b4fe5bfc-6e3b-4575-b8db-f06caadc1a71/b54b41fb82647ceee2c18a6912f0e8db/tech-transport-future-intro.jpg"
    />

  </section>
</template>
<script>
import PostPreview from '~/components/Posts/PostPreview.vue'
  export default {
    name: "PostList",

    components: {
      PostPreview
    },
    props:{
      isAdmin:{
        type:Boolean,
        default: false
      }
    }

  }
</script>

<style scoped>
  .posts-list {
    display: flex;
    padding: 20px;
    box-sizing: border-box;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
  }
</style>
