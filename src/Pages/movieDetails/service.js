import { axiosInstance } from "../../Utils/Config/apiConfig"
import { environmentConfig } from "../../Utils/Config/environmentConfig";

export const getMovieDetails = async (id) => {
 const detailsResponse = await axiosInstance.get(`movie/${id}`);
    return detailsResponse.data;
}

export const addToFavourite = async (requestData) => {
    const favouriteResponse = await axiosInstance.post(`account/${environmentConfig.accountId}/favorite`,requestData)
    return favouriteResponse
}

export const getMyFavourite = async () => {
    const myFavouriteResponse = await axiosInstance.get(`account/${environmentConfig.accountId}/favorite/movies`)
    return myFavouriteResponse.data
}