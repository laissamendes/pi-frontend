import axios from 'axios'
export default class AnimalService {
    async buscarTodosOsAnimais() {
        try {
            const { data } = await axios.get('/animal/');
            return data;
        } catch (error) {
            console.error('Erro ao buscar animais:', error);
            throw error;
        }
    }

    async adicionarAnimal(animal) {
        await axios.post('/animal/', animal)
    }
}