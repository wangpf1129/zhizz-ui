<template>
  <button @click="toggle" :class="{checked : value}"><span></span></button>
</template>

<script lang="ts">
  import {} from 'vue';

  export default {
    name: 'Switch',
    props:{
      value:Boolean
    },
    setup(props,context) {
      const toggle = () => {
        context.emit('update:value',!props.value)
      };
      return {toggle};
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
    transition: all .3s;
  }

  button.checked {
    background: #aca8ff;
  }

  button.checked > span {
    left: calc(100% - 16px);
  }
</style>