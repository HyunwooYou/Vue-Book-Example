<template>
  <div class="container">
    <div class="content">
      <div class="msg">{{ msg }}</div>
      <div class="_custom1">Hello!</div>
      <div class="_custom2">World!</div>
      <div class="hello-mixin">Flex</div>
    </div>
  </div>  
</template>

<script>
  export default {
    name: "index",

  }
</script>

<style lang="scss" scoped>
@import "../../common/style/_theme.scss";
@import "../../common/style/_mixin.scss";

  .container {
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
</style>
