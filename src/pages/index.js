import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import 'bootstrap/dist/css/bootstrap.min.css';
import Services from './components/Services';
export default function Home() {

  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Services/>
    </>
  );
}
