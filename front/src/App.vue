<template>
  <div id="app">
    <div>
      <h1>{{ title }}</h1>
      <h2><a href="./src/home" target="_blank">Home</a></h2>
      <h2><a href="./src/multilingual" target="_blank">Multilingual</a></h2>
      <h2><a href="./src/updateCssWithJs" target="_blank">UpdateCssWithJs</a></h2>
      <h2><a href="./src/ecmascript" target="_blank">EcmaScript</a></h2>
      <h2><a href="./src/hwBlog" target="_blank" class="mainProject">hwBlog</a></h2>
      <hr/>

      <h2><a href="./src/vuex" target="_blank">Vuex</a></h2>
      <h2><a href="./src/vueJsGrid" target="_blank">Vue-Js-Grid</a></h2>
      <h2><a href="./src/vueRouter" target="_blank">Vue-Router</a></h2>
      <h2><a href="./src/contactapp" target="_blank">Contact app</a></h2>
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

  #app {
    text-align: center;
    color: #2c3e50;

    div > h2 > .mainProject {
      padding: 5px;
      border: 2px solid rgb(0, 150, 214);
        color: rgb(0, 150, 214);
    }
  }

  a {
    color: green;
  }
</style>
