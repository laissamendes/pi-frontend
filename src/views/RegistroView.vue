<script setup></script>

<template>
    <form class="form">
    <h1 class="titulo">Registros</h1>
    <div class="inputs">
    <div class="input-nome">
      <input type="text" name="nome" id="input-infos" class="nome" placeholder="NOME COMPLETO"/>
    </div>
    <div>
    <p class="data">Data de Nascimento</p>
  <input id="date" type="date" value="2000/01/01" />
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
      <input type="text" name="nome" id="input-infos"  placeholder="MÃE"/>
    </div>
    <input type="submit" name="submit" id="input-submit" />
  </div>
  <div class="inputsII">
    <div class="input-image">
      <input type="text" name="image" id="input-image"  placeholder="carregar imagem" />
    </div>
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
    margin-top: 30px;
}
.data{
    color: #FEFAE0;
    font-weight: bold;
    margin-top: 10px;
}
.inputs{
    text-align:right;
    margin-right: 145px;
    border-radius: 50px;
    border-style: none;
   
}
#input-infos{
  border-radius: 50px;
  height: 50.52px;
  width: 566.99px;
  background-color: #FEFAE0;
  margin-top: 10px;
  border-style: none;
}
#cpf{
  border-radius: 50px;
  height: 50.52px;
  width: 566.99px;
  background-color: #FEFAE0;
  margin-top: 10px;
  border-style: none;
}
#date{
  border-radius: 50px;
  height: 50.52px;
  width: 100px;
  background-color: #FEFAE0;
  border-style: none;
 
}
.inputsII{
  margin-left: 145px;
}
.input-image{
   border-radius: 50px;
  height: 50.52px;
  width: 566.99px;
  background-color: #FEFAE0;
  margin-top: 10px;
}

</style>