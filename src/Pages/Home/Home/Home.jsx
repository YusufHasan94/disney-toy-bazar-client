import Banner from "../../../Layout/Banner/Banner";
import CustomerReview from "../../../Layout/CutomerReview/CustomerReview";
import Gallery from "../../../Layout/Gallery/Gallery";
import Category from "../../../Layout/ShopByCategory/Category";

const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <Gallery></Gallery>
           <Category></Category>
           <CustomerReview></CustomerReview>
        </div>
    );
};

export default Home;