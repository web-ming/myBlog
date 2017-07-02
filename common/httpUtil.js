import axios from 'axios'
import apiConfig from '../config/api.Config'

const service = axios.create({
    baseURL: apiConfig.apiHost,
    headers: {'signal':'ab4494b2-f532-4f99-b57e-7ca121a137ca'}
})

service.interceptors.request.use(config => {
    console.log(config.url);
    return config
},error => {
    return Promise.reject(error)
})

service.interceptors.response.use(res => {
    return res
},err => {
    return Promise.reject(err)
})

export default service;
