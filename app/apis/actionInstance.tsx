import axios from 'axios';
import type { ErrorResponse } from '@/types/errors';

const actionInstance = axios.create({
  baseURL: import.meta.env.VITE_API_HOST,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

actionInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    const merchantUID = localStorage.getItem('merchantUID');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    if (merchantUID) {
      config.headers.merchantUID = merchantUID;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

actionInstance.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    if (import.meta.env.DEV) {
      console.error('Axios Error:', error);
    }
    return Promise.reject({
      message: error.response?.data.errors || error.message || 'An error occurred',
      status: error.response?.status || 500,
      statusText: error.response?.statusText || 'Internal Server Error',
    } as ErrorResponse);
  }
);

export default actionInstance;