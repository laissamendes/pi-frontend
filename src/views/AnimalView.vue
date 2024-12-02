<script setup>
import { ref, onMounted } from 'vue';
import { useAnimalStore } from '@/stores/animal';
const Animalstore = useAnimalStore()

const animal = ref({
    nome: '',
    especie: '',
    fotoAnimal: ''
})
const isProntuarioOpen = ref(false);

const openProntuario = () => {
    isProntuarioOpen.value = true;
};
const closeProntuario = () => {
    isProntuarioOpen.value = false;
};

async function registrarAnimal() {
    await Animalstore.adicionarAnimal(animal.value)
}
onMounted(() => {
    Animalstore.buscarTodosOsAnimais()
})
</script>

<template>
    <div class="container">
        <div class="animais-cadastrados">
            <span id="icon" class="mdi mdi-paw"></span>
            <h2>Animais Cadastrados </h2>
            <div class="container-registros">
                <div class="registros">
                    <div>
                        <ul>
                            <li v-for="animal in Animalstore.animais" :key="animal.id" class="card">
                                <div class="caramelo">{{ animal.fotoAnimal }}</div>
                                <p>Nome: {{ animal.nome }}</p>
                                <p>Espécie: {{ animal.especie }}</p>
                                <button Class="btn-prontuario" @click="openprontuario()">Visualizar Prontuário</button>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="registros">
                    <div>
                        <ul>
                            <li v-for="animal in Animalstore.animais" :key="animal.id" class="card">
                                <div class="caramelo">{{ animal.fotoAnimal }}</div>
                                <p>Nome: {{ animal.nome }}</p>
                                <p>Espécie: {{ animal.especie }}</p>
                                <button Class="btn-prontuario" @click="openprontuario()">Visualizar Prontuário</button>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div class="cadastrar-animais">
            <span id="icon" class="mdi mdi-attachment-plus"></span>
            <h2>Cadastrar Animais </h2>
            <div class="container-cadastro">
                <div class="cadastrar">
                    <div class="container-foto">
                        <span id="icon2" class="mdi mdi-dog-side"></span>
                        <div class="btn-foto">
                            <p>Foto do Animal</p>
                            <button class="btn-imagem">Selecionar Arquivo</button>
                        </div>
                    </div>
                    <input v-model="animal.nome.value" placeholder="Nome:" type="text">
                    <input v-model="animal.especie.value" placeholder="Espécie:" type="text">
                    <button @submit.prevent="registrarAnimal()" class="btn-cadastrar">Cadastrar</button>
                </div>
            </div>
        </div>
    </div>

    <div v-if="isProntuarioOpen" class="prontuario-overlay">
        <div class="prontuario-modal">
            <button class="btn-fechar" @click="closeProntuario()">X</button>
            <h1>Prontuário Animal</h1>
            <div class="container-prontuario">
                <div class="input-left">
                    <input class="input-prontuario" placeholder="Nome" type="text">
                    <input class="input-prontuario" placeholder="Espécie" type="text">
                    <div class="date-input">
                        <input id="day" type="text" placeholder="DD" maxlength="2" />
                        <span>/</span>
                        <input id="month" type="text" placeholder="MM" maxlength="2" />
                        <span>/</span>
                        <input id="year" type="text" placeholder="AAAA" maxlength="4" />
                    </div>
                </div>
                <div class="input-right">
                    <input class="desc-prontuario" placeholder="Descrição" type="text">
                </div>
            </div>
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

.caramelo {
    border-radius: 50px;
    width: 171px;
    height: 179px;
    box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.255);
    margin: 20px;
}

.btn-prontuario {
    background-color: #283618;
    color: #fefae0;
    border-radius: 20px;
    padding: 10px 20px;
    font-size: 20px;
    cursor: pointer;
    width: 250px;
    height: 50px;
    border-style: none;
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

.registros {
    width: 600px;
    height: 250px;
    background-color: rgba(96, 108, 56, 0.74);
    border-radius: 30px;
    display: flex;
    align-items: center;
    gap: 20px;
    flex-direction: row;
    padding: 15px;
    margin: 30px;
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

.prontuario-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
}

.prontuario-modal {
    width: 1350px;
    height: 700px;
    background-color: rgb(112, 122, 80);
    padding: 20px;
    border-radius: 40px;
    box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.2);
    max-width: 90%;
    position: relative;
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

.container-prontuario {
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin: 10px;
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

.desc-prontuario {
    height: 400px;
}

.input-prontuario {
    margin: 30px;
}

@media (max-width: 1200px) {
    .container {
        flex-direction: column;
        align-items: center;
    }

    .caramelo {
        width: 150px;
        height: 150px;
    }

    .prontuario-modal {
        width: 80%;
        top: 10%;
    }
}

@media (max-width: 480px) {
    .container {
        padding: 10px;
    }

    .caramelo {
        width: 100px;
        height: 100px;
    }

    .prontuario-modal {
        width: 90%;
        padding: 10px;
    }

    button {
        width: 100%;
    }

    #day,
    #month,
    #year,
    .input-prontuario,
    .input-left,
    .input-right,
    .container-prontuario,
    .container {
        grid-template-columns: 1fr;
        align-items: center;
        max-width: 100%;
    }
}
</style>