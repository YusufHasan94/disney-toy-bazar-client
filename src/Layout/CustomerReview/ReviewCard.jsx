import { Rating } from '@smastrom/react-rating';

const ReviewCard = ({review}) => {
    const {name, customer_review, rating, img} = review;
    return (
        <div className="card w-64 md:w-96 bg-base-100 shadow-xl mx-6">
            <figure><img src={img} alt="Shoes" className=''/></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{customer_review}</p>
                <div className="card-actions justify-end">
                <Rating
                    style={{ maxWidth: 100 }}
                    value={rating}
                    onChange={rating}
                />
                </div>
            </div>
        </div>
    );
};

export default ReviewCard;