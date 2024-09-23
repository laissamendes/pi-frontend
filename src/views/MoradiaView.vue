<script setup>
import { ref } from 'vue';

const moradias = ref([
  { id: 1, familia: 'do Dudu', comodos: 3, moradores: 4 },
  { id: 2, familia: 'da Laiza', comodos: 2, moradores: 3 }
]);


const novaCasa = ref({
  familia: '',
  comodos: 0,
  moradores: 0
});


function editarMoradia(id) {
  console.log(`Editando moradia com ID: ${id}`);
}


function registrarCasa() {
  const novaMoradia = {
    id: moradias.value.length + 1,
    ...novaCasa.value
  };
  moradias.value.push(novaMoradia);

 
  novaCasa.value = {
    familia: '',
    comodos: 0,
    moradores: 0
  };
}
</script>

<template>
  <div class="container">
    <div class="cadastro-moradias">
      <h2>Cadastro de novas Moradias</h2>
      <form @submit.prevent="registrarCasa">
        <div>
          <label>Sobrenome:</label>
          <input v-model="novaCasa.familia" type="text" required />
        </div>
        <div>
          <label>Quantas pessoas moram na sua casa:</label>
          <input v-model.number="novaCasa.moradores" type="number" required />
        </div>
        <div>
          <label>Quantos comodos tem na sua casa:</label>
          <input v-model.number="novaCasa.comodos" type="number" required />
        </div>
        <button type="submit">Registrar</button>
      </form>
    </div>
    <div class="casas-cadastradas">
      <h2>Casas Cadastradas</h2>
      <ul>
        <li v-for="moradia in moradias" :key="moradia.id" class="card">
          <p><strong>Familia:</strong> {{ moradia.familia }}</p>
          <p><strong>Comodos:</strong> {{ moradia.comodos }}</p>
          <p><strong>Moradores:</strong> {{ moradia.moradores }}</p>
          <button @click="editarMoradia(moradia.id)">Editar</button>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.container {
  display: flex;
  flex-direction: column; /* Por padrÃĢo, os elementos sÃĢo empilhados verticalmente */
  padding: 2rem;
  height: 100vh; /* Ocupa toda a altura da tela */
  justify-content: center; /* Centraliza o conteÃšdo verticalmente */
}

.casas-cadastradas, .cadastro-moradias {
  width: 100%; /* Faz os elementos ocuparem toda a largura disponÃ­vel */
  margin-bottom: 1rem; /* Adiciona um espaÃ§o entre os elementos */
  margin: 2rem;
}

.casas-cadastradas > ul{
  list-style-type: none;
}

.cadastro-moradias {
background-color: #606c3894;
border-radius: 20px;
padding: 15px;
color: #fefae0;
}

.card {
  background-color: #fefae0;
  border: 2px solid #283618;
  border-radius: 10px;
  padding: 1rem;
  margin-bottom: 1rem;
  color: #283618;
}

.card p {
  margin: 0.5rem 0;
}

button {
  background-color: #283618;
  color: #fefae0;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

button:hover {
  background-color: #374b21;
}

form {
  display: flex;
  flex-direction: column;
}

form div {
  margin-bottom: 1rem;
}

form label {
  margin-bottom: 0.5rem;
  font-weight: bold;
  display: block; /* Faz o label ocupar toda a largura disponÃ­vel */
}

form input {
  padding: 0.5rem;
  border-style: none;
  border-radius: 10px;
  background-color: #fefae0;
  width: 100%; /* Faz os inputs ocuparem toda a largura disponÃ­vel do seu contÃŠiner pai */
  max-width: 400px; /* Define uma largura mÃĄxima para os inputs */
}

.cadastro-moradias button {
  align-self: flex-start;
}

@media (min-width: 768px) {
  .container {
    flex-direction: row; 
    justify-content: flex-start; 
    align-items: flex-start; 
  }

  .casas-cadastradas {
    width: 30%; 
    margin-bottom: 0; 
  }

  .cadastro-moradias {
    width: 50%; 
    margin-bottom: 0;
  }
}

/* EstilizaÃ§ÃĢo para telas grandes */
@media (min-width: 992px) {
  .container {
    max-width: 1200px; /* Define a largura mÃĄxima do container */
    margin: 0 auto; /* Centraliza o container horizontalmente */
  }
}</style>