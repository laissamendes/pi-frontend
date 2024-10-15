import { ref } from 'vue'
import { defineStore } from 'pinia'
import MoradiaService from '@/services/moradia'

const moradiaService = new MoradiaService()

export const useMoradiaStore = defineStore('moradia', () => {
    const moradias = ref([])

    async function buscarTodasAsMoradias() {
        const data = await moradiaService.buscarTodasAsMoradias()
        moradias.value = data.results
    }

    async function adicionarMoradia(moradia) {
        await moradiaService.adicionarMoradia(moradia)
        await moradiaService.buscarTodasAsMoradias()
    }

    return { moradias, buscarTodasAsMoradias, adicionarMoradia}
})