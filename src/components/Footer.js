import { Link } from "react-router-dom"

const Footer = () => {
    return (
        <footer className="px-6 lg:px-12 bg-gray-50 py-10 lg:py-10 border border-t border-gray-200">
            <div className="container mx-auto flex flex-wrap justify-between text-gray-950">
                <div className="footer-column lg:w-1/4 sm:w-1/2 pr-1 mb-8 lg:mb-0">
                    <div className="flex items-center mt-4">
                        <Link to="/" className="font-bold text-xl">Food Delivery App</Link>
                    </div>
                    <p className="text-lg mt-2 text-gray-700">Delicious food delivered to your doorstep asap!</p>
                </div>
                <div className="footer-column lg:w-1/4 sm:w-1/2 mb-8 lg:mb-0">
                    <h3 className="text-lg font-medium mb-4">About Your Order</h3>
                    <ul className="text-sm text-gray-700">
                        <li className="mb-2">Order Summary</li>
                        <li className="mb-2">Delivery Address</li>
                        <li className="mb-2">Payment Method</li>
                        <li className="mb-2">Confirmation</li>
                    </ul>
                </div>
                <div className="footer-column lg:w-1/4 sm:w-1/2 mb-8 lg:mb-0">
                    <h3 className="text-lg font-medium mb-4">Let Us Help You</h3>
                    <ul className="text-sm text-gray-700">
                        <li className="mb-2">Account Details</li>
                        <li className="mb-2">Order History</li>
                        <li className="mb-2">Help</li>
                        <li className="mb-2">Careers</li>
                        <li className="mb-2">Investors</li>
                    </ul>
                </div>
                <div className="footer-column lg:w-1/4 sm:w-1/2 mb-8 lg:mb-0">
                    <h3 className="text-lg font-medium mb-4">DoorDash</h3>
                    <ul className="text-sm text-gray-700">
                        <li className="mb-2">Terms of Service</li>
                        <li className="mb-2">Privacy</li>
                        <li className="mb-2">Delivery Locations</li>
                        <li className="mb-2">Careers</li>
                        <li className="mb-2">Investors</li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}

export default Footer