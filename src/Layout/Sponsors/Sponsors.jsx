import React, { useEffect, useState } from 'react';

const Sponsors = () => {
    const [sponsors, setSponsors] = useState([]);
    useEffect(()=>{
        fetch("https://disney-toy-bazar-server.vercel.app/sponsors")
        .then(res => res.json())
        .then(data => setSponsors(data))
    },[])
    return (
        <div className='my-8'>
            <div className='text-center'>
                <h1 className='text-4xl font-semibold'>Our Trusted Sponsors</h1>
            </div>
            <div className='flex justify-center gap-10 my-10'>
                {sponsors.map(sponsor => <img src={sponsor.images} key={sponsor._id} alt="" className='w-24' /> )}
            </div>
        </div>
    );
};

export default Sponsors;