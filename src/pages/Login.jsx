import { Link, useNavigate } from "react-router-dom"
import useAuth from "../hooks/useAuth";
import { useForm } from "react-hook-form";
import GoogleLogin from "../components/login-registration/googleLogin";

const Login = () => {
    const { signInUser } = useAuth();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const navigate = useNavigate();

    const onSubmit = (data) => {
        signInUser(data.email, data.password);
        navigate("/")
    }
    return (
        <div>
            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Log in now!</h1>
                        <p className="py-6">
                            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                            quasi. In deleniti eaque aut repudiandae et a id nisi.
                        </p>
                    </div>
                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                        <form className="card-body" onSubmit={handleSubmit(onSubmit)}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email" className="input input-bordered"
                                    {...register("email", { required: true })} />
                                {errors.email && <span className="text-red-500 font-light text-sm">Email is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="password" className="input input-bordered"
                                    {...register("password", { required: true, minLength: 6 })} />
                                {errors.password?.type === "required" && <span className="text-red-500 font-light text-sm">Password is required</span>}
                                {errors.password?.type === "minLength" && <span className="text-red-500 font-light text-sm">Password must have 6 characters</span>}
                            </div>
                            <div className="form-control mt-6">
                                <button type="submit" className="btn btn-warning">Log in</button>
                            </div>
                            <div>
                                <GoogleLogin></GoogleLogin>
                            </div>
                            <p className="my-4 font-thin">
                                New Here? <Link to="/register" className="text-primary">Register</Link>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login
