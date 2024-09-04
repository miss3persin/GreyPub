'use client'

import React from 'react'
import Image from 'next/image'
import scribble_1 from '/public/scribble-1.png'
import scribble_2 from '/public/scribble-2.png'
import scribble_3 from '/public/scribble-3.png'

export const HomeScribbles = () => {
  return (
    <div className='flex items-center justify-between w-full absolute top-4'>
        <Image src={scribble_1} alt="" width={232} height={171} className='mt-0' />
        <Image src={scribble_2} alt="" width={92} height={30} className='ml-[20rem] mt-3'/>
        <Image src={scribble_3} alt="" width={84} height={10} className='mt-44 -mr-10' />
    </div>
  )
}
