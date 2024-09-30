'use client'

import React from 'react'
import { useRouter } from 'next/navigation'

export const MainButton = ({ text, link }) => {
  const router = useRouter()

  const handleClick = () => {
    router.push(link)
  }
  return (
    <button
      onClick={handleClick}
      className='rounded-lg bg-[#FF4B26] px-4 py-3 md:px-6 md:py-5 text-[0.7rem] md:text-xs lg:text-sm font-medium text-white transition duration-200 ease-in-out transform hover:bg-transparent border-2 border-[#FF4B26] hover:scale-105'
    >
      {text}
    </button>
  )
}
