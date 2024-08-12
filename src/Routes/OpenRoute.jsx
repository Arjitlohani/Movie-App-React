import { Navigate, Outlet } from "react-router-dom";
import { getItem } from "../Utils/Config/storageConfig";


const OpenRoute = () => {
const isAuthenticated =  Boolean(getItem('isAuthenticating'));
const userDetails = JSON.parse(getItem('userDetails'));

    if(!isAuthenticated && !userDetails){
        return <Outlet/>
    }
    else return <Navigate to='/Dashboard' replace={true} />

}

export default OpenRoute
