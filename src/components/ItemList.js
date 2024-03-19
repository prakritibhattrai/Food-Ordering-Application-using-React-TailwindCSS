import { useDispatch, useSelector } from "react-redux";
import { CDN_URL, RESTAURANTS_MENU_API } from "../utils/constants";
import { addItem, removeItem, setRestaurant } from "../slices/CartSlice";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import useRestaurantMenu from "../utils/useRestaurantMenu";


const ItemList = ({ items }) => {
    const dispatch = useDispatch()
    const selectedItems = useSelector((store) => store.cart.items);
    const restaurant = useSelector((store) => store.cart.restaurant);
    const { resId } = useParams();
    const { restaurantInfo } = useRestaurantMenu(resId);

    const handlerAddItem = (item) => {
        if (restaurant === undefined) {
            dispatch(setRestaurant(restaurantInfo));
        } else if (restaurant?.id !== restaurantInfo?.id) {
            dispatch(setRestaurant(restaurantInfo));
        }
        dispatch(addItem(item));
    };
    const handlerRemoveItem = (item) => {
        dispatch(removeItem(item));
    };

    useEffect(() => {
        fetchMenu()
    }, [])

    const fetchMenu = async () => {
        const data = await fetch(`https://corsproxy.io/?${RESTAURANTS_MENU_API}/${resId}`)
        const jsonData = await data.json()
        setRestaurant(jsonData.data)
    }

    return items?.map((item, index) => {
        const itemsInCart = selectedItems.filter((selectedItem) => selectedItem.card.info.id === item.card.info.id);
        return (

            <div key={index} className="my-4 py-4 grid grid-cols-12 border-b border-gray-200">
                <div className="col-span-10 flex flex-col justify-center">
                    <div className="text-md">{item.card.info.name}</div>
                    <div className="text-sm font-semibold text-gray-700">
                        ${
                            item?.card?.info?.price % 10000 !== 0 ? (item?.card?.info?.price / 10000).toFixed(2) : (item?.card?.info?.price / 10000).toFixed(2) ||
                                item?.card?.info?.defaultPrice % 10000 !== 0 ? (item?.card?.info?.defaultPrice / 10000).toFixed(2) : (item?.card?.info?.defaultPrice / 10000).toFixed(2)
                        }
                    </div>

                    <div className="text-xs font-light text-gray-400 py-4">{item.card.info.description}</div>
                </div>
                <div className="col-span-2 flex justify-center items-center relative">
                    <img className="object-cover rounded-lg" src={CDN_URL + item.card.info.imageId ? CDN_URL + item.card.info.imageId : ""} alt="No Image" />
                    {itemsInCart.length > 0 ? (
                        <div className="min-w-[70px] w-[70px] absolute text-sm font-bold bottom-0 -left-4 md:-bottom-2 md:left-2 bg-white border border-gray-50 rounded-md uppercase shadow-lg grid grid-cols-12">
                            <button onClick={() => handlerRemoveItem(item)} className="h-full col-span-4 p-2">
                                -
                            </button>
                            <span className="col-span-4 p-2">{itemsInCart.length}</span>
                            <button onClick={() => handlerAddItem(item)} className="h-full col-span-4 p-2">
                                +
                            </button>
                        </div>
                    ) : (
                        <button
                            onClick={() => handlerAddItem(item)}
                            className="absolute text-sm  w-4/5 m-auto font-bold bottom-0 -left-4 md:-bottom-2 md:left-3 bg-white border border-gray-50 px-6 py-1 rounded-md text-black-950 uppercase shadow-lg"
                        >
                            ADD
                        </button>
                    )}
                </div>
            </div>
        );
    });
};

export default ItemList;