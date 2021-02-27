<template>
  <h2>Tabs示例</h2>
  <Tabs>
    <tab-item title="学习">学习</tab-item>
    <tab-item title="吃饭">吃饭</tab-item>
    <tab-item title="睡觉">睡觉</tab-item>
  </Tabs>
</template>

<script lang="ts">
  import Tabs from '../lib/Tabs.vue';
  import TabItem from '../lib/TabItem.vue';
  export default {
    name: 'TabsDemo',
    components: {TabItem, Tabs},
  };
</script>

<style lang="scss" scoped>

</style>