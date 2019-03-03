<template>
  <div id="app">
    <div>{{ msg }}</div>
    <p>???</p>
    <p id="test-jquery" @click="alertEvent()">Test jquery lib</p>
    <div class="--initStyle">mover</div>
  </div>
</template>

<script>
  import $ from 'jquery';
  import initStyle from './js/initStyle.js';

  export default {
    name: 'app',
    data () {
      return {
        msg: 'Update Css With Js'
      }
    },
    mounted() {
      initStyle.setStyleProperties();
    },
    methods: {
      alertEvent() {
        alert($('#test-jquery').text())
      }
    }
  }
</script>

<style lang="scss">  
  @import "./style/initStyle";

  html, body { overflow: hidden; }

  #app {
    text-align: center;
    color: dimgrey;
    background: lightblue;
    overflow: hidden;

    #test-jquery {
      font-size: 24px;
      cursor: pointer;
    }

    #test-axios {
      font-size: 24px;
      cursor: pointer;
    }
  }
</style>
