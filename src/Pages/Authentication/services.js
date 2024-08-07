import { axiosInstance } from "../../Utils/Config/apiConfig";

export const login = async ()=>{
    const response = await axiosInstance.get('authentication');
    return response;
}