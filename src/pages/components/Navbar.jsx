import Image from 'next/image'
import React, { useEffect, useRef } from 'react'
import Logo from "../assets/logo.png"
// import { Slide } from "react-awesome-reveal";

import { gsap } from 'gsap';

const Navbar = () => {
    useEffect(() => {
        var Timeline = gsap.timeline();
        Timeline.from("#nav img, #nav h3, #nav button", {
            y: -100,
            duration: 1,
            delay: 1,
            opacity: 0,
            stagger: 0.2
        })
    }, [])
    return (
        <div id="nav">
            <Image
                src={Logo}
                height={60}
            />
            <div id="nav2">
                <h3>About</h3>
                <h3>Services</h3>
                <h3>Projects</h3>
                <h3>Careers</h3>
            </div>
            <div id="nav3">
                <button>GET STARTED</button>
            </div>
            {/* </Slide> */}
        </div>

    )
}

export default Navbar