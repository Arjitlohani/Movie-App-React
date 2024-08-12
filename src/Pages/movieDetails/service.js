import { axiosInstance } from "../../Utils/Config/apiConfig"

export const getMovieDetails = async (id) => {
 const detailsResponse = await axiosInstance.get(`movie/${id}`);
    return detailsResponse.data;
}