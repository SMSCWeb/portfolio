import React, { useEffect } from 'react';
import arrowImg from '../assets/arrow.png';
import Image from 'next/image';
import { gsap } from "gsap";
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

// Initialize ScrollTrigger
// gsap.registerPlugin(ScrollTrigger);


const ServicesSection = () => {
    useEffect(() => {
        function animateServices() {
            gsap.from('.serv__item-arrow', {
                x: (i, el) => 1 - parseFloat(el.getAttribute('data-speed')),
                scrollTrigger: {
                    trigger: '.serv__list',
                    start: 'top bottom',
                    scrub: 1.9,
                },
            });
            gsap.from('.section-title', {
                scrollTrigger: {
                    trigger: '.serv',
                    start: 'top bottom',
                    scrub: 1.9,
                },
                xPercent: -40,
            });
        }


        animateServices();
    }, []);
    return (
        <section className="serv">
            <div className="content">
                <h2 className="section-title">
                    Servic<span className="stroke">es</span>
                    {/* <span className="section-title__square"></span> */}
                </h2>

                <div className="serv__list">
                    <div className="serv__item">
                        <span className="serv__item-arrow" data-speed="500">
                            <Image
                                className="about-img"
                                src={arrowImg}
                                width={600}
                                height={700}
                                alt="Picture of the author"
                            />
                        </span>
                        <div className="serv__item-txt">
                            <span className="serv__item-text">/Graphic Design</span>
                        </div>
                    </div>
                    <div className="serv__item">
                        <span className="serv__item-arrow" data-speed="400">
                            <Image
                                className="about-img"
                                src={arrowImg}
                                width={600}
                                height={700}
                                alt="Picture of the author"
                            />
                        </span>
                        <div className="serv__item-txt">
                            <span className="serv__item-text">/UX/UI Design</span>
                        </div>
                    </div>
                    <div className="serv__item">
                        <span className="serv__item-arrow" data-speed="800">
                            <Image
                                className="about-img"
                                src={arrowImg}
                                width={600}
                                height={700}
                                alt="Picture of the author"
                            />
                        </span>
                        <div className="serv__item-txt">
                            <span className="serv__item-text">/Web Design</span>
                        </div>
                    </div>
                    <div className="serv__item">
                        <span className="serv__item-arrow" data-speed="600">
                            <Image
                                className="about-img"
                                src={arrowImg}
                                width={600}
                                height={700}
                                alt="Picture of the author"
                            />
                        </span>
                        <div className="serv__item-txt">
                            <span className="serv__item-text">/Brand Design</span>
                        </div>
                    </div>
                    <div className="serv__item">
                        <span className="serv__item-arrow" data-speed="400">
                            <Image
                                className="about-img"
                                src={arrowImg}
                                width={600}
                                height={700}
                                alt="Picture of the author"
                            />
                        </span>
                        <div className="serv__item-txt">
                            <span className="serv__item-text">/Brand Design</span>
                        </div>
                    </div>
                    <div className="serv__item">
                        <span className="serv__item-arrow" data-speed="800">
                            <Image
                                className="about-img"
                                src={arrowImg}
                                width={600}
                                height={700}
                                alt="Picture of the author"
                            />
                        </span>
                        <div className="serv__item-txt">
                            <span className="serv__item-text">/Brand Design</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ServicesSection;
