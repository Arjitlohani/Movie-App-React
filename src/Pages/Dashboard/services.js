import { axiosInstance } from "../../Utils/Config/apiConfig";

export const getPopularMovies = async () => {
    const response = await axiosInstance.get('movie/popular');
    const data = response.data;
    return data;
}

export const getPopularMoviesDetails = async () => {
    const response = await axiosInstance.get(`account/{account_id}`);
    const data = response.data;
    return data;

}