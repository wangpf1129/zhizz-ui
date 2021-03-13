<template>
  <doc-title>Input 输入框示例</doc-title>
  <CodePer :component="InputDemo1"/>
  <CodePer :component="InputDemo2"/>
  <CodePer :component="InputDemo3"/>

  <Attr :columns="columns" :data="data"></Attr>
</template>

<script lang="ts">
import InputDemo1 from '../../dmoe-code/DemoInput/InputDemo1.vue';
import InputDemo2 from '../../dmoe-code/DemoInput/InputDemo2.vue';
import InputDemo3 from '../../dmoe-code/DemoInput/InputDemo3.vue';

import CodePer from '../CodePer.vue';
import Markdown from '../Markdown.vue';
import Attr from '../Attr.vue';
import {ref} from 'vue';
import {columns} from '../../lib/data';
import DocTitle from '../DocTitle.vue';

export default {
  name: 'InputDoc',
  components: {DocTitle, Attr, Markdown, CodePer},
  setup() {
    const data = ref([
      {
        params: 'placeholder',
        desc: '占位符',
        type: 'string',
        select: '任意字符串',
        default: '空',
      },
      {
        params: 'name',
        desc: 'name属性',
        type: 'string',
        select: '任意字符串',
        default: '空',
      },
      {
        params: 'type',
        desc: '文本框类型',
        type: 'string',
        select: '支持所有原生input的类型',
        default: 'text',
      },
      {
        params: 'disabled',
        desc: '禁用',
        type: 'boolean',
        select: 'false/true',
        default: 'false',
      },
    ]);
    return {InputDemo1,InputDemo2,InputDemo3, data, columns};
  }
};
</script>

<style lang="scss" scoped>

</style>