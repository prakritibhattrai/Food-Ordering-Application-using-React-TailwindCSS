import React, { useEffect, useState } from "react";
import { API_URL } from "../utils/constants";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import FoodCarousel from "./FoodCarousel";

const Body = () => {
    const [restaurants, setRestaurants] = useState([]);
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);
    const [loading, setLoading] = useState(false);
    const [activeFilter, setActiveFilter] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const response = await fetch(API_URL);
                const jsonData = await response.json();
                setRestaurants(jsonData?.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching data:', error);
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    const filterRestaurants = (filterType) => {
        let filteredRestaurants = [];
        switch (filterType) {
            case 'rating':
                filteredRestaurants = restaurants.filter((restaurant) => parseFloat(restaurant.info.avgRatingString) >= 4.5);
                break;
            case 'offers':
                break;
            case 'fastDelivery':
                break;
            case 'newOn':
                break;
            default:
                filteredRestaurants = [...restaurants];
                break;
        }
        setFilteredRestaurants(filteredRestaurants);
        setActiveFilter(filterType);
    };

    const resetFilter = () => {
        setActiveFilter(null);
        setFilteredRestaurants([]);
    };

    const displayedRestaurants = filteredRestaurants.length ? filteredRestaurants : restaurants;

    return (
        <div className='py-1 px-10'>
            <FoodCarousel />
            <div className='flex flex-wrap gap-5 pt-5 px-10 font-semibold text-black-500'>
                <button
                    onClick={() => filterRestaurants('offers')}
                    className={`flex items-center border ${activeFilter === 'offers' ? 'bg-gray-950 text-white' : 'bg-gray-100 border-slate-200 hover:bg-slate-50'} py-2 px-5 rounded-full text-sm`}
                >
                    Offers
                </button>
                <button
                    onClick={() => filterRestaurants('rating')}
                    className={`flex items-center border ${activeFilter === 'rating' ? 'bg-gray-950 text-white' : 'bg-gray-100 border-slate-200 hover:bg-slate-50'} py-2 px-5 rounded-full text-sm`}
                >
                    Rating
                </button>
                <button
                    onClick={() => filterRestaurants('fastDelivery')}
                    className={`flex items-center border ${activeFilter === 'fastDelivery' ? 'bg-gray-950 text-white' : 'bg-gray-100 border-slate-200 hover:bg-slate-50'} py-2 px-5 rounded-full text-sm`}
                >
                    Fast Delivery
                </button>
                <button
                    onClick={() => filterRestaurants('newOn')}
                    className={`flex items-center border ${activeFilter === 'newOn' ? 'bg-gray-950 text-white' : 'bg-gray-100 border-slate-200 hover:bg-slate-50'} py-2 px-5 rounded-full text-sm`}
                >
                    New On
                </button>
            </div>
            <div className="mt-7 px-10 pb-10">
                <h1 className="text-xl font-bold">Top Restaurants</h1>
                <div className="mb-6 lg:grid lg:grid-cols-4 lg:gap-x-8 lg:space-y-0">
                    {loading ?
                        <Shimmer /> :
                        displayedRestaurants.map((restaurant) => (
                            <RestaurantCard key={restaurant._id} data={restaurant.info} cta={restaurant.cta} />
                        ))
                    }
                </div>
            </div>
        </div>
    );
}

export default Body;
