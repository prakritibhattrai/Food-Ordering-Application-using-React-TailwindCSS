import React from 'react';
import Header from './Header';
import Footer from './Footer';


const About = () => {
    return (
        <div className="min-h-screen">
            <Header />
            <div className="container mx-auto px-4 lg:px-0">
                <div className="bg-white rounded-lg shadow-lg p-6 lg:p-12 flex flex-col lg:flex-row ">
                    <div>
                        <h1 className="text-xl lg:text-2xl font-bold mb-4 lg:mb-6">About this web-application</h1>
                        <p className="text-sm lg:text-md mb-4 lg:mb-6">
                            <span className="font-bold">Introduction: </span>
                            Our food ordering application is a convenient and user-friendly platform designed to satisfy your culinary cravings with ease. Whether you're in the mood for a hearty meal, a quick snack, or a decadent dessert, our app connects you with a wide range of local restaurants and eateries, ensuring that you can enjoy delicious food delivered straight to your doorstep.
                            <br /><br />
                            <span className="font-bold">Features:</span>
                            <ul className="list-disc pl-6 mb-2">
                                <li>Seamless Ordering: Browse through a diverse selection of cuisines and menus from various restaurants, all within a single app. Our intuitive interface allows you to effortlessly place and track your orders, ensuring a hassle-free experience every time.</li>
                                <li>Personalized Recommendations: Discover new dining experiences tailored to your preferences with our personalized recommendation engine. From trending dishes to exclusive deals, we curate suggestions that cater to your tastes and cravings.</li>
                                <li>Convenient Delivery Options: Choose from a range of delivery options to suit your schedule and preferences. Whether you prefer doorstep delivery, curbside pickup, or dine-in reservations, our app provides flexible solutions to accommodate your needs.</li>
                            </ul>
                            <span className="font-bold">Technologies Used:</span>
                            <ul className="list-disc pl-6 mb-2">
                                <li>Frontend Development: The frontend of our application is built using React, a powerful JavaScript library for building user interfaces. React's component-based architecture allows for modular development and seamless integration of features.</li>
                                <li>Styling with Tailwind CSS: We've utilized Tailwind CSS, a utility-first CSS framework, to streamline the styling process and ensure consistency across our application's design. Tailwind's intuitive utility classes enable rapid prototyping and customization, empowering us to create visually appealing interfaces with minimal effort.</li>
                                <li>Backend and Data Management: For backend development and data management, we've leveraged Node.js and Express.js, two popular frameworks for building server-side applications and RESTful APIs. These technologies enable efficient handling of requests, database interactions, and business logic, ensuring the smooth operation of our food ordering platform.</li>
                                <li>Database Management: MongoDB, a NoSQL database, serves as the backbone of our application's data storage and management system. Its flexible document-based structure and scalability make it well-suited for handling diverse data types and accommodating the dynamic nature of our platform.</li>
                                <li>API Integration: Our application integrates with various third-party APIs, including payment gateways, location services, and restaurant databases, to enhance functionality and provide a seamless user experience. By leveraging these APIs, we can offer features such as secure payment processing, geolocation-based recommendations, and real-time menu updates.</li>
                            </ul>
                            <span className="font-bold">Conclusion: </span>
                            Our food ordering application combines cutting-edge technology with unparalleled convenience, allowing you to indulge in your favorite culinary delights with just a few taps on your device. Whether you're craving comfort food, exploring new cuisines, or seeking exclusive deals, our platform caters to all your dining needs, ensuring a satisfying experience from start to finish.
                        </p>
                    </div>
                </div>
            </div>
            <Footer />
        </div>

    );
};

export default About;
