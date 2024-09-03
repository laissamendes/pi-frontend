<script setup></script>

<template>
    <form class="form">
    <h1 class="titulo">Registros</h1>
    <div class="inputs">
    <div class="input-nome">
      <input type="text" name="nome" id="input-infos"  placeholder="NOME COMPLETO"/>
    </div>
    <div>
    <p class="data">Data de Nascimento</p>
  <input id="date" type="date" value="2000-01-01" />
</div>
    <div class="input-cpf">
      <input type="text" name="cpf" id="cpf"  v-cpf
  maxlength="14"
  placeholder="CPF" />
    </div>

    <div class="input-nome">
      <input type="text" name="nome" id="input-infos"  placeholder="PAI"/>
    </div>
    <div class="input-nome">
      <input type="text" name="nome" id="input-infos"  placeholder="MÃE" />
    </div>
    <input type="submit" name="submit" id="input-submit" />
  </div>
</form>
</template>

<style scoped>
form{
    background-color: #606C38;
    opacity: 0.7; /* 50% de opacidade */
    margin-left: 180px;
    margin-right: 180px;
    height: 500px;
}
.titulo{
    text-align: center;
    color: #FEFAE0;
    font-weight: bold;
    font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
}
.data{
    color: #FEFAE0;
    font-weight: bold;
}
.inputs{
    text-align:right;
    margin-right: 145px;
}
</style>