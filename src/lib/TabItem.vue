<template>
  <slot/>
</template>

<script lang="ts">

export default {
  name: 'TabItem',
  props: {
    title: {
      type: String
    }
  }
};
</script>

<style lang="scss">

</style>