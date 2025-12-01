import React from 'react'
import Header from './partials/Header'
import Banner from './Banner/Banner'
import Footer from './partials/Footer'
import GetItSold from './GetItSold'
import OurServices from './OurServices'
import CallOrVisit from './CallOrVisit'
import Marci from './Marci'


const Homepage = () => {
  return (
    <>
      <Header/>
      <Banner/>
      <OurServices/>
      <Marci/>
      <GetItSold/>
      <CallOrVisit/>
      <Footer/>
    </>
  )
}
export default Homepage
