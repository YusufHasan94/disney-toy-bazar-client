import React, { useEffect, useState } from 'react';
import Marquee from "react-fast-marquee";
import ReviewCard from './ReviewCard';

const CustomerReview = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(()=>{
        fetch("https://disney-toy-bazar-server.vercel.app/reviews")
        .then(res => res.json())
        .then(data =>setReviews(data))
    },[])
    return (
        <div className='my-8'>
            <div className='text-center font-semibold'>
                <h1 className='text-4xl'>Customer Review</h1>
            </div>
            <div className='my-6'>
                <Marquee>
                    {
                        reviews.map(review => <ReviewCard key={review._id} review={review}></ReviewCard>)
                    }
                </Marquee>
            </div>
        </div>
    );
};

export default CustomerReview;