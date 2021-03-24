import axios from 'axios';

export const api = axios.create({
  timeout: 15000,
});

api.interceptors.request.use(
  async (config) => {
    config.headers = {
      'Content-Type': 'application/json',
      accept: 'application/json',
    };

    return config;
  },
  (error) => {
    Promise.reject(error);
  },
);
