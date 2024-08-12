import { axiosInstance } from "../../Utils/Config/apiConfig";
import { clear } from "../../Utils/Config/storageConfig";

export const login = async ()=>{
    const response = await axiosInstance.get('authentication');
    return response;
}

export const getUsersdetail=async(accountId)=>{
    const response = await axiosInstance.get(`account/${accountId}`);
    return response;
}

export const logout=()=>{
    clear();
    window.location.href='/';
}