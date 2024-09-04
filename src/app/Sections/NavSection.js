'use client'

import React from 'react'
import Image from 'next/image'
import logo from '/public/GreyPub-white-clean-2x.png'

export const NavSection = () => {
  return (
    <nav className='w-screen relative'>
            <div className='gradient-blur fixed' style={{ position: 'fixed' }}></div>
    <div className='sm:flex items-center justify-between px-28 pt-7 fixed z-50 w-full'>
        <div>
        <Image src={logo} alt="" width={120} height={100}/>
        </div>

        <div>
            <button className='border-2 border-[#FF4B26] text-white rounded-lg text-sm font-normal px-5 py-3'>Join Our Waitlist</button>
        </div>
    </div>
    </nav>
  )
}
