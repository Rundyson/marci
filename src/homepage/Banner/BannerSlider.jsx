// BannerSlider.js
import React, { useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/autoplay'
import 'swiper/css/navigation'

import { Autoplay, Navigation } from 'swiper/modules'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const BannerSlider = () => {
  const banners = [
    { id: 1, img: '/images/image-2.webp', header: 'Welcome', subheader: 'Dream Home' },
    { id: 2, img: '/images/image-3.webp', header: 'Luxury', subheader: 'Best Living' },
    { id: 3, img: '/images/image-4.webp', header: 'Affordable', subheader: 'Budget Homes' },
    { id: 4, img: '/images/image-5.webp', header: 'Charming', subheader: 'Cozy Retreats' },
    { id: 5, img: '/images/image-6.webp', header: 'Modern', subheader: 'Smart Living' },
    { id: 6, img: '/images/image-13.webp', header: 'Spacious', subheader: 'Family Homes' },
    { id: 7, img: '/images/image-14.webp', header: 'Elegant', subheader: 'Stylish Residences' },
  ]

  const prevRef = useRef(null)
  const nextRef = useRef(null)

  return (
    <div className="relative overflow-hidden">
      <Swiper
        modules={[Autoplay, Navigation]}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop={true}
        slidesPerView={1}
        onBeforeInit={(swiper) => {
          swiper.params.navigation.prevEl = prevRef.current
          swiper.params.navigation.nextEl = nextRef.current
        }}
        navigation={{ prevEl: prevRef.current, nextEl: nextRef.current }}
      >
        {banners.map((b) => (
          <SwiperSlide key={b.id}>
            <div className="relative w-full">
              <img
                src={b.img}
                alt={b.header}
                className="object-cover w-full max-w-full h-[450px] md:mt-24 border-[1px] rounded-md"
              />
              <div className="absolute bottom-5 left-5 text-white bg-black/30 p-2 rounded-md w-[180px] backdrop-blur-sm border-gray-100/50 border">
                <h2 className="text-2xl font-bold mb-0">{b.header}</h2>
                <p className="text-lg italic">{b.subheader}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div
        ref={prevRef}
        className="absolute sm:top-[250px] md:top-[350px] left-2 -translate-y-1/2 text-white bg-black/20 p-3 rounded-full cursor-pointer z-10 hover:bg-black/40"
      >
        <ChevronLeft className="w-6 h-6 text-white" />
      </div>
      <div
        ref={nextRef}
        className="absolute sm:top-[250px] md:top-[350px] right-2 -translate-y-1/2 text-white bg-black/20 p-3 rounded-full cursor-pointer z-10 hover:bg-black/40"
      >
        <ChevronRight className="w-6 h-6 text-white" />
      </div>
    </div>
  )
}

export default BannerSlider
