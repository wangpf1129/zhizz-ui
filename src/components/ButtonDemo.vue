<template>
  <h2>Button 示例</h2>
  <Button>默认按钮</Button>
  <Button theme="primary">主要按钮</Button>
  <Button theme="primary">成功按钮</Button>
  <Button theme="warning">警告按钮</Button>

</template>

<script lang="ts">
  import Button from '../lib/Button.vue';

  export default {
    name: 'ButtonDemo',
    components: {Button},
    setup() {
      const onClick = () => {
        console.log('hi');
      };


      return {onClick};
    }
  };
</script>

<style lang="scss" scoped>

</style>