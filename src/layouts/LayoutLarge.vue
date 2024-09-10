<script setup>
  import LargeHeader from '@/components/templates/large/LargeHeader.vue';

</script>
<template>
  <div id="layout-large">
    <header>
      <large-header />
    </header>
   
    <main>
      large
      <router-view />
    </main>
   
  </div>
</template>
