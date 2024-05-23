import axios from 'axios'

const axiosInstance = axios.create({
    baseURL: 'https://localhost:44308/api',
    headers: {
        'Content-Type' : 'application/json',
    },
});

export default axiosInstance;