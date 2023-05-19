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
    return (
        <div>
            <div>
                <h1>View ALL Toys Here!</h1>
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
                                <tr>
                                    <td>{count++}</td>
                                    <td>{toy.name}</td>
                                    <td>{toy.sellerName}</td>
                                    <td>{toy.email}</td>
                                    <td><img src={toy.photoURL} className='w-28' alt="" /></td>
                                    <td>{toy.subCategory}</td>
                                    <td>{toy.Price}</td>
                                    <td>{toy.Rating}</td>
                                    <td>{toy.availableQuantity}</td>
                                    <td>{toy.detailsDescription}</td>
                                    <td>
                                        <button><FaEdit className='text-2xl mr-4'></FaEdit></button>
                                        <button><FaBitbucket className='text-2xl mr-4'></FaBitbucket></button>
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