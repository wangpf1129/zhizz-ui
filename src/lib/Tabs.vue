<template>
  <div>Tabs.vue</div>
  <div class="z-tabs">
    <div class="z-tabs-nav">
      <div class="z-tabs-nav-item" v-for="(title,index) in titles" :key="index">{{ title }}</div>
    </div>
  </div>
  <div class="z-tabs-content">
    <component v-for="(item,index) in defaults" :key="index" :is="item"/>
  </div>
</template>


<script lang="ts">
import TabItem from './TabItem.vue';

export default {
  name: 'Tabs',
  setup(props, context) {
    const defaults = context.slots.default();
    defaults.forEach((tag) => {
      if (tag.type !== TabItem) {
        throw new Error('Tabs标签内只能包含 TabItem 标签');
      }
    });
    const titles = defaults.map(tag => {
      return tag.props.title;
    });
    return {defaults, titles};
  }
};
</script>

<style lang="scss" scoped>

</style>