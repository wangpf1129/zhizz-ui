<template>
<div class="doc-title">
  <slot/>
</div>
</template>

<script lang="ts">

export default{
 name:'DocTitle',
}
</script>

<style lang="scss" scoped>
.doc-title{
  display: block;
  font-size: 32px;
  margin-bottom: 40px;
  box-shadow: 2px 3px 3px rgba(0,0,0,.4);
}
</style>