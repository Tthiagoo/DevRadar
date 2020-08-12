import axios from 'axios';

const api = axios.create({
  baseURL: 'https://devradar-deploy.herokuapp.com/',
});

export default api;
