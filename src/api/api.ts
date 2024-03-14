import axios from "axios"

export const API_URL = import.meta.env.VITE_BASE_API_URL

export const api = axios.create({
  withCredentials: true,
  baseURL: API_URL,
})

api.interceptors.request.use((config) => {
  config.headers.Authorization = `Bearer ${localStorage.getItem("token")}`
  return config
})

api.interceptors.response.use(
  (config) => {
    return config
  },
  async (error) => {
    const originalRequest = error.config
    if (error.response.status === 401) {
      const response = await axios.get(
        `${import.meta.env.VITE_BASE_API_URL}/refresh`,
        {
          withCredentials: true,
        }
      )
      localStorage.setItem("key", response.data.accessToken)
    }
    return api.request(originalRequest)
  }
)
