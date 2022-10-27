import axios from "axios";
import { getToken } from './auth'

const api = axios.create({
    baseURL: "http://localhost:5000"
    // baseURL: "https://rentabilidadestargetinvest.com.br/api"
})

api.interceptors.request.use(function (config) {
    const token = getToken()
    if (token) {
        config.headers!.Authorization = `Bearer ${token}`
    }
    return config
})

export default api