import React, { useEffect } from 'react'
import Header from './partials/Header'
import Banner from './Banner/Banner'
import Footer from './partials/Footer'
import GetItSold from './GetItSold'
import OurServices from './OurServices'
import CallOrVisit from './CallOrVisit'
import Marci from './Marci'
import AOS from 'aos'
import 'aos/dist/aos.css'

const Homepage = () => {
    useEffect(() => {
    AOS.init({
      duration: 1000,  
      easing: 'ease-in-out',
      once: false,   
      mirror: true,    
    });
  }, []);
  return (
    <>
      <Header/>
      <Banner />
      <OurServices/>
      <Marci/>
      <GetItSold/>
      <CallOrVisit/>
      <Footer/>
    </>
  )
}
export default Homepage
