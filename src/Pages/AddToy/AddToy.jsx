import { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import Swal from 'sweetalert2';
import dynamicTitle from '../../hook/dynamicTitle';

const AddToy = () => {
    dynamicTitle('Add Toys');
    const {user} = useContext(AuthContext);
    const handleAddToy = event =>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const sellerName = form.sellerName.value;
        const email = form.email.value;
        const photoURL = form.photoURL.value;
        const subCategory = form.subCategory.value;
        const Price = form.Price.value;
        const Rating = form.Rating.value;
        const availableQuantity = form.availableQuantity.value;
        const detailsDescription = form.detailsDescription.value;
        const newToys = {name, sellerName, email, photoURL, subCategory, Price, Rating, availableQuantity, detailsDescription};
        console.log(newToys);

        if(parseFloat(Price)<0 || parseFloat(availableQuantity)<0){
            return Swal.fire({
                title: 'Negative Value not allowed',
                text: 'Do you want to continue',
                icon: 'error',
                confirmButtonText: 'Try Again'
              })
        }
        else if(parseFloat(Rating)>5 || parseFloat(Rating)<0){
            return  Swal.fire({
                title: 'Negative Value not allowed',
                text: 'Do you want to continue',
                icon: 'error',
                confirmButtonText: 'Try Again'
              })

        }else{
            fetch("https://disney-toy-bazar-server.vercel.app/toys",{
                method: "POST",
                headers: {
                    'content-type':'application/json'
                },
                body: JSON.stringify(newToys)
            })
            .then(res=> res.json())
            .then(data=>{
                console.log(data);
                if(data.insertedId){
                    Swal.fire({
                        title: 'Congratulations',
                        text: 'Successfully Inserted data',
                        icon: 'success',
                        confirmButtonText: 'OK'
                      })
                }
            })
            .catch(error => console.log(error.message));
    
            form.reset("");
        }
        
    }
    return (
        <div className='py-24'>
            <div>
                <h1 className='text-center text-4xl font-semibold'>Add Beautiful Toys Here</h1>
            </div>
            <div className='md:w-1/2 mx-auto my-4 p-4'>
                <form onSubmit={handleAddToy}>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-xl">Toy Name</span>
                        </label>
                        <input type="text" name='name' placeholder="Name" required className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-xl">Seller Name</span>
                        </label>
                        <input type="text" name='sellerName' placeholder="Seller Name" defaultValue={user?.displayName} required  className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-xl">Seller Email</span>
                        </label>
                        <input type="email" name='email' placeholder="Email" defaultValue={user?.email} required className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-xl">Photo URL</span>
                        </label>
                        <input type="text" name='photoURL' placeholder="Photo URL" required className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-xl">Sub-category</span>
                        </label>
                        <select name="subCategory" id="" className='input input-bordered'>
                            <option value="Car">Car</option>
                            <option value="Fire Car">Fire_Car</option>
                            <option value="Truck">Truck</option>
                        </select>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-xl">Price ($)</span>
                        </label>
                        <input type="number" name='Price' placeholder="Price" required className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-xl">Rating</span>
                        </label>
                        <input type="number" name='Rating' placeholder="5/5" required className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-xl">Available Quantity (unit)</span>
                        </label>
                        <input type="number" name='availableQuantity' placeholder="Available Quantity" required className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-xl">Detail Description</span>
                        </label>
                        <textarea name="detailsDescription" id="" cols="30" rows="5" required className="border-2 border-gray-300 rounded-xl p-2"></textarea>
                    </div>
                    <div className="form-control mt-6">
                    <input type="submit" value="Submit" className='btn btn-primary'/>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddToy;