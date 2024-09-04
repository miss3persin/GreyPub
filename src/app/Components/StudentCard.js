'use client'

import React from 'react'
import Image from 'next/image'
import hypothetical_person from '/public/hypothetical-person.jpg'

export const StudentCard = () => {
  return (
    <div className='w-[305px] h-[190px] bg-[#0F172A] rounded-lg px-5 py-6 absolute z-10 bottom-7 right-6'>
      <div className='flex items-center gap-2 mb-3'>
        <div className='rounded-full w-8 h-8 overflow-hidden'>
          <Image src={hypothetical_person} alt='' className='w-full h-full object-cover' />
        </div>
        <p className='text-gray-500 font-normal text-xs'>Student</p>
      </div>

      <div className='bg-gray-700 h-[0.05em] w-full -mt-1 rounded-lg'></div>

      <div className='w-full flex flex-col gap-4 pt-5'>

        <div className='flex justify-between items-center'>
            <p className='text-white text-[0.7rem]'>B.Sc Project</p>

            <div className='w-16 h-[0.49rem] bg-[#FF4B26] rounded-lg'></div>
        </div>

        <div className='flex justify-between items-center'>
            <p className='text-white text-[0.7rem]'>Feedback</p>

            <div className='w-10 h-[0.49rem] bg-[#FF4B26] rounded-lg'></div>
        </div>

        <div className='flex justify-between items-center'>
            <p className='text-white text-[0.7rem]'>Your Effort</p>

            <div className='w-4 h-[0.49rem] bg-[#FF4B26] rounded-lg'></div>
        </div>

      </div>
    </div>
  )
}
