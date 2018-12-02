<template>
  <div class="footer">
    <div>Common Footer</div>
  </div>
</template>

<script>
    export default {
        name: "my-footer"
    }
</script>

<style lang="scss" scoped>
  @import "../../style/_mixin.scss";

  .footer {
    width: 100%;
    padding: 10px 0;
    font-size: 30px;
    color: white;
    background-color: darkslategray;

    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
  }
</style>
