import axios from "axios";
const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  timeout: 10000,
  timeoutErrorMessage: "Server Timed Out...",
  headers: {
    "Content-type": "application/json",
    "Accept-lang": "en",
    Accept: "application/json",
  },
});
axiosInstance.interceptors.response.use(
  (success) => {
    return success.data;
  },
  (error) => {
    return error.response.data;
  }
);

export default axiosInstance;
