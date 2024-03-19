export const LOGO_URL = "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/DoorDash_Logo.svg/2560px-DoorDash_Logo.svg.png";
export const API_URL = "https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.0759837&lng=72.8776559&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
export const CORS_URL = "https://corsproxy.io/?"
export const POPULAR_CUISINES = "https://www.swiggy.com/dapi/landing/PRE_SEARCH?lat=19.0759837&lng=72.8776559"
export const DEFAULT_LAT = "19.1174798";
export const DEFAULT_LNG = "72.86916029999999";
export const CDN_URL = "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/";
export const RESTAURANTS_API = "https://www.swiggy.com/dapi/restaurants/list/v5?page_type=DESKTOP_WEB_LISTING&lat=" + DEFAULT_LAT + "&lng=" + DEFAULT_LNG;
export const RESTAURANTS_MENU_API = "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=19.0759837&lng=72.8776559&restaurantId=391816&catalog_qa=undefined&submitAction=ENTER";
export const SWIGGY_PROXY = ".netlify/functions/swiggy-proxy";
export const PROXY_CORS = "https://corsproxy.org/?";
export const generateProxyUrl = (URL) => PROXY_CORS + encodeURIComponent(URL)
export const ADDRESS_AUTOCOMPLATE_API = "https://www.swiggy.com/dapi/misc/place-autocomplete?input=[ADDRESS]&types=";
export const ADDRESS_RECOMMENDATION_API = "https://www.swiggy.com/dapi/misc/address-recommend?place_id=";