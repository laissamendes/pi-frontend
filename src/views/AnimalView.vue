<script setup>
import { ref } from 'vue';
const isProntuarioOpen = ref(false);
const openProntuario = () => {
  isProntuarioOpen.value = true;
};
const closeProntuario = () => {
  isProntuarioOpen.value = false;
};
</script>

<template>
<div class="container">
    <div class="animais-cadastrados">
        <span id="icon" class="mdi mdi-paw"></span>
        <h2>Animais Cadastrados </h2>
        <div class="container-registros">
            <div class="registros">
                <div>
                    <img class="caramelo" src="data:image/jpeg;base64,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" alt="">
                </div>
                <div>
                    <p>Nome: Marcelo</p>
                    <p>Espécie: Cão</p>
                    <button class="btn-prontuario" @click="openProntuario">Visualizar Prontuário</button>
                </div>  
            </div>
            <div class="registros">
                <div>
                    <img class="caramelo" src="https://scc10.com.br/wp-content/uploads/2021/02/WhatsApp-Image-2021-02-01-at-11.02.20-1.jpeg" alt="">
                </div>
                <div>
                    <p>Nome: Rodolfo</p>
                    <p>Espécie: Cão</p>
                    <button class="btn-prontuario" @click="openProntuario">Visualizar Prontuário</button>
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
                <input placeholder="Nome:" type="text">
                <input placeholder="Espécie:" type="text">
                <button class="btn-cadastrar">Cadastrar</button>
            </div>
        </div>
    </div>
</div>    

<div v-if="isProntuarioOpen" class="prontuario-overlay">
    <div class="prontuario-modal">
        <button class="btn-fechar" @click="closeProntuario">X</button>
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

.caramelo{
    border-radius: 50px;
    width: 171px;
    height: 179px;
    box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.255);
    margin: 20px;
}
.btn-prontuario{
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
.btn-imagem{
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
.btn-cadastrar{
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
.registros{
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
.cadastrar{
    width: 568px;
    height: 600px;
    background-color: rgba(96, 108, 56, 0.74);
    border-radius: 30px;
    display: grid;
    grid-template-rows:5fr 2fr 2fr 3fr;
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
.container-registros, .container-cadastro{
    display: flex;
    flex-direction: column;
    gap: 20px;      
}
h2{
    color: rgba(96, 108, 56, 1);
    font-weight: bold;
}
#icon{
    color: rgba(106, 44, 15, 1);
    font-size: xx-large;
    border: 3px solid rgba(96, 108, 56, 1); 
    border-radius: 7px;
    width: 65px;
    text-align: center;
}
#icon2{
    color: rgba(106, 44, 15, 1);
    background-color: #FEFAE0;
    border-radius: 50px;
    font-size: 120px;
    width: 200px;
    text-align: center;
}
.animais-cadastrados, .cadastrar-animais{
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 20px;
}
input{
    background-color: rgba(254, 250, 224, 1);
    color: rgba(0, 0, 0, 0.50);
    width: 540px;
    height: 50px;
    border: #FEFAE0;
    border-radius: 50px;
    font-size: large;
}
.container-foto{
    display: grid;
    grid-template-columns: 2fr 3fr;
}
.btn-foto{
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
    background-color: rgb(96, 108, 56);
    padding: 20px;
    border-radius: 40px;
    box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.2);
    max-width: 90%;
    position: relative;
}
h1{
    text-align: center;
    color: #FEFAE0;
}
.btn-fechar{
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
span{
    color: #FEFAE0;
}
.container-prontuario{
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin: 10px;
}
#day, #month, #year {
  border-radius: 50px;
  height: 50px;
  width: 20%;
  max-width: 100px;
  background-color: #FEFAE0;
  text-align: center;
  border-style: none;
  margin: 30px;
}
.input-left{
    margin: 30px;
}
.input-right{
    margin: 30px;
}
.desc-prontuario{
    height: 400px;
}
.input-prontuario{
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
  #day, #month, #year,.input-prontuario,.input-left,.input-right,.container-prontuario{
    grid-template-columns: 1fr;
    align-items: center;
    max-width: 100%;
  }
}

</style>