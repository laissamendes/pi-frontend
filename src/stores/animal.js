import { ref } from 'vue'
import { defineStore } from 'pinia'
import AnimalService from '@/services/animal'

const animalService = new AnimalService()

export const useAnimalStore = defineStore('animal', () => {
    const animais = ref([])

    async function buscarTodosOsAnimais() {
        const data = await animalService.buscarTodosOsAnimais()
        animais.value = data.results
    }

    async function adicionarAnimal(animal) {
        await animalService.adicionarAnimal(animal)
        await animalService.buscarTodosOsAnimais()
    }

    return { animais, buscarTodosOsAnimais, adicionarAnimal}
})