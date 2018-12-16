<template>
  <div>
    <p>You chose {{ this.$store.getters.flavor }}</p>
  </div>
</template>

<script>
  export default {
    name: 'display'
  }
</script>
