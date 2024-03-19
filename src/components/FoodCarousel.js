import { useEffect, useState } from "react";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { POPULAR_CUISINES } from "../utils/constants";
import { Link } from "react-router-dom";

const FoodCarousel = () => {
    const [foods, setFoods] = useState([]);
    const [loading, setLoading] = useState(false);

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 9,
        slidesToScroll: 1,
        zIndex: 0
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const response = await fetch(POPULAR_CUISINES);
                const jsonData = await response.json();
                setFoods(jsonData?.data.cards[1]?.card?.card?.gridElements?.infoWithStyle?.info || []);
                setLoading(false);
            } catch (error) {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    return (<>
        <div className="py-4 px-12 relative">
            <h1 className="text-xl font-bold">What's on your mind?</h1>
            <Slider {...settings} className=" py-1 border-b border-slate-300">

                {foods.map((food, index) => (
                    <Link as='div' key={index} className="p-2">
                        <img
                            src={`https://media-assets.swiggy.com/swiggy/image/upload/${food.imageId}`}
                            alt={`Food ${index}`}
                            className="w-20 h-24 relative"
                            loading="lazy"
                        />
                    </Link>
                ))
                }

            </Slider>
            <div className="mt-8">
                <h1 className="text-xl font-bold">Deals for your favorite meal</h1>
                <div className="flex flex-col md:flex-row items-center gap-4 mt-6">
                    <div className="shadow-md w-full relative z-10">
                        <img className="h-48 w-full rounded-xl" src="https://img.freepik.com/free-photo/flat-lay-arrangement-with-salad-box-sauce_23-2148247883.jpg?size=626&ext=jpg&ga=GA1.1.1826414947.1699401600&semt=ais" alt="Meal 1" />
                        <div className="absolute text-xs top-4 p-4 text-black w-2/3 text-opacity-80  rounded-lg ">
                            <div className="text-lg font-bold mb-2">BOGO-licious deals on your favorite meals</div>
                            <div className="text-sm">T&amp;C's apply.</div>
                            <button className="bg-gray-200 text-black py-2 px-4 mt-2 rounded-full shadow-md hover:bg-gray-300">Order now</button>
                        </div>
                    </div>

                    <div className="shadow-md w-full relative">
                        <img className="h-48 w-full rounded-xl" src="https://img.freepik.com/free-photo/noodles-with-vegetables-with-copy-space_23-2148551717.jpg" alt="Meal 2" />
                        <div className="absolute text-xs top-4 p-4 text-black w-2/3 text-opacity-80  rounded-lg ">
                            <div className="text-lg font-bold mb-2">BOGO-licious deals on your favorite meals</div>
                            <div className="text-sm">T&amp;C's apply.</div>
                            <button className="bg-gray-200 text-black py-2 px-4 mt-2 rounded-full shadow-md hover:bg-gray-300">Order now</button>
                        </div>
                    </div>

                    <div className="shadow-md w-full relative">
                        <img className="h-48 w-full rounded-xl" src="https://awrestaurants.com/sites/default/files/Cod%20Sandwich%202024%20Header_WEB_0.jpg" alt="Meal 3" />
                        <div className="absolute text-xs top-4 p-4 text-black w-2/3 text-opacity-80 rounded-lg ">
                            <div className="text-lg font-bold mb-2">BOGO-licious deals on your favorite meals</div>
                            <div className="text-sm">T&amp;C's apply.</div>
                            <button className="bg-gray-200 text-black py-2 px-4 mt-2 rounded-full shadow-md hover:bg-gray-300">Order now</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </>

    );
}

export default FoodCarousel;
