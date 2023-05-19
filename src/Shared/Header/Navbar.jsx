import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { FaUserAlt } from "react-icons/fa";
import ActiveLink from "./ActiveLink";
import 'react-tooltip/dist/react-tooltip.css';
import { Tooltip } from 'react-tooltip';

const Navbar = () => {
    const {user, logOut} = useContext(AuthContext);

    const logOutUser = ()=>{
        logOut()
        .then()
        .catch(error => console.log(error))
    }

    const navItems =
    <>
        <li><ActiveLink to="/">Home</ActiveLink></li>
        <li><ActiveLink to="/all-toys">All Toys</ActiveLink></li>
        <li><ActiveLink to="/blogs">Blogs</ActiveLink></li>
        {
            user?
            <>  
                <li><ActiveLink to="/my-toys">My Toys</ActiveLink></li>
                <li><ActiveLink to="/add-toys">Add A Toy</ActiveLink></li>
            </> : ""
        }
    </>
    return (
        <div className="navbar bg-base-10 my-2 bg-violet-100 rounded-xl">
            <div className="navbar-start">
                <div className="dropdown">
                <label tabIndex={0} className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>
                <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 font-semibold">
                    {navItems}
                </ul>
                </div>
                <h1 className="flex items-center">
                    <img src={logo} alt="" className='w-24 mr-4' />
                    <span className="text-sm md:text-xl">Disney Toys Bazar</span>
                </h1>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 font-semibold">
                    {navItems}
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user?<>
                        {
                            user.photoURL? 
                            <img src={user.photoURL} alt="" 
                            className="w-12 mr-4 rounded-full border-violet-800 border-2" 
                            data-tooltip-id="my-tooltip" data-tooltip-content={user.displayName?user.displayName : ''}/>
                            : <FaUserAlt className="text-3xl mr-4"></FaUserAlt>
                        }
                        <button className="btn btn-primary"><Link to="/login" onClick={logOutUser}>Log Out</Link></button>
                    </>:
                    <button className="btn btn-primary"><Link to="/login">Log In</Link></button>
                }
                <Tooltip id="my-tooltip"/>
            </div>
        </div>
    );
};

export default Navbar;