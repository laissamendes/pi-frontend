<script setup>
import { ref } from 'vue';
import { onBeforeRouteUpdate } from 'vue-router';
import LogoTitle from '@/components/templates/LogoTitle.vue';

const showMenu = ref(false);

onBeforeRouteUpdate(() => {
  showMenu.value = false;
});
</script>

<template>
    <logo-title />

  <div id="headerMenu" :style="{ display: showMenu ? 'block' : 'none'}">
    <router-link to="/Animal">
      <i class="mdi mdi-dog"/> Animal
    </router-link>
    <router-link to="/Moradia">
      <i class="mdi mdi-home" /> Moradia
    </router-link>
  <router-link to="/Pessoa">
      <i class="mdi mdi-account" /> Pessoa
    </router-link>
    <router-link to="/Registro">
      <i class="mdi mdi-file-document" /> Registro
    </router-link>
</div>
<div class="icons">
  <div class="hamburger" @click="showMenu = !showMenu" >
<i class="mdi mdi-menu"></i>
  </div>
</div>
</template>
<style scoped>
#headerMenu {
  position: fixed;
  top: 0%;
  right: 0;
  z-index: 1;
  width: 30%;
  background-color: #FEFAE0;
  color: #606C38 ;
  display: block;
  padding: 1rem;
  border-radius: 10px;
  box-shadow: 15px 5px 10px #606C38;
}

#headerMenu a {
  display: flex;
  width: 100%;
  text-decoration: none;
  background-color: #FEFAE0;
  font-size: 1.2rem;
  transition: color 0.3s;
  color: #606C38 ;
}


.icons {
  display: flex;
  width: 100%;
  margin: 10px;
}

.icons a,
.icons .hamburger {
  display: flex;
  flex-direction: column;
  text-decoration: none;
  color: #6A2C0F;
  font-size: 2rem;
  transition: color 0.3s;
  position: fixed;
  top: 0%;
  right: 0;
  z-index: 1;
  margin-right: 10px;
  
}

.hamburger:hover {
  cursor: pointer;
}
</style>