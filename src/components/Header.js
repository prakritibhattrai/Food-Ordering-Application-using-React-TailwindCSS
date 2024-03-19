import { useState, useContext, useRef } from "react";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom"
import Search from "./Search";

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const { loggedInUser } = useContext(UserContext)
    const cartItems = useSelector((store) => store.cart.items)
    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <nav className="shadow-lg py-2 z-50 sticky">
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

                <div className="hidden lg:flex items-center bg-gray-100 rounded-full relative z-50 px-4 w-80 h-10">
                    <Search />
                </div>

                {!menuOpen && (<div className={` sm:hidden lg:flex  items-center ${menuOpen ? 'block' : 'hidden'}`}>
                    <div className="flex items-center space-x-6 font-semibold">
                        <Link to="/about" className="hover:text-black">About</Link>
                        <Link to="/cart" className="hover:text-black">Cart</Link>
                        <Link to="/about" className="hover:text-black">Blog</Link>
                        <Link to="/about" className="hover:text-black">Contact</Link>
                        <div>
                            {loggedInUser ?
                                (
                                    <div className="flex items-center">
                                        <img src='https://img.freepik.com/premium-vector/user-profile-icon-flat-style-member-avatar-vector-illustration-isolated-background-human-permission-sign-business-concept_157943-15752.jpg?size=338&ext=jpg&ga=GA1.1.1395880969.1709769600&semt=ais' alt="Avatar" className="w-8 h-8 rounded-full mr-2" />
                                        <span className="text-black"> {loggedInUser}</span>
                                        {/* Add logout functionality here */}
                                    </div>
                                ) :
                                (
                                    <Link to={'/login'} className="flex items-center font-semibold underline">
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
                                    <div className="bg-black text-white text-sm rounded-full flex items-center justify-center w-4 h-4 mr-2 font-bold">{cartItems.length > 0 ? cartItems.length : "0"}</div>
                                </div>
                            </button>
                        </Link>
                    </div>


                </div>
                )}


            </div>
            {menuOpen && (
                <div className="items-center bg-gray-50 py-2 px-4">
                    <ul className=" font-bold">
                        <li className=" p-4 hover:bg-gray-100">
                            <Link to="/about" className="font-semibold text-sm mb-2 hover:text-black">About</Link>
                        </li>
                        <li className=" p-4 hover:bg-gray-100">
                            <Link to="/cart" className="font-semibold text-sm mb-2 hover:text-black">Cart</Link>

                        </li>
                        <li className=" p-4 hover:bg-gray-100">
                            <Link to="/about" className="font-semibold text-sm mb-2 hover:text-black">Blog</Link>

                        </li>
                        <li className=" p-4 hover:bg-gray-100">
                            <Link to="/about" className="font-semibold text-sm mb-2 hover:text-black">Contact</Link>

                        </li>
                    </ul>

                </div>
            )}
        </nav>
    );
};


export default Header;
