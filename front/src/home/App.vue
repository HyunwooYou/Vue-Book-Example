<template>
  <div id="app">
    <div class="wrapper">
      <my-header></my-header>

      <div class="content">
        <div class="msg">{{ msg }}</div>
        <div class="_custom1">Hello!</div>
        <div class="_custom2">World!</div>
        <div class="hello-mixin">Flex</div>
      </div>

      <my-footer></my-footer>
    </div>
  </div>
</template>

<script>
  import MyHeader from '../common/components/layout/MyHeader.vue';
  import MyFooter from '../common/components/layout/MyFooter.vue';

  export default {
    name: 'app',
    components: { MyHeader, MyFooter },
    data () {
      return {
        msg: 'Home Home Home'
      }
    }
  }
</script>

<style lang="scss">
  @import "../common/style/_theme.scss";
  @import "../common/style/_mixin.scss";

  #app {
    text-align: center;
    color: #2c3e50;

    .wrapper {
      /*min-height: 100%;*/
      position: relative;

      .content {
        height: 1000px;

        .msg {
          font-size: 30px;
          font-weight: bold;
        }

        .hello-mixin {
          @include _flex();
        }
      }
    }
  }
</style>
