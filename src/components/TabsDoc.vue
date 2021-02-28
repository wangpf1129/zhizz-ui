<template>
  <Demo :component="TabsDemo1"/>
</template>

<script lang="ts">
import {ref} from 'vue';
import Demo from './Demo.vue';
import TabsDemo1 from '../dmoe-code/TabsDemo1.vue';

export default {
  name: 'TabsDemo',
  components: {TabsDemo1, Demo},
  setup() {
    const title = ref('学习');


    return {title, TabsDemo1};
  }
};
</script>

<style lang="scss" scoped>

</style>