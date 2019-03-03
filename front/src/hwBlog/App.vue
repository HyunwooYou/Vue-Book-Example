<template>
  <div id="app">
    <HwHeader/>
    <div class="appContent">
      <HwSidebar/>
      <Index/>
    </div>
    <HwFooter/>
  </div>
</template>

<script>
  import HwHeader from './components/hwHeader/HwHeader.vue';
  import HwSidebar from './components/hwSidebar/HwSidebar.vue';
  import Index from './components/Index.vue';
  import HwFooter from './components/hwFooter/HwFooter.vue';

  export default {
    name: 'app',
    components: {
      HwHeader,
      HwSidebar,
      Index,
      HwFooter,
    },    
  }
</script>

<style lang="scss">

  #app {
    position: relative;
    display: flex;
    flex-direction: column;
    // flex: 1;

    margin-bottom: auto;
    // border: 2px solid red;
    background-color: lightgray;
    height: 100%;

    .appContent {
      display: flex;
      height: 100%;
    }
  }
</style>
