import React, { useEffect, useState } from 'react';
import About from './components/About';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import ServicesSection from './components/Services';

export default function Home() {
  const [showSidebar, setShowSidebar] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        // If the user has scrolled more than 100 pixels, hide the Sidebar
        setShowSidebar(false);
      } else {
        // Otherwise, show the Sidebar
        setShowSidebar(true);
      }
    };

    // Attach scroll event listener when the component mounts
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <Navbar />
      {showSidebar && <Sidebar />}
      <Header />
      <div className=''>
        <About />
      </div>
      <ServicesSection/>
    </>
  );
}
