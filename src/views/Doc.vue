<template>
  <div class="layout">
    <TopNav class="nav"/>
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
      <main>
        <router-view/>
      </main>
    </section>
  </div>
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
  .layout {
    display: flex;
    flex-direction: column;
    height: 100vh;

    > .nav {
      flex: 0;
    }

    > .content {
      display: flex;
      flex: 1;
      padding-top: 60px;
      padding-left: 156px;
      @media (max-width: 500px) {
        padding-left: 0;
      }

      aside {
        position: fixed;
        top: 0;
        left: 0;
        padding: 70px 16px 16px;
        height: 100%;
        background-color: #ccc;
        width: 150px;
        flex: 0;

        > h2 {
          margin-bottom: 4px;
        }

        > ol {
          > li {
            padding: 4px 0;
          }
        }
      }

      main {
        flex: 1;
        padding: 16px;
        background-color: skyblue;
        overflow: auto;
      }
    }
  }
</style>