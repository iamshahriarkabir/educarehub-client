import axios from "axios";

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  withCredentials: true, // এটি সার্ভারে কুকি পাঠাতে বাধ্য করবে
});

export default axiosInstance;