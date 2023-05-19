import { useEffect, useState } from 'react';
import { FidgetSpinner } from 'react-loader-spinner';

const Gallery = () => {
    const [images, setImages] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(()=>{
        fetch("https://disney-toy-bazar-server.vercel.app/images")
        .then(res => res.json())
        .then(data => {
            setImages(data);
            setLoading(false);
        })
    },[])
    console.log(images);
    return (
        <div className='my-8'>
            <h1 className='text-center text-4xl font-semibold'>Gallery</h1>
            <div className='grid grid-cols-3 gap-2 justify-items-center items-center my-8 px-5'>
                {
                    loading?
                    <FidgetSpinner
                        visible={true}
                        height="80"
                        width="80"
                        ariaLabel="dna-loading"
                        wrapperStyle={{}}
                        wrapperClass="dna-wrapper"
                        ballColors={['#ff0000', '#00ff00', '#0000ff']}
                        backgroundColor="#6d3dc6"
                    />:
                    images.map(image=> <img src={image.images} key={image._id} alt="" className='w-60'/> )
                }
            </div>
        </div>
    );
};

export default Gallery;