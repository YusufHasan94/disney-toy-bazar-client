import React from 'react';


const ToysCard = ({card}) => {
    const {Name, Price, Rating} = card;
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
            <figure><img src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title text-2xl">{Name}</h2>
                <p className='text-start text-xl'>Price: {Price}</p>
                <div className="card-actions justify-center">
                    <button className="btn btn-primary">View Details</button>
                </div>
            </div>
        </div>
    );
};

export default ToysCard;