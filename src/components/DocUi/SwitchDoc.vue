<template>
  <doc-title>Switch 开关示例</doc-title>
  <CodePer :component="SwitchDemo"/>
  <Attr :columns="columns" :data="data"></Attr>
</template>

<script lang="ts">
import SwitchDemo from '../../dmoe-code/DemoSwitch/SwitchDemo.vue';
import CodePer from '../CodePer.vue';
import Markdown from '../Markdown.vue';
import Attr from '../Attr.vue';
import {ref} from 'vue';
import {columns} from '../../lib/data';
import DocTitle from '../DocTitle.vue';

export default {
  name: 'SwitchDoc',
  components: {DocTitle, Attr, Markdown, CodePer},
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