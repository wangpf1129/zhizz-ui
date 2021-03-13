<demo>
基础用法-双向绑定
</demo>

<template>
  <Input placeholder="请输入内容" v-model:value="text"/>
  <span class="picked">{{text}}</span>
</template>

<script lang="ts">
import {ref} from 'vue';
import Input from '../../lib/Input.vue';

export default {
  name: 'InputDemo1',
  components: {Input},
  setup(props) {
    const text = ref('');
    return {text};
  }
};
</script>

<style lang="scss" scoped>
.picked{
  padding: 10px 15px;
}
</style>