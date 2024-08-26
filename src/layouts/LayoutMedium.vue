
<script setup>
  import MediumHeader from '@/components/templates/medium/MediumHeader.vue';
  import MediumFooter from '@/components/templates/medium/MediumFooter.vue';

</script>

<template>
  <div id="layout-medium">
    <header>
      <medium-header />
    </header>
    
    <main>
      medium
      <router-view />
    </main>
    <footer>
      <medium-footer/>
    </footer>
  </div>
</template>

