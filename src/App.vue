<template>
  <router-view/>
</template>

<script lang="ts">
  import {ref, provide} from 'vue'
export default {
  name: "App",
  setup(){
    const asideVisible = ref(true)
    provide('asideVisible',asideVisible)
  }
};
</script>
