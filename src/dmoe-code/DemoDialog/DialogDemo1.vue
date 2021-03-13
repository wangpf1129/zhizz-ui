<demo>
基础用法
</demo>

<template>
  <Button theme="primary" size="small" @click="toggle">打开对话框</Button>
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
</template>

<script lang="ts">

import Button from '../../lib/Button.vue';
import Dialog from '../../lib/Dialog.vue';
import {ref} from 'vue';
import {openDialog} from '../../lib/openDialog';

export default {
  name: 'DialogDemo1',
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
        visible: true,
        closeOnClickOverlay: true,
        ok: () => {
          console.log('确认');
          return false;
        },
        cancel: () => {console.log('取消');}
      });
    };

    return {visible, toggle, f1, f2, showDialog};
  },
};
</script>

<style lang="scss" scoped>

</style>