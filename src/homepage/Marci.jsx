// Marci.jsx
import React from 'react'

function Marci() {
  return (
    <section id='about' className="relative bg-black flex gap-8 py-24 bg-black-/40 backdrop-blur-sm text-white overflow-x-hidden">
      <div className="seperate flex md:flex-row sm:flex-col md:gap-20 container relative">
        <div data-aos="fade-left" className="marci-image flex flex-col md:w-1/2 sm:w-full gap-5 sm:center-all">
          <img
            className="rounded-full max-w-[300px]"
            src="/images/marci.webp"
            alt=""
          />
          <div className="info sm:text-center md:text-left">
            <h2>REALTOR FOR NEARLY 3 DECADES!</h2>
            <p>206-919-6886</p>
          </div>
        </div>
        <div className="details flex flex-col center-all sm:w-full md:w-1/2 italic">
          <h2 >Who is Marci Metzger?</h2>
          <h3 data-aos="fade-up" data-aos-delay="300" className="font-normal md:text-2xl sm:text-[18px] text-justify md:px-0 sm:px-4">
            Marci Metzger is a licensed real estate agent with nearly three
            decades of experience in the industry. She has been helping buyers
            and sellers since 1995, bringing a wealth of knowledge to her
            clients. Marci is known for her dedication to her community,
            particularly in Pahrump, Nevada, where she focuses on providing
            top-notch service and market analysis to ensure successful
            transactions. She is part of The Ridge Realty Group, which
            emphasizes personalized service and expertise in real estate
            transactions.
          </h3>
          <div className="logos">
            <img  className='rounded-full' src="/images/pahrump.webp" alt="" />
            <img  className='rounded-full' src="/images/realtor.webp" alt="" />
            <img  src="/images/ridge.webp" alt="" />
            <img src="/images/EHO.png" alt="" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Marci
