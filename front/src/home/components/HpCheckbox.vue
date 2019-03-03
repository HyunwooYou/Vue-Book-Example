<template>
    <input type="checkbox" class="hp-checkbox" />
</template>

<script>
  export default {
    name: 'hp-checkbox',
    data() {
      return {

      }
    },
    methods: {
      mousedownEvent() {

      },
      clickEvent() {

      }
    }
  }
</script>

<style lang="scss" scoped>

  .hp-checkbox {
    position: relative;
    cursor: pointer;
  }

  .hp-checkbox:before {
    content: "";
    display: block;
    position: absolute;
    width: 16px;
    height: 16px;
    top: 0;
    left: 0;
    border: 2px solid #555555;
    border-radius: 3px;
    background-color: white;
  }

  .hp-checkbox:checked:after {
    content: "";
    display: block;
    width: 5px;
    height: 10px;
    border: solid black;
    border-width: 0 2px 2px 0;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
    position: absolute;
    top: 2px;
    left: 6px;
  }

  // input[type=checkbox] {
  //   position: relative;
	//   cursor: pointer;
  // }
  //
  // input[type=checkbox]:before {
  //   content: "";
  //   display: block;
  //   position: absolute;
  //   width: 16px;
  //   height: 16px;
  //   top: 0;
  //   left: 0;
  //   border: 2px solid #555555;
  //   border-radius: 3px;
  //   background-color: white;
  // }
  //
  // input[type=checkbox]:checked:after {
  //   content: "";
  //   display: block;
  //   width: 5px;
  //   height: 10px;
  //   border: solid black;
  //   border-width: 0 2px 2px 0;
  //   -webkit-transform: rotate(45deg);
  //   -ms-transform: rotate(45deg);
  //   transform: rotate(45deg);
  //   position: absolute;
  //   top: 2px;
  //   left: 6px;
  // }
</style>
