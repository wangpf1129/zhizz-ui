<template>
  <doc-title>Button 按钮示例</doc-title>
  <CodePer :component="ButtonDemo1"/>
  <CodePer :component="ButtonDemo2"/>
  <CodePer :component="ButtonDemo3"/>
  <Attr :columns="columns" :data="data"/>
</template>


<script lang="ts">

import ButtonDemo1 from '../../dmoe-code/DomeButton/ButtonDemo1.vue';
import ButtonDemo2 from '../../dmoe-code/DomeButton/ButtonDemo2.vue';
import ButtonDemo3 from '../../dmoe-code/DomeButton/ButtonDemo3.vue';
import CodePer from '../CodePer.vue';
import Attr from '../Attr.vue';
import {columns} from '../../lib/data';
import {ref} from 'vue';
import DocTitle from '../DocTitle.vue';

export default {
  name: 'ButtonDemo',
  components: {DocTitle, Attr, CodePer},
  setup() {
    const data = ref([
      {
        params: 'theme',
        desc: '按钮颜色',
        type: 'string',
        select: 'primary / warning / success / danger / info / link',
        default: 'default',
      },
      {
        params: 'size',
        desc: '尺寸大小',
        type: 'string',
        select: 'small / normal / large',
        default: 'normal',
      },
      {
        params: 'loading',
        desc: '是否加载',
        type: 'boolean',
        select: 'false / true',
        default: 'false',
      }
    ]);
    const onClick = () => {
      console.log('hi');
    };

    return {onClick, ButtonDemo1, ButtonDemo2, ButtonDemo3, columns, data};
  }
};
</script>

<style lang="scss" scoped>

</style>