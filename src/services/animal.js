import axios from 'axios'
export default class AnimalService {
    async buscarTodosOsAnimais() {
        try {
            const { data } = await axios.get('/animais/');
            return data;
        } catch (error) {
            console.error('Erro ao buscar animais:', error);
            throw error;
        }
    }

    async adicionarAnimal(animal) {
        await axios.post('/animais/', animal)
    }
}