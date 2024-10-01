<script setup>
import { ref } from 'vue'
import { onBeforeRouteUpdate } from 'vue-router'
import LogoTitle from '@/components/templates/LogoTitle.vue'
import HeaderTitle from '../HeaderTitle.vue'

const showMenu = ref(false)

onBeforeRouteUpdate(() => {
  showMenu.value = false
})
</script>

<template>
  <header class="header-container">
    <div class="logo-title">
      <logo-title />
      <HeaderTitle />
    </div>

    <div class="icons">
      <div class="hamburger" @click="showMenu = !showMenu">
        <i class="mdi mdi-menu"></i>
      </div>
    </div>

    <div id="headerMenu" :style="{ display: showMenu ? 'block' : 'none' }">
      <router-link to="/Animal"> <i class="mdi mdi-dog" /> Animal </router-link>
      <router-link to="/Moradia"> <i class="mdi mdi-home" /> Moradia </router-link>
      <router-link to="/Pessoa"> <i class="mdi mdi-account" /> Pessoa </router-link>
      <router-link to="/Registro"> <i class="mdi mdi-file-document" /> Registro </router-link>
      <router-link to="/Login"><i class="mdi mdi-key" /> Login</router-link>
    </div>
  </header>
  </template>

<style scoped>
.header-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px 20px;
  background-color: #fefae0;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  position: relative; 
  height: 125px;
  position: sticky;

}

.logo-title {
  display: flex;
  align-items: center;
  color: #6a2c0f;
}

.icons {
  display: flex;
  align-items: center;
}

#headerMenu {
  position: absolute; 
  top: 100%; 
  right: 0;
  z-index: 1;
  width: 200px;
  background-color: #fefae0;
  color: #606c38;
  padding: 1rem;
  border-radius: 10px;
  box-shadow: 15px 5px 10px #919c704f;
  display: none;
}

#headerMenu a {
  display: flex;
  align-items: center;
  text-decoration: none;
  background-color: #fefae0;
  font-size: 1.2rem;
  transition: color 0.3s;
  color: #606c38;
  padding: 0.5rem 0;
}

#headerMenu a:hover {
  color: #a3b18a;
}

.icons .hamburger {
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #6a2c0f;
  font-size: 2rem;
  cursor: pointer;
}

.hamburger:hover {
  color: #a3b18a;
}
</style>