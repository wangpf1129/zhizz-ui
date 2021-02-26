<template>
  <div :size="size">
    <button v-bind="rest">
      <slot/>
    </button>
  </div>
</template>

<script lang="ts">
  import {} from 'vue';

  export default {
    name: 'Button',
    inheritAttrs: false,   // 禁止 自动继承属性   我需要手动来给规定的标签添加
    props: {
      size: String,
    },
    setup(props, context) {
      console.log({...props});
      console.log({...context.attrs});
      const {size, ...rest} = context.attrs;

      return {size, rest};
    }
  };
</script>

<style lang="scss" scoped>
  div {
    border: 1px solid red;
  }
</style>