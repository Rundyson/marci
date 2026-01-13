import React, { useState } from 'react'
import TextArea from './components/TextArea'
import { MessageCircle } from 'lucide-react'
import DropDown from './components/DropDown'

function CallOrVisit() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [available, setAvailable] = useState('')

  const timeavail = [
    'Monday 8:00 AM - 7:00 PM',
    'Tuesday 8:00 AM - 7:00 PM',
    'Wednesday 8:00 AM - 7:00 PM',
    'Thursday 8:00 AM - 7:00 PM',
    'Friday 8:00 AM - 7:00 PM',
    'Saturday 8:00 AM - 7:00 PM',
    'Sunday 8:00 AM - 7:00 PM',
  ]

  return (
    <section id='contact' className='relative bg-[url("/images/bg-call.jpg")] bg-cover overflow-hidden  py-10'>
      <div className="absolute inset-0 bg-black/80 z-0"></div>
      <div className="container">
        <div className="two-way-contacts flex md:flex-row sm:flex-col gap-10 relative md:px-0 sm:px-4">
          <div className="left-contact flex flex-col gap-5 sm:w-full md:w-1/2 text-white">
            <h2>Send Message</h2>
            <TextArea
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <TextArea
           
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <textarea
           
       
              className="w-full p-3 rounded-lg border border-white bg-transparent
                 focus:backdrop-blur-md focus:ring-2 focus:ring-gray-400 
                 focus:outline-none transition placeholder-gray-400
                 resize-none text-white"
              placeholder="Type your message..."
              rows={5}
            />
            <span>
              <button className="mt-5 btn btn-call font-bold text-red-500">
                Send
              </button>
            </span>
          </div>

          <div  
             className="right-contact sm:w-full md:w-1/2 text-white/70">
            <div className="relative inline-block group">
              <div className="info-upper mb-10">
                <h2>Marci Metzger - THE RIDGE REALTY GROUP</h2>
                <h4 className="font-normal">
                  3190 HW-160, Suite F, Pahrump, Nevada 89048, United States
                </h4>
                <p className="cursor-pointer hover:underline hover:animate-bounce">(206) 919-6886</p>
              </div>
              <div className="info-lower mb-10">
                <h2>Office Hours</h2>
                <div className="seperate flex gap-5 w-[300px]">
                  <DropDown
                    options={timeavail}
                    placeholder="Open Today"
                    onSelect={(value) => setAvailable(value)}
                  />
                  
                </div>
                <p className='font-bold italic'>Open daily 8:00 AM - 7:00 PM</p>
                <p></p>
              </div>
              <div className="relative inline-block group">
                <p className=" mb-10">
                  Appointments outside office hours available upon request. Just
                  call!
                </p>
                <button
                  className="p-3 rounded-full bg-green-500 text-white 
                   hover:bg-green-600 transition-all hover:animate-bounce"
                >
                  <MessageCircle className="w-6 h-6" />
                </button>

                <span
                  className="absolute left-[50px] -translate-x-1/2 mt-2
                   whitespace-nowrap text-sm px-3 py-1 rounded-md
                   bg-white/30 backdrop-blur-md text-black shadow-lg

                   opacity-0 translate-x-[-20px] 
                   transition-all duration-300

                   group-hover:opacity-100 group-hover:translate-x-0"
                >
                  Message us on WhatsApp
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CallOrVisit
