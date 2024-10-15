import axios from 'axios'
export default class PessoaService {
    async buscarTodasAsPessoas() {
        const { data } = await axios.get('/pessoas/')
        return data
    }

    async adicionarPessoa(pessoa) {
        pessoa.data_nasc = `${pessoa.dia_nascimento}/${pessoa.mes_nascimento}/${pessoa.ano_nascimento}`
        delete pessoa.adicionarPessoa
        await axios.post('/pessoas/', pessoa)
    }
}