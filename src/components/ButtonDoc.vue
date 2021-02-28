<template>
  <CodePer :component="ButtonDemo1"/>
  <CodePer :component="ButtonDemo2"/>
  <CodePer :component="ButtonDemo3"/>
</template>


<script lang="ts">

import ButtonDemo1 from '../dmoe-code/ButtonDemo1.vue';
import ButtonDemo2 from '../dmoe-code/ButtonDemo2.vue';
import ButtonDemo3 from '../dmoe-code/ButtonDemo3.vue';
import CodePer from './CodePer.vue';

export default {
  name: 'ButtonDemo',
  components: {CodePer},
  setup() {
    const onClick = () => {
      console.log('hi');
    };

    return {onClick, ButtonDemo1, ButtonDemo2, ButtonDemo3};
  }
};
</script>

<style lang="scss" scoped>

</style>