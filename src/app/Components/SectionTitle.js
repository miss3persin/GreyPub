import React from 'react'

export const SectionTitle = ({ text }) => {
  return (
    <div className='flex gap-4 w-full items-center text-white container px-6 mb-8'>
        <p className='text-[#FFCABF] text-xs md:text-base font-light whitespace-nowrap'>{text}</p>
        <div className='w-full h-[1px] rounded-lg bg-[#FFCABF]'></div>
    </div>
  )
}
