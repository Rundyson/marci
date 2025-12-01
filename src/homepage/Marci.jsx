import React from 'react'

function Marci() {
  return (
    <>
     <div className="relative bg-[url('/images/marci-bg.jpg')] bg-cover bg-no-repeat bg-center bg-fixed flex gap-8 py-10 bg-black-/40 backdrop-blur-sm text-white">
         <div className="absolute inset-0 bg-black/80 z-0"></div>
        <div className="seperate flex gap-20 container relative">
          <div className="marci-image flex flex-col w-1/2 gap-5">
            <img
              className="rounded-full max-w-[300px]"
              src="/images/marci.webp"
              alt=""
            />
            <div className="info">
              <h2>REALTOR FOR NEARLY 3 DECADES!</h2>
              <p>206-919-6886</p>
            </div>
          </div>
          <div className="details flex flex-col center-all w-1/2 italic">
            <h3 className="font-normal">
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
            <div className="logos flex gap-10 mt-5">
              <img className='rounded-full' src="/images/pahrump.webp" alt="" />
              <img className='rounded-full' src="/images/realtor.webp" alt="" />
              <img src="/images/ridge.webp" alt="" />
              <img src="/images/EHO.png" alt="" />
            </div>
          </div>
        </div>
      </div></>
  )
}

export default Marci
