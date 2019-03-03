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

  .container {
    bordre: 1px solid black;
    height: 100%;

    .content {
      display: flex;
      height: 1000px;

      .msg {
        font-size: 30px;
        font-weight: bold;
      }
    }
  }
</style>
