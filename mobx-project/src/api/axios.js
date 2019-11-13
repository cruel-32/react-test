import * as axios from 'axios';
console.log('axios.defaults : ', axios.defaults);
axios.defaults.baseURL = 'http://localhost:12354';
// axios.defaults.baseURL = 'https://momoapps.herokuapp.com';

axios.defaults.headers.common['Authorization'] = 'momo-actions';
axios.defaults.headers.post['Content-Type'] = 'application/json'; //, application/x-www-form-urlencoded
axios.defaults.headers.put['Content-Type'] = 'application/json';
axios.defaults.headers.patch['Content-Type'] = 'application/json';
axios.defaults.headers.delete['Content-Type'] = 'application/json';
axios.defaults.withCredentials = true;
console.log('axios.defaults : ', axios.defaults);

export default axios