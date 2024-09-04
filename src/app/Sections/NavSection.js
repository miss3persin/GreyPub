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
      <div className='fixed z-50 w-full items-center justify-between px-28 pt-7 sm:flex'>
        <div
          onClick={handleScrollToTop}
          className='transform cursor-pointer transition duration-200 ease-in-out hover:scale-105'
        >
          <Image src={logo} alt='' width={120} height={100} />
        </div>

        <div>
          <button className='transform rounded-lg border-2 border-[#FF4B26] px-5 py-3 text-sm font-normal text-white transition duration-200 ease-in-out hover:scale-105 hover:bg-[#FF4B26]'>
            Join Our Waitlist
          </button>
        </div>
      </div>
    </nav>
  )
}
