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
p {
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

/* Media queries para telas grandes */
@media (min-width: 1200px) {
    .navigation {
        grid-template-columns: repeat(2, 1fr); /* Duas colunas para centralizar os itens */
        grid-template-rows: auto auto; /* Ajusta as linhas */
        justify-content: center; /* Centraliza o conteúdo horizontalmente */
        gap: 40px; /* Espaço entre os itens */
    }

    .header-item, .space-item {
        grid-column: span 2; /* Ocupa duas colunas */
    }

    .nav-item {
        width: 200px; /* Ajusta conforme necessário */
        height: 150px; /* Ajusta conforme necessário */
    }

    i {
        font-size: 80px; /* Ajusta o tamanho dos ícones */
    }
}

/* Media queries para telas médias */
@media (min-width: 768px) and (max-width: 1199px) {
    .navigation {
        grid-template-columns: repeat(2, 1fr); /* Duas colunas para telas médias */
        grid-template-rows: auto auto auto auto; /* Ajusta as linhas */
    }

    .header-item, .space-item {
        grid-column: span 2; /* Ocupa duas colunas */
    }

    .nav-item {
        width: 220px; /* Ajusta conforme necessário */
        height: 180px; /* Ajusta conforme necessário */
    }

    i {
        font-size: 60px; /* Ajusta o tamanho dos ícones */
    }
}

/* Media queries para telas pequenas */
@media (max-width: 767px) {
    .navigation {
        grid-template-columns: 1fr; /* Uma coluna em telas pequenas */
        grid-template-rows: auto auto auto auto auto auto; /* Ajusta as linhas */
        gap: 15px;
    }

    .header-item, .space-item {
        grid-column: span 1; /* Ocupa uma coluna */
    }

    .nav-item {
        width: 100%; /* Ajusta a largura para 100% */
        height: auto; /* Ajusta a altura automaticamente */
    }

    .nav-link {
        font-size: 18px; /* Ajusta o tamanho da fonte */
    }

    i {
        font-size: 40px; /* Ajusta o tamanho dos ícones */
    }
}

@media (max-width: 480px) {
    p {
        font-size: 20px; /* Ajusta o tamanho do texto */
    }

    .nav-link {
        font-size: 16px; /* Ajusta o tamanho da fonte */
        padding: 8px; /* Ajusta o padding */
    }

    i {
        font-size: 30px; /* Ajusta o tamanho dos ícones */
    }
}
</style>
