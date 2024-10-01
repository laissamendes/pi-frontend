<script setup></script>
<template>
  <div class="logo">
    <router-link to="/">
      <img src="@/assets/logo.png" alt="Raízes Digitais Logo" />
    </router-link>
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
  border-radius: 50%;
  object-fit: cover;
}
</style>
