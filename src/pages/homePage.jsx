import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Project from './components/Project';
import Client from './components/Client';
import Footer from './components/Footer';
import Loader from './components/Loader'; // Import the Loader component

const HomePage = () => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Simulate a loading delay
        const loadingTimeout = setTimeout(() => {
            setIsLoading(false);
        }, 2000); // Adjust the delay as needed

        // Cleanup the timeout on unmount
        return () => {
            clearTimeout(loadingTimeout);
        };
    }, []);

    return (
        <>
            {isLoading ? (
                <Loader /> // Display the loader while isLoading is true
            ) : (
                <>
                    <Navbar />
                    <Hero />
                    <About />
                    <Services />
                    <Project />
                    <Client />
                    <Footer />
                </>
            )}
        </>
    );
};

export default HomePage;
