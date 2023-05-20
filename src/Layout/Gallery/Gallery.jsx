import { useEffect, useState } from 'react';
import { ThreeDots } from 'react-loader-spinner';

const Gallery = () => {
    const [images, setImages] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(()=>{
        fetch("http://localhost:5000/images")
        .then(res => res.json())
        .then(data => {
            setImages(data);
            setLoading(false);
        })
    },[])
    
    return (
        <div className='my-8'>
            <div>
                <h1 className='text-center text-4xl font-semibold'>Gallery</h1>
            </div>
            <div className='flex justify-center'>
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
                    <div className='grid grid-cols-3 gap-2 justify-items-center items-center my-8 px-5'>
                        {images.map(image=> <img src={image.images} key={image._id} alt="" className='w-60'/> )}
                    </div>
                }
            </div>
            
            </div>
    );
};

export default Gallery;