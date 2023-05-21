import Banner from "../../../Layout/Banner/Banner";
import CustomerReview from "../../../Layout/CustomerReview/CustomerReview";
import Gallery from "../../../Layout/Gallery/Gallery";
import Category from "../../../Layout/ShopByCategory/Category";
import Sponsors from "../../../Layout/Sponsors/Sponsors";
import dynamicTitle from "../../../hook/dynamicTitle";

const Home = () => {
    dynamicTitle('Home');
    return (
        <div>
           <Banner></Banner>
           <Gallery></Gallery>
           <Category></Category>
           <CustomerReview></CustomerReview>
           <Sponsors></Sponsors>
        </div>
    );
};

export default Home;