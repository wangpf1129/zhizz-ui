<template>
  <div class="z-tabs">
    <div class="z-tabs-nav" ref="nav">
      <div
          class="z-tabs-nav-item"
          v-for="(title, index) in titles"
          :key="index"
          :ref="(el) => {if (title === selected) selectedItem = el;}"
          :class="{ selected: title === selected }"
          @click="select(title)"
      >{{ title }}
      </div>
      <div class="z-tabs-nav-indicator" ref="indicator"></div>
    </div>
  </div>
  <div class="z-tabs-content">
    <component :is="current" :key="current.props.title"/>
  </div>
</template>


<script lang="ts">
import TabItem from './TabItem.vue';
import {computed, ref, onMounted, watchEffect} from 'vue';

export default {
  name: 'Tabs',
  props: {
    selected: {
      type: String,
    },
  },
  setup(props, context) {
    const nav = ref<HTMLDivElement>(null);
    const selectedItem = ref<HTMLDivElement>(null);
    const indicator = ref<HTMLDivElement>(null);

    onMounted(() => {
      watchEffect(() => {
        const {width, left: left1} = selectedItem.value.getBoundingClientRect();
        const {left: left2} = nav.value.getBoundingClientRect();
        const left = left1 - left2;
        indicator.value.style.width = width + 'px';
        indicator.value.style.left = left + 'px';
      }, {   // 解决异步
        flush: 'post', //效果更新需要缓冲时间
      });
    });
    //  tab-item  节点 （获取插槽内容）
    const defaults = context.slots.default();
    defaults.forEach((tag) => {
      if (tag.type !== TabItem) {
        throw new Error('Tabs标签内只能包含 TabItem 标签');
      }
    });
    const titles = defaults.map((tag) => {
      return tag.props.title;
    });
    // 被选择的节点
    const current = computed(() => {
      return defaults.filter((tag) => {
        return tag.props.title === props.selected;
      })[0];
    });

    const select = (newTitle: string) => {
      context.emit('update:selected', newTitle);
    };
    return {defaults, titles, current, select, nav, selectedItem, indicator};
  },
};
</script>

<style lang="scss">
$selectedColor: #485fc7;
$color: #4a4a4a;
$border-color: #eee;
.z-tabs {
  &-nav {
    display: flex;
    color: $color;
    border-bottom: 1px solid $border-color;
    position: relative;

    &-item {
      cursor: pointer;
      padding: 8px 16px;

      &.selected {
        color: $selectedColor;
      }
    }

    &-indicator {
      height: 2px;
      width: 100px;
      position: absolute;
      left: 0;
      bottom: -1px;
      background: $selectedColor;
      transition: all .25s cubic-bezier(1, 1.67, 0.21, 0.84);
    }
  }

  &-content {
    padding: 8px 0;
  }
}
</style>