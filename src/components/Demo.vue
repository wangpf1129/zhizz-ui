<template>
  <div>
    <div class="demo">
      <h2>{{ component.__sourceCodeTitle }}</h2>
      <div class="demo-component">
        <component :is="component"/>
      </div>
      <div class="demo-actions">
        <Button size="small" @click="toggleCode">查看代码</Button>
      </div>
      <div class="demo-code" v-if="codeVisible">
        <pre class="language-css" v-html="html"/>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Button from '../lib/Button.vue';

import 'prismjs';
import '../assets/style/prism.css';
import {computed, ref} from 'vue';

const Prism = (window as any).Prism;

export default {
  name: 'Demo',
  components: {Button},
  props: {
    component: Object
  },
  setup(props) {
    const codeVisible = ref(false);
    const toggleCode = () => codeVisible.value = !codeVisible.value;
    const html = computed(() => {
      return Prism.highlight(props.component.__sourceCode, Prism.languages.html, 'html');
    });
    return {Prism, html,toggleCode,codeVisible};
  }
};
</script>

<style lang="scss" scoped>
$border-color: #d9d9d9;
.demo {
  border: 1px solid $border-color;
  margin: 16px 0 32px;

  > h2 {
    font-size: 20px;
    padding: 8px 16px;
    border-bottom: 1px solid $border-color;
  }

  &-component {
    padding: 16px;
  }

  &-actions {
    text-align: center;
    padding: 8px 16px;
    border-top: 1px dashed $border-color;
  }

  &-code {
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