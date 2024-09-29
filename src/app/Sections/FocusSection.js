import React from 'react'
import { SectionTitle } from '../Components/SectionTitle'
import { Topics } from '../Components/Topics'
import idek from '/public/idek.png'
import Image from 'next/image'
import blob from '/public/new-svg-blob.png'

export const FocusSection = () => {
  return (
    <>
      <SectionTitle text='FOCUS' />
      <div className='container px-20 flex flex-col items-center relative mb-28'>
        <Image src={blob} className='absolute w-full -bottom-7'/>
        <div className='mb-12 flex w-full flex-col items-center text-center text-white'>
          <p className='text-base font-extralight'>
            Some of the Topics we offer
          </p>
        </div>

        <div className='w-fit flex flex-col gap-6 items-center justify-center pb-5 mb-8 border-b border-[#ffffff25]'>

          <div className='flex items-center justify-center w-full gap-2'>
            <Topics text='Artificial Intelligence' />
            <Topics text='Machine Learning' />
          </div>

          <div className='flex items-center justify-center w-full gap-2'>
            <Topics text='Data Science' />
            <Topics text='Natural Language Processing (NLP)' />
            <Topics text='Computer Vision' />
          </div>

          <div className='flex items-center justify-center w-full gap-2'>
            <Topics text='Augmented Reality' />
            <Topics text='Big Data analytics' />
            <Topics text='Cybersecurity' />
            <Topics text='Cloud Computing' />
          </div>

          <div className='flex items-center justify-center w-full gap-2'>
            <Topics text='Internet of Things (IoT)' />
            <Topics text='Blockchain Technology' />
            <Topics text='Software Engineering' />
            <Topics text='Database Systems' />
          </div>

          <div className='flex items-center justify-center w-full gap-2'>
            <Topics text='Web and Mobile App Development' />
            <Topics text='Networking and Communication systems' />
            <Topics text='Robotics' />
            <Topics text='Bioinformatics' />
          </div>

        </div>

        {/* <div>
            <Image src={idek}/>
        </div> */}
      </div>
    </>
  )
}
