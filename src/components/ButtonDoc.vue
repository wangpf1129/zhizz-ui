<template>
  <h2>Button 主题</h2>
  <Button>默认按钮</Button>
  <Button theme="primary">主要按钮</Button>
  <Button theme="warning">警告按钮</Button>
  <Button theme="success">成功按钮</Button>
  <Button theme="danger">危险按钮</Button>
  <Button theme="info">信息按钮</Button>
  <Button theme="link">链接按钮</Button>

  <h2>Button size</h2>

  <Button size="small">超小按钮</Button>
  <Button size="normal">普通按钮</Button>
  <Button size="large">大型按钮</Button>

  <h2>Button disable</h2>
  <Button disabled>禁用按钮</Button>

  <h2>Button loading</h2>
  <Button loading >加载中</Button>


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