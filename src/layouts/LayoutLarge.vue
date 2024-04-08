<script setup>
  import LargeHeader from '@/components/templates/large/LargeHeader.vue';
</script>
<template>
  <div id="layout-large">
    <header>
      <large-header />
    </header>
   
    <main>
      <router-view />
    </main>
    
  </div>
</template>
