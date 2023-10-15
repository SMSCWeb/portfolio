import React from 'react'
import Services from './components/Services'
import Image1 from "../pages/assets/bg1.jpg"
import Image from 'next/image'
import Navbar from './components/Navbar'
const ServicePage = () => {
  return (
    <>
    <Navbar/>
    <div className='service-page'>
        <h1>HEllo</h1>
    </div>
    <Services/>
    </>
  )
}

export default ServicePage