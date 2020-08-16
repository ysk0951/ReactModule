import axios from 'axios';

const USER_API_ABSE_URL = "http://localhost:3333/Spring/api.git"

class ApiService {
    fetchUsers(){
        return axios.get(USER_API_ABSE_URL);
    }
}

export default new ApiService();