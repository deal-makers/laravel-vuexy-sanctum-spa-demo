// axios
import axios from 'axios'
import router from '@/router'

const baseURL = 'http://localhost:8000'
const withCredentials = true

const instance = axios.create({
  baseURL,
  withCredentials
});

instance.interceptors.response.use(
  response => {
    return Promise.resolve(response);
  },
  error => {
    if (error.response.status === 401) {
      localStorage.removeItem('userInfo')
      router.push({ name: 'page-login' })
    }
    return Promise.reject(error);
  })

export default instance;