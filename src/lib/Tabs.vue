<template>
  <div class="z-tabs">
    <div class="z-tabs-nav">
      <div class="z-tabs-nav-item"
           :class="{selected:title === selected}"
           v-for="(title,index) in titles" :key="index"
           @click="select(title)"
      >{{ title }}
      </div>
    </div>
  </div>
  <div class="z-tabs-content">
    <component :is="current" :key="selected"/>
  </div>
</template>


<script lang="ts">
import TabItem from './TabItem.vue';
import {computed} from 'vue';

export default {
  name: 'Tabs',
  props: {
    selected: {
      type: String,
      default: '学习'
    }
  },
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
    const current = computed(() => {
      return defaults.filter(tag => {
        return tag.props.title === props.selected;
      })[0];
    });
    const select = (newTitle: string) => {
      context.emit('update:selected', newTitle);
    };
    return {defaults, titles, current, select};
  }
};
</script>

<style lang="scss">
$selectedColor: #485fc7;
$color: #4a4a4a;
$border-color: #363636;
.z-tabs {
  &-nav {
    display: flex;
    color: $color;
    border-bottom: 1px solid $border-color;

    &-item {
      cursor: pointer;
      padding: 8px 0;
      margin: 0 16px;

      &:first-child {
        margin-left: 0;
      }

      &.selected {
        color: $selectedColor;
      }
    }
  }

  &-content {
    padding: 8px 0;
  }
}
</style>