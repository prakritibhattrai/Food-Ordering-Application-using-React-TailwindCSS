import { useEffect, useState } from "react"
import { API_URL, RESTAURANTS_MENU_API } from "../utils/constants"
import { useParams } from "react-router-dom"
import Header from "./Header";
import Shimmer from "./Shimmer";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {
    const { resId } = useParams();
    const [restaurant, setRestaurant] = useState(null);
    const [openMenuIndex, setOpenMenuIndex] = useState(0)
    useEffect(() => {
        fetchMenu()
    }, [])

    const fetchMenu = async () => {
        const data = await fetch(`https://corsproxy.io/?${RESTAURANTS_MENU_API}/${resId}`)
        const jsonData = await data.json()
        setRestaurant(jsonData.data)
    }
    if (restaurant === null) return <Shimmer />
    const { name, cuisines, title, areaName, avgRatingString, costForTwoMessage, sla, feeDetails } = restaurant?.cards[0]?.card?.card?.info
    const itemCards = restaurant?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards || [];
    //console.log(itemCards);
    return (
        <>
            <Header />
            <div className="px-8 flex flex-col justify-center items-center pt-15 bg-slate-50">
                <div className="py-4 md:w-4/6 text-left flex justify-between border-dotted border-b border-gray-400">
                    <div>

                        <div className="font-bold text-xl">{name}</div>
                        <p className="font-light text-sm text-gray-500">{cuisines.join(", ")}</p>
                        <p className="font-light text-sm text-gray-500">{areaName}, {sla?.lastMileTravelString}</p>
                        <div className="my-2 text-sm text-gray-500 pb-2 border-bottom border-dashed border-gray-500">
                            {feeDetails?.message}
                        </div>
                        <div className="text-sm font-bold">{costForTwoMessage}</div>

                    </div>
                    <div className="border border-gray-200  shadow-md rounded font-semibold h-10 mt-1 p-2">
                        <div className="flex items-center">
                            <p className="text-sm">{avgRatingString}</p>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-3 h-3 ml-1 text-yellow-500">
                                <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clipRule="evenodd" />
                            </svg>


                        </div>
                    </div>
                </div>
                <div className="w-full md:py-8 md:w-4/6 ">

                    <ul>
                        {itemCards ? itemCards.map((item, index) => (
                            <RestaurantCategory key={index} card={item} showItems={index === openMenuIndex} setOpenMenuIndex={() => setOpenMenuIndex(openMenuIndex === index ? null : index)} />
                        )) : ""}
                    </ul>

                </div>
            </div>

        </>

    )
}

export default RestaurantMenu