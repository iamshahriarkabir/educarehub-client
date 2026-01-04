import axios from "axios";

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  withCredentials: true, // এটি খুবই গুরুত্বপূর্ণ: কুকি আদান-প্রদানের জন্য
});

export default axiosInstance;