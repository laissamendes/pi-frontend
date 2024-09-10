<script setup>
  import SmallHeader from '@/components/templates/small/SmallHeader.vue';

</script>

<template>
  <div id="layout-small">
    <header>
      <small-header />
    </header>
    <main>
      small
      <router-view />
    </main>
    
  </div>
</template>