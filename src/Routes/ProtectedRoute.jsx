import { Navigate } from "react-router-dom";
import { getItem } from "../Utils/Config/storageConfig";
import Navbar from "../Components/Partials/Navbar";

const Wrapper = ({ children }) => {
    return (
        <>
            <Navbar />
            {children}
        </>
    );
};

const ProtectedRoute = ({ children }) => {
    const isAuthenticated = Boolean(getItem('isAuthenticating'));
    const userDetails = JSON.parse(getItem('userDetails'));

    if (!isAuthenticated && !userDetails) {
        return <Navigate to="/" replace={true} state={{ from: location.pathname }} />;
    }

    return (
        <Wrapper>
            {children}
        </Wrapper>
    );
};

export default ProtectedRoute;
