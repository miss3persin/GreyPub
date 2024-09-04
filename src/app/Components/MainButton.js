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
      className='rounded-lg bg-[#FF4B26] px-6 py-5 text-sm font-medium text-white transition duration-200 ease-in-out transform hover:bg-transparent border-2 border-[#FF4B26] hover:scale-105'
    >
      {text}
    </button>
  )
}
