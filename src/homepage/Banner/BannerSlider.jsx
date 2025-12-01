import React, { useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/autoplay'
import 'swiper/css/navigation'

import { Autoplay, Navigation } from 'swiper/modules'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const BannerSlider = () => {
  const banners = [
    {
      id: 1,
      img: '/images/image-2.webp',
      header: 'Welcome',
      subheader: 'Dream Home',
    },
    {
      id: 2,
      img: '/images/image-3.webp',
      header: 'Luxury',
      subheader: 'Best Living',
    },
    {
      id: 3,
      img: '/images/image-4.webp',
      header: 'Affordable',
      subheader: 'Budget Homes',
    },
    {
      id: 4,
      img: '/images/image-5.webp',
      header: 'Charming',
      subheader: 'Cozy Retreats',
    },
    {
      id: 5,
      img: '/images/image-6.webp',
      header: 'Modern',
      subheader: 'Smart Living',
    },
    {
      id: 6,
      img: '/images/image-13.webp',
      header: 'Spacious',
      subheader: 'Family Homes',
    },
    {
      id: 7,
      img: '/images/image-14.webp',
      header: 'Elegant',
      subheader: 'Stylish Residences',
    },
  ]

  // Refs for navigation buttons
  const prevRef = useRef(null)
  const nextRef = useRef(null)

  return (
    <div className="relative">
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
            <div className="relative  ">
              <img
                src={b.img}
                alt={b.header}
                className="object-cover w-full h-[450px] mt-28 border-[3px]"
              />
              <div className="absolute bottom-5 left-5 text-white ">
                <h2 className="text-2xl font-bold ">{b.header}</h2>
                <p className="text-lg italic">{b.subheader}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div
        ref={prevRef}
        className="absolute top-[350px] left-2 -translate-y-1/2 text-white bg-black/20 p-3 rounded-full cursor-pointer z-10 hover:bg-black/40"
      >
        <ChevronLeft className="w-6 h-6 text-white" />
      </div>
      <div
        ref={nextRef}
        className="absolute top-[350px] right-2 -translate-y-1/2 text-white bg-black/20 p-3 rounded-full cursor-pointer z-10 hover:bg-black/40"
      >
        <ChevronRight className="w-6 h-6 text-white" />
      </div>
    </div>
  )
}

export default BannerSlider
