import axios from './axios';
const url = '/api/accounts';

export const login = params => axios.post(`${url}/auth`, params)
export const logout = () => axios.delete(`http://localhost:12354${url}/auth`)
export const join = params => axios.post(`${url}`,params)