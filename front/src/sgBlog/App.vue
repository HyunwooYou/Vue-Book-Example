<template>
  <div id="app">
    <!-- [start] header -->
    <div class="header">
      Secret Garden Blog
    </div>
    <!-- [end] header -->

    <!-- [start] menu -->
    <div class="menu">
      Menu
    </div>
    <!-- [end] menu -->

    <!-- [start] content -->
    <div class="content">
      <!-- [start] sidebar -->
      <div class="sidebar">
        Hello sidebar!
      </div>
      <!-- [start] sidebar -->

      <!-- [start] index -->
      <div class="index">
        Hello index!
      </div>
      <!-- [end] index -->
    </div>
    <!-- [end] content -->
  </div>
</template>

<script>
  export default {
    name: 'app',
    data () {
      return {
        title: 'secret garden blog'
      }
    }
  }
</script>

<style lang="scss" scoped>
  #app {
    height: 100%;
    // background-color: lightgreen;

    @mixin flex($direction) {
      display: flex;
      flex-direction: $direction;
      justify-content: center;
      algin-items: center;
    }

    .header {
      width: auto;
      height: 60px;
      line-height: 60px;
      text-align: center;
      font-size: 24px;
      color: white;
      background-color: gray;
    }

    .menu {
      width: auto;
      height: 60px;
      line-height: 60px;
      text-align: center;
      font-size: 24px;
      color: white;
      background-color: rgb(100, 100, 100);
    }

    // content includes sidebar and index.
    .content {
      width: 800px;
      height: 100%;
      margin: 0 auto;
      background-color: rgb(150, 150, 150);

      .sidebar {
        @include flex(row);
        float: left;
        width: 200px;
        height: 100%;        
        background-color: rgb(170, 170, 170);
      }

      .index {
        @include flex(row);
        float: left;
        width: 600px;
        height: 100%;
        background-color: rgb(200, 200, 200);
      }
    }
  }
</style>
