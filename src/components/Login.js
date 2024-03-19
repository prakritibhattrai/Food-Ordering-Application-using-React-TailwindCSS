import Header from "./Header"

const Login = () => {
    return (<>
        <Header />
        <div className="bg-gray-100  flex justify-center h-screen">
            <div className="bg-gray-50 p-8 rounded my-4 shadow-md h-96 w-96">
                <h2 className="text-md font-semibold mb-4">What's your phone number or email?</h2>
                <form>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-md font-medium text-gray-700">Email</label>
                        <input type="email" id="email" name="email" placeholder="Enter your email" className="mt-1 bg-gray-200 focus:border-gray-900  block w-full shadow-sm sm:text-sm border-black rounded-md px-3 py-2" />
                    </div>

                    <button type="submit" className="w-full bg-gray-950 text-white py-2 px-4 rounded">Login</button>

                </form>
                <div className="flex items-center justify-center my-4">
                    <div className="w-full h-px bg-gray-400"></div>
                    <div className="mx-4 text-gray-500">or</div>
                    <div className="w-full h-px bg-gray-400"></div>
                </div>
                <button className="flex justify-center w-full m-auto items-center border border-blue-800 bg-blue-800 mt-3 text-white py-2 px-4 rounded-md shadow-md hover:bg-blue-800">
                    Continue with Facebook
                </button>
                <button className="mt-2 flex justify-center border border-red-600 w-full bg-red-700 text-white py-2 px-4 rounded-md shadow-md hover:bg-red-800">
                    Continue with Google
                </button>
            </div>
        </div>
    </>)
}

export default Login