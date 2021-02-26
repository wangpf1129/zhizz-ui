<template>
  <h2>Button 主题示例</h2>
  <Button>default</Button>
  <Button theme="primary">primary</Button>
  <Button theme="warning">warning</Button>
  <Button theme="success">success</Button>
  <Button theme="danger">danger</Button>
  <Button theme="info">info</Button>

  <h2>Button size示例</h2>

  <Button size="small">Small</Button>
  <Button size="normal">normal</Button>
  <Button size="large">Large</Button>
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