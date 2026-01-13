import { Lightbulb } from 'lucide-react'
import React, { useState } from 'react'
import DropDown from './components/DropDown'
import TextArea from './components/TextArea'

const GetItSold = () => {
  const [location, setLocation] = useState('')
  const [type, setType] = useState('')
  const [Sortby, setSortby] = useState('')
  const [bedrooms, setBedrooms] = useState('')
  const [baths, setBaths] = useState('')
  const [minprice, setMinprice] = useState('')
  const [maxprice, setMaxprice] = useState('')

  const countries = ['United States', 'Canada', 'Philippines', 'Japan']
  const types = [
    'Single-Family Homes',
    'Multi-Family Homes',
    'Condo',
    'Town House',
    'Other',
  ]
  const bedroom = ['Any Number', 'Studio', '1+', '2+', '3+', '4+', '5+', '6+']
  const bathroom = ['Any Number', '1+', '2+', '3+', '4+', '5+', '6+']
  const sortby = [
    'Newest',
    'Price: Low to High',
    'Price: High to Low',
    'Best Match',
  ]

  return (
    <section id='find' className="relative bg-fixed bg-[url('/images/image-10.webp')] bg-cover bg-no-repeat bg-center py-12">
      <div className="absolute inset-0 bg-black/80 z-0 backdrop-blur-sm "></div>

      <div className="seperate-two container flex md:flex-row sm:flex-col relative z-10 md:px-0 sm:px-4">
        <div className="left-side flex flex-col sm:gap-8 md:gap-5 sm:h-[760px] md:h-[900px] sm:w-full md:w-1/2 relative z-10">
          <h1 className="text-white  font-normal z-10 md:text-5xl sm:text-[38px] md:mb-5 sm:mb-1">Get It Sold</h1>

          <div data-aos="fade-up" data-aos-delay="300" className="relative max-w-[500px] hover:cursor-pointer  duration-500  hover:scale-105 transition-all ">
            <img
              src="/images/image-7.webp"
              alt=""
              className=" object-cover rounded-md"
            />
            
            <span className='absolute text-white top-2 left-2 bg-black/30 p-1 border border-gray-100/40 rounded-md backdrop-blur-sm '>Hover for details</span>
            <span className="max-w-[500px] absolute inset-0 bg-black/40 rounded-md bg-opacity-50 backdrop-blur-sm flex items-center justify-center text-white opacity-0 transition-opacity duration-300 hover:opacity-100 z-10">
              <div className="text-center py-5">
                <h2 className="text-lg font-bold">
                  Top Residential Sales Last 5 Years
                </h2>
                <p className="md:text-lg sm:text-sm leading-none mt-2 text-justify italic w-[300px]">
                  We helped nearly 90 clients in 2021, and closed 28.5 million
                  in sales! Our team works hard everyday to grow and learn, so
                  that we may continue to excel in our market. Our clients
                  deserve our best, & we want to make sure our best is better
                  every year.
                </p>
              </div>
            </span>
          </div>

        <div data-aos="fade-up" data-aos-delay="400" className="relative max-w-[500px] hover:cursor-pointer  duration-500  hover:scale-105 transition-all ">
            <img
              src="/images/image-8.webp"
              alt=""
              className=" object-cover rounded-md"
            />
                <span className='absolute text-white top-2 left-2 bg-black/30 p-1 border border-gray-100/40 rounded-md backdrop-blur-sm '>Hover for details</span>
            <span className="max-w-[500px] absolute inset-0 bg-black/40 rounded-md bg-opacity-50 backdrop-blur-sm flex items-center justify-center text-white opacity-0 transition-opacity duration-300 hover:opacity-100 z-10">
              <div className="text-center px-4">
                <h2 className="text-lg font-bold">Don't Just List it...</h2>
                <p className="md:text-lg sm:text-sm mt-2 text-justify italic w-[300px]">
                  Get it SOLD! We exhaust every avenue to ensure our listings
                  are at the fingertips of every possible buyer, getting you top
                  dollar for your home.
                </p>
              </div>
            </span>
          </div>

          <div data-aos="fade-up" data-aos-delay="500"  className="relative max-w-[500px] hover:cursor-pointer  duration-500  hover:scale-105 transition-all ">
            <img
              src="/images/image-9.webp"
              alt=""
              className=" object-cover rounded-md"
            />
            
            <span className='absolute text-white top-2 left-2 bg-black/30 p-1 border border-gray-100/40 rounded-md backdrop-blur-sm '>Hover for details</span>
            <span className="max-w-[500px] absolute inset-0 bg-black/40 rounded-md bg-opacity-50 backdrop-blur-sm flex items-center justify-center text-white opacity-0 transition-opacity duration-300 hover:opacity-100 z-10">
              <div className="text-center px-4">
                <h2 className="text-lg font-bold">Guide to Buyers</h2>
                <p className="md:text-lg sm:text-sm mt-2 text-justify italic w-[300px]">
                  Nobody knows the market like we do. Enjoy having a pro at your
                  service. Market analysis, upgrades lists, contractors on speed
                  dial, & more!
                </p>
              </div>
            </span>
          </div>

        </div>
        <div className="dream-home md:w-1/2 sm:w-full relative z-10">
          <h1 className=" text-white font-normal z-10 md:text-5xl sm:text-[38px]">
            Find Your Dream Home
          </h1>
          <h2 className="text-white italic font-normal animate-pulse md:text-3xl sm:text-[20px]">
            Search Listings
          </h2>
          <div className="seperate-listings flex flex-col gap-5">
            <div className="firstlist ">
              <div className="div flex gap-5 ">
                <DropDown
                  options={types}
                  placeholder="Select Type"
                  onSelect={(value) => setType(value)}
                />
                <DropDown
                  options={sortby}
                  placeholder="Sort By"
                  onSelect={(value) => setSortby(value)}
                />
              </div>
            </div>
            <div className="secondlist">
              <div className="div flex gap-5 ">
                <DropDown
                  options={bedroom}
                  placeholder="Select Bedrooms"
                  onSelect={(value) => setBedrooms(value)}
                />
                <DropDown
                  options={bathroom}
                  placeholder="Select Bathroom"
                  onSelect={(value) => setBaths(value)}
                />
              </div>
            </div>
            <div  className="div flex max-w-[100%]">
              <DropDown
                options={countries}
                placeholder="Select Location"
                onSelect={(value) => setLocation(value)}
              />
            </div>
          </div>
          <div  className="div mt-5 flex  gap-5">
            <TextArea
              placeholder="Minimum Price"
              value={minprice}
              onChange={(e) => setMinprice(e.target.value)}
            />
            <TextArea
              placeholder="Maximum Price"
              value={maxprice}
              onChange={(e) => setMaxprice(e.target.value)}
            />
          </div>
            <button
            className="btn btn-send my-5 font-bold
           italic"
          >
            Search Now
          </button>
          <div  className="map mt-20 ">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3220.272692037134!2d-115.95525319999999!3d36.18424939999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c639760f7b12f3%3A0xa05207dd285dc73c!2sTHE%20RIDGE%20REALTY%20GROUP!5e0!3m2!1sen!2sph!4v1764154985220!5m2!1sen!2sph"
          
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            className='rounded-md w-full h-[384px]'
          ></iframe>
        </div>
        </div>
        
      </div>
      
    </section>
  )
}

export default GetItSold
