import React from 'react'

export const Topics = ({text}) => {
  return (
    <>
    
    <div className='text-white border rounded-3xl flex items-center w-fit text-[0.25rem] md:text-[0.5rem] lg:text-xs xl:text-sm font-extralight md:font-light py-1 px-2 md:px-3 lg:py-2 lg:px-6 transition duration-200 ease-in-out transform hover:bg-white hover:text-black cursor-default'>{text}</div>
    </>
  )
}
