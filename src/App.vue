<template>
  <router-view/>
</template>

<script lang="ts">
  import {ref, provide} from 'vue';
  import {router} from './router';

  export default {
    name: 'App',
    setup() {
      const width = document.documentElement.clientWidth;
      const asideVisible = ref(width > 900);
      router.afterEach(() => {
        if (width <= 900) {
          asideVisible.value = false;
        }
      });

      provide('asideVisible', asideVisible);
    }
  };
</script>
