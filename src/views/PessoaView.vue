<script setup></script>

<template>
  <div class="inputs">
    <div class="input-nome">
      <label for="nome">Nome Completo:</label>
      <input type="text" name="nome" id="input-infos" />
    </div>

    <div class="input-cpf">
      <label for="cpf">CPF:</label>
      <input type="text" name="cpf" id="input-infos" />
    </div>

    <input type="submit" name="submit" id="input-submit" />
  </div>

  <div class="infos">
    <img src="" alt="" class="profile-image" />
    <p>Nome Completo: {{ nome }}</p>
    <p>CPF: {{ cpf }}</p>
    <p>Data de nascimento: {{ data_nasc }}</p>
    <p>Escolaridade: {{ escolaridade }}</p>
    <p>Moradia: {{ moradia }}</p>
    <p>Pai: {{ nome_pai }}</p>
    <p>Mãe: {{ nome_mae }}</p>
  </div>
</template>

<style scoped>
/* Estilos para o container de inputs */
.inputs {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  padding: 1rem;
  justify-content: center; /* Centraliza o conteúdo no container */
}

/* Estilos para os inputs individuais */
.input-nome,
.input-cpf {
  display: flex;
  flex-direction: column;
}

/* Estilos para os inputs */
#input-infos {
  margin: 0.5rem 0;
  padding: 0.5rem;
  color: #fefae0;
  background-color: #606c3869;
  border: none;
  border-radius: 20px;
}

/* Estilos para o botão de submit */
#input-submit {
  color: #fefae0;
  background-color: #606c38;
  border: none;
  border-radius: 20px;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  cursor: pointer;
}

#input-submit:hover {
  background-color: #4a532b;
}

/* Estilos para o label */
label {
  color: #6a2c0f;
}

/* Estilos para a área de informações */
.infos {
  padding: 1rem;
  text-align: center;
}

.profile-image {
  border-radius: 50%;
  max-width: 100px; /* Ajuste conforme necessário */
  margin-bottom: 1rem;
}

/* Media Queries para dispositivos pequenos */
@media (max-width: 599px) {
  .inputs {
    flex-direction: column;
    align-items: center;
  }

  .input-nome,
  .input-cpf {
    width: 100%;
  }

  #input-submit {
    width: 100%;
    margin-top: 1rem;
  }
}

/* Media Queries para dispositivos médios */
@media (min-width: 600px) and (max-width: 1023px) {
  .inputs {
    flex-direction: column;
    align-items: center;
  }

  .input-nome,
  .input-cpf {
    width: 100%;
  }

  #input-submit {
    width: 80%;
    margin-top: 1rem;
    text-align: center;
  }
}

/* Media Queries para dispositivos grandes */
@media (min-width: 1024px) {
  .inputs {
    flex-direction: row;
    align-items: center;
    justify-content: space-between; /* Espaça os inputs e botão de submit */
  }

  .input-nome,
  .input-cpf {
    flex: 1;
    margin-right: 1rem; /* Adiciona margem à direita dos inputs */
  }

  .input-cpf {
    margin-right: 0; /* Remove a margem direita do último input */
  }

  #input-submit {
    width: auto; /* Ajusta a largura do botão de submit para se adaptar ao layout */
    height: 2.5rem; /* Define uma altura igual à dos inputs */
    margin: 0; /* Remove a margem do botão */
    align-self: stretch; /* Faz o botão se esticar para a altura dos inputs */
  }

  #input-infos {
    height: 2.5rem; /* Ajusta a altura dos inputs para se igualar ao botão de submit */
  }
}
</style>
