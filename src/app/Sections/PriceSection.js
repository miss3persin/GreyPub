import React from 'react'
import { SectionTitle } from '../Components/SectionTitle'
import Image from 'next/image'
import good_icon from '/public/price-good-icon.png'
import bad_icon from '/public/price-bad-icon.png'

export const PriceSection = () => {
  return (
    <>
    <SectionTitle text='OUR PRICING'/>

    <div className='container px-7 md:px-20 mb-32 mt-16 flex flex-col lg:flex-row items-center justify-center gap-5 2xl:gap-20'>


            {/* BSc */}
    <div className='bg-[#0A1B33] text-white py-9 px-6 min-h-[30rem] max-w-[22rem] rounded-lg hover:shadow-[6px_7px_20px_rgba(242,208,202,0.65),-6px_7px_20px_rgba(242,208,202,0.65)] hover:scale-105 transition-all duration-300'>
        <p className='font-bold text-center text-xl mb-4'>BSc</p>
        <p className='font-light text-[0.8rem] md:text-[0.865rem] text-center mb-4 text-[#D0D2D4]'>For BSc projects needing minimal code or write-ups</p>
        <button className='border-2 border-[#FF4B26] w-full font-medium text-[0.865rem] py-3 rounded mb-10 transition duration-200 ease-in-out transform hover:bg-[#FF4B26] hover:scale-105'>Minimum Price: ₦50,000</button>
        
        <div className='flex items-center gap-4 mb-3'>
            <Image src={good_icon}/>
            <p className='lg:font-extralight xl:font-light text-[0.8rem] md:text-[0.9rem] xl:text-[1rem]'>Code Implementation</p>
        </div>

        <div className='flex items-center gap-4 mb-3'>
            <Image src={good_icon}/>
            <p className='lg:font-extralight xl:font-light text-[0.8rem] md:text-[0.9rem] xl:text-[1rem]'>Chapters Writeup</p>
        </div>

        <div className='flex items-center gap-4 mb-3'>
            <Image src={good_icon}/>
            <p className='lg:font-extralight xl:font-light text-[0.8rem] md:text-[0.9rem] xl:text-[1rem]'>Low plagerism</p>
        </div>

        <div className='flex items-center gap-4 mb-3'>
            <Image src={good_icon}/>
            <p className='lg:font-extralight xl:font-light text-[0.8rem] md:text-[0.9rem] xl:text-[1rem]'>Low AI checker score</p>
        </div>

        <div className='flex items-center gap-4 mb-3'>
            <Image src={good_icon}/>
            <p className='lg:font-extralight xl:font-light text-[0.8rem] md:text-[0.9rem] xl:text-[1rem]'>Presentation slides</p>
        </div>

        {/* <div className='flex items-center gap-4 mb-3'>
            <Image src={good_icon}/>
            <p className='font-light text-[0.865rem]'>Lorem ipsum t amet consectetur.</p>
        </div>

        <div className='flex items-center gap-4 mb-3'>
            <Image src={bad_icon}/>
            <p className='font-light text-[0.865rem]'>Lorem ipsum t amet consectetur.</p>
        </div>

        <div className='flex items-center gap-4'>
            <Image src={bad_icon}/>
            <p className='font-light text-[0.865rem]'>Lorem ipsum t amet consectetur. Lorem ipsum t amet consectetur</p>
        </div> */}
    </div>

    {/* MSc */}
    <div className='bg-[#0A1B33] flex flex-col items-center justify-center text-white py-9 px-6 min-h-[30rem] max-w-[22rem] rounded-lg hover:shadow-[6px_7px_20px_rgba(242,208,202,0.65),-6px_7px_20px_rgba(242,208,202,0.65)] hover:scale-105 transition-all duration-300'>
        <p className='font-bold text-xl mb-4'>MSc</p>
        <p className='font-light text-[0.8rem] md:text-[0.865rem] text-center mb-4 text-[#D0D2D4]'>For typical MSc research projects</p>
        <button className='border-2 cursor-default border-[#FF4B26] w-full font-medium text-[0.865rem] py-3 rounded mb-10 transition duration-200 ease-in-out transform hover:bg-[#FF4B26] hover:scale-105'>Coming Soon</button>
        
        {/* <div className='flex items-center gap-4 mb-3'>
            <Image src={good_icon}/>
            <p className='font-light text-[1rem]'>Lorem ipsum t amet consectetur.</p>
        </div>

        <div className='flex items-center gap-4 mb-3'>
            <Image src={good_icon}/>
            <p className='font-light text-[0.865rem]'>Lorem ipsum t amet consectetur.</p>
        </div>

        <div className='flex items-center gap-4 mb-3'>
            <Image src={good_icon}/>
            <p className='font-light text-[1rem]'>Lorem ipsum t amet consectetur.</p>
        </div>

        <div className='flex items-center gap-4 mb-3'>
            <Image src={good_icon}/>
            <p className='font-light text-[1rem]'>Lorem ipsum t amet consectetur.</p>
        </div>

        <div className='flex items-center gap-4 mb-3'>
            <Image src={good_icon}/>
            <p className='font-light text-[1rem]'>Lorem ipsum t amet consectetur.</p>
        </div>

        <div className='flex items-center gap-4 mb-3'>
            <Image src={good_icon}/>
            <p className='font-light text-[1rem]'>Lorem ipsum t amet consectetur.</p>
        </div>

        <div className='flex items-center gap-4 mb-3'>
            <Image src={bad_icon}/>
            <p className='font-light text-[1rem]'>Lorem ipsum t amet consectetur.</p>
        </div>

        <div className='flex items-center gap-4'>
            <Image src={bad_icon}/>
            <p className='font-light text-[1rem]'>Lorem ipsum t amet consectetur. Lorem ipsum t amet consectetur</p>
        </div> */}
    </div>



    {/* PhD */}
    <div className='bg-[#0A1B33] flex flex-col items-center justify-center text-white py-9 px-6 min-h-[30rem] max-w-[22rem] rounded-lg hover:shadow-[6px_7px_20px_rgba(242,208,202,0.65),-6px_7px_20px_rgba(242,208,202,0.65)] hover:scale-105 transition-all duration-300'>
        <p className='font-bold text-xl mb-4'>PhD</p>
        <p className='font-light text-[0.8rem] md:text-[0.865rem] mb-4 text-center text-[#D0D2D4]'>Comprehensive support for PhD projects or advanced research</p>
        <button className='border-2 cursor-default border-[#FF4B26] w-full font-medium text-[0.865rem] py-3 rounded mb-10 transition duration-200 ease-in-out transform hover:bg-[#FF4B26] hover:scale-105'>Coming Soon</button>
        
        {/* <div className='flex items-center gap-4 mb-3'>
            <Image src={good_icon}/>
            <p className='font-light text-[0.865rem]'>Lorem ipsum t amet consectetur.</p>
        </div>

        <div className='flex items-center gap-4 mb-3'>
            <Image src={good_icon}/>
            <p className='font-light text-[0.865rem]'>Lorem ipsum t amet consectetur.</p>
        </div>

        <div className='flex items-center gap-4 mb-3'>
            <Image src={good_icon}/>
            <p className='font-light text-[0.865rem]'>Lorem ipsum t amet consectetur.</p>
        </div>

        <div className='flex items-center gap-4 mb-3'>
            <Image src={good_icon}/>
            <p className='font-light text-[0.865rem]'>Lorem ipsum t amet consectetur.</p>
        </div>

        <div className='flex items-center gap-4 mb-3'>
            <Image src={good_icon}/>
            <p className='font-light text-[0.865rem]'>Lorem ipsum t amet consectetur.</p>
        </div>

        <div className='flex items-center gap-4 mb-3'>
            <Image src={good_icon}/>
            <p className='font-light text-[0.865rem]'>Lorem ipsum t amet consectetur.</p>
        </div>

        <div className='flex items-center gap-4 mb-3'>
            <Image src={bad_icon}/>
            <p className='font-light text-[0.865rem]'>Lorem ipsum t amet consectetur.</p>
        </div>

        <div className='flex items-center gap-4'>
            <Image src={bad_icon}/>
            <p className='font-light text-[0.865rem]'>Lorem ipsum t amet consectetur. Lorem ipsum t amet consectetur</p>
        </div> */}
    </div>

    </div>

    </>
  )
}
