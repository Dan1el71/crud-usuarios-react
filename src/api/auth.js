import axios from '../libs/axios'

export const loginRequest = async (email, password) => {
    return axios.post('/auth/login', {
        email,
        password
    })
}

export const usersRequest = async () => {
    return axios.get('/usuarios')
}

export const createUsers = async (user) => {
    return axios.post('/usuarios', user)
}