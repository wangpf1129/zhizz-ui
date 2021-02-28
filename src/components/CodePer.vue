<template>
  <div>
    <div class="demo">
      <h2>{{ component.__sourceCodeTitle }}</h2>
      <div class="demo-component">
        <component :is="component"/>
      </div>
      <div class="demo-actions" @click="toggleCode">
        {{ codeVisible === true ? '隐藏代码' : '显示代码' }}
      </div>
      <div class="demo-code" v-if="codeVisible">
        <pre class="language-html" v-html="html"/>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import 'prismjs';
import '../assets/style/prism.css';
import {computed, ref} from 'vue';

const Prism = (window as any).Prism;

export default {
  name: 'CodePer',
  props: {
    component: Object
  },
  setup(props) {
    const codeVisible = ref(false);
    const toggleCode = () => codeVisible.value = !codeVisible.value;

    const html = computed(() => {
      return Prism.highlight(props.component.__sourceCode, Prism.languages.html, 'html');
    });
    return {Prism, html, toggleCode, codeVisible};
  }
};
</script>

<style lang="scss" scoped>
$border-color: #ebebeb;
.demo {
  border: 1px solid $border-color;
  margin: 16px 0 32px;

  &:hover {
    box-shadow: 0 0 8px 0 rgba(232, 237, 250, .6), 0 2px 4px 0 rgba(232, 237, 250, .5);
  }

  > h2 {
    font-size: 18px;
    padding: 8px 16px;
    border-bottom: 1px solid $border-color;
  }

  &-component {
    padding: 16px;
  }

  &-actions {
    cursor: pointer;
    text-align: center;
    padding: 8px 16px;
    border-top: 1px dashed $border-color;
    color: #ccc;
    &:hover {
      color: #4d86af;
      background-color: #f9fafc;
    }
  }

  &-code {
    overflow-x: auto;
    min-width: 300px;
    padding: 8px 16px;
    border-top: 1px dashed $border-color;
    > pre {
      line-height: 1.1;
      font-family: Consolas, 'Courier New', Courier, monospace;
      margin: 0;
    }
  }
}
</style>