import React, { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';


const Navbar = () => {
    const comp = useRef(); // Create a ref for the root level element (for scoping)
    const circle = useRef();

    useLayoutEffect(() => {
        // Create our context. This function is invoked immediately and all GSAP animations and ScrollTriggers created during the execution of this function get recorded so we can revert() them later (cleanup)
        let ctx = gsap.context(() => {
            // Use gsap.from to animate elements from initial states
            gsap.from("#nav h1, #nav h3, #nav h4, #nav button", {
                y: -100,
                duration: 1,
                delay: 1,
                opacity: 0,
                stagger: 0.2,
            });

            // Or we can use gsap.from with a ref
            gsap.from(circle.current, { rotation: 360, duration: 1 });
        }, comp); // <- IMPORTANT! Scopes selector text

        return () => ctx.revert(); // Cleanup
    }, []);

    return (
        <>

            <div ref={comp}>
                <div id="nav">
                    <h1>Logo</h1>

                    <div id="nav2">
                        <h3>Product</h3>
                        <h3>Template</h3>
                        <h3>Resourse</h3>
                    </div>
                    <div id="nav3">
                        <h4>Log In</h4>
                        <button>GET STARTED</button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Navbar;



