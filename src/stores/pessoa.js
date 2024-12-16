import { ref } from 'vue'
import { defineStore } from 'pinia'
import PessoaService from '@/services/pessoa'

const pessoaService = new PessoaService()

export const usePessoaStore = defineStore('pessoa', () => {
    const pessoas = ref([])

    async function buscarTodasAsPessoas(pessoa) {
        const data = await pessoaService.buscarTodasAsPessoas(pessoa)
        pessoas.value = data.results
    }

    async function adicionarPessoa(pessoa) {
        console.log('aqui..')
        await pessoaService.adicionarPessoa(pessoa)
        await pessoaService.buscarTodasAsPessoas()
    }

    return { pessoas, buscarTodasAsPessoas, adicionarPessoa}
})