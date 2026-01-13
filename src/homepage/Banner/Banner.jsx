// Banner.jsx
import React from 'react'
import BannerSlider from './BannerSlider'

function Banner() {
  return (
    <section
      id="home"
      className="relative block bg-[url('/images/image-1.webp')] bg-cover bg-center bg-fixed text-white pb-2 overflow-x-hidden"
    >
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>

      <div className="flex md:flex-row-reverse sm:flex-col container mx-auto relative z-10 gap-4 md:gap-8">
        <div
          data-aos="fade-right"
          className="left md:w-1/2 sm:w-full flex flex-col justify-center md:mt-0 sm:mt-40 md:text-left sm:text-center"
        >
          <h2 className="text-3xl font-bold">
            MARCI METZGER - THE RIDGE REALTY GROUP
          </h2>

          <h2 className="mt-4 font-titillium font-light italic text-lg">
            PAHRUMP REALTOR
          </h2>

          <span>
            <button>
              <div className="btn btn-call font-bold">Call Us</div>
            </button>
          </span>
        </div>

        <div
          data-aos="fade-left"
          data-aos-delay="200"
          className="right md:w-1/2 sm:w-full sm:p-4 md:p-0 overflow-hidden"
        >
          <BannerSlider />
        </div>
      </div>
    </section>
  )
}

export default Banner
