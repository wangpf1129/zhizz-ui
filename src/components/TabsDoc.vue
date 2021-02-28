<template>
  <CodePer :component="TabsDemo1"/>
  <Attr :columns="columns" :data="data"/>
</template>

<script lang="ts">
import {ref} from 'vue';
import TabsDemo1 from '../dmoe-code/TabsDemo1.vue';
import CodePer from './CodePer.vue';
import Attr from './Attr.vue';
import {columns} from '../lib/data';

export default {
  name: 'TabsDemo',
  components: {Attr, CodePer, TabsDemo1},
  setup() {
    const data = ref([
      {
        params: 'z-tab-item',
        desc: 'tab页签',
        type: 'component',
        select: 'z-tab-item',
        default: '--',
      },
    ]);
    const title = ref('学习');


    return {title, TabsDemo1, data, columns};
  }
};
</script>

<style lang="scss" scoped>

</style>