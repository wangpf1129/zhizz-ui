<template>
  <Demo :component="DialogDemo1"/>
  <Demo :component="DialogDemo2"/>
</template>

<script lang="ts">
import Demo from './Demo.vue';
import DialogDemo1 from '../dmoe-code/DialogDemo1.vue';
import DialogDemo2 from '../dmoe-code/DialogDemo2.vue';

export default {
  name: 'DialogDemo',
  components: {DialogDemo2, DialogDemo1, Demo},
  setup() {

    return {DialogDemo1, DialogDemo2};
  },
};
</script>

<style lang="scss" scoped>
</style>