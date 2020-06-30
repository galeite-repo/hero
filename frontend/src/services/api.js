import axios from 'axios';

const api = axios.create({
  baseURL: 'http://wfsweb.com:9001',
  // baseURL: 'http://localhost:3333',
})

export default api;