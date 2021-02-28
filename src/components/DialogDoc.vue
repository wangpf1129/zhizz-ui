<template>
  <CodePer :component="DialogDemo1"/>
  <CodePer :component="DialogDemo2"/>
</template>

<script lang="ts">
import DialogDemo1 from '../dmoe-code/DialogDemo1.vue';
import DialogDemo2 from '../dmoe-code/DialogDemo2.vue';
import CodePer from './CodePer.vue';

export default {
  name: 'DialogDemo',
  components: {CodePer, DialogDemo2, DialogDemo1},
  setup() {

    return {DialogDemo1, DialogDemo2};
  },
};
</script>

<style lang="scss" scoped>
</style>