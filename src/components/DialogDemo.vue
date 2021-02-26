<template>
  <Button theme="primary" @click="toggle">打开对话框</Button>
  <Dialog :visible="xxxx"/>
</template>

<script lang="ts">
  import Dialog from '../lib/Dialog.vue';
  import Button from '../lib/Button.vue';
  import {ref} from 'vue';

  export default {
    name: 'DialogDemo',
    components: {Button, Dialog},
    setup() {
      const xxxx = ref(false);
      const toggle = () => {
        xxxx.value = !xxxx.value;
      };

      return {xxxx, toggle};
    }
  };
</script>

<style lang="scss" scoped>

</style>