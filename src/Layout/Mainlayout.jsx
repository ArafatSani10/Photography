import React, { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { ArrowUpCircleIcon } from '@heroicons/react/24/solid';
import Navbar from '../Components/Pages/Shared/Navbar/Navbar';
import Footer from '../Components/Pages/Shared/Footer/Footer';
// 👈 Import the component for automatic scroll on route change
import ScrollOnRouteChange from './ScrollOnRouteChange';

// ⚠️ (ScrollToTopButton component remains unchanged - handles the manual button click)
const ScrollToTopButton = () => {
    // ... (Your existing ScrollToTopButton logic)
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
        if (window.scrollY > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);
        return () => {
            window.removeEventListener('scroll', toggleVisibility);
        };
    }, []);

    return (
        <button
            onClick={scrollToTop}
            className={`
                fixed bottom-6 right-6 z-50 p-3 rounded-full 
                bg-gradient-to-r from-purple-600 to-blue-600 
                text-white 
                shadow-xl shadow-blue-500/50 
                hover:from-purple-700 hover:to-blue-700 
                hover:scale-105
                focus:outline-none focus:ring-4 focus:ring-blue-300 focus:ring-offset-2
                transition-all duration-500 ease-in-out
                ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'}
            `}
        >
            <ArrowUpCircleIcon className='w-7 h-7' />
        </button>
    );
};


const Mainlayout = () => {
    return (
        <div className='font-cinzel'>
            {/* 🎯 The solution for automatic animated scroll on navigation */}
            <ScrollOnRouteChange />

            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>

            {/* The manual scroll-to-top button */}
            <ScrollToTopButton />
        </div>
    );
};

export default Mainlayout;