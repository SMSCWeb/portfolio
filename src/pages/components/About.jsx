import Image from 'next/image'
import React from 'react'
import BgImg from "../assets/bg-line.svg"
import Link from 'next/link'
import AboutBg from "../assets/bg5.jpg"

const About = () => {
    return (
        <div className='about-container'>
            <Image
                src={BgImg}
                className='bg-line'
            />
            <section className="about-section">
                <div className="container">
                    <div className="row clearfix">

                        <div className="content-column col-md-6 col-sm-12 col-xs-12">
                            <div className="inner-column">
                                <div className="sec-title">
                                    <div className="title">About Us</div>
                                    <h2>We Are The Leader In <br /> The Interiores</h2>
                                </div>
                                <div className="text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries</div>
                                <Link href="/">
                                    <button className='theme-btn btn-style-three'>
                                        Read More
                                    </button>
                                </Link>
                            </div>
                        </div>

                        <div className="image-column col-md-6 col-sm-12 col-xs-12">
                            <div className="inner-column " data-wow-delay="0ms" data-wow-duration="1500ms">
                                <div className="image">
                                    <Image src={AboutBg} alt="" />
                                    <div className="overlay-box">
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </div>

    )
}

export default About