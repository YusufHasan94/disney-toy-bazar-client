import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { FaBitbucket, FaEdit } from "react-icons/fa";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import dynamicTitle from "../../hook/dynamicTitle";

const ViewMyToys = () => {
    dynamicTitle('My Toys');
    const { user } = useContext(AuthContext);
    const [myToys, setMyToys] = useState([]);
    const url = `https://disney-toy-bazar-server.vercel.app/my-toys?email=${user?.email}`;
    useEffect(() => {
        if (user?.email) {
            fetch(url)
                .then(res => res.json())
                .then(data => {
                    setMyToys(data);
                })
        }
    }
        , [])

    const handleDeleteToy = _id => {
        const agree = confirm("Are you want to delete this toys");
        if (agree) {
            fetch(`https://disney-toy-bazar-server.vercel.app/my-toys/${_id}`, {
                method: "DELETE"
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.deletedCount > 0) {
                        Swal.fire({
                            title: 'Congratulations',
                            text: 'Successfully deleted toy',
                            icon: 'success',
                            confirmButtonText: 'OK'
                        })
                        const remaining = myToys.filter(toys => toys._id !== _id);
                        setMyToys(remaining);
                    }
                })

        }
    }

    return (
        <div className="py-32 max-w-screen-xl mx-auto">
            <div>
                <h1 className="text-center text-4xl font-semibold">All Toys Added by {user.displayName}</h1>
            </div>
            <div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-20 mx-5 md:mx-0">
                    {myToys.map(toy => (
                        <div className='card shadow-xl' key={toy._id}>
                            <figure>
                                <img src={toy.photoURL} className='h-60 w-full' alt="" />
                            </figure>
                            <div className="card-body">
                                <h1 className="font-semibold text-xl">Toy Name: {toy.name}</h1>
                                <h1>Seller Name: {toy.sellerName}</h1>
                                <h1>Seller Email: {toy.email}</h1>
                                <h1>Category: {toy.subCategory}</h1>
                                <h1>Price: {toy.Price}$</h1>
                                <h1>Rating: {toy.Rating}/5</h1>
                                <h1>Available Quantity: {toy.availableQuantity}</h1>
                                <h1>Description: {toy.detailsDescription}</h1>
                            </div>
                            <div className="flex justify-end m-5 gap-5">
                                <Link to={`/my-toys/${toy._id}`}>
                                    <button className="border-2 rounded-xl p-2"><FaEdit className='text-2xl'></FaEdit></button>
                                </Link>
                                <button className="border-2 rounded-xl p-2" onClick={() => handleDeleteToy(toy._id)}><FaBitbucket className='text-2xl'></FaBitbucket></button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ViewMyToys;