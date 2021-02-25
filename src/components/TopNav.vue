<template>
  <section class="top_nav">
    <div class="logo">Logo</div>
    <ul class="menu">
      <li>菜单1</li>
      <li>菜单2</li>
    </ul>
  </section>
</template>

<script lang="ts">
  export default {
    name: 'TopNav',
  };
</script>

<style lang="scss" scoped>
  .top_nav{
    background-color: #e9dcfb;
    display: flex;
    padding: 16px;
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
  }
</style>