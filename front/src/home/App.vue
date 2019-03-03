<template>
  <div id="app">
    <div class="container">
      <practice></practice>
    </div>
  </div>
</template>

<script>
  import Home from './components/Home.vue';
  import Practice from './components/Practice.vue';

  export default {
    name: 'app',
    components: {
      // Home,
      Practice,
    },
    data () {
      return {
        msg: 'Home Home Home'
      }
    }
  }
</script>

<style lang="scss">
  #app {
    .container {

    }
  }
</style>
