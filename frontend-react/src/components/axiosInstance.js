import axios from "axios";
console.log("VITE_API_URL =", import.meta.env.VITE_API_URL);
const axiosInstance = axios.create({

    baseURL:import.meta.env.VITE_API_URL || "http://127.0.0.1:8000/api/"

});


axiosInstance.interceptors.request.use(

    function (config) {

        const token =
            localStorage.getItem("accessToken");

        if (token) {

            config.headers.Authorization =
                `Bearer ${token}`;

        }

        return config;
    }

)

export default axiosInstance;
