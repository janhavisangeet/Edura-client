import axios from "axios";
import dotenv from "dotenv";
dotenv.config();
const axiosInstance = axios.create({
  
  baseURL: "https://edura-server.onrender.com",
});

axiosInstance.interceptors.request.use(
  (config) => {
    const accessToken = JSON.parse(sessionStorage.getItem("accessToken")) || "";

    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }

    return config;
  },
  (err) => Promise.reject(err)
);

export default axiosInstance;
// import axios from "axios";

// const axiosInstance = axios.create({
//   baseURL: import.meta.env.VITE_API_URL || "http://localhost:5000", 
//   withCredentials: true, // only if you’re using cookies
// });

// axiosInstance.interceptors.request.use(
//   (config) => {
//     const accessToken = JSON.parse(sessionStorage.getItem("accessToken")) || "";

//     if (accessToken) {
//       config.headers.Authorization = `Bearer ${accessToken}`;
//     }

//     return config;
//   },
//   (err) => Promise.reject(err)
// );

// export default axiosInstance;
