import { environmentConfig } from "../../Utils/Config/environmentConfig";
import { axiosInstance } from "../../Utils/Config/apiConfig";

export const getFavoriteMovies = async (requestData) => {
    const response = await axiosInstance.post(`account/${environmentConfig.accountId}/favorite`, requestData);
    const data = response.data;
    return data;
}

export const getMyFavourite = async () => {
    const myFavouriteResponse = await axiosInstance.get(`account/${environmentConfig.accountId}/favorite/movies`)
    return myFavouriteResponse.data
}