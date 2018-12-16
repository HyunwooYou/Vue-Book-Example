<template>
  <div id="app">
    <div>
      <h1>{{ title }}</h1>
      <h2><a href="./src/home/index.html" target="_blank">Home</a></h2>
      <h2><a href="./src/multilingual/index.html" target="_blank">Multilingual</a></h2>
      <h2><a href="./src/updateCssWithJs/index.html" target="_blank">UpdateCssWithJs</a></h2>
      <h2><a href="./src/ecmascript/index.html" target="_blank">EcmaScript</a></h2>
      <hr/>

      <h2><a href="./src/vuex/index.html" target="_blank">Vuex</a></h2>
      <h2><a href="./src/vueJsGrid/index.html" target="_blank">Vue-Js-Grid</a></h2>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'app',
    data () {
      return {
        title: 'Vue Book Code Example'
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "./common/style/_mixin.scss";
  @import "./common/style/_theme.scss";

  #app {
    text-align: center;
    color: #2c3e50;
  }

  a {
    color: green;
  }
</style>
