import axios from 'axios'
export default class MoradiaService {
    async buscarTodasAsMoradias() {
        try {
            const { data } = await axios.get('/casas/');
            return data;
        } catch (error) {
            console.error('Erro ao buscar moradias:', error);
            throw error;
        }
    }

    async adicionarMoradia(moradia) {
        await axios.post('/casas/', moradia)
    }
}