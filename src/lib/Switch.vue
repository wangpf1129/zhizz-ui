<template>
  <button @click="toggle" :class="{checked}"><span></span></button>
</template>

<script lang="ts">
  import {ref} from 'vue';

  export default {
    name: 'Switch',
    setup() {
      const checked = ref(false);
      const toggle = () => {
        checked.value = !checked.value;
      };
      return {checked, toggle};
    }
  };
</script>

<style lang="scss" scoped>
  $height: 20px;
  $width: 40px;
  button {
    cursor: pointer;
    height: $height;
    min-width: $width;
    border: none;
    background: #e3e3e3;
    border-radius: $height /2;
    position: relative;
    margin: 0;
    padding: 0;
  }

  span {
    position: absolute;
    top: 2px;
    left: 1px;
    height: 16px;
    width: 16px;
    background: #fdfdfd;
    border-radius: 100%;
  }

  button.checked {
    background: #aca8ff;
  }

  button.checked > span {
    left: calc(100% - 16px);
  }
</style>