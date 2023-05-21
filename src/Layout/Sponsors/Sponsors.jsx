import { useEffect, useState } from 'react';
import { ThreeDots } from 'react-loader-spinner';

const Sponsors = () => {
    const [sponsors, setSponsors] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(()=>{
        fetch("https://disney-toy-bazar-server.vercel.app/sponsors")
        .then(res => res.json())
        .then(data => {
            setSponsors(data);
            setLoading(false);
        })
    },[])
    return (
        <div className='my-8'>
            <div className='text-center'>
                <h1 className='text-4xl font-semibold'>Our Trusted Sponsors</h1>
            </div>
            <div className='flex justify-center gap-10 my-10'>
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
                    sponsors.map(sponsor => <img src={sponsor.images} key={sponsor._id} alt="" className='w-24' /> )
                }
            </div>
        </div>
    );
};

export default Sponsors;