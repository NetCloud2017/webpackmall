import ajax from './axios'
const baseUrl = '127.0.0.1'
const login = userData => ajax(baseUrl, userData)
