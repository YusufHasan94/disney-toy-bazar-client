import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { FaBitbucket, FaEdit } from "react-icons/fa";

const ViewMyToys = () => {
    let count = 1;
    const {user, loading} = useContext(AuthContext);
    const [myToys, setMyToys] = useState([]);
    const url = `http://localhost:5000/my-toys?email=${user?.email}`;
    useEffect(()=>{
        if(user?.email){
           fetch(url)
            .then(res=>res.json())
            .then(data=>{
                setMyToys(data)
            })
        }
    }
    ,[])
    
    const handleUpdateToy = _id =>{
        console.log(_id);
    }
    const handleDeleteToy = _id =>{
        console.log(_id);
    }

    if(loading){
        <h1>Loading...</h1>
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
                                        <button><FaEdit onClick={()=>handleUpdateToy(toy._id)} className='text-2xl mr-4'></FaEdit></button>
                                        <button><FaBitbucket onClick={()=>handleDeleteToy(toy._id)} className='text-2xl mr-4'></FaBitbucket></button>
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