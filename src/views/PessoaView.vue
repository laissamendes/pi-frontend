<script setup>
import { ref, onMounted } from 'vue';
import { usePessoaStore } from '@/stores/pessoa';

const pessoaStore = usePessoaStore();

const pessoa = ref({
  nome: '',
  cpf: '',
  data_nasc: '',
  status_escolaridade: null,
  fotoPessoa: ''
});

const pesquisa = ref('')

const dadosEncontrados = ref(false);

async function buscarPessoa() {
  await pessoaStore.buscarTodasAsPessoas(pesquisa.value);
  const resultado = pessoaStore.pessoas
  console.log(resultado)
  if (resultado && resultado.length > 0) {
    const dadosPessoa = resultado[0];
    pessoa.value = {
      ...dadosPessoa
    };
    dadosEncontrados.value = true;
  } else {
    pessoa.value = {
      nome: '',
      cpf: '',
      data_nasc: '',
      status_escolaridade: null,
      fotoPessoa: ''
    };
    pesquisa.value = ''
    dadosEncontrados.value = false;
    alert('Nenhuma pessoa encontrada!');
  }
}

onMounted(() => {
  pessoaStore.buscarTodasAsPessoas();
});
</script>

<template>
  <form @submit.prevent="buscarPessoa">
    <div class="inputs">
      <div class="input-nome">
        <label for="nome">Nome Completo:</label>
        <input type="text" name="nome" id="input-infos" v-model="pesquisa" />
      </div>
      <button type="submit" name="submit" id="input-submit">Pesquisar</button>
    </div>
  </form>

  <div v-if="dadosEncontrados" class="container-dados">
    <div class="infos-pessoais">
      <div class="profile-image">
        <img :src="pessoa.fotoPessoa?.url" alt="Foto da pessoa" style="border-radius: 50%;width: 20rem;
  height: 20rem;"/>
      </div>
    </div>
    <div class="dados">
      <p>Nome Completo: {{ pessoa.nome }}</p>
      <p>CPF: {{ pessoa.cpf }}</p>
      <p>Data de nascimento: {{ pessoa.data_nasc }}</p>
      <p>Escolaridade: {{ pessoa.status_escolaridade }}</p>
    </div>
  </div>
</template>

<style scoped>
.dados {
  margin: 60px;
  color: #6a2c0f;
  font-size: x-large;
}

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


.infos-pessoais {
  padding: 1rem;
  color: #6a2c0f;
  display: flex;
  justify-content: center;
}

.infos-pessoais>.profile-image {
  width: 20rem;
  height: 20rem;
  background-color: #4a532b;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.container-dados {
  display: grid;
  grid-template-columns: 1fr 1fr;
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
