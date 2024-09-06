<script setup></script>

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

<style scoped>
form {
  background-color: #606C38;
  opacity: 0.7;
  margin: 0 auto;
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

/* Estilo para input de imagem e preview */
.image-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
}

.file-input {
  border-radius: 50px;
  height: 50px;
  width: 100%;
  background-color: #FEFAE0;
  border-style: none;
  font-size: 16px;
  cursor: pointer;
}

.image-preview {
  border-radius: 50%;
  width: 150px; /* Ajuste conforme necessário */
  height: 150px; /* Ajuste conforme necessário */
  object-fit: cover;
  margin-top: 10px;
}

/* Inputs de data */
.date-inputs {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
  width: 100%; /* Centraliza os inputs de data */
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

/* Estilo para telas médias e grandes */
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
    width: 90%; /* Ajusta a largura dos inputs de forma mais responsiva */
  }

  #day, #month, #year {
    width: 100px; /* Inputs de data maiores */
  }

  .date-inputs {
    justify-content: center; /* Centraliza os campos de data */
  }

  /* Borda para telas médias */
  form {
    border: 3px solid #FEFAE0;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  }
}

/* Estilo para telas pequenas */
@media (max-width: 767px) {
  .form {
    padding: 15px;
  }

  .inputs {
    display: block;
  }

  .inputsII {
    margin-bottom: 20px;
  }

  #input-infos, #cpf {
    width: 100%; /* Largura total para inputs em telas pequenas */
  }

  .date-inputs {
    justify-content: center;
    margin-bottom: 20px;
  }

  form {
    display: block;
    border: 2px solid #FEFAE0;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1); /* Sombra mais leve para telas pequenas */
  }
}
</style>
