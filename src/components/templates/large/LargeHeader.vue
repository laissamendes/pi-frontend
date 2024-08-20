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
  <router-link to="/Pessoa">
      <i class="mdi mdi-account" /> Pessoa
    </router-link>
    <router-link to="/Registro">
      <i class="mdi mdi-file-document-outline" /> Registro
    </router-link>
    <router-link to="/Animal">
      <i class="mdi mdi-dog"/> Animal
    </router-link>
    <router-link to="/Moradia">
      <i class="mdi mdi-home" /> Moradia
    </router-link>
</div>
<div class="icons">
  <div class="hamburger" @click="showMenu = !showMenu">
<i class="mdi mdi-menu"></i>
  </div>
</div>
</template>
<style scoped>
#headerMenu {
  position: fixed;
  top: 15%;
  right: 0;
  z-index: 1;
  width: 20%;
  background-color: #FEFAE0;
  color: #606C38 ;
  display: block;
  padding: 1rem;
  border-radius: 10px;
  box-shadow: 15px 5px 10px #606C38;
  ;
}

#headerMenu a {
  display: flex;
  width: 100%;
  justify-content: space-between;
  text-decoration: none;
  background-color: #FEFAE0;
  font-size: 1rem;
  transition: color 0.3s;
  color: #606C38 ;

}


.icons {
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
}

.icons a,
.icons .hamburger {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-decoration: none;
  color: #6A2C0F;
  font-size: 1rem;
  transition: color 0.3s;
}

.hamburger:hover {
  cursor: pointer;
}
</style>