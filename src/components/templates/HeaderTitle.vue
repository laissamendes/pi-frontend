<script setup>
import { useTemplateStore } from '@/stores/template'
const templateStore = useTemplateStore()
</script>
<template>
  <div class="header-title">
    <span
      ><h1>{{ templateStore.title }}</h1></span
    >
  </div>
</template>

<style scoped>
.header-titlle > span > h1 {
  color: #6a2c0f;
}
</style>
