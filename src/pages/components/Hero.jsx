import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import React, { useEffect } from 'react';
// import videoBg from '../assets/background.mp4'
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons'
import Image1 from "../assets/bg1.jpg"
import Image2 from "../assets/bg2.jpg"
import Image3 from "../assets/bg3.jpg"
import Image4 from "../assets/bg4.jpg"
import Image from 'next/image';
const Hero = () => {

    return (
        <div className="header-section">
            <header className="header">
                <div className="left-section">
                    <p className='greeting'>Welcome To</p>
                    <p className='hero-title'>SM Service Consultancy</p>
                    <p className='hero-description'>It is a group of professionally qualified and experienced professionals, who have about 10-25 years of experience in their respective fields and have been successfully designed & executed several large projects.
                    </p>
                    <Link href="/">
                        <button className='theme-btn btn-style-three'>
                            Our Service
                        </button>
                    </Link>
                    <hr />
                    <div className='d-flex gap-4'>
                        <FontAwesomeIcon icon={faQuoteLeft} /> <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis recusandae perspiciatis iusto cum quas? Autem repellendus facere id! Veritatis, totam!
                        </p>
                    </div>

                </div>
                <div className="header__img">
                    <Image
                        src={Image1}
                        alt="1"
                        className='image-half-left'

                    />
                    <Image
                        src={Image2}
                        alt="2"
                        className='image-full'


                    />
                    <Image
                        src={Image3}
                        alt="3"
                        className='image-full'


                    />
                    <Image
                        src={Image4}
                        alt="4"
                        className='image-half-right'
                    />
                </div>

            </header>
        </div>
    );
};

export default Hero;
