<template>
  <CodePer :component="TabsDemo1"/>
</template>

<script lang="ts">
import {ref} from 'vue';
import TabsDemo1 from '../dmoe-code/TabsDemo1.vue';
import CodePer from './CodePer.vue';

export default {
  name: 'TabsDemo',
  components: {CodePer, TabsDemo1},
  setup() {
    const title = ref('学习');


    return {title, TabsDemo1};
  }
};
</script>

<style lang="scss" scoped>

</style>