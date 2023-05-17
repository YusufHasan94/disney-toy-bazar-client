import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";

const Navbar = () => {
    const navItems =
    <>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/">All Toys</Link></li>
        <li><Link to="/">My Toys</Link></li>
        <li><Link to="/">Add A Toy</Link></li>
        <li><Link to="/">Blogs</Link></li>
    </>
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                <label tabIndex={0} className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>
                <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                    {navItems}
                </ul>
                </div>
                <h1 className="flex items-center">
                    <img src={logo} alt="" className='w-24 mr-4' />
                    <span className="text-sm md:text-xl">Disney Toys Bazar</span>
                </h1>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navItems}
                </ul>
            </div>
            <div className="navbar-end">
                <img src="https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg?w=826&t=st=1684339559~exp=1684340159~hmac=e68bf9e559b83944b8f0fff6e530927752566f03435244700a56d410dc0f15bc" alt="" className="w-12 mr-4 rounded-full border-violet-800 border-2"/>
                <button className="btn btn-primary"><Link to="/login">Log In</Link></button>
            </div>
        </div>
    );
};

export default Navbar;