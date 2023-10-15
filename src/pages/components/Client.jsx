import { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import Image5 from "../assets/bg5.jpg";
import Image6 from "../assets/bg6.jpg";
import Image7 from "../assets/bg7.jpg";
import Image8 from "../assets/bg8.jpg";

const Client = () => {
    const companies = [
        { name: "Company 1", logo: Image5 },
        { name: "Company 2", logo: Image6 },
        { name: "Company 3", logo: Image7 },
        { name: "Company 4", logo: Image8 },
        { name: "Company 5", logo: Image5 },
        { name: "Company 6", logo: Image6 },
        { name: "Company 7", logo: Image7 },
        { name: "Company 8", logo: Image8 }
        // Add more company objects with their names and logo images
    ];

    const [currentSlide, setCurrentSlide] = useState(0);

    const settings = {
        infinite: true,
        speed: 500, // Adjust the speed for a smoother sliding transition
        autoplay: true,
        autoplaySpeed: 2000,
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: "0",
        beforeChange: (current, next) => setCurrentSlide(next),
        variableWidth: true,
    };

    const clonedCompanies = companies.concat(companies); // Duplicate the companies array for a seamless loop

    return (
        <div className="company-slider-container">
            <div className="client-content">
                <div className=" title">Our Clients</div>
                <hr />
            </div>
            <Slider {...settings}>
                {clonedCompanies.map((company, index) => (
                    <div key={index} className="company-slide">
                        <Image
                            src={company.logo}
                            alt={company.name}
                            width={200}
                            height={100}
                        />
                    </div>
                ))}
            </Slider>
            <style jsx>{`
                .company-slider-container {
                    padding: 40px;
                    height:100%;
                }

                .slider-title {
                    font-size: 24px;
                    margin-bottom: 20px;
                }

                .company-slide {
                    padding: 0 3px;
                    transition: transform 0.5s; // Smooth sliding transition
                }

                .slick-center {
                    transform: scale(1.2);
                    transition: transform 0.5s; // Smooth sliding transition
                }

                .slick-active {
                    background-color: #007bff;
                }

                .slider-status {
                    margin-top: 10px;
                }
            `}</style>
        </div>
    );
};

export default Client;
