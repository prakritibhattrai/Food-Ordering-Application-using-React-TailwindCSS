import { useState } from "react";

const Search = () => {
    const [searchText, setSearchText] = useState("");

    return (<>
        <div className="search relative">
            <input
                type="input"
                className="form-input border border-gray-300 px-4 py-2 rounded-full w-full focus:outline-none focus:border-blue-500"
                placeholder="Search Restaurants"
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
            />
            <svg
                className="absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
            >
                <path
                    fillRule="evenodd"
                    d="M9 3a6 6 0 014.91 9.725l4.146 4.146-1.415 1.414-4.146-4.146A6 6 0 119 3zm0 2a4 4 0 100 8 4 4 0 000-8z"
                    clipRule="evenodd"
                />
            </svg>
        </div>


    </>)
}
export default Search