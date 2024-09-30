'use client'

import React from 'react'
import Image from 'next/image'

// The Testimonial component accepts props to replace placeholder content
export const Testimonial = ({
  imageSrc,
  starRating,
  testimonialText,
  authorName,
  authorTitle
}) => {
  // Generate an array of star ratings based on the starRating prop
  const stars = Array.from({ length: starRating }, (_, index) => (
    <div key={index} className='rounded-full w-4 h-4 overflow-hidden'>
      <Image src='/star-rating.png' alt='Star rating' width={44} height={44} className='w-full h-full object-cover' />
    </div>
  ))

  return (
    <div className='max-w-[29rem] flex gap-2 mr-8'>
      <div className='md:w-20'>
        <div className='rounded-full w-9 h-9 md:w-11 md:h-11 overflow-hidden'>
          <Image src={imageSrc} alt='Person' width={44} height={44} className='w-full h-full object-cover' />
        </div>
      </div>

      <div className='flex flex-col gap-2'>
        <div className='flex gap-2'>
          {stars}
        </div>

        <div className='text-white max-w-[16rem] md:max-w-none font-normal text-xs md:text-sm leading-relaxed'>
          <p>{testimonialText}</p>
        </div>
        <div className='text-white font-light text-xs md:text-[0.8rem]'>
          <p>{authorName} <span className='text-[#64748B] font-semibold pl-1'>{authorTitle}</span></p>
        </div>
      </div>
    </div>
  )
}
