<template>
  <CodePer :component="SwitchDemo"/>
  <Attr :columns="columns" :data="data"></Attr>
</template>

<script lang="ts">
import SwitchDemo from '../dmoe-code/SwitchDemo.vue';
import CodePer from './CodePer.vue';
import Markdown from './Markdown.vue';
import Attr from './Attr.vue';
import {ref} from 'vue';
import {columns} from '../lib/data';

export default {
  name: 'SwitchDoc',
  components: {Attr, Markdown, CodePer},
  setup() {
    const data = ref([
      {
        params: 'value',
        desc: '是否选中',
        type: 'boolean',
        select: 'false / true',
        default: 'false',
      }
    ]);
    return {SwitchDemo, data, columns};
  }
};
</script>

<style lang="scss" scoped>

</style>