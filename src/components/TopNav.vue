<template>
  <section class="top_nav">
    <div class="logo">Logo</div>
    <ul class="menu">
      <li>菜单1</li>
      <li>菜单2</li>
    </ul>
    <span class="toggleAside" @click="toggleAside"></span>
  </section>
</template>

<script lang="ts">
  import {inject, Ref} from 'vue'
  export default {
    name: 'TopNav',
    setup(){
      const asideVisible = inject<Ref<boolean>>('asideVisible')
      const toggleAside  = ()=>{
        asideVisible.value = !asideVisible.value
      }

      return {toggleAside}
    }
  };
</script>

<style lang="scss" scoped>
  .top_nav{
    background-color: #e9dcfb;
    display: flex;
    padding: 16px;
    position: relative;
    justify-content: center;
    align-items: center;
    z-index: 10;
    > .logo{
      max-width: 6em;
      margin-right: auto;
    }
    .menu{
      display: flex;
      white-space: nowrap;
      flex-wrap: nowrap;
      > li{
        margin: 0 1em;
      }
    }
    > .toggleAside{
      display: none;
      width: 24px;
      height: 24px;
      background-color: red;
      position: absolute;
      top: 50%;
      left: 16px;
      transform: translateY(-50%);

    }
    @media (max-width: 900px) {
      > .menu{
        display: none;
      }
      > .logo{
        margin-left: auto;
        margin-right: auto;
      }
      > .toggleAside{
        display: inline-block;
      }
    }
  }
</style>