import banner from "../../assets/banner.png";
import banner2 from "../../assets/banner2.png";
const Banner = () => {
    return (
        <div className="carousel w-full my-10 rounded-xl">
            <div id="slide1" className="py-4 bg-gradient-to-r from-indigo-500 to-purple-500  carousel-item relative w-full">
                <div className="w-full flex justify-center items-center md:mx-24">
                    <div className="w-1/2 flex justify-center items-center ">
                        <div className="text-white p-8">
                                <h1 className="text-white text-6xl mb-4">It's Time To Play</h1>
                                <p className="text-xl">Play gives children a chance to practice what they are learning.</p>
                        </div>
                    </div>
                    <div className="w-1/2 flex justify-center items-center ">
                        <div>
                            <img src={banner} alt="" />
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-center gap-2 transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide2" className="btn btn-circle bg-purple-400 border-0">❮</a> 
                    <a href="#slide2" className="btn btn-circle bg-purple-400 border-0">❯</a>
                </div>
            </div>
            <div id="slide2" className="py-4 bg-gradient-to-r from-purple-500 to-indigo-500 carousel-item relative w-full">
                <div className="w-full flex justify-center items-center md:mx-24">
                    <div className="w-1/2 flex justify-center items-center ">
                        <div className="text-white p-8">
                                <h1 className="text-white text-6xl mb-4">Kids Car Zone</h1>
                                <p className="text-xl">Children have always learned and created places for themselves through play.</p>
                        </div>
                    </div>
                    <div className="w-1/2 flex justify-center items-center ">
                        <div>
                            <img src={banner2} alt="" />
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-center gap-2 transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide1" className="btn btn-circle bg-purple-400 border-0">❮</a> 
                    <a href="#slide1" className="btn btn-circle bg-purple-400 border-0">❯</a>
                </div>
            </div>
        </div>
        
    );
};

export default Banner;