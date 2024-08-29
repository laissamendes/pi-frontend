<script setup>
import { useTemplateStore } from '@/stores/template';
const templateStore = useTemplateStore()
</script>
<template>
  <div class="header-title">
    <span><h1><strong>{{ templateStore.title }}</strong></h1></span>
  </div>
</template>

<style scoped>
.header-titlle>span>h1{
  color: #6A2C0F;
}

</style>