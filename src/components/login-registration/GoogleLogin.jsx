import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth"
import { FcGoogle } from "react-icons/fc";

const GoogleLogin = () => {
    const { signInWithGoogle } = useAuth();
    const navigate = useNavigate();

    const handleGoogleLogin = () => {
        signInWithGoogle().then(() => {
            navigate("/");
        });

    }
    return (
        <div>
            <div className="divider">OR</div>
            <button onClick={handleGoogleLogin} className="btn btn-warning btn-outline w-full"><FcGoogle />Log In With Google</button>
        </div>
    )
}

export default GoogleLogin;
