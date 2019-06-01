<template>
  <div class="about-page">
    <h1> This is my About me page</h1>
    <p>About me page! About me page! About me page! About me page! About me page!</p>
    <p>About me page! About me page! About me page! About me page! About me page!</p>
    <p>About me page! About me page! About me page! About me page! About me page!</p>
    <p>About me page! About me page! About me page! About me page! About me page!</p>
  </div>
</template>

<script>
  export default {
    name: "index",
    middleware: ['check-auth', 'auth'],

  }
</script>

<style scoped>
  .about-page {
    text-align: center;
    padding: 30px
  }
</style>
