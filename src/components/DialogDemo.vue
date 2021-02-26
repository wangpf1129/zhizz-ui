<template>
  <h2>dialog 基本用法</h2>
  <Button theme="primary" @click="toggle">打开对话框</Button>
  <Dialog
    v-model:visible="visible"
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

  <h2>函数式调用 dialog</h2>
  <Button theme="primary" @click="showDialog">一句话打开Dialog</Button>
</template>

<script lang="ts">
  import Dialog from '../lib/Dialog.vue';
  import Button from '../lib/Button.vue';
  import {openDialog} from '../lib/openDialog';
  import {ref} from 'vue';

  export default {
    name: 'DialogDemo',
    components: {Button, Dialog},
    setup() {
      const visible = ref(false);
      const toggle = () => {
        visible.value = !visible.value;
      };

      const f1 = () => {
        console.log('确认');
        return false;

      };
      const f2 = () => {
        console.log('取消');
      };

      const showDialog = () => {
        openDialog({
          title: '标题',
          content: '这里是内容',
          visible:true,
          closeOnClickOverlay:true,
          ok:()=>{console.log('确认'); return false},
          cancel:()=>{console.log('取消');}
        });
      };

      return {visible, toggle, f1, f2,showDialog};
    },
  };
</script>

<style lang="scss" scoped>
</style>