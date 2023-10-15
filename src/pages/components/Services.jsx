import React from 'react';
import Image1 from "../assets/bg1.jpg";
import Image2 from "../assets/bg2.jpg";
import Image3 from "../assets/bg3.jpg";
import Image4 from "../assets/bg4.jpg";
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDollarSign, faUsers, faComments } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';

const servicesData = [
    {
        icon: faDollarSign,
        title: 'Low prices',
        description: 'GoDrive provides top-class services at an affordable price.',
    },
    {
        icon: faUsers,
        title: 'Experienced staff',
        description: 'We hire the best experts in everything concerning car rental.',
    },
    {
        icon: faComments,
        title: 'Reliable support',
        description: 'Our team guarantees reliable support in addition to the offered services.',
    },
];

const ServiceBox = ({ icon, title, description }) => {
    return (
        <div className="service-box">
            <div className="service-icon">
                <FontAwesomeIcon icon={icon} size="1x" />
            </div>
            <div className="service-details">
                <h3 className='about-description'>{title}</h3>
                <p>{description}</p>
            </div>
        </div>
    );
}

const Services = () => {
    return (
        <>
            <div className='services-container'>
                <div className="header__img service-img-container">
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
                <div>

                </div>
                <div className="services-right-section">
                    <div className="service-title sec-title">
                        <div className=" title">Our Services</div>
                        <hr />
                        <p className='hero-description service-description'>Services are offered from the conceptual stage to commissioning for each project, enabling the Owner/Architect/Planner to arrive at an optimum design and installation for the following engineering services:
                        </p>
                    </div>
                    <div className="service-box-list">
                        {servicesData.map((service, index) => (
                            <ServiceBox key={index} {...service} />
                        ))}
                    </div>
                    <div>
                        <Link href="/">
                            <button className='service-theme-btn btn-style-three'>
                                Read More
                            </button>
                        </Link>
                    </div>

                </div>
            </div>
        </>
    );
}

export default Services;
