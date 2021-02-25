<template>
  <TopNav/>
  <section class="banner">
    <h1>Zhizz UI</h1>
    <h2>一个好看的 UI 框架</h2>
    <p class="actions">
      <a>GitHub</a>
      <a>Start</a>
    </p>
  </section>
</template>

<script lang="ts">
  import TopNav from '../components/TopNav.vue';

  export default {
    name: 'Home',
    components: {TopNav},
  };
</script>

<style lang="scss" scoped>
</style>