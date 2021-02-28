<template>
  <CodePer :component="DialogDemo1"/>
  <CodePer :component="DialogDemo2"/>
  <Attr :columns="columns" :data="data"/>
</template>

<script lang="ts">
import DialogDemo1 from '../dmoe-code/DialogDemo1.vue';
import DialogDemo2 from '../dmoe-code/DialogDemo2.vue';
import CodePer from './CodePer.vue';
import {columns} from '../lib/data';
import Attr from './Attr.vue';
import {ref} from 'vue';

export default {
  name: 'DialogDemo',
  components: {Attr, CodePer, DialogDemo2, DialogDemo1},
  setup() {
    const data = ref([
      {
        params: 'visible',
        desc: '是否展示',
        type: 'boolean',
        select: 'true / false',
        default: 'normal',
      },
      {
        params: 'closeOnClickOverlay',
        desc: '是否点击遮罩层关闭弹出框',
        type: 'boolean',
        select: 'true / false',
        default: 'false',
      },
      {
        params: 'ok',
        desc: '确认触发函数',
        type: 'function',
        select: '()=>{}',
        default: '--',
      },
      {
        params: 'cancel',
        desc: '取消触发函数',
        type: 'function',
        select: '()=>{}',
        default: '--',
      },
    ]);

    return {DialogDemo1, DialogDemo2, columns, data};
  },
};
</script>

<style lang="scss" scoped>
</style>