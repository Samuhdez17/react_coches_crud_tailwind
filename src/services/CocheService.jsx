import axios from 'axios';
import Global from '../Global';

export default class CocheService {
    async getCoches() {
        const url = Global.apiCoches
        const request = 'api/coches'

        const response = await axios.get(url + request)
        return response.data
    }
}
