'use client'

import React from 'react'
import Image from 'next/image'
import check_circle from '/public/check-circle.png'

export const GreyPubFeatures = ({ title, description }) => {
  return (
    <div className='flex max-w-[32rem] gap-1'>
      <div className=''>
        <div className='h-6 w-6 md:h-7 md:w-7 overflow-hidden rounded-full'>
          <Image
            src={check_circle}
            alt='Check circle'
            className='h-full w-full object-cover'
            width={28}
            height={28}
          />
        </div>
      </div>

      <div className='flex flex-col pt-[0.1rem]'>
        <div className='text-sm md:text-[16px] font-semibold lg:font-medium text-[#FF4B26] pb-1'>
          <p>{title}</p>
        </div>
        <div className='text-xs md:text-[13px] font-extralight md:font-light leading-relaxed text-white'>
          <p>{description}</p>
        </div>
      </div>
    </div>
  )
}
