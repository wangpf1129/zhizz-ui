<template>
  <button @click="toggle" class="z_switch" :class="{'z-checked' : value}"><span></span></button>
</template>

<script lang="ts">

  export default {
    name: 'Switch',
    props: {
      value: Boolean
    },
    setup(props, context) {
      const toggle = () => {
        context.emit('update:value', !props.value);
      };
      return {toggle};
    }
  };
</script>

<style lang="scss">
  $height: 20px;
  $width: 40px;
  .z_switch {
    cursor: pointer;
    height: $height;
    min-width: $width;
    border: none;
    background: #e3e3e3;
    border-radius: $height /2;
    position: relative;
    margin: 0;
    padding: 0;
    outline: none;


    > span {
      position: absolute;
      top: 2px;
      left: 1px;
      height: 16px;
      width: 16px;
      background: #fdfdfd;
      border-radius: 100%;
      transition: all .3s;
    }

    &.z-checked {
      background: #40babf;
    }

    &.z-checked > span {
      left: 100%;
      margin-left: -1px;
      transform: translateX(-100%);
    }

    &:active {
      > span {
        width: $height + 2px;
      }
    }

    &.z-checked:active {
      > span {
        width: $height + 2px;
      }
    }
  }

</style>