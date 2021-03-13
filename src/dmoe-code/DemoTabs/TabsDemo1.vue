<demo>
基础用法
</demo>
<template>
  <Tabs v-model:selected="title">
    <tab-item title="学习">学习</tab-item>
    <tab-item title="吃饭">吃饭</tab-item>
    <tab-item title="睡觉">睡觉</tab-item>
  </Tabs>
</template>

<script lang="ts">

import Tabs from '../../lib/Tabs.vue';
import TabItem from '../../lib/TabItem.vue';
import {ref} from 'vue';

export default {
  name: 'TabsDemo1',
  components: {TabItem, Tabs},
  setup() {
    const title = ref('学习');


    return {title};
  }
};
</script>

<style lang="scss" scoped>

</style>