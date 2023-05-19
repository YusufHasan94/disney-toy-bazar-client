import React from 'react';
import { Rating } from '@smastrom/react-rating';

const ToysCard = ({card}) => {
    const {Name, Picture, Price, rating} = card;
    console.log(rating);
    return (
        <div className="card card-compact w-96 bg-base-100 p-2 shadow-xl">
            <figure><img src={Picture} alt="cars" className='h-52' /></figure>
            <div className="card-body">
                <h2 className="card-title text-2xl">{Name}</h2>
                <p className='text-start text-xl'>Price: {Price}</p>
                <Rating
                    style={{ maxWidth: 100 }}
                    value={rating}
                    onChange={rating}
                />
                <div className="card-actions justify-center">
                    <button className="btn btn-primary">View Details</button>
                </div>
            </div>
        </div>
    );
};

export default ToysCard;