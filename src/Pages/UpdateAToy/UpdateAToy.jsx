import Swal from 'sweetalert2';
import { useLoaderData } from 'react-router-dom';

const UpdateAToy = () => {
    const toy = useLoaderData();
    console.log(toy);
    const handleAddToy = event =>{
        event.preventDefault();
        const form = event.target;
        const Price = form.Price.value;
        const availableQuantity = form.availableQuantity.value;
        const detailsDescription = form.detailsDescription.value;
        const updateData = {Price, availableQuantity, detailsDescription};

        if(parseFloat(Price)<0 || parseFloat(availableQuantity)<0){
            return Swal.fire({
                title: 'Negative Value not allowed',
                text: 'Do you want to continue',
                icon: 'error',
                confirmButtonText: 'Try Again'
              })
        }else{
            fetch(`https://disney-toy-bazar-server.vercel.app/my-toys/${toy._id}`,{
                method: "PATCH",
                headers: {
                    'content-type':'application/json'
                },
                body: JSON.stringify(updateData)
            })
            .then(res=> res.json())
            .then(data=>{
                console.log(data);
                if(data.modifiedCount>0){
                    Swal.fire({
                        title: 'Congratulations',
                        text: 'Successfully Updated data',
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
        <div className='py-32'> 
            <div className='flex flex-col items-center p-4 text-4xl font-semibold'>
                <h1 className='mb-4'>Update Information About</h1>
                <img src={toy.photoURL} className='w-96' alt="" />
                <h1 className='mt-4'>{toy.name}</h1>
            </div>
            <div>
                <div className='md:w-1/2 mx-auto my-4 p-4'>
                    <form onSubmit={handleAddToy}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-xl">Price ($)</span>
                            </label>
                            <input type="number" name='Price' placeholder="Price" defaultValue={toy.Price} required className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-xl">Available Quantity (Unit)</span>
                            </label>
                            <input type="number" name='availableQuantity' placeholder="Available Quantity" defaultValue={toy.availableQuantity} required className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-xl">Detail Description</span>
                            </label>
                            <textarea name="detailsDescription" id="" cols="30" rows="5" required defaultValue={toy.detailsDescription} className="border-2 border-gray-300 rounded-xl p-2"></textarea>
                        </div>
                        <div className="form-control mt-6">
                        <input type="submit" value="Update" className='btn btn-primary'/>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default UpdateAToy;