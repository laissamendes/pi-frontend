<script setup>
</script>

<template>
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
</template>

<style scoped>
i {
    font-size: 100px; /* Tamanho dos ícones */
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
    width: 100%; 
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
    transition: color 0.3s ease, border-color 0.3s ease;}

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
</style>
