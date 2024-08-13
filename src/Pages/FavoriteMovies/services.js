import { environmentConfig } from "../../Utils/Config/environmentConfig";
import { axiosInstance } from "../../Utils/Config/apiConfig";

export const getFavoriteMovies = async () => {
    const response = await axiosInstance.get(`account/${environmentConfig.accountId}/favorite`, requestData);
    const data = response.data;
    return data;
}