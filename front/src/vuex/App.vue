<template>
  <div id="app">
    <Form />
    <Display />
  </div>
</template>

<script>
  import Form from './components/Form.vue';
  import Display from './components/Display.vue';

  export default {
    name: 'app',
    components: {
      Form,
      Display
    }
  }
</script>

<style>
  #app {
    text-align: center;
    margin-top: 50px;
  }
</style>
