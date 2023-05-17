import banner3 from "../../assets/banner/banner3.png";
import banner4 from "../../assets/banner/banner4.png";
const Banner = () => {
    return (
        <div className="carousel w-full">
            <div id="slide1" className="carousel-item relative w-full bg-slate-900">
                <img src={banner3} className="w-full" />
                <div className="absolute w-full flex justify-center top-1/4">
                    <div className="w-1/2 text-white text-xl">
                        <h1 className="text-4xl font-bold">Toy for Play</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate neque voluptas quam recusandae esse laboriosam minima ipsa quaerat voluptates a?</p>
                    </div>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide2" className="btn btn-circle">❮</a> 
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div> 
            <div id="slide2" className="carousel-item relative w-full">
                <img src={banner4} className="w-full" />
                <div className="absolute w-full flex justify-center top-1/4">
                    <div className="w-1/2 text-white text-xl">
                        <h1 className="text-4xl font-bold">Toy for Play</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate neque voluptas quam recusandae esse laboriosam minima ipsa quaerat voluptates a?</p>
                    </div>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide1" className="btn btn-circle">❮</a> 
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>
        </div>
    );
};

export default Banner;