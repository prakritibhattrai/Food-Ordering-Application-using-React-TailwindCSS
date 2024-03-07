import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Body from './components/Body';
import About from './components/About';
import Footer from './components/Footer';
import RestaurantMenu from './components/RestaurantMenu';
import Cart from './components/Cart';

const AppLayout = () => {
    return (
        <div className='app  text-gray-800'>
            <Header />
            <Body />
            <Footer />
        </div>
    );
};

const appRouter = (
    <Router>
        <Routes>
            <Route path="/" element={<AppLayout />} />
            <Route path="/about" element={<About />} />
            <Route path="/restaurants/:id" element={<RestaurantMenu />} />
            <Route path="/cart" element={<Cart />} />
        </Routes>
    </Router>
);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(appRouter);
