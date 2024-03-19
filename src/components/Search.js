import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Header from "./Header";
import { API_URL } from "../utils/constants";

const Search = () => {
    const [searchRes, setSearchRes] = useState("");
    const [restaurants, setRestaurants] = useState([]);
    const inputRef = useRef(null);

    useEffect(() => {
        const fetchData = async () => {
            if (!searchRes.trim()) {
                setRestaurants([]);
                return;
            }
            try {
                const response = await fetch(API_URL);
                const jsonData = await response.json();
                const allRestaurants = jsonData?.data.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];
                const filteredRestaurants = allRestaurants.filter(restaurant =>
                    restaurant?.info?.name?.toLowerCase().includes(searchRes.toLowerCase())
                );
                setRestaurants(filteredRestaurants);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        const timer = setTimeout(fetchData, 300); // Debouncing search to improve performance
        return () => clearTimeout(timer); // Cleanup timer
    }, [searchRes]);

    const handleSearchRes = (e) => {
        setSearchRes(e.target.value);
    };

    return (
        <>
            <svg aria-hidden="true" focusable="false" viewBox="0 0 20 20" className="w-4 h-4 text-gray-600 mr-2">
                <path d="M18.834 17l-3.666-3.667c.916-1.333 1.5-2.916 1.5-4.666C16.667 4.333 13.083.75 8.75.75 4.417.75.834 4.333.834 8.667c0 4.333 3.583 7.916 7.917 7.916 1.75 0 3.333-.583 4.666-1.5l3.667 3.667 1.75-1.75zm-15.5-8.25c0-3 2.417-5.417 5.417-5.417s5.416 2.417 5.416 5.417-2.416 5.417-5.416 5.417c-3 0-5.417-2.417-5.417-5.417z"></path>
            </svg>
            <input
                role="combobox"
                aria-expanded="false"
                id="search-suggestions-typeahead-input"
                aria-autocomplete="list"
                aria-controls="search-suggestions-typeahead-menu"
                aria-labelledby="search-suggestions-typeahead-label"
                autoComplete="off"
                type="text"
                name="searchTerm"
                value={searchRes}
                onChange={handleSearchRes}
                placeholder="Search restaurants, food..."
                className="flex-grow bg-gray-100 rounded-full py-2 px-4 text-gray-600 text-sm font-semibold focus:outline-none"
            />
            {/* <Header />

            <div className="bg-gray-50 flex justify-center min-h-screen">
                <div className="bg-gray-50 p-8 rounded my-4 shadow-md w-1/2">
                    <div className="relative">
                        <input
                            ref={inputRef}
                            type="text"
                            id="searchRes"
                            name="searchRes"
                            placeholder="Search for restaurants, foods. Eg: Pizza, Burger"
                            className="mt-1 pl-10 bg-gray-200 focus:border-gray-900 hover:border-gray-900 block w-full shadow-sm md:text-md border-black text-gray-900 rounded-md px-3 py-3"
                            value={searchRes}
                            onChange={handleSearchRes}
                        />
                        <div className="absolute inset-y-0 right-4 flex items-center pl-3 pointer-events-none">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 font-bold">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                            </svg>
                        </div>
                    </div>
                    <div className="mt-8">
                        {restaurants.map((restaurant, index) => (
                            <Link to={`/restaurants/${restaurant?.info?.id}`} key={`/restaurants/${restaurant?.info?.id}`} className="max-w-md mx-auto md:max-w-2xl overflow-auto h-96" >
                                <div className="md:flex mt-6 hover:bg-gray-100">
                                    <div className="md:shrink-0 p-2">
                                        <img className="h-16 w-16 rounded object-cover" src={`https://media-assets.swiggy.com/swiggy/image/upload/${restaurant?.info?.cloudinaryImageId}`} alt="Restaurant" />
                                    </div>
                                    <div className="pl-4">
                                        <div className="tracking-wide text-sm text-gray-900 font-semibold">{restaurant?.info?.name}</div>
                                        <p className="mt-2 text-slate-500 text-xs">{restaurant?.info?.cuisines}</p>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </div> */}
            {restaurants && restaurants.length > 0 ?
                <div className=" h-60 w-96 top-6 overflow-y-auto absolute z-50 bg-gray-50 p-4 rounded my-4 shadow-md">

                    {restaurants.map((restaurant, index) => (
                        <Link to={`/restaurants/${restaurant?.info?.id}`} key={`/restaurants/${restaurant?.info?.id}`} className="max-w-md mx-auto md:max-w-2xl z-50 overflow-auto h-96" >
                            <div className="md:flex mt-6 hover:bg-gray-100">
                                <div className="md:shrink-0 p-2">
                                    <img className="h-16 w-16 rounded object-cover" src={`https://media-assets.swiggy.com/swiggy/image/upload/${restaurant?.info?.cloudinaryImageId}`} alt="Restaurant" />
                                </div>
                                <div className="pl-4">
                                    <div className="tracking-wide text-sm text-gray-900 font-semibold">{restaurant?.info?.name}</div>
                                    <p className="mt-2 text-slate-500 text-xs">{restaurant?.info?.cuisines}</p>
                                </div>
                            </div>
                        </Link>

                    ))}
                </div> : ""}


        </>
    );
};

export default Search;
