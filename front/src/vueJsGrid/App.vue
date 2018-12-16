<template>
  <div id="app">
    Hello vue-js-grid
  </div>
</template>

<script>
  export default {
    name: 'app',
    components: {

    },
    data () {

    },
    methods: {
      click ({ items, index }) {

      },
      change (event) {
        console.log('change', event);
      },
      remove (event) {
        console.log('remove', event);
      },
      sort (event) {
        console.log('sort', event);
      }
    }
  }
</script>

<style>
  #app {
    text-align: center;
    margin-top: 50px;
  }
</style>
