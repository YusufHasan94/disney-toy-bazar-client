import { Rating } from '@smastrom/react-rating';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';
import Swal from 'sweetalert2';

const ToysCard = ({subcategory, C_id}) => {
    const {id, name, image, price, rating} = subcategory;
    const {user} = useContext(AuthContext);
    const handleDetails = id=>{
        if(!user){
            Swal.fire({
                title: 'Not a valid user',
                text: 'You need to login first',
                icon: 'warning',
                confirmButtonText: 'OK'
            })
        }        
    }
    return (
        <div className="card card-compact w-80 md:w-96 bg-base-100 p-2 shadow-xl">
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
                <Link to="/subcategory" >
                    <button className='btn btn-primary' onClick={()=>handleDetails(id)}>View Details</button>
                </Link>
                
            </div>
        </div>
    );
};

export default ToysCard;