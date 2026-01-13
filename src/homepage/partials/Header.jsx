import { CircleUserRound, X } from 'lucide-react'
import React, { useState, useEffect } from 'react'

const menuItems = [
  { name: 'Home', href: '#home' },
  { name: 'Services', href: '#services' },
  { name: 'About', href: '#about' },
  { name: 'Find now', href: '#find' },
  { name: 'Contact', href: '#contact' },
]

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('#home')

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      setIsScrolled(scrollY > 0)

      let current = '#home'
      menuItems.forEach((item) => {
        const section = document.querySelector(item.href)
        if (section) {
          const sectionTop = section.offsetTop - 200
          const sectionBottom = sectionTop + section.offsetHeight
          if (scrollY >= sectionTop && scrollY < sectionBottom) {
            current = item.href
          }
        }
      })
      setActiveSection(current)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header data-aos="fade-up" data-aos-delay="100" className="fixed top-0 left-0 w-full z-50">

      <div
        className={`mx-auto flex items-center justify-between p-4 transition-all duration-300
          ${isScrolled
            ? 'max-w-[1200px] rounded-xl bg-black/40 h-16 shadow-md backdrop-blur-md border border-gray-50'
            : 'max-w-full rounded-none bg-transparent h-20'
          }
        `}
      >
  
        <div className="flex w-full items-center justify-between">
 

 
          <div className="flex justify-center">
            <img className="max-w-[150px] md:max-w-[200px]" src="/images/colored-logo.png" alt="Logo" />
          </div>

    
          <div className="hidden md:flex flex-1 justify-end gap-5">
            {menuItems.map((item) => (
              <span
                key={item.name}
                className={`py-2 cursor-pointer text-white tracking-widest text-[17px] hover:text-blue-300 ${
                  activeSection === item.href
                    ? 'text-blue-500 font-bold'
                    : 'font-thin'
                }`}
                onClick={() => {
                  const el = document.querySelector(item.href)
                  if (el) el.scrollIntoView({ behavior: 'smooth' })
                }}
              >
                {item.name}
              </span>
            ))}
          </div>

     
          <div className="md:hidden flex-shrink-0">
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="flex flex-col justify-between w-6 h-6"
            >
              <span className="block rounded-md h-1 w-full bg-white"></span>
              <span className="block rounded-md h-1 w-full bg-white"></span>
              <span className="block rounded-md h-1 w-full bg-white"></span>
            </button>
          </div>
        </div>
      </div>

      
      <div
        className={`fixed top-2 right-0 h-[350px] text-center w-44 bg-black/50 rounded-md backdrop-blur-sm z-50 transform transition-transform duration-300
          ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}
        `}
      >
    
        <div className="flex justify-end p-4">
          <button onClick={() => setIsMobileMenuOpen(false)}>
            <X className="w-6 h-6 text-white" />
          </button>
        </div>

     
        <div className="flex flex-col gap-6 p-4">
          {menuItems.map((item) => (
            <span
              key={item.name}
              className={`text-white text-lg cursor-pointer hover:text-blue-300 ${
                activeSection === item.href
                  ? 'text-blue-400 font-bold'
                  : 'font-normal'
              }`}
              onClick={() => {
                const el = document.querySelector(item.href)
                if (el) el.scrollIntoView({ behavior: 'smooth' })
                setIsMobileMenuOpen(false)
              }}
            >
              {item.name}
            </span>
          ))}
        </div>
      </div>


    </header>
  )
}

export default Header
