<template>
  <router-view/>
</template>

<script lang="ts">
  import {ref, provide} from 'vue';

  export default {
    name: 'App',
    setup() {
      const width = document.documentElement.clientWidth;
      const asideVisible = ref(width > 900);
      provide('asideVisible', asideVisible);
    }
  };
</script>
