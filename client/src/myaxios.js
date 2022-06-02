import axios from 'axios';

const ip = "10.1.9.1";

const myaxios = axios.create({
    baseURL: `http://${ip}:38000`
})

myaxios.interceptors.request.use((config) => {
    const token = localStorage.getItem("token");
    if (token) {
        config.headers["Authorization"] = "Bearer " + token
    }
    return config;
})

export default myaxios;