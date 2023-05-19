import React from 'react';
import error from "../../assets/404-error.png";
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className='flex flex-col items-center'>
            <div className='text-center'>
                <img src={error} alt="" className='' />
                <button className='btn btn-primary w-1/4'><Link to="/">Go Back</Link></button>
            </div>
        </div>
    );
};

export default NotFound;