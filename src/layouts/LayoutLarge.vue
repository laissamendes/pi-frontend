<script setup>
  import LargeHeader from '@/components/templates/large/LargeHeader.vue';
  import LargeFooter from '@/components/templates/large/LargeFooter.vue';

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
    <footer>
      <large-footer/>
    </footer>
  </div>
</template>
