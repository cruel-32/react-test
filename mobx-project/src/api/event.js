import axios from './axios';
const url = '/api/togethers/5cfc79afa210894244bc5334/events';

export const getEvents = params => axios.get(`${url}`, params)
export const postEvent = params => axios.post(`${url}`,params)
export const getEvent = _id => axios.get(`${url}/${_id}`)
export const putEvent = (_id,params) => axios.put(`${url}/${_id}`,params)
export const patchEvent = (_id,params) => axios.patch(`${url}/${_id}`,params)

