<template>
  <button class="z_button" :class="{[`z-theme-${theme}`]:theme}">
    <slot/>
  </button>
</template>

<script lang="ts">
  import {} from 'vue';

  export default {
    name: 'Button',
    props: {
      theme: {
        type: String,
        default: 'default'
      }
    }
  };
</script>

<style lang="scss">
  $height : 32px;
  $border-color:#d9d9d9;
  $color:#333;
  $blue:#40a9ff;
  $radius:4px;

  .z_button{
    height: $height;
    border-radius: $radius;
    color: $color;
    padding: 0 12px;
    cursor: pointer;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    white-space: nowrap;
    border: 1px solid $border-color;
    box-shadow: 0 1px 0 fade-out(black,0.95);

    & + & {
      margin-left: 8px;
    }

    &:hover,
    &:focus{
      color: $blue;
      border-color: $blue;
    }
    &:focus{
      outline: none;
    }
    &::-moz-focus-inner{
      border: 0;
    }
  }
</style>