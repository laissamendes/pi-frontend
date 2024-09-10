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
      <!-- Espaço entre os pares -->
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
  <footer>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
      <path
        fill="#606C38"
        fill-opacity="1"
        d="M0,64L30,90.7C60,117,120,171,180,181.3C240,192,300,160,360,144C420,128,480,128,540,149.3C600,171,660,213,720,234.7C780,256,840,256,900,234.7C960,213,1020,171,1080,128C1140,85,1200,43,1260,32C1320,21,1380,43,1410,53.3L1440,64L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"
      ></path>
    </svg>
  </footer>
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
  margin: 0; /* Remove margens extras que podem causar deslocamento */
}

i {
  font-size: 60px; /* Ajuste o tamanho dos ícones conforme necessário */
  color: rgb(121, 31, 31); /* Cor dos ícones */
}

.navigation {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: auto auto auto; /* Adiciona uma linha extra para o título */
  gap: 20px;
  align-items: center;
  justify-items: center;
  text-align: center;
}

.header-item {
  grid-column: span 2; /* Ocupa duas colunas */
  margin-bottom: 10px; /* Espaço abaixo do título */
  font-size: 24px; /* Tamanho da fonte do título */
  color: rgb(121, 31, 31); /* Cor do texto do título */
}

.space-item {
  grid-column: span 2; /* Ocupa duas colunas */
  height: 40px; /* Altura do espaço desejado */
}

.nav-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start; /* Ajusta o conteúdo para não estar tão próximo da parte inferior */
  width: 200px; /* Ajuste conforme necessário */
  height: 170px; /* Ajuste conforme necessário */
}

.nav-link {
  color: rgb(121, 31, 31);
  font-size: 20px;
  text-decoration: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 2px solid rgb(121, 31, 31);
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
  color: rgb(150, 50, 50);
  border-color: rgb(150, 50, 50);
}

.nav-link span {
  margin-top: 10px;
}

.nav-link i {
  margin: 0;
}

.div-mae {
  display: flex;
  justify-content: center; /* Centraliza horizontalmente */
  align-items: center; /* Centraliza verticalmente */
  height: 80vh; /* Ocupa toda a altura da viewport */
  text-align: center; /* Centraliza o texto */
  padding-bottom: 80px; /* Adiciona espaço extra para o footer */
  z-index: 100;
}

/* Media queries para telas grandes */
@media (min-width: 1200px) {
  .navigation {
    grid-template-columns: repeat(2, 1fr); /* Duas colunas para centralizar os itens */
    grid-template-rows: auto auto; /* Ajusta as linhas */
    justify-content: center; /* Centraliza o conteúdo horizontalmente */
    gap: 40px; /* Espaço entre os itens */
  }

  .header-item,
  .space-item {
    grid-column: span 2; /* Ocupa duas colunas */
  }

  .nav-item {
    width: 200px; /* Ajusta conforme necessário */
    height: 150px; /* Ajusta conforme necessário */
  }

  i {
    font-size: 80px; /* Ajusta o tamanho dos ícones */
  }
}

/* Media queries para telas médias */
@media (min-width: 768px) and (max-width: 1199px) {
  .navigation {
    grid-template-columns: repeat(2, 1fr); /* Duas colunas para telas médias */
    grid-template-rows: auto auto auto auto; /* Ajusta as linhas */
  }

  .header-item,
  .space-item {
    grid-column: span 2; /* Ocupa duas colunas */
  }

  .nav-item {
    width: 220px; /* Ajusta conforme necessário */
    height: 180px; /* Ajusta conforme necessário */
  }

  i {
    font-size: 60px; /* Ajusta o tamanho dos ícones */
  }
}

/* Media queries para telas pequenas */
@media (max-width: 767px) {
  .navigation {
    grid-template-columns: 1fr; /* Uma coluna em telas pequenas */
    grid-template-rows: auto auto auto auto auto auto; /* Ajusta as linhas */
    gap: 15px;
  }

  .header-item,
  .space-item {
    grid-column: span 1; /* Ocupa uma coluna */
  }

  .nav-item {
    width: 100%; /* Ajusta a largura para 100% */
    height: 100; /* Ajusta a altura automaticamente */
  }

  .nav-link {
    font-size: 18px; /* Ajusta o tamanho da fonte */
  }

  i {
    font-size: 40px; /* Ajusta o tamanho dos ícones */
  }
}

@media (max-width: 480px) {
  p {
    font-size: 20px; /* Ajusta o tamanho do texto */
  }

  .nav-link {
    font-size: 16px; /* Ajusta o tamanho da fonte */
    padding: 8px; /* Ajusta o padding */
  }

  i {
    font-size: 30px; /* Ajusta o tamanho dos ícones */
  }
}

footer > svg {
  bottom: 0;
  left: 0;
}
</style>
