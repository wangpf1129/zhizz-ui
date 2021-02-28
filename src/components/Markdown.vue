<template>
  <article class="markdown-body" v-html="content"/>
</template>

<script lang="ts">

import {ref} from 'vue';

export default {
  name: 'Markdown',
  props: {
    path: {
      type: String,
      required: true
    }
  },
  setup(props) {
    const content = ref<string>(null);
    import(props.path).then(result => {
      content.value = result.default;
    });
    return {content};
  }
};
</script>

<style lang="scss" scoped>

</style>