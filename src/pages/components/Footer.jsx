import Image from "next/image";
import Link from "next/link";
import React from "react";
import Logo from "../assets/logo-white.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faLinkedin, faTwitter, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faLocation, faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faCopyright } from '@fortawesome/free-regular-svg-icons';

const Footer = () => {
    return (
        <footer className="footer-area">
            <div className="container">
                <div className="footer-content">
                    <div className="footer-widget">
                        <div className="footer-logo">
                            <Link
                                href="/"
                            >
                                <Image src={Logo} alt="logo"/>
                            </Link>
                        </div>
                        <div className="footer-widget-description">
                            <p>Our feet are on the ground, but our ambitions are above the clouds. Here is how we</p>
                        </div>
                        <div className="footer-widget-follow">
                            <ul>
                                <li><a href="#"><FontAwesomeIcon icon={faFacebook} /></a></li>
                                <li><a href="#"><FontAwesomeIcon icon={faLinkedin} /></a></li>
                                <li><a href="#"><FontAwesomeIcon icon={faTwitter} /></a></li>
                                <li><a href="#"><FontAwesomeIcon icon={faWhatsapp} /></a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="footer-widget">
                        <div className="footer-widget-title">
                            <h2>About</h2>
                        </div>
                        <div className="company-widget-info">
                            <ul>
                                <li><a href="#">About Dreamhub</a></li>
                                <li><a href="#">Plans & Pricing</a></li>
                                <li><a href="#">Service</a></li>
                                <li><a href="#">Blog</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="footer-widget">
                        <div className="footer-widget-title">
                            <h2>Products</h2>
                        </div>
                        <div className="company-widget-info">
                            <ul>
                                <li><a href="#">Primary blocks</a></li>
                                <li><a href="#">Content blocks</a></li>
                                <li><a href="#">Infographic blocks</a></li>
                                <li><a href="#">Business blocks</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="footer-widget">
                        <div className="footer-widget-title">
                            <h2>Resources</h2>
                        </div>
                        <div className="company-widget-info">
                            <ul>
                                <li><a href="#">Support center</a></li>
                                <li><a href="#">Documentation</a></li>
                                <li><a href="#">Newsletter</a></li>
                                <li><a href="#">Changelog</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="footer-widget">
                        <div className="footer-widget-title">
                            <h2>Contact Us</h2>
                        </div>
                        <div className="company-widget-address">
                            <ul>
                                <li><FontAwesomeIcon icon={faPhone} />+88(123)124 2541</li>
                                <li><FontAwesomeIcon icon={faEnvelope} />example@gmail.com</li>
                                <li><FontAwesomeIcon icon={faLocationDot} />44 New Design Street, Australia</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom">
                    <div className="footer-bottom-content">
                        <p><FontAwesomeIcon icon={faCopyright} />2023 all rights reserved. Design By <span>Shekhar</span></p>
                    </div>
                    <div className="footter-bottm-right">
                        <a href="#">Terms of Use Privacy Policy</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
