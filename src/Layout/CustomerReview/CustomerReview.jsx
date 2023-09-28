import { useEffect, useState } from 'react';
import ReviewCard from './ReviewCard';
import { ThreeDots } from 'react-loader-spinner';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';

const CustomerReview = () => {
    const [reviews, setReviews] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        fetch("https://disney-toy-bazar-server.vercel.app/reviews")
            .then(res => res.json())
            .then(data => {
                setReviews(data);
                setLoading(false);
            })
    }, [])
    return (
        <div className='my-8 max-w-screen-xl mx-auto'>
            <div className='text-center font-semibold'>
                <h1 className='text-4xl'>Customer Review</h1>
            </div>
            <div className='my-6 flex justify-center'>
                {
                    loading ?
                        <ThreeDots
                            height="80"
                            width="80"
                            radius="9"
                            color="#6a24e2"
                            ariaLabel="three-dots-loading"
                            wrapperStyle={{}}
                            wrapperClassName=""
                            visible={true}
                        /> :
                        <Swiper
                            slidesPerView={3}
                            spaceBetween={10}
                            pagination={{
                                clickable: true,
                            }}
                            breakpoints={{
                                375: {
                                    slidesPerView: 1,
                                },640: {
                                    slidesPerView: 1,
                                },
                                768: {
                                    slidesPerView: 3,
                                },
                                1024: {
                                    slidesPerView: 3,
                                },
                            }}
                            modules={[Pagination]}
                            className="mySwiper"
                        >
                            {
                                reviews.map(review => (
                                    <SwiperSlide key={review._id} style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                                        < ReviewCard review={review} ></ReviewCard>
                                    </SwiperSlide>

                                ))
                            }
                        </Swiper>
                }
            </div>
        </div >
    );
};

export default CustomerReview;