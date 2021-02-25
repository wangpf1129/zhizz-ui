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
  .banner {
    padding: 100px 0;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: #dccdf2;

    > .actions {
      padding: 8px 0;

      a {
        margin: 0 8px;
        background: #6e02c3;
        padding: 8px 20px;
        color: #fff;
        border-radius: 8px;
        $h: 28px;
        height: $h;
        line-height: $h;
      }
    }
  }
</style>