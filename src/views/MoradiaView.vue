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
  </div>
</template>

<style scoped>
.container {
  display: flex;
  justify-content: space-between;
  padding: 2rem;
}

.casas-cadastradas, .cadastro-moradias {
  width: 45%;
}

.card {
  background-color: #f9f9f9;
  border: 1px solid #ddd;
  border-radius: 5px;
  padding: 1rem;
  margin-bottom: 1rem;
}

.card p {
  margin: 0.5rem 0;
}

button {
  background-color: #333;
  color: white;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

button:hover {
  background-color: #555;
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
}

form input {
  padding: 0.5rem;
  border: 1px solid #ddd;
  border-radius: 5px;
}

.cadastro-moradias button {
  align-self: flex-start;
}
</style>
