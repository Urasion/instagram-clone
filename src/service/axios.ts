import axios from 'axios';
export const instance = axios.create({
  baseURL: 'http://localhost:3000/api',
  headers: {
    accept: 'application/json',
    'Content-type': 'application/json',
  },
  withCredentials: true,
});
