import React, { useEffect, useState } from "react";
import { API_URL } from "../utils/constants";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import FoodCarousel from "./FoodCarousel";
import Filters from "./Filters";

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
                // Implement filtering logic for offers
                break;
            case 'fastDelivery':
                // Implement filtering logic for fast delivery
                break;
            case 'newOn':
                // Implement filtering logic for new restaurants
                break;
            default:
                filteredRestaurants = [...restaurants]; // Default to show all restaurants
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
            <div className='flex gap-5 pt-5 px-10  font-semibold  text-black-500'>
                <button onClick={() => filterRestaurants('offers')} className={`flex items-center border bg-gray-50 ${activeFilter === 'offers' ? 'bg-black text-white' : ' border-slate-300 hover:bg-slate-50'} py-2 px-5 rounded-full text-sm`}>
                    Offers
                </button>
                <button onClick={() => filterRestaurants('rating')} className={`flex items-center border ${activeFilter === 'rating' ? 'bg-black text-white' : 'border-slate-200 hover:bg-slate-50'} py-2 px-5 rounded-full text-sm`}>
                    Rating
                </button>

                <button onClick={() => filterRestaurants('fastDelivery')} className={`flex items-center border ${activeFilter === 'fastDelivery' ? 'bg-black text-white' : 'border-slate-200 hover:bg-slate-50'} py-2 px-5 rounded-full text-sm`}>
                    Fast Delivery
                </button>
                <button onClick={() => filterRestaurants('newOn')} className={`flex items-center border ${activeFilter === 'newOn' ? 'bg-black text-white' : 'border-slate-200 hover:bg-slate-50'} py-2 px-5 rounded-full text-sm`}>
                    New On
                </button>
            </div>
            <div className="mt-7 px-10">
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
