import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Logo from '../assets/logo.png'; // Initial logo
import WhiteLogo from '../assets/logo-white.png'; // Logo on scroll
import { gsap } from 'gsap';
import Link from 'next/link';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [logoSrc, setLogoSrc] = useState(Logo); // Initially set to the initial logo
    const navRef = useRef(null);
    const [projectsDropdownVisible, setProjectsDropdownVisible] = useState(false);

    useEffect(() => {
        // Function to handle scroll
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setScrolled(true);
                setLogoSrc(WhiteLogo); // Change the logo source on scroll
            } else {
                setScrolled(false);
                setLogoSrc(Logo); // Revert to the initial logo source
            };
        };

        // Add event listener for scroll
        window.addEventListener('scroll', handleScroll);

        // Initialize GSAP animation
        gsap.from('#nav img, #nav h3, #nav button', {
            y: -100,
            duration: 1,
            opacity: 0,
            stagger: 0.2,
        });

        // Remove event listener on component unmount
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const navClass = scrolled ? 'scrolled' : '';

    const toggleProjectsDropdown = () => {
        setProjectsDropdownVisible(!projectsDropdownVisible);
    };

    const closeProjectsDropdown = () => {
        setProjectsDropdownVisible(false);
    };

    return (
        <div id="nav" ref={navRef} className={navClass}>
            <Link href="/">
                <Image src={logoSrc} height={28} alt="logo" />
            </Link>

            <div id="nav2">
                <h3>About<span className="wiggle"></span></h3>
                <h3>Services<span className="wiggle"></span></h3>
                <div
                    className="projects-dropdown"
                    onMouseEnter={toggleProjectsDropdown}
                    onMouseLeave={closeProjectsDropdown}
                    onFocus={toggleProjectsDropdown}
                    onBlur={closeProjectsDropdown}
                >
                    <h3>Projects<span className="wiggle"></span></h3>
                    {projectsDropdownVisible && (
                        <div className="dropdown-content">
                            <Link href="/project1">Complete Project</Link>
                            <Link href="/project2">Ongoing Project</Link>
                            {/* Add more project links as needed */}
                        </div>
                    )}
                </div>
                <h3>Careers<span className="wiggle"></span></h3>
            </div>
            <div id="nav3">
                <button>GET STARTED</button>
            </div>
        </div>
    );
};

export default Navbar;
