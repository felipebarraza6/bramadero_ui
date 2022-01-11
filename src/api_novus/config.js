import axios from 'axios'

const BASE_URL = 'https://api.tago.io/data'

// BRAMADERO 1333aa6c-6a3f-46d0-ab94-6359c6b0cdf3

export const Axios = axios.create({
    baseURL: BASE_URL,
    headers: {
        Authorization: 'a16508e6-8798-461a-8b07-729e03d8b1ef'
    }
})

export const GET = async (endpoint) =>{
    const request = await Axios.get(endpoint)
    return request
}