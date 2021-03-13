<demo>
支持类型
</demo>

<template>
  <Input placeholder="禁用"  v-model:value="text" disabled/>
  <span class="text">
    {{text}}
  </span>

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
.text{
  padding: 10px 15px;
}
</style>