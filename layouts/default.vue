<template>
  <div>
    <TheHeader @sidenavToggle="displaySidnav = !displaySidnav"/>
    <TheSidenav
      :show="displaySidnav"
      @close="displaySidnav= false"
    />
    <nuxt />
  </div>
</template>
<script>
  import TheHeader from '~/components/Navigation/TheHeader'
  import TheSidenav from '~/components/Navigation/TheSidenav'
  export default {
    components:{
      TheHeader,
      TheSidenav
    },
    data(){
      return{
        displaySidnav: false
      }
    }
  }
</script>
<style>
  html{
    font-family: 'Roboto Mono', sans-serif;
  }
  body {
    margin: 0
  }
</style>
