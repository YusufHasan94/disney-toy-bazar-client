import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const ViewToys = () => {
    let count = 1;
    let limit = 20;
    const [toys, setToys] = useState([]);
    useEffect(()=>{
        fetch(`http://localhost:5000/toys?limit=${limit}`)
        .then(res => res.json())
        .then(data => {
            setToys(data);
        })
    },[])

    const handleSearch = event =>{
        event.preventDefault();
        const form = event.target;
        const searchedItem = form.searchedItem.value;
        if(searchedItem){
            const remaining = toys.filter(select => select.name == searchedItem);
            setToys(remaining);
        }      
    }
    return (
        <div className='my-8'>
            <div>
                <h1 className='text-center text-4xl font-semibold'>View ALL Toys Here!</h1>
            </div>
            <div className='flex items-center justify-between'>
                <div className='flex flex-col gap-2'>
                    <label className='font-semibold text-xl' >Search Using toy name</label>
                    <form className='flex ' onSubmit={handleSearch}>
                        <input type="text" placeholder="Toys Name" name='searchedItem' className="input input-bordered input-primary w-full max-w-xs" />
                        <input type="submit"  value="Search" className='btn btn-primary ms-4'/>
                    </form>
                </div>
                <div>
                    <form ></form>
                    <label className='text-xl font-semibold'>Pick Your limit</label>
                    <select name="limit" className="select w-full max-w-xs bg-slate-100 border-1 border-black">
                        <option value={limit}>{limit}</option>
                    </select>
                </div>
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

export default ViewToys;