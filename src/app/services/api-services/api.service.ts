import axios from "axios";
import {toast} from "react-toastify";

/**
 * This file doesn't do much. It's just a wrapper for axios that only exists to:
 * 1 - Set the base URL on axios from environment vars
 * 2 - Stuff the `Authorization` header in before a request goes out
 * 3 - Maybe other stuff later
 */

axios.defaults.baseURL = process.env.REACT_APP_API_BASE_URL;

// Secondary usage of axios in case we need one without auth headers .. i.e. for login.
export const axiosService = axios;

// Export our custom axios instance with auth headers added
export const api = axios.create({
    // baseURL: "/api",
    timeout: 60 * 1000
});

let token = 'abc'

api.interceptors.request.use((config: any) => {
    return {
        ...config,
        headers: {
            Authorization: `Bearer ${token}`,
            Scope: 'AP'
        }
    }
}, (exc) => Promise.reject(exc));

api.interceptors.response.use((res) => {
    return res
}, (err) => {
    console.error('Error',err);
    switch (err.response.status) {
        case 401:
            break
        default:
            toast.error(err?.response?.data?.message || "Something went wrong!")
    }

    return {
        data: {
            status: false,
            message: err.response.data.message,
            data: null
        }
    }
});
