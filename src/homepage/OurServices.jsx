import React from 'react'

function OurServices() {
  return (
    <section
      id="services"
      className='relative bg-[url("/images/wood.jpg")] bg-cover bg-center bg-fixed py-10 px-5 text-white'
    >
      <div className="absolute inset-0 bg-black/80 z-0"></div>
      <h1 className="text-center text-white font-normal relative md:text-5xl sm:text-[40px]">
        Our Services
      </h1>
      <div className="three-image flex md:flex-row sm:flex-col sm:gap-10 md:gap-28 container relative mt-10 center-all">
        <div data-aos="fade-right" className="card flex flex-col gap-5 center-all max-w-[300px]">
          <img className="rounded-full md:max-w-full sm:max-w-[200px]" src="/images/image-11.webp" alt="" />
          <div className="texts text-justify">
            <h3 className="text-center">Real Estate Done Right</h3>
            <p className="p-2 bg-black/50 rounded-md backdrop-blur-md border border-gray-50">
              Nervous about your property adventure? Don’t be. Whether you're
              getting ready to buy or sell your residence, looking at investment
              properties, or just curious about the markets, our team ensures
              you get the best experience possible!
            </p>
          </div>
        </div>
        <div data-aos="fade-down" className="card flex flex-col gap-5 center-all max-w-[300px]">
          <img className="rounded-full md:max-w-full sm:max-w-[200px]" src="/images/image-12.webp" alt="" />
          <div className="texts text-justify">
            <h3 className="text-center">Commercial & Residential</h3>
            <p className="p-2 bg-black/50 rounded-md backdrop-blur-md border border-gray-50">
              Large or small, condo or mansion, we can find it and get at the
              price that's right. Fixer-uppers? Luxury? We can help with all of
              it! We live, work, and play in this community. Happy to help you
              find where to put you hard-earned dollars.
            </p>
          </div>
        </div>
        <div data-aos="fade-right" className="card flex flex-col gap-5 center-all max-w-[300px]">
          <img className="rounded-full md:max-w-full sm:max-w-[200px]" src="/images/image-15.webp" alt="" />
          <div className="texts text-justify">
            <h3 className="text-center">Rely on Expertise</h3>
            <p className="p-2 bg-black/50 rounded-md backdrop-blur-md border border-gray-50">
              If you have questions about affordability, credit, and loan
              options, trust us to connect you with the right people to get the
              answers you need in a timely fashion. We make sure you feel
              confident and educated every step of the way.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default OurServices
