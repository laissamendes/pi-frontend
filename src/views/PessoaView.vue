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

  <div v-if="">
  </div>
</template>

<style scoped>
#input-infos {
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
  width: 30rem;
  height: 2rem;
  color: #fefae0;
  background-color: #606c3869;
  border-style: none;
  border-radius: 20px;
}
#input-submit {
  color: #fefae0;
  background-color: #606c38;
  border-style: none;
  border-radius: 20px;
}
label {
  color: #6a2c0f;
}
.inputs {
  display: flex;
  justify-content: space-around;
  justify-items: baseline;
}

#input-submit {
  width: 10rem;
  height: 2rem;
  font-size: 1rem;
}
</style>
