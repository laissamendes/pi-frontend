import { ref } from 'vue'
import { defineStore } from 'pinia'
import MoradiaService from '@/services/moradia'

const moradiaService = new MoradiaService()

export const useMoradiaStore = defineStore('moradia', () => {
    const moradias = ref([
        // { id: 1, descricao: 'do Dudu', numero_comodos: 3, numero_casa: 11  },
        // { id: 2, descricao: 'da Laiza', numero_comodos: 2, numero_casa: 11 }
    ])

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