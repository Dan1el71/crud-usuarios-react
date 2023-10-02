import axios from 'axios'
import { useAuthStore } from '../store/auth'

const authApi = axios.create({
    baseURL: 'http://127.0.0.1:8000/api/',
    withCredentials: true
})
authApi.interceptors.request.use(config => {
    const token = useAuthStore.getState().token
    config.headers = {
        Authorization: `Bearer ${token}`
    }
    return config
})

export default authApi