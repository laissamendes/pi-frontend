<script setup>
</script>

<template>
    <div class="div-mae">
        <div class="navigation">
            <div class="header-item">
                <p>Relacionados a pessoas</p>
            </div>
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
            <div class="space-item"></div> <!-- Espaço entre os pares -->
            <div class="header-item">
                <p>Outros</p>
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
p{
    color: darkolivegreen;
    font-family: Inter;
    font-size: 25px;
    font-weight: bold;
}
i {
    font-size: 60px; /* Ajuste o tamanho dos ícones conforme necessário */
    color: rgb(121, 31, 31); /* Cor dos ícones */
}

.navigation {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: auto auto auto; /* Adiciona uma linha extra para o título */
    gap: 20px;
    align-items: center;
    justify-items: center;
    text-align: center;
}

.header-item {
    grid-column: span 2; /* Ocupa duas colunas */
    margin-bottom: 10px; /* Espaço abaixo do título */
    font-size: 24px; /* Tamanho da fonte do título */
    color: rgb(121, 31, 31); /* Cor do texto do título */
}

.space-item {
    grid-column: span 2; /* Ocupa duas colunas */
    height: 40px; /* Altura do espaço desejado */
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

.div-mae {
    display: flex;
    justify-content: center; /* Centraliza horizontalmente */
    align-items: center; /* Centraliza verticalmente */
    height: 80vh; /* Ocupa toda a altura da viewport */
    text-align: center; /* Centraliza o texto */
}
</style>
