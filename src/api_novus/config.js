import axios from 'axios'

const BASE_URL = 'https://api.tago.io/data'

// BRAMADERO 1333aa6c-6a3f-46d0-ab94-6359c6b0cdf3

export const Axios = axios.create({
    baseURL: BASE_URL,
    headers: {
        Authorization: '9d1162a7-7088-4dc8-9b19-d666acc051b1'
    }
})

export const GET = async (endpoint) =>{
    const request = await Axios.get(endpoint)
    return request
}