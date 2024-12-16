<script setup>
import { ref, onMounted } from 'vue';
import { useAnimalStore } from '@/stores/animal';
const Animalstore = useAnimalStore()

const animal = ref({
    nome: '',
    especie: '',
    fotoAnimal: ''
})

async function registrarAnimal() {
  await Animalstore.adicionarAnimal(animal.value)
}

onMounted(() => {
    Animalstore.buscarTodosOsAnimais()
})

const imageSrc = ref(null)

function previewImage(event) {
    const file = event.target.files[0]
    if (file) {
        const reader = new FileReader()
        reader.onload = (e) => {
            imageSrc.value = e.target.result
        }
        reader.readAsDataURL(file)
    }
}
</script>

<template>
    <div class="container">
        <div class="animais-cadastrados">
            <span id="icon" class="mdi mdi-paw"></span>
            <h2>Animais Cadastrados </h2>
            <div class="container-registros">
                <div class="registros">
                        <ul style="list-style-type: none;">
                            <li v-for="animal in Animalstore.animais" :key="animal.id" class="card">
                            <img :src="animal.fotoAnimal?.url" alt="" style="width:100px; border-radius: 10px;">
                                <p>Nome: {{ animal.nome }}</p>
                                <p>Espécie: {{ animal.especie }}</p>
                            </li>
                        </ul>
                </div>
            </div>
        </div>
        <div class="cadastrar-animais">
            <form @submit.prevent="registrarAnimal">
                <span id="icon" class="mdi mdi-attachment-plus"></span>
                <h2>Cadastrar Animais </h2>
                <div class="container-cadastro">
                    <div class="cadastrar">
                        <div class="container-foto">
                            <div class="btn-foto">
                                <p>Foto do Animal</p>
                                <img v-if="imageSrc" :src="imageSrc" alt="Preview da Imagem" class="image-preview"
                                    id="icon2" />
                                <input type="file" id="input-image" @change="previewImage" class="file-input" />
                            </div>
                        </div>
                        <input v-model="animal.nome" placeholder="Nome:" type="text">
                        <input v-model="animal.especie" placeholder="Espécie:" type="text">
                        <button type="submit" class="btn-cadastrar">Cadastrar</button>
                    </div>
                </div>
            </form>
        </div>
    </div>
</template>

<style scoped>
.container {
    display: flex;
    justify-content: space-between;
    height: 100vh;
    padding: 20px;
}

.btn-imagem {
    background-color: #283618;
    color: #fefae0;
    border-radius: 20px;
    font-size: 12px;
    cursor: pointer;
    width: 240px;
    height: 42px;
    margin: 20px;
    border-style: none;
    font-size: 20px;
}

.btn-cadastrar {
    background-color: #283618;
    color: #fefae0;
    border-radius: 20px;
    font-size: 20px;
    cursor: pointer;
    width: 250px;
    height: 50px;
    border-style: none;

}

button:hover {
    background-color: #374b21;
}

.cadastrar {
    width: 568px;
    height: 600px;
    background-color: rgba(96, 108, 56, 0.74);
    border-radius: 30px;
    display: grid;
    grid-template-rows: 5fr 2fr 2fr 3fr;
    gap: 20px;
    padding: 15px;
    margin: 30px;
    align-items: center;

}

p {
    color: #FEFAE0;
    font-size: x-large;
    font-weight: bold;
}

.container-registros,
.container-cadastro {
    display: flex;
    flex-direction: column;
    gap: 20px;
}

h2 {
    color: rgba(96, 108, 56, 1);
    font-weight: bold;
}

#icon {
    color: rgba(106, 44, 15, 1);
    font-size: xx-large;
    border: 3px solid rgba(96, 108, 56, 1);
    border-radius: 7px;
    width: 65px;
    text-align: center;
}

#icon2 {
    color: rgba(106, 44, 15, 1);
    background-color: #FEFAE0;
    border-radius: 50px;
    font-size: 120px;
    width: 200px;
    text-align: center;
}

.animais-cadastrados,
.cadastrar-animais {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 20px;
}

.animais-cadastrados{
    margin-top: 250px;
}

input {
    background-color: rgba(254, 250, 224, 1);
    color: rgba(0, 0, 0, 0.50);
    width: 540px;
    height: 50px;
    border: #FEFAE0;
    border-radius: 50px;
    font-size: large;
}

.container-foto {
    display: grid;
    grid-template-columns: 2fr 3fr;
}

.btn-foto {
    align-items: center;
    text-align: center;
    margin-top: 40px;
    border-style: none;

}

h1 {
    text-align: center;
    color: #FEFAE0;
}

.btn-fechar {
    background-color: rgb(96, 108, 56);
    border-color: rgb(96, 108, 56);
    color: #FEFAE0;
    font-size: large;
    border-style: none;
}

.date-input {
    justify-content: center;
    align-items: center;
}

span {
    color: #FEFAE0;
}

#day,
#month,
#year {
    border-radius: 50px;
    height: 50px;
    width: 20%;
    max-width: 100px;
    background-color: #FEFAE0;
    text-align: center;
    border-style: none;
    margin: 30px;
}

.input-left {
    margin: 30px;
}

.input-right {
    margin: 30px;
}

@media (max-width: 1200px) {
    .container {
        flex-direction: column;
        align-items: center;
    }
}

@media (max-width: 480px) {
    .container {
        padding: 10px;
    }

    button {
        width: 100%;
    }

    #day,
    #month,
    #year,
    .input-left,
    .input-right,
    .container {
        grid-template-columns: 1fr;
        align-items: center;
        max-width: 100%;
    }
}
.card {
    background-color: rgba(96, 108, 56, 0.74); 
    border-radius: 10px; 
    padding: 15px; 
    margin-bottom: 10px; 
    color: white; 
    display: flex; 
    flex-direction: column; 
    align-items: center;
}
.file-input::-webkit-file-upload-button {
  visibility: hidden;
}

.file-input::before {
  content: 'Escolher Arquivo';
  display: inline-block;
  background: #fefae0;
  color: rgb(82, 82, 82);
  border: none;
  padding: 10px 20px;
  border-radius: 25px;
  font-size: 16px;
  cursor: pointer;
}

.file-input:hover::before {
  background-color: #f7f1ca;
}
</style>