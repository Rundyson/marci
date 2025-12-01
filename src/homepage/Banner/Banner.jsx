import React from 'react'
import BannerSlider from './BannerSlider'

function Banner() {
  return (
    <section className="relative block bg-[url('/images/image-1.webp')] bg-cover bg-center bg-fixed  text-white pb-2">
      <div className="absolute inset-0 bg-black/80"></div>

      <div className="flex container mx-auto relative z-10 gap-8">
        <div className=" left w-1/2 flex flex-col justify-center">
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

        <div className="right w-1/2">
          <BannerSlider />
        </div>
      </div>

    </section>
  )
}

export default Banner
