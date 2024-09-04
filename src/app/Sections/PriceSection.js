import React from 'react'
import { SectionTitle } from '../Components/SectionTitle'
import Image from 'next/image'
import good_icon from '/public/price-good-icon.png'
import bad_icon from '/public/price-bad-icon.png'

export const PriceSection = () => {
  return (
    <>
    <SectionTitle text='OUR PRICING'/>

    <div className='container px-20 mb-32 mt-16 flex items-center justify-center gap-5'>

    {/* Basic */}
    <div className='bg-[#0A1B33] text-white py-9 px-6 max-w-[22rem] rounded-lg hover:shadow-[6px_7px_20px_rgba(242,208,202,0.65),-6px_7px_20px_rgba(242,208,202,0.65)] hover:scale-105 transition-all duration-300'>
        <p className='font-bold text-xl mb-4'>Basic</p>
        <p className='font-light text-[0.865rem] mb-4 text-[#D0D2D4]'>For simpler projects needing minimal code or write-ups</p>
        <button className='border-2 border-[#FF4B26] w-full font-medium text-[0.865rem] py-3 rounded mb-10 transition duration-200 ease-in-out transform hover:bg-[#FF4B26] hover:scale-105'>Get Started Now</button>
        
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
        </div>
    </div>

    {/* Standard */}
    <div className='bg-[#0A1B33] text-white py-9 px-6 max-w-[22rem] rounded-lg hover:shadow-[6px_7px_20px_rgba(242,208,202,0.65),-6px_7px_20px_rgba(242,208,202,0.65)] hover:scale-105 transition-all duration-300'>
        <p className='font-bold text-xl mb-4'>Standard</p>
        <p className='font-light text-[0.865rem] mb-4 text-[#D0D2D4]'>Balanced plan for typical BSc/MSc research projects</p>
        <button className='border-2 border-[#FF4B26] w-full font-medium text-[0.865rem] py-3 rounded mb-10 transition duration-200 ease-in-out transform hover:bg-[#FF4B26] hover:scale-105'>Get Started Now</button>
        
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
        </div>
    </div>


    {/* Premium */}
    <div className='bg-[#0A1B33] text-white py-9 px-6 max-w-[22rem] rounded-lg hover:shadow-[6px_7px_20px_rgba(242,208,202,0.65),-6px_7px_20px_rgba(242,208,202,0.65)] hover:scale-105 transition-all duration-300'>
        <p className='font-bold text-xl mb-4'>Premium</p>
        <p className='font-light text-[0.865rem] mb-4 text-[#D0D2D4]'>Comprehensive support for PhD projects or advanced research</p>
        <button className='border-2 border-[#FF4B26] w-full font-medium text-[0.865rem] py-3 rounded mb-10 transition duration-200 ease-in-out transform hover:bg-[#FF4B26] hover:scale-105'>Get Started Now</button>
        
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
        </div>
    </div>

    </div>

    </>
  )
}
