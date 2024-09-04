import React from 'react'
import blog_arrow from '/public/ph_arrow-up-bold.png'
import Image from 'next/image'


export const BlogButton = ({link}) => {
  return (
    <a href={link} className=''>
        <p className='flex text-[#FF4B26] text-xs items-center gap-1'>Read Blog <Image src={blog_arrow} width={20} height={20}/> </p>
    </a>
  )
}
