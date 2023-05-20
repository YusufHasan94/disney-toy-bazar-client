import { useEffect, useState } from 'react';
import { FaBitbucket, FaEdit } from 'react-icons/fa';
import { Link } from 'react-router-dom';

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
                            <th>Toy Name</th>
                            <th>Seller Name</th>
                            <th>Sub-category</th>
                            <th>Price ( $ )</th>
                            <th>Available Quantity ( unit )</th>
                            <th>Details</th>

                        </tr>
                        </thead>
                        <tbody>
                            {toys.map(toy=>(
                                <tr className='' key={toy._id}>
                                    <td>{count++}</td>
                                    <td>{toy.name}</td>
                                    <td>{toy.sellerName}</td>
                                    <td>{toy.subCategory}</td>
                                    <td>{toy.Price}</td>
                                    <td>{toy.availableQuantity}</td>
                                    <td>
                                        <Link to={`/all-toys/${toy._id}`}>
                                            <button className='btn btn-primary'>View Details</button>
                                        </Link>
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