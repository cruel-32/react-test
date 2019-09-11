import axios from './axios';
const url = '/api/category';

export const getCategories = parentId => axios.get(`${url}/${parentId}`)