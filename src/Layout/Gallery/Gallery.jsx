import { useEffect, useState } from 'react';
import { ThreeDots } from 'react-loader-spinner';
<link rel="stylesheet" href="bower_components/aos/dist/aos.css" />
import AOS from 'aos';
import Marquee from 'react-fast-marquee';

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
    useEffect(() => {
        AOS.init();
      }, []);
    
    return (
        <div className='my-8'>
            <div className=''>
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
                    <div className=' mx-10' data-aos="flip-left" data-aos-delay="100">
                        <Marquee>
                            {images.map(image=> <img src={image.images} key={image._id} alt="" className='w-60 mx-5'/> )}
                        </Marquee>
                    </div>
                }
            </div>
            
            </div>
    );
};

export default Gallery;