<template>
  <div id="app">
    <div class="container">
      <my-header></my-header>
      <my-menu></my-menu>
      <Home></Home>
      <my-footer></my-footer>
    </div>
  </div>
</template>

<script>
  import MyHeader from '../common/components/layout/MyHeader.vue';
  import MyMenu from '../common/components/layout/MyMenu.vue';
  import Home from './components/Home.vue';
  import MyFooter from '../common/components/layout/MyFooter.vue';

  export default {
    name: 'app',
    components: {
      MyHeader,
      MyMenu,
      Home,
      MyFooter
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
      position: relative;
    }
  }
</style>
