<template>
  <div class="admin-post-page">
    <section class="update-form">
      <AdminPostForm :post="loadedPost"/>
    </section>
  </div>
</template>

<script>
  import AdminPostForm from '~/components/Admin/AdminPostForm'

  export default {
    layout: 'admin',
    components: {
      AdminPostForm
    },
    data() {
      return {
        loadedPost: {
          author: "Bobos",
          title: "My good tilte",
          content: "Great Content, Thankos !!!",
          thumbnail: "https://zdnet1.cbsistatic.com/hub/i/2018/01/26/b4fe5bfc-6e3b-4575-b8db-f06caadc1a71/b54b41fb82647ceee2c18a6912f0e8db/tech-transport-future-intro.jpg"
        }
      }
    }

  }
</script>

<style scoped>
  .update-form {
    width: 90%;
    margin: 20px auto
  }

  @media (min-width: 768px) {
    .update-form {
      width: 500px
    }
  }
</style>
