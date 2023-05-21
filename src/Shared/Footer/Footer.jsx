import React from 'react';
import img from "../../assets/logo.png"
import { Link } from 'react-router-dom';
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="footer p-10 bg-base-200 text-base-content">
            <div>
                <img src={img} alt=""  className='w-24'/>
                <h1 className='font-semibold text-xl'>Disney Toys Bazar</h1>
                <p>Providing best toy with suitable price.</p>
            </div> 
            <div>
                <span className="footer-title">Important Links</span> 
                <Link to="/">Home</Link>
                <Link to="/all-toys">All Toys</Link>
                <Link to="/blogs">Blogs</Link>
            </div> 
            <div>
                <span className="footer-title">Social Media Links</span> 
                <div className='flex text-2xl gap-3'>
                    <FaFacebookF></FaFacebookF>
                    <FaInstagram></FaInstagram>
                    <FaTwitter></FaTwitter>
                </div>
            </div> 
        </footer>
    );
};

export default Footer;