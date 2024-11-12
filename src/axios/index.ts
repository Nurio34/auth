import axios from "axios";

const axiosInstance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_SERVER_BASE_URL,
});

axiosInstance.interceptors.request.use(
    (config) => {
        // Helper function to get cookie value by name
        const getCookie = (name: string) => {
            const value = `; ${document.cookie}`;
            console.log({ value });

            const parts = value.split(`; ${name}=`);
            console.log({ parts });

            if (parts.length === 2) return parts.pop()?.split(";").shift();
        };

        // Get token from cookies
        const token = getCookie("token");
        console.log({ token });

        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        } else {
            console.log("No token found in cookies");
        }

        return config;
    },
    (error) => {
        return Promise.reject(error);
    },
);

axiosInstance.defaults.withCredentials = true;

export default axiosInstance;
