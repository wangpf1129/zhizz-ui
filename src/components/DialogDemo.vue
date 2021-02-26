<template>
  <Button theme="primary" @click="toggle">打开对话框</Button>
  <Dialog
    v-model:visible="xxxx"
    :closeOnClickOverlay="true"
    :ok="f1"
    :cancel="f2"
  >
    <template v-slot:title>
      <strong>标题</strong>
    </template>
    <template v-slot:content>
      <p>第一行</p>
      <p>第二行</p>
    </template>
  </Dialog>
</template>

<script lang="ts">
  import Dialog from '../lib/Dialog.vue';
  import Button from '../lib/Button.vue';
  import {ref} from 'vue';

  export default {
    name: 'DialogDemo',
    components: {Button, Dialog},
    setup() {
      const xxxx = ref(false);
      const toggle = () => {
        xxxx.value = !xxxx.value;
      };

      const f1 = () => {
        console.log('确认');
        return false;

      };
      const f2 = () => {
        console.log('取消');
      };

      return {xxxx, toggle, f1, f2};
    },
  };
</script>

<style lang="scss" scoped>
</style>