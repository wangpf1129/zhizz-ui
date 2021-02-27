<template>
  <section class="top_nav">
    <div class="logo">
      <svg class="icon">
        <use xlink:href="#icon-lanmei"></use>
      </svg>
    </div>
    <ul class="menu">
      <li>菜单1</li>
      <li>菜单2</li>
    </ul>
    <span class="toggleAside" @click="toggleAside"></span>
  </section>
</template>

<script lang="ts">
import {inject, Ref} from 'vue';

export default {
  name: 'TopNav',
  setup() {
    const asideVisible = inject<Ref<boolean>>('asideVisible');
    const toggleAside = () => {
      asideVisible.value = !asideVisible.value;
    };

    return {toggleAside};
  }
};
</script>

<style lang="scss" scoped>
$buttonColor: #0864a9;
$textColor: #05538c;
.top_nav {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  color: $textColor;
  display: flex;
  padding: 16px;
  justify-content: center;
  align-items: center;
  z-index: 10;
  box-shadow: 0 5px 5px rgb(51 51 51 / 10%);

  > .logo {
    margin-left: 50px;
    cursor: pointer;
    max-width: 6em;
    margin-right: auto;

    svg {
      width: 38px;
      height: 38px;
    }
  }

  .menu {
    display: flex;
    white-space: nowrap;
    flex-wrap: nowrap;

    > li {
      margin: 0 1em;
    }
  }

  > .toggleAside {
    display: none;
    width: 24px;
    height: 24px;
    background-color: red;
    position: absolute;
    top: 50%;
    left: 16px;
    transform: translateY(-50%);

  }

  @media (max-width: 500px) {
    > .menu {
      display: none;
    }
    > .logo {
      margin-left: auto;
      margin-right: auto;
    }
    > .toggleAside {
      display: inline-block;
    }
  }
}
</style>