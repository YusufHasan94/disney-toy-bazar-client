import React, { useEffect, useState } from 'react';
import Marquee from 'react-fast-marquee';

const Gallery = () => {
    const [images, setImages] = useState([]);
    useEffect(()=>{
        fetch("http://localhost:5000/images")
        .then(res => res.json())
        .then(data => setImages(data))
    },[])
    console.log(images);
    return (
        <div className='my-8'>
            <h1 className='text-center text-4xl font-semibold'>Gallery</h1>
            <div className='grid grid-cols-3 gap-2 justify-items-center items-center my-8 px-5'>
                {
                    images.map(image=> <img src={image.images} key={image._id} alt="" className='w-60'/> )
                }
            </div>
        </div>
    );
};

export default Gallery;