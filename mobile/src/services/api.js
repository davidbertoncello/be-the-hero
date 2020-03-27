import axios from 'axios';

const api = axios.create({
    baseURL: 'http://192.168.1.21:3333' // IP que está na tela do expo no navegador acima do QR.
});

export default api;