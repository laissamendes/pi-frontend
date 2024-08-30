<script setup>
</script>

<template>
    <div class="div-mae">
    <div class="navigation">
        <div class="nav-item">
            <router-link to="/Pessoa" class="nav-link" aria-label="Pessoa">
                <i class="mdi mdi-account"/> 
                <span>Pessoa</span>
            </router-link>
        </div>
        <div class="nav-item">
            <router-link to="/Animais" class="nav-link" aria-label="Animais">
                <i class="mdi mdi-paw"/> 
                <span>Animais</span>
            </router-link>
        </div>
        <div class="nav-item">
            <router-link to="/Registro" class="nav-link" aria-label="Registro">
                <i class="mdi mdi-file-document-minus-outline"/> 
                <span>Registro</span>
            </router-link>
        </div>
        <div class="nav-item">
            <router-link to="/Moradias" class="nav-link" aria-label="Moradias">
                <i class="mdi mdi-home"/> 
                <span>Moradias</span>
            </router-link>
        </div>
    </div>
</div>
</template>
<style scoped>
i {
    font-size: 60px; /* Ajuste o tamanho dos ícones conforme necessário */
    color: rgb(121, 31, 31); /* Cor dos ícones */
}

.navigation {
    display: grid;
    grid-template-columns: repeat(2, 1fr); 
    grid-template-rows: repeat(2, auto);
    gap: 20px; 
    align-items: center;
    justify-items: center;
    text-align: center; 
    
}

.nav-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end; /* Move o conteúdo para baixo */
    width: 200px; /* Ajuste conforme necessário */
    height: 170px; /* Ajuste conforme necessário */
}

.nav-link {
    color: rgb(121, 31, 31); 
    font-size: 20px; 
    text-decoration: none; 
    display: flex;
    flex-direction: column;
    align-items: center; 
    border: 2px solid rgb(121, 31, 31); 
    border-radius: 8px; 
    padding: 10px; 
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    transition: color 0.3s ease, border-color 0.3s ease;
}

.nav-link:hover {
    color: rgb(150, 50, 50); 
    border-color: rgb(150, 50, 50); 
}

.nav-link span {
    margin-top: 10px; 
}

.nav-link i {
    margin: 0; 
}
.div-mae{
    display: flex;
    justify-content: center; /* Centraliza horizontalmente */
    align-items: center; /* Centraliza verticalmente */
    height: 100vh; /* Ocupa toda a altura da viewport */
    text-align: center; /* Centraliza o texto */
}
</style>