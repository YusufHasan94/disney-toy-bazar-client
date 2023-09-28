import { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';
import Swal from 'sweetalert2';
import dynamicTitle from '../../hook/dynamicTitle';

const ViewToys = () => {
    dynamicTitle('All Toys');
    let limit = 20;
    const { user } = useContext(AuthContext);
    const [toys, setToys] = useState([]);
    useEffect(() => {
        fetch(`https://disney-toy-bazar-server.vercel.app/toys?limit=${limit}`)
            .then(res => res.json())
            .then(data => {
                setToys(data);
            })
    }, [])

    console.log(toys);

    const handleSearch = event => {
        event.preventDefault();
        const form = event.target;
        const searchedItem = form.searchedItem.value;
        if (searchedItem) {
            const remaining = toys.filter(select => select.name == searchedItem);
            setToys(remaining);
        }
    }
    const handleNotify = () => {
        if (!user) {
            Swal.fire({
                title: 'Not a valid user',
                text: 'You need to login first',
                icon: 'warning',
                confirmButtonText: 'OK'
            })
        }
    }
    return (
        <div className='py-32 max-w-screen-xl mx-auto'>
            <div>
                <h1 className='text-center text-4xl font-semibold'>View ALL Toys Here!</h1>
            </div>
            <div className='flex flex-col md:flex-row gap-4 my-4 items-center justify-between'>
                <div className='flex flex-col gap-2'>
                    <label className='font-semibold text-xl' >Search Using toy name</label>
                    <form className='flex ' onSubmit={handleSearch}>
                        <input type="text" placeholder="Toys Name" name='searchedItem' className="input input-bordered input-primary w-full max-w-xs" />
                        <input type="submit" value="Search" className='btn btn-primary ms-4' />
                    </form>
                </div>
                <div className='text-center'>
                    <form ></form>
                    <label className='text-xl font-semibold'>Pick Your limit</label>
                    <select name="limit" className="select w-full max-w-xs bg-slate-100 border-1 border-black">
                        <option value={limit}>{limit}</option>
                    </select>
                </div>
            </div>
            <div className='my-10'>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mx-5 md:mx-0">
                    {toys.map(toy => (
                        <div key={toy._id}>
                            <div className='card shadow-2xl'>
                                <figure>
                                    <img src={toy.photoURL} alt="" className='h-60 w-full' />
                                </figure>
                                <div className='card-body'>
                                    <h1 className='font-semibold text-xl'>Toy Name: {toy.name}</h1>
                                    <h1>Seller Name: {toy.sellerName}</h1>
                                    <h1>Seller Email: {toy.email}</h1>
                                </div>
                                <div className='mx-auto mb-5'>
                                    <Link to={`/all-toys/${toy._id}`}>
                                        <button className='btn btn-primary' onClick={handleNotify}>View Details</button>
                                    </Link>
                                </div>
                            </div>
                        </div>

                    ))}
                </div>
            </div>
        </div>
    );
};

export default ViewToys;