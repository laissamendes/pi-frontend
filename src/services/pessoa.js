import axios from 'axios'
export default class PessoaService {
    async buscarTodasAsPessoas(pessoa = '') {
        try {
            const { data } = await axios.get(`/Pessoas/?search=${pessoa}`);
            console.log(data)
            return data;
        } catch (error) {
            console.error('Erro ao buscar pessoas:', error);
            throw error; 
        }
    }
    
    async adicionarPessoa(pessoa) {
    
        try {
            console.log(pessoa);
            await axios.post('/Pessoas/', pessoa);
        } catch (error) {
            console.error('Erro ao adicionar pessoa:', error);
            throw error; 
        }
    }}