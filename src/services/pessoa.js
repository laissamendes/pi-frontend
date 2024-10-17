import axios from 'axios'
export default class PessoaService {
    async buscarTodasAsPessoas() {
        const { data } = await axios.get('/Pessoas/')
        return data
    }

    async adicionarPessoa(pessoa) {
        console.log(pessoa)
        await axios.post('/Pessoas/', pessoa)
    }
}