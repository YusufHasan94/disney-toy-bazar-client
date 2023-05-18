import { useContext, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { Link } from "react-router-dom";

const Registration = () => {
    const {createUser, updateUserInfo} = useContext(AuthContext);
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

    const createNewUser= event =>{
        event.preventDefault();
        setError("");
        setSuccess("");
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const photoURL = form.photoURL.value;
        const password = form.password.value;
        const user = {name, email, photoURL, password}
        console.log(user);
        createUser(email, password)
        .then(result=>{
            updateUserInfo(name, photoURL);
            console.log(result.user);
            setSuccess("Registration successfully complete")
        })
        .catch(error =>{
            setError(error.message);
        })
        form.reset('');
    }

    return (
        <div className="hero min-h-screen bg-base-200 my-4">
            <div className="hero-content flex-col md:flex-row">
                <div className="text-center lg:text-left">
                <h1 className="text-5xl font-bold">Registration now!</h1>
                <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                <div className="card-body">
                    <form onSubmit={createNewUser}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name='name' placeholder="Name" required className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" name='email' placeholder="email" required className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input type="text" name='photoURL' placeholder="Photo URL" required className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" required className="input input-bordered" />
                        </div>
                        <div className="form-control mt-6">
                        <input type="submit" value="Registration" className='btn btn-primary'/>
                        </div>
                        <h1 className="text-center my-2">Already have an account? please <Link to="/login" className="text-violet-900 font-semibold">Log In</Link> </h1>
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

export default Registration;