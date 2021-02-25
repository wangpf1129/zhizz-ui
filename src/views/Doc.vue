<template>
  <TopNav/>
  <section class="content">
    <aside>侧边栏</aside>
    <main>主内容</main>
  </section>
</template>

<script lang="ts">
  import TopNav from '../components/TopNav.vue';

  export default {
    name: 'Dov',
    components: {TopNav},
  };
</script>

<style lang="scss" scoped>

</style>