import React from 'react';
import FacebookLogin from 'react-facebook-login';

const FacebookLogin = () => {

    return (
        <button className="bg-blue-600 mt-3 text-white py-2 px-4 rounded-md shadow-md hover:bg-blue-700">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 6.343a9.001 9.001 0 10-12.728 12.728l4.95-4.95"
                />
            </svg>
            Continue with Facebook
        </button>
    );
};

export default FacebookLogin;
