import axios from 'axios';

const API = axios.create({
  baseURL: 'https://re-style-backend.vercel.app/api', 
});

export const registerUser = (data) => API.post('/auth/register', data);
export const loginUser = (data) => API.post('/auth/login', data);
