import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'http://127.0.0.1:3333',
  timeout: 1000,
  withCredentials: false, // This is the default
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

export default {
  registerUser(payload) {
    return apiClient.post('auth/register', payload);
  },

  loginUser(payload) {
    return apiClient.post('auth/login', payload);
  },
};
