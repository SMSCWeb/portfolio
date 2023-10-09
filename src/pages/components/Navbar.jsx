import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';

const Navbar = () => {
    const navRef = useRef(null);
    const [showNav2, setShowNav2] = useState(false);

    useEffect(() => {
        const tl = gsap.timeline();

        // Select all the individual containers within navRef
        const elements = navRef.current.querySelectorAll('.nav-element');

        // Apply stagger animation to nav1 and nav3 elements
        tl.from(elements, {
            y: -100,
            duration: 1,
            delay: 1,
            opacity: 0,
            stagger: 0.2, // Adjust this value to control the stagger effect timing
        });

    }, []);

    // Function to handle scroll event
    const handleScroll = () => {
        if (!showNav2 && window.scrollY > 0) {
            setShowNav2(true);
        } else if (showNav2 && window.scrollY === 0) {
            setShowNav2(false);
        }
    };

    // Attach scroll event listener when the component mounts
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        // Clean up the event listener when the component unmounts
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [showNav2]);

    // Apply stagger animation to nav2 elements when showNav2 is true
    useEffect(() => {
        if (showNav2) {
            const nav2Elements = document.querySelectorAll('#nav2');
            gsap.from(nav2Elements, {
                y: -100,
                duration: 1,
                // delay: 1,
                opacity: 0,
                stagger: 0.2,// Adjust this value for the stagger effect in nav2
            });
        }
    }, [showNav2]);

    return (
        <div className='navbar-section'>
            <div id="nav" ref={navRef}>
                <div className="nav-element">
                    <img src="https://logos-download.com/wp-content/uploads/2016/12/Squarespace_logo_white-black.png" alt="" />
                </div>
                {/* Conditionally render nav2 based on the state */}
                {showNav2 && (
                    <div id="nav2" className="nav-element">
                        <h3>Product</h3>
                        <h3>Template</h3>
                        <h3>Resource</h3>
                    </div>
                )}
                <div id="nav3" className="nav-element">
                    <h4>Log In</h4>
                    <button>GET STARTED</button>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
