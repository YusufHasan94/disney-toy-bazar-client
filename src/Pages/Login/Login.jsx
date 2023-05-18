import { useContext, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";

const Login = () => {
    const {loginUser, LoginWithGoogle} = useContext(AuthContext);
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");
    const handleLogin = event=>{
        event.preventDefault();
        setError("");
        setSuccess("");
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const user = {email, password};
        console.log(user);
        loginUser(email, password)
        .then(result =>{
            const loggedUser = result.user;
            console.log(loggedUser);
            setSuccess("Successfully Logged In");
        })
        .catch(error => {
            setError(error.message);
        })
        form.reset('');
    }
    const handleGoogleLogin = ()=>{
        LoginWithGoogle()
        .then(result=>{
            const loggedUser = result.user;
            console.log(loggedUser);
        })
        .catch(error=> console.log(error.message))
    }
    return (
        <div className="hero min-h-screen bg-base-200 my-4">
            <div className="hero-content flex-col md:flex-row">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <form onSubmit={handleLogin}>
                            <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" placeholder="email" name="email" required className="input input-bordered" />
                            </div>
                            <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="password" name="password" required className="input input-bordered" />
                            </div>
                            <div className="form-control mt-6">
                            <input type="submit" value="Log In" className="btn btn-primary"/>
                            <button className="flex justify-center gap-4 items-center my-2" onClick={handleGoogleLogin}>
                                <FcGoogle className="text-4xl"></FcGoogle>
                                <span>Login with Google</span>
                            </button>
                            <h4>
                                Don't have an account? Please 
                                <Link to="/registration" className="text-primary"> Registration</Link>
                            </h4>
                            </div>
                        </form>
                        <div className="text-center">
                            <span className="text-green-900">{success}</span>
                            <span className="text-red-900">{error}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;