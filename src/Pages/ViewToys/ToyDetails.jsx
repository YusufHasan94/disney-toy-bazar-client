import { Rating } from "@smastrom/react-rating";
import { useLoaderData } from "react-router-dom";

const ToyDetails = () => {
    const toy = useLoaderData();
    // const {Rating} = toy;
    console.log(toy);
    return (
        <div className="my-8">
            <div>
                <h1 className="text-center text-4xl font-semibold">Details About Toy</h1>
            </div>
            <div className="flex justify-center my-10">
                <div className="card w-3/4 bg-base-100 shadow-xl">
                    <figure><img src={toy.photoURL} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title text-2xl">Toy Name: {toy.name}</h2>
                        <h2 className="text-xl"><span className="font-semibold">Seller Name: </span>{toy.sellerName}</h2>
                        <h2 className="text-xl"><span className="font-semibold">Sub-category: </span>{toy.subCategory}</h2>
                        <h2 className="text-xl"><span className="font-semibold">Price: </span>{toy.Price} $</h2>
                        <h2 className="text-xl"><span className="font-semibold">Available Quantity: </span>{toy.availableQuantity} unit</h2>
                        <p className="text-xl"><span className="font-semibold">Description: </span>{toy.detailsDescription}</p>
                        <Rating
                            style={{ maxWidth: 100 }}
                            value={parseFloat(toy.Rating)}
                            onChange={parseFloat(toy.Rating)}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ToyDetails;