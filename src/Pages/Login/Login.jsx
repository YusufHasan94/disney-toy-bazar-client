import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";

const Login = () => {
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col md:flex-row">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                <div className="card-body">
                    <form action="">
                        <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="text" placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" placeholder="password" className="input input-bordered" />
                        </div>
                        <div className="form-control mt-6">
                        <button className="btn btn-primary">Login</button>
                        <button className="flex justify-center gap-4 items-center my-2">
                            <FcGoogle className="text-4xl"></FcGoogle>
                            <span>Login with Google</span>
                        </button>
                        <h4>
                            Don't have an account? Please 
                            <Link to="/registration" className="text-primary"> Registration</Link>
                        </h4>
                        </div>
                    </form>
                </div>
                </div>
            </div>
        </div>
    );
};

export default Login;