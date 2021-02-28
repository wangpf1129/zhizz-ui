<template>
  <Demo :component="ButtonDemo1"/>
  <Demo :component="ButtonDemo2"/>
  <Demo :component="ButtonDemo3"/>

</template>


<script lang="ts">
import Demo from './Demo.vue';
import ButtonDemo1 from '../dmoe-code/ButtonDemo1.vue';
import ButtonDemo2 from '../dmoe-code/ButtonDemo2.vue';
import ButtonDemo3 from '../dmoe-code/ButtonDemo3.vue';

export default {
  name: 'ButtonDemo',
  components: {Demo},
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