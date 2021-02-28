<template>
  <div>
    <div class="demo">
      <h2>常规用法</h2>
      <div class="demo-component">
        <component :is="SwitchDemo"/>
      </div>
      <div class="demo-actions">
        <Button size="small">查看代码</Button>
      </div>
      <div class="demo-code">
        <pre>{{ SwitchDemo.__sourceCode }}</pre>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Button from '../lib/Button.vue';
import SwitchDemo from '../dmoe-code/SwitchDemo.vue';

export default {
  name: 'SwitchDoc',
  components: {Button},
  setup() {

    return {SwitchDemo};
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