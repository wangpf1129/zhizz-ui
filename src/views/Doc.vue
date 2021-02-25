<template>
  <TopNav/>
  <section class="content">
    <aside>
      <h2>组件列表</h2>
      <ol>
        <li>
          <router-link to="/doc/switch">Switch 组件</router-link>
        </li>
        <li>
          <router-link to="/doc/button">Button 组件</router-link>
        </li>
        <li>
          <router-link to="/doc/dialog">Dialog 组件</router-link>
        </li>
        <li>
          <router-link to="/doc/tabs">Tabs 组件</router-link>
        </li>
      </ol>
    </aside>
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