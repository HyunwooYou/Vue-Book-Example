<template>
  <div class="container">

    <input type="checkbox" class="hp-checkbox"
       @click="clickEvent('first', boolean1)"
       v-model="boolean1" />

    <input type="checkbox" class="hp-checkbox"
      @click="clickEvent('second', boolean2)"
      v-model="boolean2" />

  </div>
</template>

<script>
  export default {
    name: 'practice',
    data() {
      return {
        boolean1: true,
        boolean2: true,
      }
    },
    methods: {
      clickEvent(name, boolean) {
        console.log(name + ' checkbox value: ' + boolean);
      }
    }
  }
</script>

<style lang="scss" scoped>
  .container {
    height: 800px;
    padding: 50px;
    background-color: light;

      .hp-checkbox {
        position: relative;
        cursor: pointer;
      }

      @mixin hpCheckbox($width, $height, $top, $left, $border, $border-width) {
        content: "";
        display: block;
        position: absolute;
        width: $width;
        height: $height;
        top: $top;
        left: $left;
        border: $border;
        border-width: $border-width;
      }

      .hp-checkbox:before {
        @include hpCheckbox(22px, 22px, 0, 0, solid lightgray, 1px);
        background-color: white;
      }

      .hp-checkbox:checked:after {
        @include hpCheckbox(6px, 11px, 3px, 8px, solid rgb(0, 150, 176), 0 2px 2px 0);
        -webkit-transform: rotate(45deg);
        -ms-transform: rotate(45deg);
        transform: rotate(45deg);
      }
  }
</style>
