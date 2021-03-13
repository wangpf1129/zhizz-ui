<demo>
单标签 - 用 label 代替内容
</demo>

<template>
  <Radio label="学习" v-model:value="labelVal" />
  <Radio label="娱乐" v-model:value="labelVal" />
</template>

<script lang="ts">
import Radio from '../../lib/Radio.vue';
import {ref} from 'vue';

export default {
  name: 'RadioDemo2',
  components:{Radio},
  setup(){
    const labelVal = ref('娱乐')

    return {labelVal}
  }
};
</script>

<style lang="scss" scoped>

</style>