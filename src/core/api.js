import axios from 'axios';
import { BASE_URL } from './consts';

const baseURL = BASE_URL;

const api = axios.create({
  baseURL,
});

export default api;
