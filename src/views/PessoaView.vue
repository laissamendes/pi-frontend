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
  <div class="profile-image"></div>
  <!--colocamos para saber como ficara pronto -->
    <img src="" alt=""  />
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
.inputs {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  padding: 1rem;
  justify-content: center;
}


.input-nome,
.input-cpf {
  display: flex;
  flex-direction: column;
}

#input-infos {
  margin: 0.5rem 0;
  padding: 0.5rem;
  color: #fefae0;
  background-color: #606c3869;
  border: none;
  border-radius: 20px;
}

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


label {
  color: #6a2c0f;
}


.infos {
  padding: 1rem;
  text-align: left;
  color: #6a2c0f;
  display: flex;
  align-items: baseline;
}

.infos > .profile-image {
  width: 20rem;
  height: 20rem;
  background-color: #4a532b;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}


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

@media (min-width: 1024px) {
  .inputs {
    flex-direction: row;
    align-items: center;
    justify-content: space-between; 
  }

  .input-nome,
  .input-cpf {
    flex: 1;
    margin-right: 1rem; 
  }

  .input-cpf {
    margin-right: 0; 
  }

  #input-submit {
    width: auto; 
    height: 2.5rem;
    margin: 0; 
    align-self: stretch; 
  }

  #input-infos {
    height: 2.5rem; 
  }
}
</style>
