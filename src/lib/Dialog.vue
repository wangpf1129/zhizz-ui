<template>
  <div class="z-dialog-overlay"></div>
  <div class="z-dialog-wrapper">
    <header>标题</header>
    <main>
      <p>第一行</p>
      <p>第二行</p>
    </main>
    <footer>
      <Button>取消</Button>
      <Button theme="primary">确认</Button>
    </footer>
  </div>
</template>

<script lang="ts">
  import {} from 'vue';
  import Button from './Button.vue';

  export default {
    name: 'Dialog',
    components: {Button},
  };
</script>

<style lang="scss" scoped>

</style>