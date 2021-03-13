<demo>
支持禁用
</demo>

<template>
  <Input placeholder="禁用"  v-model:value="text" disabled/>
</template>

<script lang="ts">
import {ref} from 'vue';
import Input from '../../lib/Input.vue';

export default {
  name: 'InputDemo3',
  components: {Input},
  setup(props) {
    const text = ref('');

    return {text};
  }
};
</script>

<style lang="scss" scoped>

</style>