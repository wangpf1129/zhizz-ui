<template>
  <TopNav/>
  <section class="content">
    <aside v-if="asideVisible">
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
  import {inject, Ref} from 'vue';

  export default {
    name: 'Dov',
    components: {TopNav},
    setup() {
      const asideVisible = inject<Ref<boolean>>('asideVisible');

      return {
        asideVisible
      };
    }
  };
</script>

<style lang="scss" scoped>
  .content {
    aside {
      background-color: #ccc;
      width: 150px;
      position: fixed;
      top: 0;
      left: 0;
      padding: 70px 16px 16px;

      > h2 {
        margin-bottom: 4px;
      }

      > ol {
        > li {
          padding: 4px 0;
        }
      }
    }
  }
</style>