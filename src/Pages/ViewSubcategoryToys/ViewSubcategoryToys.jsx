import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const ViewSubcategoryToys = () => {
    let count = 1;
    const [toys, setToys] = useState([]);
    useEffect(()=>{
        fetch(`https://disney-toy-bazar-server.vercel.app/toys`)
        .then(res => res.json())
        .then(data => {
            setToys(data);
        })
    },[])
    return (
        <div className='my-8'>
            <div>
                <h1 className='text-4xl text-center font-semibold'>Toys Details</h1>
            </div>
            <div className='my-4'>
                <div className="overflow-x-auto">
                    <table className="table table-zebra w-full my-8">
                        <thead>
                        <tr>
                            <th></th>
                            <th>Toy Name</th>
                            <th>Seller Name</th>
                            <th>Sub-category</th>
                            <th>Price ($)</th>
                            <th>Available Quantity (unit)</th>
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

export default ViewSubcategoryToys;