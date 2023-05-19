import React from 'react';
import { Link } from 'react-router-dom';

const AddToy = () => {
    return (
        <div className='my-8'>
            <div>
                <h1 className='text-center text-4xl font-semibold'>Add Beautiful Toys Here</h1>
            </div>
            <div className='w-1/2 mx-auto my-4'>
                <form>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-xl">Name</span>
                        </label>
                        <input type="text" name='name' placeholder="Name" required className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-xl">Seller Name</span>
                        </label>
                        <input type="text" name='seller_name' placeholder="Seller Name" required className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-xl">Email</span>
                        </label>
                        <input type="text" name='email' placeholder="email" required className="input input-bordered" />
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
                        <select name="sub_category" id="" className='input input-bordered'>
                            <option value="Fire Truck">Fire Truck</option>
                            <option value="Fire Truck">Racing Car</option>
                            <option value="Fire Truck">Ambulance</option>
                        </select>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-xl">Price</span>
                        </label>
                        <input type="password" name='Price' placeholder="Price" required className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-xl">Rating</span>
                        </label>
                        <input type="password" name='Rating' placeholder="5/5" required className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-xl">Available Quantity</span>
                        </label>
                        <input type="password" name='Available_quantity' placeholder="Available Quantity" required className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-xl">Detail Description</span>
                        </label>
                        <textarea name="" id="" cols="30" rows="5" required className="border-2 border-gray-300 rounded-xl p-2"></textarea>
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