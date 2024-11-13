import axios from "axios";

const axiosInstance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_SERVER_BASE_URL,
    withCredentials: true, // Ensures cookies are sent automatically
});

// Helper function to get cookie value by name (client-side only)
const getCookie = (name: string) => {
    if (typeof window === "undefined") return null; // Avoid using document.cookie on the server
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop()?.split(";").shift();
    return null;
};

axiosInstance.interceptors.request.use(
    (config) => {
        // Get token from cookies (only in the browser)
        const token = getCookie("token");

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

export default axiosInstance;
