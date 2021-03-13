<demo>
基础用法
</demo>

<template>
  <Radio label="1" v-model:value="labelVal">学习</Radio>
  <Radio label="0" v-model:value="labelVal">娱乐</Radio>
  <div class="picked">Picked:{{labelVal}}</div>
</template>

<script lang="ts">
import Radio from '../../lib/Radio.vue';
import {ref} from 'vue';

export default {
  name: 'RadioDemo',
  components:{Radio},
  setup(){
    const labelVal = ref('1')

    return {labelVal}
  }
};
</script>

<style lang="scss" scoped>
.picked{
  padding: 10px 0;
}
</style>