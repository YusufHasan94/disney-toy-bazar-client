import { Rating } from '@smastrom/react-rating';
import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import { Navigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const ToysCard = ({subcategory, Cid}) => {
    const {id, name, image, price, rating} = subcategory;
    const [subcategoryData, setSubcategoryData] = useState([]);
    const [filterData, setFilterData] = useState([]);
    const {user} = useContext(AuthContext);
    useEffect(()=>{
        fetch(`http://localhost:5000/${Cid}`)
        .then(res=>res.json())
        .then(data=>{
            setSubcategoryData(data);
        })
    },[])
    const handleDetails = id=>{
        if(!user){
            Swal.fire({
                title: 'Not a valid user',
                text: 'You need to login first',
                icon: 'warning',
                confirmButtonText: 'OK'
              });
            return <Navigate to="/login" replace={true}/>
        }
        const filter = subcategoryData.subcategories.find(data=> data.id == id);
        setFilterData(filter);        
    }
    return (
        <div className="card card-compact w-96 bg-base-100 p-2 shadow-xl">
            <figure><img src={image} alt="cars" className='h-52' /></figure>
            <div className="card-body">
                <h2 className="card-title text-2xl">{name}</h2>
                <p className='text-start text-xl'>Price: {price} $</p>
                <Rating
                    style={{ maxWidth: 100 }}
                    value={rating}
                    onChange={rating}
                />
                <div className="card-actions justify-center">
                </div>
                <label htmlFor="my-modal" className="btn btn-primary" onClick={()=>handleDetails(id)}>View Details</label>
                <input type="checkbox" id="my-modal" className="modal-toggle" />
                {
                    user?
                    <div className="modal">
                    <div className="modal-box max-w-4xl max-h-fit flex flex-col items-center">
                        <img src={filterData.image} alt="" className='w-1/4' />
                        <div className='text-start w-full'>
                            <h3 className="font-semibold text-2xl">{filterData.name}</h3>
                            <p className="py-2 text-2xl">Price: {filterData.price}</p>
                            <Rating
                                style={{ maxWidth: 100 }}
                                value={rating}
                                onChange={rating}
                            />
                        </div>
                        <div className="modal-action">
                            <label htmlFor="my-modal" className="btn btn-primary">Ok</label>
                        </div>
                    </div>
                </div>:''
                }
            </div>
        </div>
    );
};

export default ToysCard;