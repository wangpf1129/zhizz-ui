<template>
  <div class="layout">
    <TopNav class="nav" :visibleMenuButton="true"/>
    <section class="content">
      <aside class="aside_menu" :class="{visible:asideVisible}">
        <h2>文档</h2>
        <ol>
          <li>
            <router-link to="/doc/intro">介绍</router-link>
          </li>
        </ol>
        <h2>组件列表</h2>
        <ol>
          <li>
            <router-link to="/doc/switch">Switch 开关</router-link>
          </li>
          <li>
            <router-link to="/doc/radio">Radio 单选框</router-link>
          </li>
          <li>
            <router-link to="/doc/button">Button 按钮</router-link>
          </li>
          <li>
            <router-link to="/doc/input">Input 输入框</router-link>
          </li>
          <li>
            <router-link to="/doc/dialog">Dialog 弹出框</router-link>
          </li>
          <li>
            <router-link to="/doc/tabs">Tabs 标签页</router-link>
          </li>
          <li>
            <router-link to="/doc/unfinished">未完待续...</router-link>
          </li>
        </ol>
        <h2>其他项目</h2>
        <ol>
          <li>
            <router-link to="/doc/blog">博客（技术文章和学习笔记）</router-link>
          </li>
          <li>
            <router-link to="/doc/bookkeeping-vue">清栀记账-Vue版</router-link>
          </li>
          <li>
            <router-link to="/doc/bookkeeping-react">清栀记账-React版</router-link>
          </li>
          <li>
            <router-link to="/doc/backstage">后台管理系统</router-link>
          </li>
          <li>
            <router-link to="/doc/naruto">手绘漩涡鸣人</router-link>
          </li>
          <li>
            <router-link to="/doc/virus-map">世界疫情图</router-link>
          </li>
          <li>
            <router-link to="/doc/more-project">更多项目</router-link>
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
  name: 'Doc',
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
  overflow-x: hidden;

  > .nav {
    flex: 0;
  }

  > .content {
    display: flex;
    flex: 1;
    padding-top: 80px;
    padding-left: 156px;


    .aside_menu {
      position: fixed;
      left: 0;
      top: 0;
      bottom: 0;
      margin-top: 80px;
      height: auto;
      width: 260px;
      overflow-x: hidden;
      overflow-y: scroll;
      border-right: 1px solid #e8e8e8;
      z-index: 10;
      box-shadow: 5px 0 5px rgb(51 51 51 / 10%);
      //&::-webkit-scrollbar { width: 0 !important }
      padding-bottom: 32px;

      > h2 {
        margin-bottom: 4px;
        line-height: 22px;
        padding: 10px;
        font-size: 16px;
        font-weight: 700;
      }

      > ol {
        > li {
          position: relative;
          width: 100%;
          font-size: 14px;

          > a {
            display: block;
            padding: 12px 20px;
            cursor: pointer;
            color: #333;

            &:hover {
              background: #e5f2fa;
              border-bottom: none;
            }
          }

          .router-link-active {
            background-color: #e5f2fa;
            border-right: none;

            &:after {
              content: '';
              position: absolute;
              top: 0;
              right: 0;
              height: 100%;
              border-right: 3px solid #6b9ab8;
            }
          }
        }
      }
    }

    main {
      flex: 1;
      overflow: auto;
      padding: 60px 180px;
    }
  }
}

@media (max-width: 500px) {
  .layout {
    > .content {
      padding-left: 0;

      .aside_menu {
        width: 180px;
        background-color: #fff;
        transition: all 0.25s ease;
        transform: translateX(-200px);

        &.visible {
          transform: translateX(0px);
        }
      }

      main {
        overflow: auto;
        padding: 20px 8px;
        margin: 0 auto;
      }
    }
  }
}
</style>
