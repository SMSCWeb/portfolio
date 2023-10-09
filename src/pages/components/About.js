import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import Image from "next/image";

function About() {
    const [lettersRef, setLettersRef] = useArrayRef();
    const triggerRef = useRef(null);
    const revealRef = useRef(null);

    function useArrayRef() {
        const lettersRef = useRef([]);
        lettersRef.current = [];
        return [lettersRef, (ref) => ref && lettersRef.current.push(ref)];
    }

    gsap.registerPlugin(ScrollTrigger);
    const text = "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tSanjivani Engineering Consultants is a young, dynamic and creative team comprised of trained and professionally qualified staff offering a wide range of Electro- Mechanical design specialization and experience.Sanjivani Engineering Consultants regards design as a successful integration of the clients programme and requirements, budgetary considerations, schedule limitations and quality of life concerns along with a strong sense of design engineering and the highest possible design standards. Our objective is to understand the client’s business strategy, work culture and translate them through innovative design into a functional, productive and creative work environment.empor invidunt ut.";

    useEffect(() => {
        const anim = gsap.to(
            lettersRef.current,
            {
                color: "#484b6a",
                duration: 2,
                stagger: 0.1, // Adjust the stagger value to control the animation speed.
                scrollTrigger: {
                    trigger: triggerRef.current,
                    scrub: true,
                    start: "top center",
                    end: "bottom 85%",
                    onUpdate: (self) => {
                        const progress = self.progress;
                        const bgColor = gsap.utils.interpolate("#484b6a", "#fafafa", progress);
                        revealRef.current.style.backgroundColor = bgColor;
                    },
                },
            }
        );

        return () => {
            anim.kill();
        };
    }, []);
    useEffect(() => {
        gsap.to('.about-heading', {
            scrollTrigger: {
                trigger: '.header',
                start: 'top top',
                scrub: 1.9,
            },
            xPercent: 50,

        });

    }, []);

    return (
        <div className="about-section">
            <div className="reveal" ref={revealRef}>
                <h1 className="about-heading">About <span>Us</span></h1>
                <div className="about__body">
                    <Image
                        className="about-img"
                        src="https://images.unsplash.com/photo-1529307474719-3d0a417aaf8a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8QXJjaGl0ZWN0dXJlJTIwYnVpbGRpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
                        width={600}
                        height={700}
                        alt="Picture of the author"
                    />
                    <div className="about-text">
                        <div ref={triggerRef}>
                            {text.split("").map((letter, index) => (
                                <span className="reveal-text" key={index} ref={(ref) => setLettersRef(ref)}>
                                    {letter}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;
