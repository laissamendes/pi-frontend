<script setup>
import { useTemplateStore } from '@/stores/template';
const templateStore = useTemplateStore()
</script>
<template>
  <div class="header-title">
    <span>{{ templateStore.title }}</span>
  </div>
</template>

<style scoped>
.logo {
  display: flex;
  padding-left: 3rem;
  gap: 1rem;
  align-items: center;
}

.logo img {
  width: 8rem;
  height: 8rem;
  border-radius: 40%;
  object-fit: cover;
}

</style>