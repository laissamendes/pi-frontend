<script setup></script>

<template>
  <div class="div-mae">
    <div class="navigation">
      <div class="header-item">
        <p>Relacionados a pessoas</p>
      </div>
      <div class="nav-item">
        <router-link to="/Pessoa" class="nav-link" aria-label="Pessoa">
          <i class="mdi mdi-account" />
          <span>Pessoa</span>
        </router-link>
      </div>
      <div class="nav-item">
        <router-link to="/Animal" class="nav-link" aria-label="Animais">
          <i class="mdi mdi-dog" />
          <span>Animal</span>
        </router-link>
      </div>
      <div class="space-item"></div>
      <div class="header-item">
        <p>Outros</p>
      </div>
      <div class="nav-item">
        <router-link to="/Registro" class="nav-link" aria-label="Registro">
          <i class="mdi mdi-file-document" />
          <span>Registro</span>
        </router-link>
      </div>
      <div class="nav-item">
        <router-link to="/Moradia" class="nav-link" aria-label="Moradias">
          <i class="mdi mdi-home" />
          <span>Moradia</span>
        </router-link>
      </div>
    </div>
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Belleza&family=Quicksand:wght@300..700&display=swap');

body, p, i, span {
  font-family: 'Quicksand', sans-serif;
}

p {
  color: darkolivegreen;
  font-size: 25px;
  font-weight: bold;
  margin: 0;
}

i {
  font-size: 60px;
  color: #6A2C0F;
}

.navigation {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: auto auto auto;
  gap: 20px;
  align-items: center;
  justify-items: center;
  text-align: center;
}

.header-item {
  grid-column: span 2;
  margin-bottom: 10px;
  font-size: 24px;
  color: #6A2C0F;
}

.space-item {
  grid-column: span 2;
  height: 40px;
}

.nav-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 200px;
  height: 170px;
}

.nav-link {
  color: #6A2C0F;
  font-size: 20px;
  text-decoration: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 2px solid #6A2C0F;
  border-radius: 8px;
  padding: 10px;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  transition:
    color 0.3s ease,
    border-color 0.3s ease;
}

.nav-link:hover {
  transform: scale(1.02);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  transition: transform 0.4s ease-in-out, box-shadow 0.4s ease-in-out;
}

.nav-link span {
  margin-top: 10px;
}

.nav-link i {
  margin: 0;
}

.div-mae {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh; /* Alterado para permitir rolagem */
  padding: 20px;
  text-align: center;
  box-sizing: border-box;
}

@media (min-width: 1200px) {
  .navigation {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: auto auto;
    justify-content: center;
    gap: 40px;
  }

  .header-item,
  .space-item {
    grid-column: span 2;
  }

  .nav-item {
    width: 200px;
    height: 150px;
  }

  i {
    font-size: 80px;
  }
}

@media (min-width: 768px) and (max-width: 1199px) {
  .navigation {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: auto auto auto auto;
  }

  .header-item,
  .space-item {
    grid-column: span 2;
  }

  .nav-item {
    width: 220px;
    height: 180px;
  }

  i {
    font-size: 60px;
  }
}

@media (max-width: 767px) {
  .navigation {
    grid-template-columns: 1fr;
    grid-template-rows: auto auto auto auto auto auto;
    gap: 15px;
  }

  .header-item,
  .space-item {
    grid-column: span 1;
  }

  .nav-item {
    width: 100%;
    height: auto; /* Permitir que a altura seja ajustável */
  }

  .nav-link {
    font-size: 18px;
  }

  i {
    font-size: 40px;
  }
}

@media (max-width: 480px) {
  p {
    font-size: 20px;
  }

  .nav-link {
    font-size: 16px;
    padding: 8px;
  }

  i {
    font-size: 30px;
  }
}
</style>