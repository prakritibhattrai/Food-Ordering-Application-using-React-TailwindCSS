import { Link, createBrowserRouter } from "react-router-dom"
import { useState } from "react";

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [isLoggedIn, setIsloogedIn] = useState(false)

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };
    return (

        <nav className="shadow-lg py-2 sticky">
            <div className="container mx-auto px-4 lg:px-12 flex justify-between items-center">
                <div className="flex gap-1">
                    <img className="h-8 w-8" src="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExcWlwdGxhdmR5bGRodDF2ZDYxazVnaThubXl1MjZrZHFua3owZ2s4ZCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/NgJ6OtB3FH0KCQU2Tz/giphy.gif" />
                    <Link to="/" className="font-bold text-xl">Food Delivery App </Link>
                </div>

                <div className="lg:hidden">
                    <button onClick={toggleMenu} className="text-gray-600 focus:outline-none">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                            {menuOpen ? (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                            )}
                        </svg>
                    </button>
                </div>
                <div className="hidden lg:flex items-center bg-gray-200 rounded-full px-4 w-80 h-10">
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
                        placeholder="Search restaurants, food..."
                        className="flex-grow bg-gray-200 rounded-full py-2 px-4 text-gray-600 text-sm font-semibold focus:outline-none"
                    />
                </div>
                <div className={`lg:flex items-center ${menuOpen ? 'block' : 'hidden'}`}>

                    <div className="flex items-center space-x-6 font-semibold text-sm">

                        <Link to="/about" className="hover:text-gray-200">About</Link>
                        <Link to="/restaurants" className="hover:text-gray-200">Offers</Link>
                        <Link to="/restaurants" className="hover:text-gray-200">Blog</Link>
                        <Link to="/contact" className="hover:text-gray-200">Contact</Link>
                        <div>
                            {isLoggedIn ? (
                                <div className="flex items-center">
                                    <img src={avatarImage} alt="Avatar" className="w-8 h-8 rounded-full mr-2" />
                                    <span className="text-black">Welcome, User!</span>
                                    {/* Add logout functionality here */}
                                </div>
                            ) : (

                                <Link className="flex items-center font-semibold underline">


                                    <span className="text-sm">Login / </span>
                                    <span> </span>
                                    <span className="text-sm"> Regiter</span>
                                </Link>
                            )}
                        </div>
                        <Link to="/cart" className="relative flex items-center border-black  border-l h-5 pl-4">
                            <button className="flex items-center bg-black text-white rounded-full px-4 py-2 h-9">
                                <div className="flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 mr-1 text-bold">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                                    </svg>
                                    <span className="text-sm">Cart  •</span>
                                    <div className="bg-black text-white text-sm rounded-full flex items-center justify-center w-4 h-4 mr-2 font-bold">5</div>
                                </div>
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
};


export default Header;