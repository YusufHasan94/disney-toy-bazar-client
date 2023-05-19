import React, { useEffect, useState } from 'react';
import { FaBitbucket, FaEdit } from 'react-icons/fa';

const ViewToys = () => {
    let count = 1;
    const [toys, setToys] = useState([]);
    useEffect(()=>{
        fetch("http://localhost:5000/toys")
        .then(res => res.json())
        .then(data => {
            setToys(data);
        })
    },[])
    const handleDeleteToy = (_id)=>{
        console.log("clicked on delete", _id);
    }
    const handleUpdateToy = (_id)=>{
        console.log("clicked on update", _id);
    }
    return (
        <div className='my-8'>
            <div>
                <h1 className='text-center text-4xl font-semibold'>View ALL Toys Here!</h1>
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
                            {toys.map(toy=>(
                                <tr className=''>
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

export default ViewToys;