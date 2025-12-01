import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react'
import React from 'react'

function Footer() {
  return (
    <>
    <footer className='text-white'>

      <div className="p-5 center-all flex flex-col gap-5 bg-black/60">
        <ul className="social text-white flex gap-10 ">
          <li className="tooltip" data-tooltip="Instagram">
            <Instagram size={25} />
          </li>
          <li className="tooltip" data-tooltip="Facebook">
            <Facebook size={25} />
          </li>
          <li className="tooltip" data-tooltip="LinkedIn">
            <Linkedin size={25} />
          </li>
          <li className="tooltip" data-tooltip="Twitter">
            <Twitter size={25} />
          </li>
        </ul>
        <p className="border-b pb-4 border-">
          Copyright © 2025 Marci METZGER Homes - All Rights Reserved
        </p>

      </div>
      </footer>
    </>
  )
}

export default Footer
