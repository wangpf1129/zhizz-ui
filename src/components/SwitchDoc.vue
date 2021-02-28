<template>
  <Demo :component="SwitchDemo"/>
</template>

<script lang="ts">
import SwitchDemo from '../dmoe-code/SwitchDemo.vue';
import Demo from './Demo.vue';


export default {
  name: 'SwitchDoc',
  components: {Demo},
  setup() {
    return {SwitchDemo};
  }
};
</script>

<style lang="scss" scoped>

</style>