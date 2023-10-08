import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';


gsap.registerPlugin(ScrollTrigger);

const Header = () => {
  useEffect(() => {
    gsap.to('.title_paralax', {
      scrollTrigger: {
        trigger: '.header',
        start: 'top top',
        scrub: 1.9,
      },
      yPercent: -200,
    });

    gsap.to('.header .stroke', {
      scrollTrigger: {
        trigger: '.header',
        start: 'top top',
        scrub: 1.9,
      },
      xPercent: 50,
    });

    gsap.to('.header__img', {
      scrollTrigger: {
        trigger: '.header',
        start: 'top top',
        scrub: 1.9,
      },
      xPercent: -70,
      yPercent: -50,
    });

    gsap.to('.header__img img', {
      scrollTrigger: {
        trigger: '.header',
        start: 'top top',
        scrub: 1.9,
      },
      scale: 1.3,
    });

    gsap.to('.header__marq-wrapp', {
      scrollTrigger: {
        trigger: '.header',
        start: 'top top',
        scrub: 1.9,
      },
      xPercent: -50,
    });

    gsap.to('.header__marq-star img', {
      scrollTrigger: {
        trigger: '.header',
        start: 'top top',
        scrub: 1.9,
      },
      rotate: -720,
    });
  }, []);

  return (
    <div className="header-section">
      <header className="header">
        <h1 className="title" data-splitting>
          <span className="title_paralax">Welcome To</span>
          <span className="stroke">Sanjivani Engineering Consults</span>
        </h1>
        <div className="header__img">
          <img src="https://plus.unsplash.com/premium_photo-1677096447030-9c60a2db741b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTF8fEFyY2hpdGVjdHVyZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="1" />
        </div>
       
      </header>
    </div>
  );
};

export default Header;
