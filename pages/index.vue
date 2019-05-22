<template>
  <div class="home-page">
    <section class="intro">
      <h1> Get the latest tech news!</h1>
    </section>
    <PostList :posts="loadedPosts"/>
  </div>
</template>
<script>
  import PostList from '~/components/Posts/PostList.vue'

  export default {
    components: {
      PostList
    },
    data() {
      return {
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
      }
    }
  }
</script>
<style scoped>
  .intro {
    height: 300px;
    position: relative;
    padding: 30px;
    box-sizing: border-box;
    background-image: url('~assets/images/main-page-background.jpg'); /*even it underscores the address of the image saying it cannot resolve it, it will find it*/
    background-position: center;
    background-size: cover;
  }

  .intro h1 {
    position: absolute;
    top: 10%;
    left: 5%;
    width: 90%;
    font-size: 1.5rem;
    color: black;
    background-color: rgb(211, 211, 211);
    padding: 10px;
    border-radius: 10px;
    box-shadow: 3px 3px 3px black;
    box-sizing: border-box;
    border: 1px solid black;
  }

  @media (min-width: 768px) {
    .intro h1 {
      font-size: 2rem;
    }
  }

  .featured-posts {
    display: flex;
    padding: 20px;
    box-sizing: border-box;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
  }


</style>
