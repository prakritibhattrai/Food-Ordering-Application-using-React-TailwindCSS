import { useEffect, useRef, useState } from "react";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { API_URL } from "../utils/constants";
import { Link } from "react-router-dom";

const FoodCarousel = () => {
    const [foods, setFoods] = useState([]);
    const [loading, setLoading] = useState(false);
    function SampleNextArrow() {
        return (
            <div
                className='block bg-gray-800 text-gray-600'

            />
        );
    }

    function SamplePrevArrow() {
        return (
            <div
                className='block bg-slate-300  text-pink-300'

            />
        );
    }
    const settings = {
        dots: false,            // Show navigation dots
        infinite: true,         // Infinite loop
        speed: 500,             // Transition speed in milliseconds
        slidesToShow: 7,        // Number of slides to show at once
        slidesToScroll: 1,      // Number of slides to scroll at a tim7

    };
    let sliderRef = useRef(null);
    const next = () => {
        sliderRef.slickNext();
    };
    const previous = () => {
        sliderRef.slickPrev();
    };
    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const response = await fetch(API_URL);
                const jsonData = await response.json();
                setFoods(jsonData?.data.cards[0]?.card?.card?.gridElements?.infoWithStyle?.info || []);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching data:', error);
                setLoading(false);
                // Handle error
            }
        };

        fetchData();
    }, []);

    return (
        <div className="px-10 py-4">
            <h1 className="text-xl font-bold">What's on your mind?</h1>
            <Slider {...settings} className=" py-1 border-b border-slate-300">

                {foods.map((food, index) => (
                    <Link key={index} className="p-2">
                        <img
                            src={`https://media-assets.swiggy.com/swiggy/image/upload/${food.imageId}`}
                            alt={`Food ${index}`}
                            className="w-full h-auto"
                        />
                    </Link>
                ))
                }

            </Slider>
        </div>
    );
}

export default FoodCarousel;
