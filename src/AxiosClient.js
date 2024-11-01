// AxiosClient.js
import axios from 'axios';

const AxiosClient = axios.create({
    baseURL: 'http://localhost:5000/auth',
    headers: {
        'Content-Type': 'application/json'
    }
});

export default AxiosClient;
