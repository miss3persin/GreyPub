import React from 'react'

export const Topics = ({text}) => {
  return (
    <>
    
    <div className='text-white border rounded-3xl flex items-center w-fit text-sm font-light py-2 px-6 transition duration-200 ease-in-out transform hover:bg-white hover:text-black cursor-default'>{text}</div>
    </>
  )
}
