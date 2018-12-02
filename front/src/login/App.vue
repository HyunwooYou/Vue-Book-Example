<template>
  <div id="app">
    <h1>{{ msg }}</h1>
    <p>This is login page.</p>
    <p>Sign in / Sign up</p>
    <p id="test-jquery" @click="alertEvent()">Test jquery lib</p>
  </div>
</template>

<script>
  import $ from 'jquery';

  export default {
    name: 'app',
    data () {
      return {
        msg: 'Login Login Login'
      }
    },
    methods: {
      alertEvent() {
        alert($('#test-jquery').text())
      }
    }
  }
</script>

<style lang="scss">
#app {
  text-align: center;
  color: dimgrey;
  margin-top: 30px;

  #test-jquery {
    cursor: pointer;
  }
}

</style>
