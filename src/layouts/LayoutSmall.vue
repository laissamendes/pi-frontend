<script setup>
  import SmallHeader from '@/components/templates/small/SmallHeader.vue';
  import SmallFooter from '@/components/templates/small/SmallFooter.vue';

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
    <footer>
      <small-footer/>
    </footer>
  </div>
</template>