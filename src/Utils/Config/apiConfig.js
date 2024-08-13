import axios from "axios";
import { environmentConfig } from "./environmentConfig";
// import { getItem } from "./storageConfig";

export const axiosInstance = axios.create({
    baseURL:environmentConfig.baseURL
});

export const axiosInstance2 = axios.create({
    imageURL:environmentConfig.imageURL
});


axiosInstance.defaults.headers.post['Content-Type'] = 'application/json';


axiosInstance.interceptors.request.use(
    (config)=>{
        const accessToken = environmentConfig.API_Token;
        // const isAuthenticating = getItem('isAuthenticating');
        if(accessToken ){
            config.headers.Authorization = `Bearer ${accessToken}`;
        }
        return config;
    },
        (error)=>{
            return Promise.reject(error)
        }
    );