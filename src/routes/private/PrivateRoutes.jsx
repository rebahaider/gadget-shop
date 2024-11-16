import { useLocation } from "react-router-dom";
import useAuth from "../../hooks/useAuth"
import Loading from "../../pages/Loading";

const PrivateRoutes = ({ children }) => {

    const { user, loading } = useAuth();
    const location = useLocation();

    if(loading){
        return <Loading></Loading>
    }
    return (
        <div>

        </div>
    )
}

export default PrivateRoutes
