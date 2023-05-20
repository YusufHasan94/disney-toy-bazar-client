import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { FaBitbucket, FaEdit } from "react-icons/fa";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const ViewMyToys = () => {
    let count = 1;
    const {user} = useContext(AuthContext);
    const [myToys, setMyToys] = useState([]);
    const url = `http://localhost:5000/my-toys?email=${user?.email}`;
    useEffect(()=>{
        if(user?.email){
           fetch(url)
            .then(res=>res.json())
            .then(data=>{
                setMyToys(data);
            })
        }
    }
    ,[])
    
    const handleDeleteToy = _id =>{
        const agree  = confirm("Are you want to delete this toys"); 
        if(agree){
            fetch(`http://localhost:5000/my-toys/${_id}`,{
                method: "DELETE"
            })
            .then(res=>res.json())
            .then(data=>{
                console.log(data);
                if(data.deletedCount>0){
                    Swal.fire({
                        title: 'Congratulations',
                        text: 'Successfully deleted toy',
                        icon: 'success',
                        confirmButtonText: 'OK'
                    })
                    const remaining = myToys.filter(toys=> toys._id !== _id);
                    setMyToys(remaining);
                }
            })

        }
    }
    
    return (
        <div className="my-8">
            <div>
                <h1 className="text-center text-4xl font-semibold">All Toys Added by {user.displayName}</h1>
            </div>
            <div>
                <div className="overflow-x-auto">
                    <table className="table table-zebra w-full my-8">
                        <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Seller Name</th>
                            <th>Seller Email</th>
                            <th>Photo</th>
                            <th>Sub-category</th>
                            <th>Price</th>
                            <th>Rating</th>
                            <th>Available Quantity</th>
                            <th>Details</th>
                            <th>Action</th>

                        </tr>
                        </thead>
                        <tbody>
                            {myToys.map(toy=>(
                                <tr className='' key={toy._id}>
                                    <td>{count++}</td>
                                    <td>{toy.name}</td>
                                    <td>{toy.sellerName}</td>
                                    <td>{toy.email}</td>
                                    <td><img src={toy.photoURL} className='w-28' alt="" /></td>
                                    <td>{toy.subCategory}</td>
                                    <td>{toy.Price} $</td>
                                    <td>{toy.Rating}/5</td>
                                    <td>{toy.availableQuantity} pec</td>
                                    <td>{toy.detailsDescription}</td>
                                    <td>
                                        <Link to={`/my-toys/${toy._id}`}>
                                            <button><FaEdit className='text-2xl mr-4'></FaEdit></button>
                                        </Link>
                                        <button onClick={()=>handleDeleteToy(toy._id)}><FaBitbucket className='text-2xl mr-4'></FaBitbucket></button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default ViewMyToys;