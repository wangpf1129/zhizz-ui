<template>
  <router-view/>
</template>

<script lang="ts">
// @ts-nocheck
  import {ref, provide} from 'vue';
  import {router} from './router';
  import progress from 'nprogress';
  import 'nprogress/nprogress.css'

  export default {
    name: 'App',
    setup() {
      const width = document.documentElement.clientWidth;
      const asideVisible = ref(width > 500);

      router.beforeEach((to,from,next)=>{
        progress.start()
        next()
      })
      router.afterEach(() => {
        if (width <= 500) {
          asideVisible.value = false;
        }
        progress.done()
        window.scrollTo(0,0)
      });

      provide('asideVisible', asideVisible);
    }
  };
</script>


<style lang="scss">
#nprogress {
  .bar {
    background: #6b9ab8 !important; //自定义颜色
  }

  .spinner-icon {
    border-color: #e5f2fa transparent transparent #e5f2fa;
  }
}
</style>