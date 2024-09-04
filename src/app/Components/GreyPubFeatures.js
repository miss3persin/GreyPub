'use client'

import React from 'react'
import Image from 'next/image'
import check_circle from '/public/check-circle.png'

export const GreyPubFeatures = ({ title, description }) => {
  return (
    <div className='flex w-[32rem] gap-1'>
      <div className=''>
        <div className='h-7 w-7 overflow-hidden rounded-full'>
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
        <div className='text-[16px] font-medium text-[#FF4B26] pb-1'>
          <p>{title}</p>
        </div>
        <div className='text-[13px] font-light leading-relaxed text-white'>
          <p>{description}</p>
        </div>
      </div>
    </div>
  )
}
