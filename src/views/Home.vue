<template>
  <div>
    <section class="top_nav">
      <div class="logo">Logo</div>
      <ul class="menu">
        <li>菜单1</li>
        <li>菜单2</li>
      </ul>
    </section>
    <section class="banner">
      <h1>Zhizz UI</h1>
      <h2>一个好看的 UI 框架</h2>
      <p class="actions">
        <a>GitHub</a>
        <a>Start</a>
      </p>
    </section>
  </div>
</template>

<script lang="ts">
  export default {
    name: 'Home',
  };
</script>

<style lang="scss" scoped>
 .top_nav{
   border: 1px solid red;
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