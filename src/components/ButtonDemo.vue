<template>
  <h2>Button 示例</h2>
  <Button
    @click="onClick"
    @mouseover="onClick"
    size="small"
    level="normal"
  >你好
  </Button>
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