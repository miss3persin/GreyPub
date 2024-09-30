'use client'

import React from 'react'
import Image from 'next/image'
import hypothetical_person from '/public/hypothetical-person.jpg'

export const StudentCard = () => {
  return (
    <div className='w-[200px] h-[130px] md:w-[305px] md:h-[190px] lg:w-[300px] lg:h-[185px] xl:w-[305px] xl:h-[190px] bg-[#0F172A] rounded-lg px-3 py-2 md:px-5 md:py-6 absolute z-10 bottom-5 md:bottom-7 right-4 md:right-6'>
      <div className='flex items-center gap-2 mb-3'>
        <div className='rounded-full w-6 h-6 md:w-8 md:h-8 overflow-hidden'>
          <Image src={hypothetical_person} alt='' className='w-full h-full object-cover' />
        </div>
        <p className='text-gray-500 font-normal text-[0.6rem] md:text-xs'>Student</p>
      </div>

      <div className='bg-gray-700 h-[0.05em] w-full -mt-1 rounded-lg'></div>

      <div className='w-full flex flex-col gap-2 md:gap-4 pt-3 md:pt-5'>

        <div className='flex justify-between items-center'>
            <p className='text-white text-[0.6rem] md:text-[0.7rem]'>B.Sc Project</p>

            <div className='w-16 h-[0.3rem] md:h-[0.49rem] bg-[#FF4B26] rounded-lg'></div>
        </div>

        <div className='flex justify-between items-center'>
            <p className='text-white text-[0.6rem] md:text-[0.7rem]'>Feedback</p>

            <div className='w-10 h-[0.3rem] md:h-[0.49rem] bg-[#FF4B26] rounded-lg'></div>
        </div>

        <div className='flex justify-between items-center'>
            <p className='text-white text-[0.6rem] md:text-[0.7rem]'>Your Effort</p>

            <div className='w-4 h-[0.3rem] md:h-[0.49rem] bg-[#FF4B26] rounded-lg'></div>
        </div>

      </div>
    </div>
  )
}
