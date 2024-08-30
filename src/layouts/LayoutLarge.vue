<script setup>
  import LargeHeader from '@/components/templates/large/LargeHeader.vue';
  import LargeFooter from '@/components/templates/large/LargeFooter.vue';

</script>
<template>
  <div class="teste">
  <div id="layout-large">
  </div> 
    <header>
      <large-header />
    </header>
   
    <main>
      <router-view />
    </main>
    <footer>
      <large-footer/>
    </footer>
  </div>
</template>

<style scoped>
.teste{
  display: flex;
  height: 720px;
  flex-direction:column;
}</style>
