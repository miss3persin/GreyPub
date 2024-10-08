'use client'

import React from 'react'
import Image from 'next/image'
import logo from '/public/GreyPub-white-clean-2x.png'

export const NavSection = () => {
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <nav className='relative w-screen'>
      <div className='gradient-blur fixed' style={{ position: 'fixed' }}></div>
      <div className='fixed z-50 w-full items-center justify-between px-4 md:px-10 lg:px-28 pt-7 flex'>
        <div
          onClick={handleScrollToTop}
          className='transform cursor-pointer transition duration-200 ease-in-out hover:scale-105'
        >
          <Image src={logo} alt='' width={120} height={100} className='w-16 md:w-20 lg:w-32' />
        </div>

        <div>
          <button className='transform rounded-lg border-2 border-[#FF4B26] px-3 py-2 md:px-5 md:py-3 text-[0.6rem] md:text-xs lg:text-sm font-normal text-white transition duration-200 ease-in-out hover:scale-105 hover:bg-[#FF4B26]'>
            Join Our Waitlist
          </button>
        </div>
      </div>
    </nav>
  )
}
