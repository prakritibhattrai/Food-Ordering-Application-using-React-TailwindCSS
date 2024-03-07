import { useEffect } from "react";
import { Link } from "react-router-dom";
import { API_URL } from "../utils/constants";

const RestaurantCard = (props) => {
    //console.log(props.cta)
    const fetchData = async () => {
        try {

            const response = await fetch('https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=19.0759837&lng=72.8776559&restaurantId=391816&catalog_qa=undefined&submitAction=ENTER');
            const jsonData = await response.json()
            console.log(jsonData);

        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    fetchData();
    return (

        <Link to={`/restaurants/${props.data.id}`} key='' className="" >
            <div className="relative mt-7 w-full h-44 object-cover overflow-hidden rounded-lg bg-white group-hover:opacity-75">
                <img
                    src={`https://media-assets.swiggy.com/swiggy/image/upload/${props?.data.cloudinaryImageId}`}
                    className="w-full h-full object-cover"
                />
            </div>

            <div className="mt-1">
                <p className="whitespace-nowrap overflow-hidden font-semibold">
                    {props?.data?.name}
                </p>
                {/* <p className="text-sm overflow-hidden">
                    {props?.data?.costForTwo}
                </p> */}
                <p className=" font-semibold text-sm text-gray-500 flex mt-1">



                    {props?.data?.avgRatingString}  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 text-yellow-500 ml-1 mt-0.5 mr-2">
                        <path fillRule="evenodd" d="M8 1.75a.75.75 0 0 1 .692.462l1.41 3.393 3.664.293a.75.75 0 0 1 .428 1.317l-2.791 2.39.853 3.575a.75.75 0 0 1-1.12.814L7.998 12.08l-3.135 1.915a.75.75 0 0 1-1.12-.814l.852-3.574-2.79-2.39a.75.75 0 0 1 .427-1.318l3.663-.293 1.41-3.393A.75.75 0 0 1 8 1.75Z" clipRule="evenodd" />
                    </svg>
                    30-35 mins
                </p>
                <p className=" overflow-hidden mt-1 whitespace-nowrap text-sm text-gray-500">
                    {props?.data?.cuisines.join(", ")}
                </p>

            </div>
        </Link >

    )
}
export default RestaurantCard;