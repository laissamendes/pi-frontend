<script setup>
import { ref } from 'vue';

const imageSrc = ref(null);

function previewImage(event) {
  const file = event.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = (e) => {
      imageSrc.value = e.target.result;
    };
    reader.readAsDataURL(file);
  }
}
</script>

<template>
  <form class="form">
    <h1 class="titulo">Registros</h1>

    <div class="inputsII">
      <div class="image-container">
        <img v-if="imageSrc" :src="imageSrc" alt="Preview da Imagem" class="image-preview" />
        <input type="file" id="input-image" @change="previewImage" class="file-input" />
      </div>
    </div>

    <div class="inputs">
      <div class="input-nome">
        <input type="text" name="nome" id="input-infos" class="nome" placeholder="NOME COMPLETO" />
      </div>
      <div>
        <p class="data">Data de Nascimento</p>
        <div class="date-inputs">
          <input id="day" type="text" placeholder="DD" maxlength="2" />
          <span>/</span>
          <input id="month" type="text" placeholder="MM" maxlength="2" />
          <span>/</span>
          <input id="year" type="text" placeholder="AAAA" maxlength="4" />
        </div>
      </div>
      <div class="input-cpf">
        <input type="text" name="cpf" id="cpf" v-cpf maxlength="14" placeholder="CPF" />
      </div>

      <div class="input-nome">
        <input type="text" name="pai" id="input-infos" placeholder="PAI" />
      </div>
      <div class="input-nome">
        <input type="text" name="mae" id="input-infos" placeholder="MÃE" />
      </div>
      <input type="submit" name="submit" id="input-submit" />
    </div>
  </form>
</template>

<style scoped>
form {
  background-color: #606C38;
  opacity: 0.7;
  margin: 10px auto;
  padding: 20px;
  height: auto;
  border-radius: 10px;
  max-width: 1200px;
  box-shadow: none;
}

.titulo {
  text-align: center;
  color: #FEFAE0;
  font-weight: bold;
  font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
  margin-top: 30px;
}

.data {
  color: #FEFAE0;
  font-weight: bold;
  margin-top: 10px;
  margin-bottom: 10px;
  text-align: center;
  font-size: 20px;
}

.inputs {
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 20px;
}

#input-infos, #cpf {
  border-radius: 50px;
  height: 50px;
  width: 100%;
  background-color: #FEFAE0;
  margin-top: 10px;
  border-style: none;
  font-size: 16px;
  box-sizing: border-box;
  max-width: 100%;
}

.image-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
}

.file-input {
  height: 50px;
  width: 100%;
  margin-top: 10px;
  border-style: none;
  box-sizing: border-box;
  max-width: 100%;
  background-color: #FEFAE0; 
  border: none; 
  color: rgb(82, 82, 82);
  font-size: 16px;
  padding: 10px;
  border-radius: 25px;
  cursor: pointer; 
}
.file-input::-webkit-file-upload-button {
  visibility: hidden; 
}

.file-input::before {
  content: 'Escolher Arquivo'; 
  display: inline-block;
  background: #FEFAE0;
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

.image-preview {
  border-radius: 50%;
  width: 150px;
  height: 150px;
  object-fit: cover;
  margin-top: 10px;
}
.date-inputs {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
  width: 100%; 
  margin-top: 10px;
}

#day, #month, #year {
  border-radius: 50px;
  height: 50px;
  width: 20%;
  max-width: 100px;
  background-color: #FEFAE0;
  text-align: center;
  border-style: none;
  font-size: 16px;
}

.date-inputs span {
  color: #FEFAE0;
  font-weight: bold;
}

#submit {
  border-radius: 50px;
  height: 50px;
  width: 100%;
  background-color: #FEFAE0;
  border-style: none;
  padding-left: 20px;
  font-size: 16px;
  cursor: pointer;
}
#input-submit {
  border-radius: 25px; 
  height: 50px;
  width: 100%;
  max-width: 300px; 
  background-color: #FEFAE0;
  border-style: none;
  font-size: 16px;
  cursor: pointer;
  display: block;
  margin: 20px auto; 
  padding: 0 20px; 
  text-align: center;
}

#input-submit:hover {
  background-color: #f7f1ca; 
}

@media (min-width: 768px) {
  .inputs {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  .inputsII {
    margin-bottom: 30px;
  }

  #input-infos, #cpf {
    width: 90%; 
  }

  #day, #month, #year {
    width: 100px;
  }

  .date-inputs {
    justify-content: center; 
  }
  .input-submit{
    border-radius: 20px;
  }
  #input-submit {
    max-width: 400px; 
  }


  form {
    border: 3px solid #FEFAE0;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  }
}

@media (max-width: 767px) {
  .inputs {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .inputsII {
    display: flex;
    flex-direction: column;
    align-items: center; 
    margin-bottom: 20px;
  }

  #input-infos, #cpf {
    width: 100%; 
  }

  .date-inputs {
    justify-content: center;
    margin-bottom: 20px;
  }

  form {
    display: block;
    border: 2px solid #FEFAE0;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1); 
  }
}
</style>