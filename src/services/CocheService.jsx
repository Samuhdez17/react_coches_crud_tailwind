import axios from 'axios';
import Global from '../Global';

export default class CocheService {
    async getCoches() {
        const url = Global.apiCoches
        const request = 'api/coches'

        const response = await axios.get(url + request)
        return response.data
    }

    async getCoche(id) {
        const url = Global.apiCoches
        const request = 'api/coches/findcoche/' + id

        const response = await axios.get(url + request)
        return response.data
    }

    async createCoche(coche) {
        const url = Global.apiCoches
        const request = 'api/coches/insertcoche'

        const response = await axios.post(url + request, coche)
        return response.data
    }

    async updateCoche(coche) {
        const url = Global.apiCoches
        const request = 'api/coches/updatecoche'

        const response = await axios.put(url + request, coche)
        return response.data
    }

    async deleteCoche(id) {
        const url = Global.apiCoches
        const request = 'api/coches/deletecoche/' + id

        const response = await axios.delete(url + request)
        return response.data
    }
}
