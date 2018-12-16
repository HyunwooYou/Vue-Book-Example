<template>
  <div class="container">
    <div class="content">
      <div class="title"></div>
      <div></div>
    </div>
  </div>
</template>

<script>
    export default {
        name: 'my-header'
    }
</script>

<style lang="scss" scoped>
  @import "../../style/_mixin.scss";

  .container {
    @include _flex(row);
    width: 80%;
    margin: 0 auto;
    height: 100px;
    line-height: 100px;
    background-color: darkslategray;

    .content {
      .title {
        text-align: center;
        font-size: 30px;
        color: white;
        list-style: none;
      }
    }
  }
</style>
