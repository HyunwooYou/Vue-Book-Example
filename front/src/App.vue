<template>
  <div id="app">
    <div class="content">
      {{ title }}
      <h2><a href="http://localhost:1215/src/home/index.html" target="_blank">Home</a></h2>
      <h2><a href="http://localhost:1215/src/login/index.html" target="_blank">Login</a></h2>
      <h2><a href="http://localhost:1215/src/multilingual/index.html" target="_blank">Multilingual</a></h2>
      <h2><a href="http://localhost:1215/src/updateCssWithJs/index.html" target="_blank">UpdateCssWithJs</a></h2>
      <h2><a href="http://localhost:1215/src/ecmascript/index.html" target="_blank">EcmaScript</a></h2>
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
    @include _flex();
    // text-align: center;
    color: #2c3e50;

    .content {
      @include _flex();
      width: 700px;
      border: 1px solid black;
    }
  }

  a {
    color: green;
  }
</style>
