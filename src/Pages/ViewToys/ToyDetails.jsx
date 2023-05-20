import { useLoaderData } from "react-router-dom";

const ToyDetails = () => {
    const toy = useLoaderData();
    console.log(toy);
    return (
        <div className="my-8">
            <div>
                <h1 className="text-center text-4xl font-semibold">Details About Toy</h1>
            </div>
            <div>
                
            </div>
        </div>
    );
};

export default ToyDetails;