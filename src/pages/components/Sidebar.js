import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faFacebook, faLinkedin } from '@fortawesome/free-brands-svg-icons'
const Sidebar = () => {
    const [menuVisible, setMenuVisible] = useState(false);

    const toggleMenu = () => {
        setMenuVisible(!menuVisible);
    };
    const hideMenu = () => {
        setMenuVisible(false);
    };
    return (
        <>
            <div className="header-wrap">
                <div className="menu-wrapper">
                    {menuVisible ? (
                        <div className="menu-button-wrap open">
                            <button className="menu-button" onClick={hideMenu}>
                                <span></span> {/* Cross icon */}
                            </button>
                        </div>

                    ) : (
                        <div className="menu-button-wrap">
                            <button className="menu-button" onClick={toggleMenu} >
                                <span className='after:bg-white before:bg-white'></span> {/* Your menu icon */}
                            </button>
                        </div>
                    )}
                    {menuVisible && (
                        <div className="menu-holder">
                            <div className={`menu-inside ${menuVisible ? 'open' : ''}`}>
                                <div className="menu-nav-container">
                                    <ul className="internal-nav-links">
                                        <li><a href="#1"><span>Projects</span></a>
                                            <img src="https://images.unsplash.com/photo-1615713170963-2595d2c721bb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=934&amp;q=80" />
                                        </li>
                                        <li><a href="#2"><span>Recognition</span></a>
                                            <img src="https://images.unsplash.com/photo-1534120247760-c44c3e4a62f1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=2148&amp;q=80" />
                                        </li>
                                        <li><a href="#3"><span>Studio</span></a>
                                            <img src="https://images.unsplash.com/photo-1554941829-202a0b2403b8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=2100&amp;q=80" />
                                        </li>
                                        <li><a href="#4"><span>Contribution</span></a>
                                            <img src="https://images.unsplash.com/photo-1593697821028-7cc59cfd7399?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=2100&amp;q=80" />
                                        </li>
                                        <li><a href="#5"><span>Career</span></a>
                                            <img src="https://images.unsplash.com/photo-1588200618450-3a5b1d3b9aa5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=2100&amp;q=80" />
                                        </li>
                                    </ul>
                                    <ul className="external-nav-links">
                                        <li>
                                            <a href="www.facebook.com">
                                                <FontAwesomeIcon icon={faFacebook} className='icon' />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="www.instagram.com" className='icon'>
                                                <FontAwesomeIcon icon={faInstagram} />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="www.youtube.com" className='icon'>
                                                <FontAwesomeIcon icon={faLinkedin} />
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
}

export default Sidebar;
