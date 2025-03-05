import axios from 'axios';

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
    console.error('Axios Error:', error);
    return Promise.reject(error);
  }
);


export default actionInstance;