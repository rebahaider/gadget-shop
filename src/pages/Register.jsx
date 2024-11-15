import { Link, useNavigate } from "react-router-dom"
import useAuth from "../hooks/useAuth";
import { useForm } from "react-hook-form";
import GoogleLogin from "../components/login-registration/googleLogin";

const Register = () => {

    const { createUser } = useAuth();

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();

    // const navigate = useNavigate();

    const onSubmit = (data) => {
        // createUser(data.email, data.password);
        // navigate("/");
        console.log(data);
    };


    return (
        <div>
            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Register now!</h1>
                        <p className="py-6">
                            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                            quasi. In deleniti eaque aut repudiandae et a id nisi.
                        </p>
                    </div>
                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                        <form className="card-body" onSubmit={handleSubmit(onSubmit)}>
                            {/* email  */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email" className="input input-bordered"
                                    {...register("email", { required: true })} />
                                {errors.email && <span className="text-red-500 font-light text-sm">Email is required</span>}
                            </div>
                            {/* password */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="password" className="input input-bordered"
                                    {...register("password", { required: true, minLength: 6 })} />
                                {errors.password?.type === "required" && <span className="text-red-500 font-light text-sm">Password is required</span>}
                                {errors.password?.type === "minLength" && <span className="text-red-500 font-light text-sm">Password must have 6 characters</span>}
                            </div>
                            {/* conform password */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Conform Password</span>
                                </label>
                                <input type="password" placeholder="password" className="input input-bordered"
                                    {...register("conformPassword", {
                                        required: true, validate: (value) => {
                                            if (watch('password') != value) {
                                                return "Your Password do not match"
                                            }
                                        }
                                    })} />
                                {errors.conformPassword && <span className="text-red-500 font-light text-sm">Both password must match</span>}
                            </div>
                            {/* role */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Role</span>
                                </label>
                                <select className="select select-bordered w-full max-w-xs"
                                    {...register("role", { required: true })}>

                                    <option>Buyer</option>
                                    <option>Seller</option>
                                </select>
                                {errors.role && <span className="text-red-500 font-light text-sm">you must select a role</span>}
                            </div>
                            <div className="form-control mt-6">
                                <button type="submit" className="btn btn-warning">Register</button>
                            </div>
                            <div>
                                <GoogleLogin></GoogleLogin>
                            </div>
                            <p className="my-4 font-thin">
                                Already have an account? <Link to="/login" className="text-primary">Log in</Link>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register
