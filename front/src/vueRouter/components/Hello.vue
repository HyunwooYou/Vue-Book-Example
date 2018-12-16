<template>
  <div>
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
  export default {
    name: 'hello',
    props: [ 'name' ],
    computed: {
      msg () {
        return `Hello, ${ this.name }!`
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>
