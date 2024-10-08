import axios from 'axios'
export default class MoradiaService {
    async buscarTodasAsMoradias() {
        const { data } = await axios.get('/casas/')
        return data
    }

    async adicionarMoradia(moradia) {
        await axios.post('/casas/', moradia)
    }
}