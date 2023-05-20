import { useEffect, useState } from 'react';
import Marquee from "react-fast-marquee";
import ReviewCard from './ReviewCard';
import { ThreeDots } from 'react-loader-spinner';

const CustomerReview = () => {
    const [reviews, setReviews] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(()=>{
        fetch("http://localhost:5000/reviews")
        .then(res => res.json())
        .then(data =>{
            setReviews(data);
            setLoading(false);
        })
    },[])
    return (
        <div className='my-8'>
            <div className='text-center font-semibold'>
                <h1 className='text-4xl'>Customer Review</h1>
            </div>
            <div className='my-6 flex justify-center'>
                {
                    loading?
                    <ThreeDots 
                        height="80" 
                        width="80" 
                        radius="9"
                        color="#6a24e2" 
                        ariaLabel="three-dots-loading"
                        wrapperStyle={{}}
                        wrapperClassName=""
                        visible={true}
                    />:
                    <Marquee>
                        {
                            reviews.map(review => <ReviewCard key={review._id} review={review}></ReviewCard>)
                        }
                    </Marquee>
                }
            </div>
        </div>
    );
};

export default CustomerReview;