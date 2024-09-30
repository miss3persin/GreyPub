'use client'

import { useEffect, useRef } from 'react';
import { MainButton } from '../Components/MainButton'
import { HomeScribbles } from '../Components/HomeScribbles'
import Image from 'next/image'
import gradient from '/public/gradient-thingy.png'
// import za_video from '/public/za_video.mp4'

export const HeroSection = () => {
    const videoRef = useRef(null);

    useEffect(() => {
      if (videoRef.current) {
        videoRef.current.playbackRate = 1.0;
      }
    }, []);
  return (
    <div className='container flex flex-col items-center justify-center px-5 pt-36 md:pt-48 mb-28'>
      <div className='max-w-[40rem] text-center text-white'>
        <p className='mb-5 text-3xl md:text-[2.3rem] lg:text-[3.5rem] font-extrabold leading-tight'>
          Your Gateway to Academic Excellence
        </p>
        <p className='mb-9 font-extralight text-[0.9rem] md:text-[1.2rem] lg:text-[1.5rem] md:font-light'>
          Expert assistance for your research projects, from code implementation
          to detailed writeups.
        </p>

        <MainButton text='Start Using GreyPub Today' link='https://greypub.vercel.app/'/>
      </div>

      <div div className='item-center container relative flex md:w-[650px] lg:w-[900px] xl:w-[1100px] 2xl:w-full flex-col'>
        <div className='mt-16 md:mt-32 mx-0 px-0 h-[25rem] md:h-[30rem] xl:h-[40rem] w-full relative overflow-hidden rounded-xl md:rounded-2xl bg-slate-800'>
        <Image src={gradient} alt='' className='w-full h-48 absolute bottom-0 z-10' />
          <video
            ref={videoRef}
            className='h-full w-full object-cover'
            src='/za_video.mp4'
            autoPlay
            loop
            muted
          />
        </div>

        <HomeScribbles />
      </div>
    </div>
  )
}
