import axios from "axios";


const API_URL = "https://re-style-backend.onrender.com/api/auth";


export const loginUser = (data) => axios.post(`${API_URL}/login`, data);
export const registerUser = (data) => axios.post(`${API_URL}/register`, data);
