import axios from 'axios'
export default class PessoaService {
    async buscarTodasAsPessoas() {
        try {
            const { data } = await axios.get('/pessoas/?search={$pessoa}');
            return data;
        } catch (error) {
            console.error('Erro ao buscar pessoas:', error);
            throw error; 
        }
    }
    
    async adicionarPessoa(pessoa) {
        try {
            console.log(pessoa);
            await axios.post('/pessoas/', pessoa);
        } catch (error) {
            console.error('Erro ao adicionar pessoa:', error);
            throw error; 
        }
    }}